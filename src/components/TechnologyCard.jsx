const TechnologyCard = ({ skills , title }) => {
  return (
    <article className="grid grid-cols-4 gap-5 justify-items-center">
        {skills.map((skill) => (
          <div key={skill} className="max-w-[150px] overflow-hidden py-4 aspect-square rounded-full border-[2px] border-gray-700 bg-[#23252f] drop-shadow-2xl">
            <img
              className="h-full object-contain mx-auto py-2"
              src={`/skillimg/${skill}.png`}
              onError={(e) => (e.target.style.display = "none")}
              alt={skill}
            />
          </div>
        ))}
      </article>
  );
};
export default TechnologyCard;

// grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]
