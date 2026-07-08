"use client";

import Script from "next/script";

export default function NPFChatbot() {
  return (
    <>
      {/* Keep the injected AI-agent widget above the sticky bottom bar / other fixed elements */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .npf_ai_agents,
            [class*="npf_ai_agent"],
            [id*="npf_ai_agent"],
            iframe[src*="agent.nopaperforms.com"],
            iframe[id*="npf_ai_agent"] {
              z-index: 2147483647 !important;
            }
          `,
        }}
      />
      <div
        className="npf_ai_agents"
        data-w="4763de4ad8644825a87bf95197289cd6"
        style={{ display: "none" }}
      ></div>
      <Script
        id="npf-ai-agents-script"
        strategy="afterInteractive"
        src="https://952l3jx2nj.in1.agent.nopaperforms.com/en-gb/backend/agents/aiagentscpt.js/6426019081578b6b/4763de4ad8644825a87bf95197289cd6"
      />
    </>
  );
}
