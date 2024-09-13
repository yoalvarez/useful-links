import { LinkList } from "@/components/link-list";
import { LinkCreate } from "@/components/link-create";

async function getLinks() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/BGi0GvptRLoD", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Links() {
  const { data } = await getLinks();
  return (
    <>
      <div className="text-center mt-5 mb-5">
        <h1 className="text-3xl">List Website Bermanfaat</h1>
      </div>
      <LinkCreate />
      <div className="link-list">
        {data.map((link) => {
          return (
            <LinkList
              key={link._id}
              id={link._id}
              url={link.url}
              deskripsi={link.deskripsi}
            />
          );
        })}
      </div>
    </>
  );
}
