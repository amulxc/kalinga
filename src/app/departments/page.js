import DepartmentsClient from './DepartmentsClient'
import { fetchAllDepartments, fetchDepartmentCompleteDetail, parseHtmlToText, fetchDepartmentCourseCounts } from '@/app/lib/api'

export const revalidate = 3600; // ISR — rebuild at most once per hour

const PLACEHOLDER_IMAGE = "https://cdn.kalingauniversity.ac.in/academics/arts.webp";

const generateSlug = (name) => {
  if (!name) return '';
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
};

const PHD_DEPARTMENT = {
  id: 'static-phd',
  title: 'Ph.D.',
  img: "https://cdn.kalingauniversity.ac.in/phd/Phd-BannerImage.webp",
  summary: "Pursuing a doctoral program can be a transformative step for the growth of your career...",
  fullSummary: "Pursuing a doctoral program can be a transformative step for the growth of your career and to earn a name and recognition in society. It will not just provide you with in-depth knowledge, but you will also get an opportunity to contribute to research and development. A Ph.D. degree will make you stand out in both the academic and corporate worlds.",
  programs: "Research",
  slug: "phd",
  departmentId: 'static-phd',
};

export default async function DepartmentsPage() {
  const [departmentsList, courseCountsData] = await Promise.all([
    fetchAllDepartments(),
    fetchDepartmentCourseCounts().catch(() => []),
  ]);

  const courseCountMap = new Map(
    Array.isArray(courseCountsData)
      ? courseCountsData
          .filter(item => item.id && item.course_count !== undefined)
          .map(item => [item.id, item.course_count])
      : []
  );

  const departmentsWithDetails = await Promise.all(
    departmentsList.map(async (dept) => {
      try {
        const detail = await fetchDepartmentCompleteDetail(dept.id);
        const courseCountItem = Array.isArray(courseCountsData)
          ? courseCountsData.find(item => item.id === dept.id)
          : null;
        return {
          id: dept.id,
          title: detail?.name || dept.name,
          img: detail?.about_sections?.[0]?.image || detail?.banners?.[0]?.image || detail?.banners?.[0]?.image_url || PLACEHOLDER_IMAGE,
          summary: parseHtmlToText(detail?.about_sections?.[0]?.content || ''),
          fullSummary: parseHtmlToText(detail?.about_sections?.[0]?.content || ''),
          programs: (courseCountMap.get(dept.id) ?? dept.course_count ?? detail?.department_courses?.length ?? 0).toString(),
          slug: courseCountItem?.slug || dept.slug || detail?.slug || generateSlug(detail?.name || dept.name),
          departmentId: dept.id,
        };
      } catch {
        const courseCountItem = Array.isArray(courseCountsData)
          ? courseCountsData.find(item => item.id === dept.id)
          : null;
        return {
          id: dept.id,
          title: dept.name,
          img: PLACEHOLDER_IMAGE,
          summary: '',
          fullSummary: '',
          programs: (courseCountMap.get(dept.id) ?? dept.course_count ?? 0).toString(),
          slug: courseCountItem?.slug || dept.slug || generateSlug(dept.name),
          departmentId: dept.id,
        };
      }
    })
  );

  const sorted = [...departmentsWithDetails, PHD_DEPARTMENT].sort((a, b) =>
    (a.title || '').localeCompare(b.title || '')
  );

  return <DepartmentsClient departments={sorted} />;
}
