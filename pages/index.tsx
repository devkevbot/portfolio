import type { NextPage } from "next";

const Home: NextPage = () => (
  <div className="flex flex-col items-center justify-evenly gap-16 bg-slate-900 py-8 text-white">
    <section className="w-3/4 md:w-1/2">
      <h1 className="mb-2 text-2xl font-bold">Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde rerum
        veritatis ad incidunt est voluptates, vitae itaque dicta distinctio
        porro voluptate exercitationem necessitatibus architecto quas aliquid
        asperiores aliquam molestias.
      </p>
    </section>

    <section className="w-3/4 text-right md:w-1/2">
      <h1 className="mb-2 text-2xl font-bold">Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde rerum
        veritatis ad incidunt est voluptates, vitae itaque dicta distinctio
        porro voluptate exercitationem necessitatibus architecto quas aliquid
        asperiores aliquam molestias.
      </p>
    </section>

    <section className="w-3/4 md:w-1/2">
      <h1 className="mb-2 text-2xl font-bold">Lorem ipsum</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde rerum
        veritatis ad incidunt est voluptates, vitae itaque dicta distinctio
        porro voluptate exercitationem necessitatibus architecto quas aliquid
        asperiores aliquam molestias.
      </p>
    </section>
  </div>
);

export default Home;
