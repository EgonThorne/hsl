import Link from "next/link";

export default function FangBlock() {
  return (
    <div className="relative min-h-screen">
      {/* 背景交叉网格 */}
      <div className="absolute inset-0 grid grid-cols-16 grid-rows-[repeat(9,minmax(0,1fr))] z-0">
        {[...Array(16 * 9)].map((_, i) => (
          <div key={i} className="border-r border-b border-gray-200"></div>
        ))}
      </div>

      {/* 内容层 */}
      <div className="relative z-10 p-8 max-w-3xl">
        <div className="bg-white mb-6">
          <h1 className="text-2xl font-bold">Hover Effect Preview</h1>
        </div>
        <div className="flex flex-col gap-5 bg-white">
          <section className="hidden lg:flex lg:gap-x-12 border border-black p-10">
            <div>
              <Link
                href="#"
                className="text-sm font-medium leading-6 text-foreground hover:text-foreground/80"
              >
                <div className="relative px-[4px] py-[2px] group">
                  <span className="relative z-10">FangBlock</span>
                  <span className="absolute inset-y-0 left-0 w-0 bg-green-400 group-hover:w-full transition-all duration-270 ease-out"></span>
                </div>
              </Link>
            </div>
            <div>
              <p>Font size: 14px</p>
              <p>Padding: py-[2px] px-[4px]</p>
            </div>
          </section>
          <section className="hidden lg:flex lg:gap-x-12 border border-black p-3">
            <div>
              <Link
                href="#"
                className="text-4xl font-medium leading-6 text-foreground hover:text-foreground/80"
              >
                <div className="relative px-[40px] py-[20px] group">
                  <span className="relative z-10">FangBlock</span>
                  <span className="absolute inset-y-0 left-0 w-0 bg-green-400 group-hover:w-full transition-all duration-270 ease-out"></span>
                </div>
              </Link>
            </div>
            <div>
              <p>Font size: 36px</p>
              <p>Padding: py-[20px] px-[40px]</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
