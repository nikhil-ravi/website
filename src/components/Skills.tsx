import { skills } from "@/content/skillsData";

export default function Skills() {
  return (
    <section className="mx-5">
      <div className="my-10 grid grid-cols-2  gap-1 sm:grid-cols-4 sm:gap-4 md:grid-cols-5">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              title={skill.name}
              className="flex items-center gap-2"
            >
              <skill.Icon className="h-8 w-8" />
              <p className="text-sm">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
