import Image from "next/image";

export default function ProjectItem({data}){

  const title = data.properties.Name.title[0].plain_text
  const github = data.properties.Github.url
  const description = data.properties.Description.rich_text[0].plain_text
  const memo = data.properties.Memo.rich_text[0].plain_text
  const imgSrc = data.cover.file?.url || data.cover.external.url
  const tags = data.properties.Tags.multi_select
  const start = data.properties.WorkPeriod.date.start
  const end = data.properties.WorkPeriod.date.end

  console.log(imgSrc);

  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split('-');
    const endDateStringArray = end.split('-');

    var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
    var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

    // console.log(`startDate: ${startDate}`)
    // console.log(`endDate: ${endDate}`)

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    // console.log(`기간 : ${result}`)
    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />
      
      <div className="flex flex-col p-4">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href = {github}>깃허브 바로가기</a>
        <span className="mb-2 underline decoration-sky-500/30">{memo}</span>
        <p className="my-1">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag) => ( 
            <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
          ))}

        </div>
      
      </div>
    
    </div>
  );
}