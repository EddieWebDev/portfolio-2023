export const MainContent = () => {
  return (
    <section
      id="projects"
      className="widescreen:section-min-height tallscreen:section-min-height my-12 scroll-mt-20 p-6"
    >
      <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
        Featured projects
      </h2>
      <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 lg:flex-row">
        <li className="dark:border-grey-100 flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:bg-black">
          <a href="https://eddiewebshop.com" target="_blank">
            <img
              src="/img/fruitcity2.png"
              alt="eddiewebshop"
              className="mx-auto my-3 lg:max-h-32"
            />
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">
              Web Shop JS
            </h3>
          </a>
          <div className="mt-2 hidden text-center text-slate-400 dark:text-white sm:block">
            <ul className="flex gap-1 text-sm">
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                React
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Node
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Express
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                MySQL
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                API
              </li>
            </ul>
            <a
              href="https://github.com/EddieWebDev/eddie-exam-shop"
              target="_blank"
            >
              <div className="rounded-xl border border-primary p-1 hover:bg-primary mt-2">Github</div>
            </a>
          </div>
          <div className="mt-2 text-center text-slate-400 dark:text-white sm:hidden">
            <ul className="flex flex-wrap justify-center gap-1 text-sm">
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                React
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Node
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Express
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                MySQL
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                API
              </li>
            </ul>
            <a
              href="https://github.com/EddieWebDev/eddie-exam-shop"
              target="_blank"
            >
              <div className="rounded-xl border border-primary p-1 hover:bg-primary mt-2">Github</div>
            </a>
          </div>
        </li>

        <li className="dark:border-grey-100 flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:bg-black">
          <a
            href="https://github.com/EddieWebDev/portfolio-2023"
            target="_blank"
          >
            <img
              src="/img/rocketride.png"
              alt="Adventurer"
              className="mx-auto mb-6 lg:max-h-32"
            />
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">
              Portfolio
            </h3>
          </a>
          <div className="mt-2 hidden text-center text-slate-400 dark:text-white sm:block">
            <ul className="flex gap-1 text-sm">
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Vite
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                React
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Tailwind
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Typescript
              </li>
            </ul>
            <a
              href="https://github.com/EddieWebDev/portfolio-2023"
              target="_blank"
            >
              <div className="rounded-xl border border-primary p-1 hover:bg-primary mt-2">Github</div>
            </a>
          </div>
          <div className="mt-2 text-center text-slate-400 dark:text-white sm:hidden">
            <ul className="flex flex-wrap justify-center gap-1 text-sm">
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Vite
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                React
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Tailwind
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Typescript
              </li>
            </ul>
            <a
              href="https://github.com/EddieWebDev/portfolio-2023"
              target="_blank"
            >
              <div className="rounded-xl border border-primary p-1 hover:bg-primary mt-2">Github</div>
            </a>
          </div>
        </li>

        <li className="dark:border-grey-100 flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:bg-black">
          <a href="https://github.com/EddieWebDev/WCDota" target="_blank">
            <img
              src="/img/rocketlaunch.png"
              alt="Infinity"
              className="mx-auto mb-6 lg:max-h-32"
            />
            <h3 className="text-center text-3xl text-slate-900 dark:text-white">
              Web Shop PHP
            </h3>
          </a>
          <div className="mt-2 hidden text-center text-slate-400 dark:text-white sm:block">
            <ul className="flex gap-1 text-sm">
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                PHP
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Wordpress
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Woocommerce
              </li>
            </ul>
            <a
              href="https://github.com/EddieWebDev/WCDota"
              target="_blank"
            >
              <div className="rounded-xl border border-primary p-1 hover:bg-primary mt-2">Github</div>
            </a>
          </div>
          <div className="mt-2 text-center text-slate-400 dark:text-white sm:hidden">
            <ul className="flex flex-wrap justify-center gap-1 text-sm">
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                PHP
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Wordpress
              </li>
              <li className="rounded-xl border border-primary p-1 hover:bg-primary">
                Node
              </li>
            </ul>
            <a
              href="https://github.com/EddieWebDev/WCDota"
              target="_blank"
            >
              <div className="rounded-xl border border-primary p-1 hover:bg-primary mt-2">Github</div>
            </a>
          </div>
        </li>
      </ul>
      
      <p className="text-md my-6 text-center font-bold text-slate-900 dark:text-white sm:text-xl">
        More projects coming soon!
      </p>
    </section>
  );
};
