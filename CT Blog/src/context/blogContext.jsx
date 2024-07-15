import React, { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  let initial=[
    {
      title: "If bird flu sparks a human pandemic, your past immunity could help",
      authorname: "Max Kozlov",
      date: "Jul 09, 2024",
      textbeforeimg:
        "As the H5N1 bird-flu virus spreads relentlessly in animals around the world, researchers seeking to understand how a human H5N1 pandemic might unfold have turned to a rich source of clues: data on the immune system’s response to influenza. Such information provides hints about who could be most vulnerable in an H5N1 pandemic. Previous research also suggests that, in a confrontation with the virus, our immune systems would not be starting from scratch — thanks to previous infections with, and vaccinations against, other forms of flu. But this immunity is unlikely to prevent H5N1 from inflicting serious damage to global health, if a pandemic were to begin.",
      img: "https://media.nature.com/lw767/magazine-assets/d41586-024-02170-6/d41586-024-02170-6_27319956.jpg?as=webp",
      textafterimg:
        "The H5N1 strain now running rampant began as a bird pathogen before branching out to mammals. Classified as a ‘highly pathogenic’ virus for its lethality in birds, it has killed millions of domestic and wild birds around the world since it first emerged in 1996.1 It has also spread to a growing list of mammal species, including seals and foxes, and has caused more than 460 human deaths since 2003. So far, the virus has not gained the ability to spread effectively between people, which has kept the potential for a pandemic at bay. But its repeated jumps from birds to mammals and evidence of transmission among mammals, such as elephant seals (Mirounga leonina)2, have alarmed researchers, who warn that the virus is gaining opportunities to become adept at spreading easily between people.",
    },
    {
      title: "Ex-Meta scientists debut gigantic AI protein design model",
      authorname: "Ewen Callaway",
      date: "Jul 08, 2024",
      textbeforeimg:
        "An artificial intelligence (AI) model that speaks the language of proteins — one of the largest yet developed for biology — has been used to create new fluorescent molecules. The proof-of-principle demonstration was announced this month by EvolutionaryScale in New York City, alongside US$142 million in new funding to apply its model to drug development, sustainability and other pursuits. The company, launched by scientists who previously worked at tech giant Meta, is the latest entrant in an increasingly crowded field that is applying cutting-edge machine-learning models trained on language and images to biological data.",
      img: "https://media.nature.com/lw767/magazine-assets/d41586-024-02214-x/d41586-024-02214-x_27319756.jpg?as=webp",
      textafterimg:
        "“We want to build tools that can make biology programmable,” says Alex Rives, the company’s chief scientist, who was part of Meta’s efforts to apply AI to biological data. EvolutionaryScale’s AI tool, called ESM3, is what’s known as a protein language model. It was trained on more than 2.7 billion protein sequences and structures, as well as information about these proteins’ functions. The model can be used to create proteins to specifications provided by users, akin to the text spit out by chatbots such as ChatGPT.",
    },
    {
      title:
        "Daily briefing: 15-minute reaction turns old clothes into useful molecules",
      authorname: "Flora Graham",
      date: "Jul 07, 2024",
      textbeforeimg:
        "A chemical-processing technique breaks down polyester fabrics into reusable molecules in only 15 minutes. It can even tackle mixed materials such as polycotton, breaking down the polyester and leaving the cotton to be recovered. The researchers estimate that a refined version of the process could recycle 88% of clothing worldwide. “We have a simple process that we can scale to treat large quantities of clothing,” says chemical engineer and study co-author Dionisios Vlachos. “We are very optimistic that this can actually be taken to the real world.”",
      img: "https://media.nature.com/lw767/magazine-assets/d41586-024-02269-w/d41586-024-02269-w_27303594.jpg?as=webp",
      textafterimg:
        "Scientists in France who spoke to Nature have expressed relief that the right-wing party National Rally was defeated in yesterday’s parliamentary elections. But the absence of a clear winner presents uncertainty for scientists, and many do not believe that the new government will make a positive difference to research and higher education. “Science and education were absent from the European and French parliamentary election campaigns, and budget constraints mean that research will not be a priority,” says paediatric immunologist and French Academy of Sciences president Alain Fischer.",
    },
    {
      title: "How PhD students and other academics are fighting the mental-health crisis in science",
      authorname: "Shannon Hall",
      date: "Jul 06, 2024",
      textbeforeimg: "On the first day of her class, Annika Martin asks the assembled researchers at the University of Zurich in Switzerland to roll out their yoga mats and stand with their feet spread wide apart. They place their hands on their hips before swinging their torsos down towards the mat and back up again. The pose, called ‘wild goose drinking water’ is from Lu Jong, a foundational practice in Tantrayana Buddhism",
      img: "https://media.nature.com/w1248/magazine-assets/d41586-024-02225-8/d41586-024-02225-8_27319156.jpg?as=webp",
      textafterimg: "Martin, a health psychologist, can sense that some students are sceptical. They are academics at heart, many of whom have never tried yoga, and registered for Martin’s course to learn how to deal with the stress associated with academic research. Over the course of a semester, she teaches her students about stress and its impact on the body before giving them the tools to help cope with it — from yoga, meditation and progressive muscle relaxation to journalling."
    },
    {
      title: "Iran elects heart surgeon as president: scientists are hopeful",
      authorname: "Michele Catanzaro",
      date: "Jul 05, 2024",
      textbeforeimg:"Iran has elected a former heart surgeon as its next president. Scientists expect Masoud Pezeshkian, who ran the nation's health ministry in an earlier administration, to revive universities and reconnect the country’s isolated scientists with their international counterparts. His term could also spell improvements to human rights, investment in science, greater academic freedom and the revival of talks on the country's nuclear programme. But not everyone agrees that change will come, or be lasting.",
      img: "https://media.nature.com/w1248/magazine-assets/d41586-024-02262-3/d41586-024-02262-3_27319836.jpg?as=webp",
      textafterimg: "“He is a son of the higher-education system of Iran [and] likely to be a good advocate of science,” says Moneef Zou’bi, former director-general of the Islamic World Academy of Sciences, based in Amman. “His mere presence there will be quite inspirational for university presidents and top researchers,” adds Zou’bi, who studies Middle East science policy."
    },
    {
      title: "Huge neutrino detector sees first hints of particles from exploding stars",
      authorname: "Davide Castelvecchi",
      date: "Jul 04, 2024",
      textbeforeimg: "Every few seconds, somewhere in the observable Universe, a massive star collapses and unleashes a supernova explosion. Japan’s Super-Kamiokande observatory might now be collecting a steady trickle of neutrinos from those cataclysms, physicists say — amounting to a few detections a year. These tiny subatomic particles are central to understanding what goes on inside a supernova: because they zip out of the star’s collapsing core and across space, they can provide information about any potentially new physics that occur under extreme conditions.",
      img: "https://media.nature.com/lw767/magazine-assets/d41586-024-02221-y/d41586-024-02221-y_27319970.jpg?as=webp",
      textafterimg: "At last month’s Neutrino 2024 conference in Milan, Italy, Masayuki Harada, a physicist at the University of Tokyo, revealed that the first hints of supernova neutrinos seem to be emerging from the cacophony of particles that the Super-Kamiokande detector collects every day from other sources, such as cosmic rays hitting the atmosphere and nuclear fusion in the Sun’s core. The result “indicates that we started observing a signal”, says Masayuki Nakahata, a physicist at the University of Tokyo and spokesperson for the experiment, which is commonly referred to as Super-K. But Nakahata cautions that the supporting data — collected over 956 days of observation — are still very weak."
    }
  ];
  
  const [blogs, setBlogs] = useState(initial);

  

  // useEffect(() => {
  //   const storedBlogs = JSON.parse(localStorage.getItem("blogs"));
  //   if (storedBlogs) {
  //     setBlogs(storedBlogs);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("blogs", JSON.stringify(initial));
  }, []);

  const addArticle = (blog) => {
    const newBlogs = [...blogs, blog];
    setBlogs(newBlogs);
    return newBlogs.length - 1;
  };
  return (
    <BlogContext.Provider value={{ blogs, addArticle, initial }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;

