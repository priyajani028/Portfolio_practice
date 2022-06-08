import type { NextPage } from 'next'
import Profile from '../components/profile';
import ProjectPreview, {ProjectPreviewInterface} from '../components/project_preview';

const Home: NextPage = () => {


const projectMetadataArray = [];

projectMetadataArray.push(
  {
    title: "Data Analysis App",
    desc: "Processes data in Python",
    linkUrl: "/data_analysis",
    image:"/coding.jpg"
  }
);

projectMetadataArray.push(
  {
    title: "Sound Processing App",
    desc: "Cleans up podcast audio",
    linkUrl: "/sound_processing",
    image:"/headphones.jpg"
  }
);
projectMetadataArray.push(
  {
    title: "Social Media tracker",
    desc: "Tracks time and usage",
    linkUrl: "/social_tracker",
    image:"/youtube.jpg"
  }
);

const ProjectPreviewElements = [];
{/* <ProjectPreview {...ProjectPreviewData} /> */}

for(let i=0;i < projectMetadataArray.length;i++) {
  const metaData = projectMetadataArray[i];
  const element = <ProjectPreview {...metaData} key={i} />;
  ProjectPreviewElements.push(element);

}

  return (
      <div>
        <Profile/>
        <div className='mt-4 flex flex-col gap-4'>
          {ProjectPreviewElements} 
        </div>
      </div>
  )
}

export default Home
