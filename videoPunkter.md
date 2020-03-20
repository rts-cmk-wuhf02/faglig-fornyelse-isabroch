# Hvad du har udviklet.
- Nogen komponenter for et webshop: produktliste og tilkynettet del, indkøbskurv og tilkynettet del
- Produkter renderede fra data hentede i API (http://my-json-server.typicode.com/isabroch/shopData/products)
- Komponenter er synkroniserede (show adding items to cart to max stock, and then reducing stock in cart)
- Rendere elements med betingelser (out of stock, price per, osv.)

# Hvilken teknologi du har anvendt.
- ReactJS (https://reactjs.org/)
- Javascript library for udvikling af kopmonenter, udviklet og brugt af Facebook
- For forsimplet udvikling hvor jeg kan fokusere på React, har jeg brugt Create React App (https://create-react-app.dev/)

# Hvorfor du har anvendt den aktuelle teknologi.
### Istedet for JS
- Anden måde at tænk på web udvikling, da vi adskille i forhold til funktion istedet for language
- Kan nem brug det lærte på ReactNative til udvikling af mobil app
- Effektiv rendering af ændringer i HTML, det kun ændrer det der er behøvet
- Bruger JSX, der hjælper mig at bedre visualisere og forstår hvor logik og markup er tilkynettet
- Skal ikke tænke meget på compatibilitet fordi React håndtere det med deres script og library

# Hvilke alternative teknologier du kunne have brugt.
### Angular
- Den NY Angular 2.0 (2016) men der også er AngularJS 1.0 (2010)
- App udvikling framework
- Udviklet af (primært) Google
- Typescript baseret, kan lave ting komplicerede nogen gang
- Bruger attributer i HTML som udløser Javascript delen
- Open Source
- Har NOGEN mobil frameworks, men er ikke lige så performant
- Svært at lære fordi der er mange ting ikke set i normal JS
- Næsten ALT du har brug for er allerede bygget ind, men betyder stor fil

### Vue JS
- Open Source
- Udviklet af former Google udvikler
- Tager koncepter fra både Angular 1.0 og React
- Er faktisk mere performant i forhold til rerendering af komponenter
- Nemt at integrere med eksistering kode
- Små filstorrelse
- Stadig separation of concerns af HTML, CSS, og JS inden for et fil

### Hvorfor brug React alligevel?
- Populær på nettet, betyder mere ressourcer og hjælp
- Støttet af Facebook: så langt at Facebook bruger React, betyder de ville udvikle det til at være bedre og cutting edge
- Startere med ingenting, så nemt at implementere
- Job marked (jobindex.dk) - der er mere der søger for React kendskab
- Bedste imlpementering for mobiludvikling, nemt at tage næste skridt til ReactNative

# Lidt om de fordele eller ulemper som du har erfaret omkring den aktuelle teknologi.
- Nesting komponenter, hvor mange er for mange?
- Passerer props igennem nested komponenter hvis man har mange (https://flaviocopes.com/react-pass-props-to-children/)
- Hvornår skulle jeg brug state og props? State er asynchronous, så det ikke altid man kan blande prop og state (https://reactjs.org/docs/faq-state.html)
- Forståelse af hvornår de lifecycle metoder sker (http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
