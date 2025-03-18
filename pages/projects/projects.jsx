import React from "react";
import './Projects.css'
import Project from "../../src/components/project/Project";
const Datas = [
  { image : '../public/project-images/findchar.png', information: 'A modern website',  link: 'https://omidfoladvand4.github.io/FindChartoText/' , title : 'find character in text '},
  { image : '../public/project-images/weatherapp.png', information: 'A modern website',  link: 'https://omidfoladvand4.github.io/weatherApp/' , title : ' weather application  '},
  { image : '../public/project-images/dictionary.png', information: 'A modern website',  link: 'https://omidfoladvand4.github.io/dictionary/' , title : 'dictionary application '},
  { image : '../public/project-images/liverpool.png', information: 'A modern website',  link: 'https://omidfoladvand4.github.io/Liverpool_website/' , title : ' A simple clone from Liverpool website '},
  { image : '../public/project-images/demo.png', information: 'A modern website',  link: 'https://omidfoladvand4.github.io/animatedcounterOnscroll/' , title : 'Animated counter on scroll'},
  { image : '../public/project-images/fastfood.png', information: 'A modern website',  link: 'https://omidfoladvand4.github.io/fastfood-app/' , title : 'A fast food application '},
  { image : '../public/project-images/qrcode.png', information: 'A modern website',  link: 'https://omidfoladvand4.github.io/QRCodeGenerator/' , title : 'A qr code generator application '},
  { image : '../public/project-images/uploader.png', information: 'A modern website',  link: 'https://omidfoladvand4.github.io/Image-uploader/' , title : ' Image uploader '},
]
function Projects() {
  return (
    <div className="container">
   {Datas.map((data , index ) => (
    <Project 
    key={index}
    image={data.image}
    information={data.information}
    link={data.link}
    title={data.title}
    />
   ))}
    </div>
  );
}

export default Projects;
