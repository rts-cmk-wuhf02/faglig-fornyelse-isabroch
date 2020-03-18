# Faglig Fornyelse ft. React

## Produktet
Jeg bygger et view af produktlistet og en indkøbskurv panel fra et e-commerce side. Jeg fokusere mig på kommunikation mellem komponenter. Den specifik funktionalitet jeg ville gerne uvikler er synkronisering mellem den forekomst af produktet i produktlistet og de produkter i indkøbskurv panelen. Så når man klikker knap på produkt til sende det videre til indkøbskurv, indkøbskurven er nemt opdateret.

## Teknologi anvendt
Jeg valgt at bygge mit produkt med **React**. \
React er et JavaScript bibliotek udviklet af Facebook. Det er et værktøj til udvikling af komponenter til brugergrænseflader. React arbejder med modelen af et Virtual DOM. Det er et representationen af DOM der er gemt i hukommelse for hurtig udregning af logik. Ved at synkronisere den virkelig DOM til Virtual DOM, kan der minimiseres hvor mange gang 'reflows' (hvor browser skal igen udregne sidens layout) sker.

Videre har jeg også brugt **Create React App**. \
"Create React App" er et værktøj fra holdet bag React, der skaber en basic struktur for React projekter, og styrer alt i forhold til bundling og sammenstilling (som vi normalt ville styr med Webpack og/eller Gulp). Det giver mig lov til at fokusere på den vigtig i projektet: at lære React.

### Hvorfor?
Hvorfor React?

Når man søger på [Jobindex](https://www.jobindex.dk/) for arbejde i Danmark, der er et stor forskel i arbejde der søger efter udvikler med kendskab til React ([68 jobs](https://www.jobindex.dk/jobsoegning/danmark?q=react)) end til Vue ([28 jobs](https://www.jobindex.dk/jobsoegning/danmark?q=vue)). Det viser sig som en værdifuld evne mange arbejdsgivere er interesset i.

Der er selvfølgelig andre værktøj der laver lignende ting, men der er mindre arbejdsmulighed og mindre online støtte for de værktøj i øjeblikket. Det er nemmere at lære et popular værktøj og, efter jeg har fået forståelse for det, applicer det på de andre ting hvis de kommer til at være vigtig i fremtiden.

## Ressourcer
- Brugt både tutorial og specifik dokumenation om forskellig funktionalitet fra [ReactJS docs](https://reactjs.org/docs/getting-started.html) (især 'Main Concepts')
- I relation til mit brug af Create React App: [Create React App docs](https://create-react-app.dev/docs/getting-started)
- Kurser fra [ReactJS community resources](https://reactjs.org/community/courses.html)
- Artiklen fra Sunil Sandhu, [I created the exact same app in React and Vue... (2019)](https://medium.com/javascript-in-plain-english/i-created-the-exact-same-app-in-react-and-vue-here-are-the-differences-2019-edition-42ba2cab9e56)
- Artiklen fra Patricia Neil, [React VS Vue: Which is better for 2020?](https://medium.com/@patricianeil248/react-vs-vue-which-is-better-for-2020-c484f22c67a8)

- [fake{JSON}](https://fakejson.com/) for mock data generation
- [JSON Server](https://github.com/typicode/json-server) for hosting mock data during testing
- [React Developer Tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/) for better visual information about how React works on my project
- [React Input Number Component](http://react-component.github.io/input-number/) because I didn't want to design my own number input. SOME functionality is different from handling normal inputs.