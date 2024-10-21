import Link from "next/link";
import { getSEOTags } from "@/config/seo";
import config from "@/config/site";

// CHATGPT 提示生成您的条款和服务 — 用您自己的数据替换 👇

// 1. 转到 https://chat.openai.com/
// 2. 复制粘贴到下面
// 3. 用您自己的数据替换数据（如果需要）
// 4. 将 ChatGPT 的答案直接粘贴到下面的 <pre> 标签中

// 您是一位优秀的律师。

// 我需要您的帮助来为我的网站编写一个简单的条款和服务。以下是一些背景信息：
// - 网站：https://basiclauncher.com
// - 名称：BasicLauncher
// - 联系信息：marc@shipfa.st
// - 描述：JavaScript 代码样板，帮助企业家更快地启动他们的创业公司
// - 所有权：购买套餐时，用户可以下载代码来创建应用程序。他们拥有代码，但他们无权转售。他们可以在购买后 7 天内要求全额退款。
// - 收集的用户数据：姓名、电子邮件和付款信息
// - 非个人数据收集：网络 cookie
// - 隐私政策链接：https://basiclauncher.com/privacy-policy
// - 适用法律：法国
// - 条款更新：用户将通过电子邮件获得更新

// 请为我的网站写一份简单的条款和服务。添加当前日期。不要添加或解释您的理由。答案：

export const metadata = getSEOTags({
  title: `Terms and Conditions | ${config.appName}`,
  canonicalUrlRelative: "/tos",
});

const TOS = () => {
  return (
    <main className="max-w-xl mx-auto">
      <div className="p-5">
        <Link href="/" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </Link>
        <h1 className="text-3xl font-extrabold py-6">
          Terms and Conditions for {config.appName}
        </h1>

        <pre
          className="leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "sans-serif" }}
        >
          {`Last Updated: September 26, 2023

Welcome to BasicLauncher!

These Terms of Service ("Terms") govern your use of the BasicLauncher website at https://basiclauncher.com ("Website") and the services provided by BasicLauncher. By using our Website and services, you agree to these Terms.

1. Description of BasicLauncher

BasicLauncher is a platform that offers a JavaScript code boilerplate to assist entrepreneurs in launching their startups more efficiently.

2. Ownership and Usage Rights

When you purchase a package from BasicLauncher, you gain the right to download and use the code provided for creating applications. You own the code you create but do not have the right to resell it. We offer a full refund within 7 days of purchase, as specified in our refund policy.

3. User Data and Privacy

We collect and store user data, including name, email, and payment information, as necessary to provide our services. For details on how we handle your data, please refer to our Privacy Policy at https://basiclauncher.com/privacy-policy.

4. Non-Personal Data Collection

We use web cookies to collect non-personal data for the purpose of improving our services and user experience.

5. Governing Law

These Terms are governed by the laws of France.

6. Updates to the Terms

We may update these Terms from time to time. Users will be notified of any changes via email.

For any questions or concerns regarding these Terms of Service, please contact us at marc@shipfa.st.

Thank you for using BasicLauncher!`}
        </pre>
      </div>
    </main>
  );
};

export default TOS;
