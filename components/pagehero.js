export default function PageHero({ title, description, type, image, color }) {
  return (
    <div className="flex bg-[#17253D] text-white">
      <div className="w-full sm:w-1/3">
        <div className={`w-full font-bold bg-[${color}]`}>{title}</div>
        <div className="w-full uppercase">{type}</div>
        <div className="w-full">{description}</div>
      </div>
      <div className="w-full sm:w-2/3">
        Image goes here
        {/* <Image
       src="me.png"
       alt="Picture of the author"
       width={500}
       height={500}
     /> */}
      </div>
    </div>
  );
}
