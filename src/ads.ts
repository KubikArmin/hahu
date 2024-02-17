interface Hirdetes {
    _id: number;
    kategoria_id: number;
    cim: string;
    evjarat: string;
    km_allas: number;
    szin: string;
    uzemanyag: string;
    hengerurtartalom: number;
    teljesitmeny: number;
    serulesmentes: boolean;
    leiras: string;
    hirdetes_datum?: string;
    vetelar: number;
    kepek: string[];
    teljesitmeny_kw: number;
  }

export const ads: Hirdetes[] =
[
    {
      "_id": 20,
      "kategoria_id": 1,
      "cim": "OPEL VECTRA C Caravan 2.2 Elegance (Automata)",
      "evjarat": "2007",
      "km_allas": 247857,
      "szin": "bordó/meggy",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 2198,
      "teljesitmeny": 155,
      "serulesmentes": false,
      "leiras": "Amit tudni érdemes róla: 248326 km van az autóban. 2024.11-ig érvényes műszakival rendelkezik. Az autón található egy két karcolás ami működésében nem befolyásolja. Levehető vonóhorog van az autón, a termosztát cserélve van, a gyertyák, az összes szűrő kivan cserélve, Sajnálatos módon a katalizátor feladta a szolgálatot amit körülbelül 75-100k ért lehet cserélni. Téli gumi van rajta. 2.2 benzines motor Z22YH motor kóddal. Az ár fix!",
      "hirdetes_datum": "2023-01-05T00:00:00.000Z",
      "vetelar": 1000000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/20a.jpg",
        "https://nitslaszlo.github.io/static/hahu/20b.jpg",
        "https://nitslaszlo.github.io/static/hahu/20c.jpg"
      ],
      "teljesitmeny_kw": 114
    },
    {
      "_id": 21,
      "kategoria_id": 1,
      "cim": "MAZDA MX-5 1.8i 16V Memories nb",
      "evjarat": "2001",
      "km_allas": 224455,
      "szin": "szürke",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 1840,
      "teljesitmeny": 145,
      "serulesmentes": true,
      "leiras": "Az autó napi használatban van de csak tartalék autóként. Karosszéria rozsdátlan, alvázvédelemmel ellátva. A vászontető tavaly lett cserélve. Minden működik kivéve a légkondit de azt még soha nem próbáltam bekapcsolni mert minek.",
      "hirdetes_datum": "2023-03-26T00:00:00.000Z",
      "vetelar": 2200000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/21a.jpg",
        "https://nitslaszlo.github.io/static/hahu/21b.jpg"
      ],
      "teljesitmeny_kw": 107
    },
    {
      "_id": 22,
      "kategoria_id": 1,
      "cim": "MERCEDES-BENZ E 200 Elegance (Automata)",
      "evjarat": "1999",
      "km_allas": 348000,
      "szin": "szürke",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 1998,
      "teljesitmeny": 136,
      "serulesmentes": true,
      "leiras": "Magánszemélytől eladó Mercedesem. Ritka rozsdamentes állapotban. Gyári fakormány, jéghideg klíma, tolatóradar, rendszeresen karbantartott. Kihasználatlansága miatt eladó. Saját nevemen van. Csere nem érdekel! Az ár alkuképes az autó mellett!",
      "hirdetes_datum": "2023-04-14T00:00:00.000Z",
      "vetelar": 1090000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/22a.jpg"
      ],
      "teljesitmeny_kw": 100
    },
    {
      "_id": 23,
      "kategoria_id": 3,
      "cim": "HONDA CIVIC 1.6 VTi ABS+SRS+Klima",
      "evjarat": "1999",
      "km_allas": 379000,
      "szin": "sötétszürke",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 1595,
      "teljesitmeny": 160,
      "serulesmentes": true,
      "leiras": "Eladó imádott, nagy becsben és tiszteletben tartott VTi-m. Gyári motortér, gyári belső, és majdnem gyári külső. Mindig is a gyáriasításra törekedtem, 1-2 átalakítást kivéve, amitől nem lett tunerjóska az autó. A kasztni telibe lakatolva és fényezve, gyári színkóddal, az alváz alvázvédőzve lett 2021-ben, 8 kerékkel, 15” fehér VTi felnikkel téli Laufenn gumikkal és 16” Gun Metal JR3 felnikkel, Barum nyári gumikkal eladó az autó.",
      "hirdetes_datum": "2023-06-07T00:00:00.000Z",
      "vetelar": 2100000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/23a.jpg"
      ],
      "teljesitmeny_kw": 118
    },
    {
      "_id": 24,
      "kategoria_id": 1,
      "cim": "MERCEDES-BENZ CLK 220 CDI Elegance (Automata)",
      "evjarat": "2006",
      "km_allas": 246000,
      "szin": "ezüst",
      "uzemanyag": "Dízel",
      "hengerurtartalom": 2148,
      "teljesitmeny": 150,
      "serulesmentes": true,
      "leiras": "Mercedes CLK 220CDI, 2006 évjárat. Extrákkal gazdagon szerelt (minden rendeltetés szerűen működik) Motor, váltó, futómű, hibátlan költség mentes állapot! Autóbeszámítás lehetséges (nagyobb kategóriás ráfizetéssel érdekel) Bármit meghallgatok. Elérhető vagyok a nap bármely időszakában, hívjon bizalommal készséggel állok rendelkezésére",
      "hirdetes_datum": "2023-08-30T00:00:00.000Z",
      "vetelar": 1999999,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/24a.jpg"
      ],
      "teljesitmeny_kw": 110
    },
    {
      "_id": 25,
      "kategoria_id": 2,
      "cim": "RENAULT MASTER 2.8 dTi DHME8 L3H3",
      "evjarat": "2000",
      "km_allas": 343110,
      "szin": "citromsárga",
      "uzemanyag": "dízel",
      "hengerurtartalom": 2800,
      "teljesitmeny": 114,
      "serulesmentes": false,
      "leiras": "Eladó a fotókon látható Magyarországi egy tulajos Renault Master 2.8 DTi motoros. Megbízható műszaki állapotban 2022.11.22-ig érvényes műszakival. Az autóban frissen cserélt vezérlés van, olaj + szűrökkel. Az izzítása javítva lett és az adagolót is most újíttattam fel. Magasított és leghosszabb kivitel. Megtekinthető Fertődön. Érd: 0.6.3.0.3.0.9.7.0.4.6. Kisebb autót beszámítok de csak eladható áron.",
      "hirdetes_datum": "2023-01-02T00:00:00.000Z",
      "vetelar": 1099000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/25a.jpg",
        "https://nitslaszlo.github.io/static/hahu/25b.jpg",
        "https://nitslaszlo.github.io/static/hahu/25c.jpg"
      ],
      "teljesitmeny_kw": 84
    },
    {
      "_id": 26,
      "kategoria_id": 2,
      "cim": "Opel Vivaro 1.6 CDTI L2H1 2.9t Euro 6 Hosszított",
      "evjarat": "2018",
      "km_allas": 93767,
      "szin": "szürke",
      "uzemanyag": "dízel",
      "hengerurtartalom": 1598,
      "teljesitmeny": 120,
      "serulesmentes": true,
      "leiras": "Eladó Egy Magyarországon Újonnan Üzembe Helyezett, Garantált 93.767. Kilométert Futott, Hosszított Kivitelű, A Legkiválóbb 120 Lóerős Motorral Szerelt, Egy Speciális Tetőcsomagtartóval Ellátott Opel Vivaro Kisteherautó. Motorjáról Túlzás Nélkül Állíthatom, Hogy PONT Ugyan Olyan Szépen Duruzsol, Mint Új Korában, AMI Nem Is Csoda, Hiszen Szervizeit Kizárólag Szakszervizben Végezték, Gyári Alkatrészekkel És Gyári Körülmények Között. Váltója És Futóműve Is Teljesen Hibátlan, Természetesen Semmilyen Rendellenességet Nem Lehet Onnan Tapasztalni. A Műszaki Állapota Mellett, Természetesen Az Esztétikája Is Hűen Tükrözi A Futott Kilométerek Számát. Karosszériáján Semmilyen Karcot, Vagy Horpadást Nem Lehet Felfedezni, Nagyobb Sérülése SOHA SEM Volt. Ajtajait Kinyitva Elsőre Látszik, Hogy Nem Egy Leharcolt Munkás Autóról Van Szó. Az Ülések Nincsenek Kiülve, Vagy Kiszakadva, A Kormány És A Pedálok Kopás Mentesek És SOHA SEM Dohányoztak Benne. Gyönyörű Szép Esztétikai És Hibátlan Műszaki Állapota Mellet, Magas Felszereltségi Szinttel Rendelkezik: Hosszított Karosszéria, Speciális Tetőcsomagtartó, Jéghideg Klíma, Tempomat, Tolatóradar, Multifunkcionális Bőr Kormánykerék, Elektromos Ablakok, Fűthető Motorosan Állítható Tükrök, Teljes Értékű BLUETOOTH Kapcsolat.  Személyesen megtekinthető hétfőtől-péntekig 8:00-20:00-ig, hétvégente 10:00 és 20:00 között várjuk kedves ügyfeleinket. Autóink ingyenesen megtekinthetőek HD minőségben! ",
      "hirdetes_datum": "2023-02-15T00:00:00.000Z",
      "vetelar": 6490000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/26a.jpg",
        "https://nitslaszlo.github.io/static/hahu/26b.jpg"
      ],
      "teljesitmeny_kw": 88
    },
    {
      "_id": 27,
      "kategoria_id": 2,
      "cim": "Fiat Fiorino 1.3 Mjet SX E6 Mo-i - Egygazdás",
      "evjarat": "2017",
      "km_allas": 129216,
      "szin": "fehér",
      "uzemanyag": "dízel",
      "hengerurtartalom": 1248,
      "teljesitmeny": 75,
      "serulesmentes": true,
      "leiras": "Megtekinthető: Edelény, MOL benzinkúttal szemben 34 - Első forgalomba helyezés: 2016.12.17. (2017-es Modellév) - Újkorában Magyarországon Vásárolt, Első Tulajdonostól Származó, Márkaszervizben Vezetett Szervizkönyves-Lekérdezhető Futásteljesítményű, 2 Személy Szállítására Alkalmas, Áfás Tehergépkocsi, Amelyet Akár 1 Év Garanciával Vihet Haza Kereskedésünkből! -- Újszerű Téli Gumiabroncsok! -- 2 DB Gyári Indítókulcs! -- Könyöklő, multikulcs, tolóajtó, tetősínek, zárható kesztyűtartó, stb.  Meglepetések Helyett - A 88 pontos részletes állapotlapunk segítségével Ön teljes körű tájékoztatást kaphat járműveink műszaki és esztétikai állapotát illetően.  Az Autó Dokumentációiról, Szervizokmányairól Készült Képeket A Hirdetési Kép Fölött Található Dokumentumok Fül Alól Érheti EL! Felszereltség: ABS (blokkolásgátló) - állítható kormány - ASR (kipörgésgátló) - CD-s autórádió - centrálzár - elektromos ablak - elektromos tükör - fedélzeti komputer - HIFI - immobiliser - Manuális klíma - szervokormány - színezett üveg - tempomat - térelválasztó - utasoldali légzsák - ülésmagasság állítás - vezetőoldali légzsák.",
      "hirdetes_datum": "2023-03-30T00:00:00.000Z",
      "vetelar": 1998000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/27a.jpg"
      ],
      "teljesitmeny_kw": 55
    },
    {
      "_id": 28,
      "kategoria_id": 2,
      "cim": "Citroen Berlingo 1.5 Bluehdi 100 Club M (3 személyes)",
      "evjarat": "2021",
      "km_allas": 129216,
      "szin": "fehér",
      "uzemanyag": "dízel",
      "hengerurtartalom": 1499,
      "teljesitmeny": 102,
      "serulesmentes": true,
      "leiras": "Eladó Egy Magyarországon Újonnan Forgalomba Helyezett És Azóta Is Kizárólag Egyetlen Egy Tulajdonos Által Használt, Mindösszesen 13.020. KM-t Futott, Teljesen Szalon Állapotban Lévő Citroen Berlingo Kisteherautó. Az Autóról Túl Sok Minden Nem TUDOK Elmondani, Hiszen Tényleg Minden Porcikája Teljesen Gyári, Minden Funkciója Tökéletesen És Hibátlanul Működik, Sehonnan SEM Lehet Rendellenességet Tapasztalni. Esztétikai Állapotát Illetően SEM FOG Senkit Csalódás Érni, Sehol Egy KARC, Sehol Egy Kopás, Fényezve Vagy Törve SOHA SEM Volt És Az Utastere Még Új Illatot Áraszt. Felszereltsége Is Minden Igényt Kielégít AMI A Mindennapokhoz Szükséges. Extrái: Tempomat, Jéghideg Klíma, Elektromos Ablakok, Fűthető Motoros Tükrök, Tolatóradar, BLUETOOTH Kihangosító, Fűthető Motoros Tükrök, ABS, ASR, ESP, Légzsákok, Távirányítású Centrálzár, Multifunkcionális Kormánykerék, Rengeteg Tárolórekesz, Gyári Autórádió, stb. stb. Az Összes Gyári Kulcsával És Dokumentációjával, Továbbá Kilométer Garanciával Rendelkező, Túlzások Nélkül Szalon Állapotban Lévő, Költség És Csalódásmentes Kisteherautó. KM-Garancia Keretein Belül, Felelősséget Vállalunk Az Adásvételkor Rögzített Óraállás Valódiságáért És HA A Későbbiekben Kiderülne, Hogy Az Nem Volt Valós, Akkor A Teljes Vásárláskori Vételárat Visszafizetjük. A Feltüntetett Vételár, Nem Tartalmazza A +27%-os Általános Forgalmi Adót. Gyártási éve és forgalomba helyezve: 2020.12.hónap Személyesen megtekinthető hétfőtől-péntekig 8:00-20:00-ig, hétvégente 10:00 és 20:00 között várjuk kedves ügyfeleinket. Autóink ingyenesen megtekinthetőek HD minőségben!",
      "hirdetes_datum": "2023-05-04T00:00:00.000Z",
      "vetelar": 6490000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/28a.jpg"
      ],
      "teljesitmeny_kw": 75
    },
    {
      "_id": 29,
      "kategoria_id": 2,
      "cim": "Mercedes-Benz Sprinter 313 cdi 906.131.13 e5 csere érdekel!",
      "evjarat": "2014",
      "km_allas": 239000,
      "szin": "fehér",
      "uzemanyag": "dízel",
      "hengerurtartalom": 2143,
      "teljesitmeny": 129,
      "serulesmentes": true,
      "leiras": "Km. óra állás: 239 281 km Klíma fajtája: Manuális klíma Manuális (6 fokozatú) sebességváltó ABS (blokkolásgátló) - ASR (kipörgésgátló) - állítható kormány - CD-s autórádió - centrálzár - elektromos ablak - elektromos tükör - fedélzeti komputer - manuális klíma - rádiós magnó - riasztó - szervokormány - utasoldali légzsák - ülésmagasság állítás - vezetőoldali légzsák. Autóbeszámítás lehetséges - azonnal elvihető. Eladó ponyvás, hálófülkés 313-as Mercedes Sprinter, 5.1 m x2.3 m x2.5 méteres platóval, állófűtéssel, friss kpm vizsgával. Az adatok tájékoztató jellegűek, az esetleges eltérések miatt, a járművek felszereltségét a személyes megtekintés illetve a próbavezetés alkalmával, kérjük minden esetben ellenőrizzék. Egyedi hitelajánlat a helyszínen! Kötelező biztosítás kötés, átírás ügyintézés, eredetvizsga. Az eladás joga fenntartva!",
      "hirdetes_datum": "2023-06-17T00:00:00.000Z",
      "vetelar": 5799000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/29a.jpg"
      ],
      "teljesitmeny_kw": 95
    },
    {
      "_id": 30,
      "kategoria_id": 1,
      "cim": "Mitsubishi Lancer 1.6 Invite",
      "evjarat": "2011",
      "km_allas": 197193,
      "szin": "Szürke",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 1590,
      "teljesitmeny": 117,
      "serulesmentes": true,
      "leiras": "Eladó sérülésmentes Mitsubishi Lancer 1.6 Invite. Jó árban kevés kilométerrel. Tökéletes első autónak.",
      "hirdetes_datum": "2023-03-31T00:00:00.000Z",
      "vetelar": 2290000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/30a.jpg",
        "https://nitslaszlo.github.io/static/hahu/30b.jpg",
        "https://nitslaszlo.github.io/static/hahu/30c.jpg"
      ],
      "teljesitmeny_kw": 86
    },
    {
      "_id": 31,
      "kategoria_id": 1,
      "cim": "Opel Astra H Caravan 1.7 CDTI Enjoy",
      "evjarat": "2008",
      "km_allas": 309000,
      "szin": "Fekete",
      "uzemanyag": "Dízel",
      "hengerurtartalom": 1686,
      "teljesitmeny": 110,
      "serulesmentes": false,
      "leiras": "Magánszemélytől eladó Opel Astra H Station Wagon típusú személyautó. Idén márciusban volt utoljára szervízelve, amely magában foglalta a kuplung és a lendkerék cseréjét, illetve a turbó felújítását. Az autón 4 alufelni van nyári gumikkal, és van hozzá 4 téli gumi lemezfelnin, dísztárcsával (a képen még a téli szett van felrakva). Műszaki 2024 februárig érvényes. 2022 évi Pest, Heves, Borsod és Bács megyei matricával. Már megvan az utódja, így nem használom. A vevő költségére bárhol átvizsgáltatható.",
      "hirdetes_datum": "2023-09-11T00:00:00.000Z",
      "vetelar": 1100000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/31a.jpg",
        "https://nitslaszlo.github.io/static/hahu/31b.jpg"
      ],
      "teljesitmeny_kw": 81
    },
    {
      "_id": 32,
      "kategoria_id": 1,
      "cim": "Suzuki Swift 1.3 GLX CD AC 1,3 Gyönyörű állapotban!",
      "evjarat": "2007",
      "km_allas": 246439,
      "szin": "Piros",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 1328,
      "teljesitmeny": 92,
      "serulesmentes": true,
      "leiras": "2 db gyári távirányítós kulcs, törésmentes, SRS, EPS, rendkívül megkímélt gyönyörű állapotban!",
      "hirdetes_datum": "2023-04-30T00:00:00.000Z",
      "vetelar": 1299000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/32a.jpg"
      ],
      "teljesitmeny_kw": 68
    },
    {
      "_id": 33,
      "kategoria_id": 1,
      "cim": "Hyundai Kona 1.6 GDi Hibrid Premium DCT",
      "evjarat": "2019",
      "km_allas": 62986,
      "szin": "Fehér",
      "uzemanyag": "Hibrid",
      "hengerurtartalom": 1580,
      "teljesitmeny": 105,
      "serulesmentes": false,
      "leiras": "Eladó egy rendszeresen karbantartott Hyundai Kona Hybrid 1.6-os benzin motorral és hibrid hajtással (Hyundai Ioniq-ba is ezt a motort szerelik), valós 62 986 kilométerrel, ideális kisebb nagyobb utakra, elől hátul nagyon kényelmesen el lehet férni, illetve a hibrid hajtásnak köszönhetően alacsony a fogyasztása. Esztétikailag és műszakilag is kitűnő állapotban van. Extrái: Sávtartó és sávelhagyást figyelmeztető, fékasszisztens, hátul tolató radar és kamera, 2 zónás digitális klíma, nagy érintőképernyős multimédia, kormányváltó, automata váltó, fáradtság érzékelő, VESS (hangot bocsájt ki, ha elektromos módban halad), elektromos kézifék, autohold (elindulásnál meggátolja, hogy hátra guruljon a gépjármű). Bármi további kérdésre szívesen válaszolok telefonon.",
      "hirdetes_datum": "2023-02-16T00:00:00.000Z",
      "vetelar": 9000000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/33a.jpg"
      ],
      "teljesitmeny_kw": 77
    },
    {
      "_id": 34,
      "kategoria_id": 1,
      "cim": "Toyota Sprinter Trueno AE86",
      "evjarat": "1985",
      "km_allas": 301036,
      "szin": "Fehér",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 1600,
      "teljesitmeny": 124,
      "serulesmentes": true,
      "leiras": "Eladó Toyota Sprinter Trueno AE86 kitűnő állapotban.",
      "hirdetes_datum": "2023-08-06T00:00:00.000Z",
      "vetelar": 9999000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/34a.jpg"
      ],
      "teljesitmeny_kw": 91
    },
    {
      "_id": 35,
      "kategoria_id": 4,
      "cim": "Regal Raptor 125 CM3 Motorkerékpár",
      "evjarat": "2011",
      "km_allas": 1395,
      "szin": "fekete",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 125,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "Nagyon szép állapotban keveset futott Regal Raptor 125cm3 motor a képen is látható állapotban eladó",
      "hirdetes_datum": "2023-02-04T00:00:00.000Z",
      "vetelar": 650000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/35a.jpg",
        "https://nitslaszlo.github.io/static/hahu/35b.jpg",
        "https://nitslaszlo.github.io/static/hahu/35c.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 36,
      "kategoria_id": 4,
      "cim": "Jincheng Knicht 100 motorkerékpár eladó",
      "evjarat": "2004",
      "km_allas": 14470,
      "szin": "kék",
      "uzemanyag": "",
      "hengerurtartalom": 100,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "Jincheng 100 motorkerékpár működőképesen papírok nélkül eladó!",
      "hirdetes_datum": "2023-01-30T00:00:00.000Z",
      "vetelar": 370000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/36a.jpg",
        "https://nitslaszlo.github.io/static/hahu/36b.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 37,
      "kategoria_id": 4,
      "cim": "Honda motorkerékpár",
      "evjarat": "1981",
      "km_allas": 19000,
      "szin": "piros",
      "uzemanyag": "benzin",
      "hengerurtartalom": 125,
      "teljesitmeny": -1,
      "serulesmentes": false,
      "leiras": "Kitűnő állapotban svájci import",
      "hirdetes_datum": "2022-12-29T00:00:00.000Z",
      "vetelar": 900000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/37a.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 38,
      "kategoria_id": 4,
      "cim": "Malaguti F 10",
      "evjarat": "2004",
      "km_allas": 25000,
      "szin": "szürke",
      "uzemanyag": "benzin",
      "hengerurtartalom": 50,
      "teljesitmeny": 4,
      "serulesmentes": false,
      "leiras": "Eladó Malaguti F10 új aksi új hátsó gumi ár alkuképes",
      "hirdetes_datum": "2022-09-12T00:00:00.000Z",
      "vetelar": 100000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/38a.jpg"
      ],
      "teljesitmeny_kw": 3
    },
    {
      "_id": 39,
      "kategoria_id": 4,
      "cim": "Vespa 50special",
      "evjarat": "1992",
      "km_allas": 11000,
      "szin": "fekete",
      "uzemanyag": "n.a",
      "hengerurtartalom": 50,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "Vespa 50 special eladó..2500 euró",
      "hirdetes_datum": "2022-11-10T00:00:00.000Z",
      "vetelar": 1000000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/39a.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 40,
      "kategoria_id": 5,
      "cim": "Férfi e-bike",
      "evjarat": "2019",
      "km_allas": -1,
      "szin": "Fekete",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": 0.335,
      "serulesmentes": false,
      "leiras": "Eladó egy jó állapotú férfi trekking e-bike Prophete. (számla elérhető) - Akár 25 km/h vezetési támogatás - max.hatótáv kb.100 km(vezetési stílustól függően)- Közepes méretű, jól olvasható és megvilágított LC kijelző- Akkumulátorról működtetett LED világítási rendszer - Motor: AEG 36 V,250 W,50 Nm támogatás 25 km/h-ig",
      "hirdetes_datum": "2023-02-14T00:00:00.000Z",
      "vetelar": 350000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/40a.jpg",
        "https://nitslaszlo.github.io/static/hahu/40b.jpg",
        "https://nitslaszlo.github.io/static/hahu/40c.jpg"
      ],
      "teljesitmeny_kw": 0
    },
    {
      "_id": 41,
      "kategoria_id": 5,
      "cim": "Trek Conduit E-bike kerékpár",
      "evjarat": "2021",
      "km_allas": 4707,
      "szin": "Fekete",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": 0.335,
      "serulesmentes": true,
      "leiras": "A kerékpár megkimélt állapotban van. Elöl-hátul beépített lámpák ! Vázméret : L Váltó: 1x10 Shimano Deore Kerék: Bontrager Tubeless Ready Disc Gumik: Bontrager H2 Hard-Case 700x35c Fékek: Shimano M315 hydraulic disc Hajtás : Shimano Steps, 44T Motor: Shimano Steps, 250 watt, 50 Nm",
      "hirdetes_datum": "2023-03-14T00:00:00.000Z",
      "vetelar": 450000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/41a.jpg",
        "https://nitslaszlo.github.io/static/hahu/41b.jpg"
      ],
      "teljesitmeny_kw": 0
    },
    {
      "_id": 42,
      "kategoria_id": 5,
      "cim": "Cube Acid Hybrid One 500 29 MTB e-bike kerékpár",
      "evjarat": "2022",
      "km_allas": 3519,
      "szin": "Fekete",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": 0.335,
      "serulesmentes": true,
      "leiras": "Eladó a képen látható nagyon megkímélt állapotú Cube Acid Hybrid One 500 29 MTB e-bike. A kerékpár 2022 novemberében teljes motor karbantartáson és fékbetét cserén esett át így az ebike tökéletesen üzemkész (a télen nem volt használva). Az ebikhoz egy 500 Wh akkumulátor tartozik amivel terheléstől függően akár 100 km táv is megtehető egy feltöltéssel. A kerékpárhoz minden tartozék megvan (kulcs, töltő, használati utasítás).",
      "hirdetes_datum": "2023-04-14T00:00:00.000Z",
      "vetelar": 590000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/42a.jpg"
      ],
      "teljesitmeny_kw": 0
    },
    {
      "_id": 43,
      "kategoria_id": 5,
      "cim": "KTM Machina Race Bosch CX motoros e-bike kerékpár",
      "evjarat": "2021",
      "km_allas": 1359,
      "szin": "Fekete turbó narancs csíkokkal",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": 0.335,
      "serulesmentes": true,
      "leiras": "KTM Machina Race Bosch CX motoros e-bike kerékpár. 1359 km-t futott összesen. Powerpack 500-as akku. 2db. eredeti kulccsal. Nyeregcső magassága a kormányról állítható.",
      "hirdetes_datum": "2023-05-13T00:00:00.000Z",
      "vetelar": 795000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/43a.jpg"
      ],
      "teljesitmeny_kw": 0
    },
    {
      "_id": 44,
      "kategoria_id": 5,
      "cim": "Specialized Turbo Levo FSR ebike e-bike elektromos kerékpár",
      "evjarat": "2022",
      "km_allas": 2170,
      "szin": "Piros",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": 1,
      "serulesmentes": true,
      "leiras": "Vadonat új akkumulátorral, garanciális, 1 töltéses. 90Nm Brose motorral, L-es vázméret, 29 kerékméret, gyönyörű állapot, hátul Fox, elöl Rockshox teleszkóp, 4 dugattyús hidraulikus Sram tárcsafék 11 sebességes sram váltórendszer., költségmentes állapot, a kerékpárt csak használni kell. A motor hangtalan, minden tökéletesen működik. 25km/h felett is hajt. 2170km van a kerékpárban.",
      "hirdetes_datum": "2023-06-10T00:00:00.000Z",
      "vetelar": 1120000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/44a.jpg"
      ],
      "teljesitmeny_kw": 1
    },
    {
      "_id": 45,
      "kategoria_id": 1,
      "cim": " Eladó Toyota GT86",
      "evjarat": "2016",
      "km_allas": 3500,
      "szin": "Szürke",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 1998,
      "teljesitmeny": 200,
      "serulesmentes": true,
      "leiras": "Az autó sportos megjelenésű, két üléses, 2.0 literes, 200 lóerős benzinmotorral és hatfokozatú manuális váltóval rendelkezik, hátsó kerekeket hajt. A belső tér fekete, és felszereltségéhez tartozik klíma, elektromos ablakok és tükrök, ülésfűtés, tempomat, tolatókamera, navigációs rendszer és CD-s hifi. Az autó állapota jó és 17 colos könnyűfém felnikkel van felszerelve. Összességében ez egy sportos, élvezetes vezetési élményt nyújtó autó, számos hasznos funkcióval és jó állapotban.",
      "hirdetes_datum": "2023-03-17T00:00:00.000Z",
      "vetelar": 9700000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/45a.jpg",
        "https://nitslaszlo.github.io/static/hahu/45b.jpg",
        "https://nitslaszlo.github.io/static/hahu/45c.jpg"
      ],
      "teljesitmeny_kw": 147
    },
    {
      "_id": 46,
      "kategoria_id": 1,
      "cim": "Eladó Suzuki Jimny 1.5 AllGrip",
      "evjarat": "2018",
      "km_allas": 493,
      "szin": "Kék",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 1462,
      "teljesitmeny": 102,
      "serulesmentes": true,
      "leiras": "Az autó ára 9.030.000 Ft, amiért egy négyüléses, 1.5 literes, 102 lóerős benzinmotorral felszerelt terepjárót vásárolhatunk meg. Az autó egy összkerékhajtással (AllGrip) rendelkező öthangú manuális sebességváltóval van felszerelve, amely nagyobb tapadást biztosít a nehéz terepen történő közlekedés során.",
      "hirdetes_datum": "2023-04-14T00:00:00.000Z",
      "vetelar": 9030000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/46a.jpg",
        "https://nitslaszlo.github.io/static/hahu/46b.jpg"
      ],
      "teljesitmeny_kw": 75
    },
    {
      "_id": 47,
      "kategoria_id": 1,
      "cim": "Eladó Volkswagen Passat VIII GTE Plug-in hibrid",
      "evjarat": "2016",
      "km_allas": 164000,
      "szin": "Szürke",
      "uzemanyag": "Hibrid",
      "hengerurtartalom": 1400,
      "teljesitmeny": 155,
      "serulesmentes": true,
      "leiras": "Az autóban egy 1.4 literes, 156 lóerős benzinmotor található, amelyet egy elektromos motor egészít ki, összesen 218 lóerős teljesítménnyel. Az autó hatfokozatú, duplakuplungos sebességváltóval van felszerelve, amely biztosítja a zökkenőmentes váltásokat.",
      "hirdetes_datum": "2023-05-25T00:00:00.000Z",
      "vetelar": 7490000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/47a.jpg"
      ],
      "teljesitmeny_kw": 114
    },
    {
      "_id": 48,
      "kategoria_id": 1,
      "cim": "Eladó Mini Cooper S 3-Türer Pepper LED",
      "evjarat": "2018",
      "km_allas": 2200,
      "szin": "Fehár-Fekete",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 1998,
      "teljesitmeny": 192,
      "serulesmentes": true,
      "leiras": "Az autó fehér színű, sportos megjelenésű, 2 ajtós, 4 üléses. Egy 2.0 literes, 192 lóerős benzinmotorral van felszerelve, amely hatfokozatú manuális sebességváltóval rendelkezik. Az autó hatékonyan és könnyedén vezethető, valamint nagyon jó teljesítményt nyújt.",
      "hirdetes_datum": "2023-06-20T00:00:00.000Z",
      "vetelar": 8340000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/48a.jpg"
      ],
      "teljesitmeny_kw": 141
    },
    {
      "_id": 49,
      "kategoria_id": 1,
      "cim": "Eladó BMW I3 REX 94Ah LED ACC Komfor",
      "evjarat": "2017",
      "km_allas": 19500,
      "szin": "Fehár-Fekete",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": 647,
      "teljesitmeny": 170,
      "serulesmentes": true,
      "leiras": "Az autó belső tere jól felszerelt, tartalmaz digitális klímaberendezést, elektromos ablakokat és tükröket, valamint navigációs rendszert, tolatókamerát és bőrkárpitot. Az autó állapota jó, és külsőleg is szép állapotban van. Az autó továbbá rendelkezik egy 33 kWh-s akkumulátorral, amelynek segítségével az autó akár 300 kilométert is képes teljesen elektromos üzemmódban közlekedni. Az autó továbbá rendelkezik egy tartalék üzemanyagtartállyal, amely akár 150 km-t is képes megtenni, ha az akkumulátor lemerülne.",
      "hirdetes_datum": "2023-07-04T00:00:00.000Z",
      "vetelar": 9990000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/49a.jpg"
      ],
      "teljesitmeny_kw": 125
    },
    {
      "_id": 50,
      "kategoria_id": 2,
      "cim": "Toyota Proace 2.0 D-4D Combi Base - RC21 L1H1",
      "evjarat": "2022",
      "km_allas": 4,
      "szin": "fehér",
      "uzemanyag": "Dízel",
      "hengerurtartalom": 1997,
      "teljesitmeny": 141,
      "serulesmentes": true,
      "leiras": "A hirdetésben lévő akciós ár flotta kedvezménnyel együtt érvényes. Tisztelt érdeklődő! a hirdetett autó rendelhető! A fentiek mellett tartósbérlet konstrukciók is igénybe vehetők gépjárműveinkre, a rendelési határidőről valamint egyedi személyre szabott ajánlatért keresse bizalommal értékesítő munkatársainkat Lukács Bencét +36308884194.",
      "hirdetes_datum": "2023-01-12T00:00:00.000Z",
      "vetelar": 14755500,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/50a.jpg",
        "https://nitslaszlo.github.io/static/hahu/50b.jpg",
        "https://nitslaszlo.github.io/static/hahu/50c.jpg"
      ],
      "teljesitmeny_kw": 104
    },
    {
      "_id": 51,
      "kategoria_id": 2,
      "cim": "Ford Tourneo Costum Titán",
      "evjarat": "2018",
      "km_allas": 60000,
      "szin": "barna",
      "uzemanyag": "Dízel",
      "hengerurtartalom": 1995,
      "teljesitmeny": 170,
      "serulesmentes": true,
      "leiras": "Magánszemélytől Ford Turneo Costum Titán L2H1 Gyári garancia van még rajta Sérülés mentes Garantál km. Meg tekinthető Nyíregyháza vagy Budapest előre egyeztetett időpontban.",
      "hirdetes_datum": "2023-02-23T00:00:00.000Z",
      "vetelar": 12499900,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/51a.jpg",
        "https://nitslaszlo.github.io/static/hahu/51b.jpg"
      ],
      "teljesitmeny_kw": 125
    },
    {
      "_id": 52,
      "kategoria_id": 2,
      "cim": "Mercedes-Benz V-osztály 2.2 cdi Avantgarde aut. 7",
      "evjarat": "2015",
      "km_allas": 283658,
      "szin": "fekete",
      "uzemanyag": "Dízel",
      "hengerurtartalom": 2143,
      "teljesitmeny": 162,
      "serulesmentes": true,
      "leiras": "Részletre * 2.497.000 Ft befizetéssel * biztonságos FIX forint alapon! A gépkocsi műszakilag bevizsgált + festékvastagság mérési jegyzőkönyv. Vásárláshoz kedvező forint alapú részletfizetést biztosítunk. Csereautóját beszámítjuk, amely ha hitellel terhelt, hitelét lezárjuk.",
      "hirdetes_datum": "2023-03-05T00:00:00.000Z",
      "vetelar": 11397000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/52a.jpg"
      ],
      "teljesitmeny_kw": 119
    },
    {
      "_id": 53,
      "kategoria_id": 2,
      "cim": "Ford Transit BEV 350 LWB Trend RWD (Automata) E-Transit",
      "evjarat": "2022",
      "km_allas": 1,
      "szin": "fehér",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": 184,
      "serulesmentes": true,
      "leiras": "A gépjármű megtekinthető szalonunkban telefonos egyeztetés mellett (cím: 1097 Budapest, Könyves Kálmán krt. 3.) CarNet Auto-Fort Kft. További új Ford modellek készletről elérhetőek, valamint személyre szabott felszereltséggel rendelhetők, 5 év gyári garanciával és kedvezményes forint alapú lízing konstrukciókkal. A tájékoztatás nem teljes körű. Az esetlegesen előforduló hibákért felelősséget nem vállalunk. ",
      "hirdetes_datum": "2023-04-14T00:00:00.000Z",
      "vetelar": 28990000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/53a.jpg"
      ],
      "teljesitmeny_kw": 135
    },
    {
      "_id": 54,
      "kategoria_id": 2,
      "cim": "Ford Transit 2.0 TDCi 350 LWB Trend (7 személyes)",
      "evjarat": "2022",
      "km_allas": 10,
      "szin": "fehér",
      "uzemanyag": "Dízel",
      "hengerurtartalom": 1998,
      "teljesitmeny": 131,
      "serulesmentes": true,
      "leiras": "Felépítmény árgaranciával! Az ár nem tartalmazza az egyéni igényű extrákat, de a gyári platót igen! A hirdetés nem minősül ajánlattételnek, az akció pontos feltételeiről érdeklődjön márkakereskedésünkben. Az árváltozás jogát fenntartjuk! A napi aktuális készletről érdeklődjön kollégáinknál.",
      "hirdetes_datum": "2023-05-09T00:00:00.000Z",
      "vetelar": 16353155,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/54a.jpg"
      ],
      "teljesitmeny_kw": 96
    },
    {
      "_id": 55,
      "kategoria_id": 3,
      "cim": "MTZ 892.2 Belarus traktor",
      "evjarat": "2012",
      "km_allas": 600,
      "szin": "Piros",
      "uzemanyag": "Benzines",
      "hengerurtartalom": 4750,
      "teljesitmeny": 43.9,
      "serulesmentes": true,
      "leiras": "Fémburkolatos, turbós 95 LE motorral, mechanikus váltós traktor.",
      "hirdetes_datum": "2023-01-19T00:00:00.000Z",
      "vetelar": 11850000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/55a.jpg",
        "https://nitslaszlo.github.io/static/hahu/55b.jpg",
        "https://nitslaszlo.github.io/static/hahu/55c.jpg"
      ],
      "teljesitmeny_kw": 32
    },
    {
      "_id": 56,
      "kategoria_id": 3,
      "cim": "MTZ 952.3 Belarus traktor",
      "evjarat": "2007",
      "km_allas": 1000,
      "szin": "Piros",
      "uzemanyag": "Benzines",
      "hengerurtartalom": 4750,
      "teljesitmeny": 39.6,
      "serulesmentes": true,
      "leiras": "Hibátlan állapótú MTZ-952.3 traktor. ",
      "hirdetes_datum": "2023-04-19T00:00:00.000Z",
      "vetelar": 11900000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/56a.jpg",
        "https://nitslaszlo.github.io/static/hahu/56b.jpg",
        "https://nitslaszlo.github.io/static/hahu/56c.jpg"
      ],
      "teljesitmeny_kw": 29
    },
    {
      "_id": 57,
      "kategoria_id": 3,
      "cim": "MTZ-1025 Belarus traktor",
      "evjarat": "2000",
      "km_allas": 500,
      "szin": "Piros",
      "uzemanyag": "Benzines",
      "hengerurtartalom": 4500,
      "teljesitmeny": 33.9,
      "serulesmentes": true,
      "leiras": "Eladó tökéletes passzban lévő MTZ-1025. A traktor egyből elvihető!",
      "hirdetes_datum": "2023-02-10T00:00:00.000Z",
      "vetelar": 13450000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/57a.jpg"
      ],
      "teljesitmeny_kw": 25
    },
    {
      "_id": 58,
      "kategoria_id": 3,
      "cim": "MTZ-1221.3 Belarus traktor",
      "evjarat": "2006",
      "km_allas": 900,
      "szin": "Piros",
      "uzemanyag": "Benzines",
      "hengerurtartalom": 7120,
      "teljesitmeny": 39.4,
      "serulesmentes": true,
      "leiras": " Ikerhengeres hátsó hidraulikás MTZ-1221.3 traktor 5000 kg emelőképességel",
      "hirdetes_datum": "2023-04-05T00:00:00.000Z",
      "vetelar": 16000000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/58a.jpg",
        "https://nitslaszlo.github.io/static/hahu/58b.jpg",
        "https://nitslaszlo.github.io/static/hahu/58c.jpg"
      ],
      "teljesitmeny_kw": 29
    },
    {
      "_id": 59,
      "kategoria_id": 3,
      "cim": "MTZ-1523.3 BELARUS traktor 151 LE",
      "evjarat": "2007",
      "km_allas": 300,
      "szin": "Piros",
      "uzemanyag": "Dízel",
      "hengerurtartalom": 7120,
      "teljesitmeny": 36.5,
      "serulesmentes": true,
      "leiras": "Négyütemű, közvetlen befecskendezéses, vízhűtéses, turbófeltöltés dízel MTZ 1523.3 traktor",
      "hirdetes_datum": "2023-02-01T00:00:00.000Z",
      "vetelar": 21500000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/59a.jpg",
        "https://nitslaszlo.github.io/static/hahu/59b.jpg",
        "https://nitslaszlo.github.io/static/hahu/59c.jpg"
      ],
      "teljesitmeny_kw": 27
    },
    {
      "_id": 60,
      "kategoria_id": 4,
      "cim": "Ducati Scrambler 803 Nightshift",
      "evjarat": "2021",
      "km_allas": 915,
      "szin": "Fekete",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 803,
      "teljesitmeny": 73,
      "serulesmentes": true,
      "leiras": "Ducati Scrambler 803 Nightshift, termignoni kipufogó rendszer, aviator grey fényezés, motor/90 fokos l kéthengeres, hengerenként 2 szelepes desmodromic, led fényszóró drl funkcióval, led ducati performance irányjelzők, kanyar abs, fekete motorblokk, széles alumínium kormány, levegő-olaj hűtés, 54kw-73le 8250ford. /perc, nyomaték 67nm, elektronikus befecskendezés, 50mm-es torokátmérő, 6 sebességes, váz-térhálos kettősfalú acélcsőváz, alumínium segédváz, fűzött küllős könnyűfém kerekek, kayaba felfüggesztés, első 4 dugattyús- radiális brembo féknyereg/hátsó 1 dugattyús féknyereg, abs, pirelli gumiköpeny, gyári Ducati oldaltáskák, garancia: 2 év km megkötés nélkül, immobiliser, hitelügyintézés és biztosítással kapcsolatban: +36-70-338-1550! kérjük autóinkról megtekintés előtt telefonon érdeklődjön! további autóink: járművek ugyanitt menüpontban! nyitva h-p: 8-17 sz: 9-13! a hirdetés indikatív ajánlatnak minősül!",
      "hirdetes_datum": "2023-01-28T00:00:00.000Z",
      "vetelar": 4390000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/60a.jpg",
        "https://nitslaszlo.github.io/static/hahu/60b.jpg",
        "https://nitslaszlo.github.io/static/hahu/60c.jpg"
      ],
      "teljesitmeny_kw": 54
    },
    {
      "_id": 61,
      "kategoria_id": 4,
      "cim": "Brixton Crossfire 500 XC",
      "evjarat": "2022",
      "km_allas": 3,
      "szin": "Világosbarna",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 486,
      "teljesitmeny": 48,
      "serulesmentes": true,
      "leiras": "Brixton Crossfire 500 XC, 2022-es modell, 0 km, 2 év garancia, 2 év km korlát nélkül, 1 év biztosítás, 1 év szervíz, 1 év kártérítés, 1 év 24 órás segítségnyújtás, 1 év útmentő, 1 év lejáratlan regisztráció, 1 év hűtőtartó, 1 év KTM powerparts, 1 év KTM powerwear, 1 év KTM powerup, 1 év KTM powerplan, 1 év KTM powerpack, 1 év KTM powerprotection, 1 év KTM powerpayment, 1 év KTM powerpromise, 1 év KTM powerprice, 1 év KTM power",
      "hirdetes_datum": "2023-02-02T00:00:00.000Z",
      "vetelar": 3199995,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/61a.jpg",
        "https://nitslaszlo.github.io/static/hahu/61b.jpg"
      ],
      "teljesitmeny_kw": 35
    },
    {
      "_id": 62,
      "kategoria_id": 4,
      "cim": "HARLEY DAVIDSON 1963-AS Aermacchi 250 versenymotor, felújítva!",
      "evjarat": "1963",
      "km_allas": 1,
      "szin": "Piros",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 250,
      "teljesitmeny": 33,
      "serulesmentes": true,
      "leiras": "Igazi ritkaság, eredeti versenymotor a 60-as évekből, kitűnő állapotban! elöl dupla-hűtött fékalaplappal, Borrani felnikkel, Tommaselli gázkarral, Marzocchi első villával, műanyag versenytankkal, pályaidommal, aprólékos munkával felújítva. gyűjteménybe való példány! adás-vételi szerződés van a motorkerékpárhoz, a gyártási év tájékoztató jellegű. bizományosi értékesítés, csere, használt autó beszámítás, mozgássérült utalvány elfogadása, hitelügyintézés, kp. es autó vásárlás, műszaki vizsgáztatás, átírás ügyintézése, eredetvizsga, kötelező biztosítás kötés! tekintse meg kínálatunkat a járművek ugyanitt címszó alatt!",
      "hirdetes_datum": "2023-03-22T00:00:00.000Z",
      "vetelar": 3300000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/62a.jpg"
      ],
      "teljesitmeny_kw": 24
    },
    {
      "_id": 63,
      "kategoria_id": 4,
      "cim": "Kawasaki zx10",
      "evjarat": "2013/1",
      "km_allas": 47900,
      "szin": "Fekete",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 998,
      "teljesitmeny": 200,
      "serulesmentes": true,
      "leiras": "Amerikai változat 2 kulcs,a motor óra cseres volt szállításnál sérült így most az órában kevesebb km van. Több infó tel.",
      "hirdetes_datum": "2023-04-11T00:00:00.000Z",
      "vetelar": 3200000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/63a.jpg"
      ],
      "teljesitmeny_kw": 147
    },
    {
      "_id": 64,
      "kategoria_id": 4,
      "cim": "KTM Exc-F 250 Six Days covid☣",
      "evjarat": "2022/6",
      "km_allas": 890,
      "szin": "Fehér/Narancs",
      "uzemanyag": "Benzin",
      "hengerurtartalom": 248,
      "teljesitmeny": 42,
      "serulesmentes": true,
      "leiras": "33 óra! Top, újszerű, hibátlan állapot Friss olaj csere, +szűrők Extrákkal! Bővebb infó tel! Csak kp.",
      "hirdetes_datum": "2023-06-21T00:00:00.000Z",
      "vetelar": 3199000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/64a.jpg"
      ],
      "teljesitmeny_kw": 31
    },
    {
      "_id": 65,
      "kategoria_id": 5,
      "cim": "Elektromos kerékpár Fatbike S Pedelec 45km/h E-BIKE Cargo bicikli Új",
      "evjarat": "2021",
      "km_allas": 0,
      "szin": "Fekete",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "Egyedi, rendkívül stílusos Custom elektromos fatbike, flat track / cargo pedelec kerékpár / elektromos moped. 0 km-es, teljesen új, Amerikai gyártó 24 hónap hivatalos Európai garanciával. A garancia Magyarországon is érvényes! 136 kg terhelhetőség, 150-188 cm között használható univerzális vázméret. A vázon lévő doboz levehető, így hölgyeknek, alacsonyabbaknak vagy idősebbeknek is ideális! Ahogy tökéletes választás akkor is, ha kis és nagyobb gyerkőccel túráznál, és/vagy egyedül a természetben, erdőben, hegyek között kerékpároznál, vagy a mindennapokban a bevásárlást autó nélkül szeretnéd elintézni, és Te akarod eldönteni, hogy pedelec kerékpárként a napi mozgásod is letudod, vagy super pedelecként, esetleg elektromos motorként/mopedként használod.",
      "hirdetes_datum": "2023-02-01T00:00:00.000Z",
      "vetelar": 1250000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/65a.jpg",
        "https://nitslaszlo.github.io/static/hahu/65b.jpg",
        "https://nitslaszlo.github.io/static/hahu/65c.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 66,
      "kategoria_id": 5,
      "cim": "L-es Riese Müller pedelec, ebike, elektromos kerékpár eladó! 625 aksi.",
      "evjarat": "2021",
      "km_allas": 500,
      "szin": "Piros",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "Vadonatúj állapotú, 500 km alatt futott! Prémium minőségű! Gen. 4 motorral, 625-ös akksival! Szíj hajtás.",
      "hirdetes_datum": "2023-03-17T00:00:00.000Z",
      "vetelar": 1450000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/66a.jpg",
        "https://nitslaszlo.github.io/static/hahu/66b.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 67,
      "kategoria_id": 5,
      "cim": "Elektromos riksa eladó",
      "evjarat": "2021",
      "km_allas": -1,
      "szin": "Sárga",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "Eladó 3 db elektromos riksa. Rendszeresen karbantartott gépek, vezetett szervízkönyvvel, kiváló állapotúak. Esztétikailag szinte hibátlanok! Az egyikhez bontatlan új akksi szett, a másik kettőhöz 2022ben vásárolt és beépített szett jár. Új, szintén bontatlan okos akkumulátor töltők. A vevőnek adunk egy több száz dollár értékű szerviz pakkot, ami kifejezetten ehhez a típushoz lett vásárolva - tengely, fékrendszer, váltók, fogaskerekek, villa stb.",
      "hirdetes_datum": "2023-06-06T00:00:00.000Z",
      "vetelar": 1800000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/67a.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 68,
      "kategoria_id": 5,
      "cim": "Eladó Elektromos mountain bike kerékpár STILUS E-ALL MOUNTAIN",
      "evjarat": "2019",
      "km_allas": -1,
      "szin": "Khaki",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "Ezt az összteleszkópos mountain bike kerékpárt All-Mountain használatra választottuk. A kerékpár tökéletes közepesen nehéz terepen történő használatra. A Bosch Performance Line CX motor nyomatékot és lendületet biztosít az emelkedőkön, és újult erőt a kanyarból kijőve.",
      "hirdetes_datum": "2023-01-28T00:00:00.000Z",
      "vetelar": 1499000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/68a.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 69,
      "kategoria_id": 5,
      "cim": "Eladó MTF Mount 6.3 16 Női elektromos kerékpár",
      "evjarat": "2020",
      "km_allas": -1,
      "szin": "Szürke/rózsaszín",
      "uzemanyag": "Elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "Prémium kategóriás női elektromos kerékpár, amely még nehezebb terepre is alkalmas. Meghajtásáról a bevált Bafang Max Drive központi motor gondoskodik, 80 Nm nyomatékkal, ami garantálja a minőséget és az optimális támogatást különféle vezetési stílusokhoz. A Samsung márkás akkumulátor teljesen be van építve a vázba, ami még többet ad az e-bike gyönyörű dizájnjához.",
      "hirdetes_datum": "2023-04-12T00:00:00.000Z",
      "vetelar": 1049999,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/69a.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 70,
      "kategoria_id": 1,
      "cim": "Audi A4",
      "evjarat": "2017",
      "km_allas": 97769,
      "szin": "fehér",
      "uzemanyag": "Dízel",
      "hengerurtartalom": 1968,
      "teljesitmeny": 150,
      "serulesmentes": true,
      "leiras": "Pontos felszereltségért, illetve részletes információért érdeklődjön kollégáinknál. A Magyar Autókereskedőház Zrt. kizárólag németországi márkakereskedői hálózatból, teljes körű ügyintézéssel importál megrendelésre teszt, bemutató és használt járműveket. A vásárlóinknak lehetősége van zárt-, és nyílt végű pénzügyi lízing, illetve tartós bérletre történő beszerzésre is. Autóink magyar rendszámmal, magyar forgalomba helyezéssel kerülnek értékesítésre. A széles Németországi kínálatból szinte minden esetben megtaláljuk az érdeklődésnek megfelelő járművet. Áraink a magyarországi névre íratás költségén kívül mindent tartalmaznak. Ajánlatunk indikatív jellegű. Az általunk hirdetett gépjárművek kizárólag megrendelésre érkeznek az országba.",
      "hirdetes_datum": "2023-02-11T00:00:00.000Z",
      "vetelar": 11290000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/70a.jpg",
        "https://nitslaszlo.github.io/static/hahu/70b.jpg",
        "https://nitslaszlo.github.io/static/hahu/70c.jpg"
      ],
      "teljesitmeny_kw": 110
    },
    {
      "_id": 71,
      "kategoria_id": 1,
      "cim": "Mercedes-Benz 240 D",
      "evjarat": "1982",
      "km_allas": 27595,
      "szin": "piros",
      "uzemanyag": "Dízel",
      "hengerurtartalom": 2397,
      "teljesitmeny": 72,
      "serulesmentes": true,
      "leiras": "Magyarországon újonnan vásárolt, első tulajdonostól, kitűnő állapotban eladó. OT minősítés.",
      "hirdetes_datum": "2023-02-01T00:00:00.000Z",
      "vetelar": 12000000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/71a.jpg",
        "https://nitslaszlo.github.io/static/hahu/71b.jpg"
      ],
      "teljesitmeny_kw": 53
    },
    {
      "_id": 72,
      "kategoria_id": 1,
      "cim": "Lexus IS 300h Sport Line",
      "evjarat": "2019",
      "km_allas": 9000,
      "szin": "fehér",
      "uzemanyag": "Hibrid",
      "hengerurtartalom": 2494,
      "teljesitmeny": 223,
      "serulesmentes": true,
      "leiras": "Pénzvisszafizetési garanciát vállalunk az autó futásteljesítményére és állapotára, amelyeket szerződésben vállalunk. Az autókat kizárólag német minősített autókereskedésből importáljuk megrendelésre, az ügyfél egyedi igényei alapján. Az autók egy mindenre kiterjedő ellenőrzési folyamaton mennek keresztül, így kiszűrjük a lehetséges kockázatokat. A több mint 1000 elégedett ügyfél, 8 év piaci jelenlét, 10 hozzáértő, tapasztalt munkatárs és egy leellenőrizhető múltú cég a garancia arra, hogy létezik 100 %-os biztonság az autóvásárlás terén. A gépkocsi 20 % befizetésével finanszírozható, nyílt vagy zártvégű pénzügyi lízinggel. Az ár tájékoztató jellegű amely az Euro/HUF árfolyam függvényében változhat.",
      "hirdetes_datum": "2023-02-15T00:00:00.000Z",
      "vetelar": 13140000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/72a.jpg"
      ],
      "teljesitmeny_kw": 164
    },
    {
      "_id": 73,
      "kategoria_id": 1,
      "cim": "Porsche Panamera Turbo S",
      "evjarat": "2011",
      "km_allas": 40295,
      "szin": "fehér",
      "uzemanyag": "Hibrid",
      "hengerurtartalom": 4806,
      "teljesitmeny": 549,
      "serulesmentes": true,
      "leiras": "Pénzvisszafizetési garanciát vállalunk az autó futásteljesítményére és állapotára, amelyeket szerződésben vállalunk. Az autókat kizárólag német minősített autókereskedésből IMPORTÁLJUK MEGRENDELÉSRE, az ügyfél egyedi igényei alapján. Az autók egy mindenre kiterjedő ellenőrzési folyamaton mennek keresztül, így kiszűrjük a lehetséges kockázatokat. A több mint 1000 elégedett ügyfél, 8 év piaci jelenlét, 10 hozzáértő, tapasztalt munkatárs és egy leellenőrizhető múltú cég a garancia arra, hogy létezik 100 %-os biztonság az autóvásárlás terén. A gépkocsi 20 % befizetésével finanszírozható, nyílt vagy zártvégű pénzügyi lízinggel. Az ár tájékoztató jellegű amely az Euro/HUF árfolyam függvényében változhat.",
      "hirdetes_datum": "2023-02-10T00:00:00.000Z",
      "vetelar": 15720000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/73a.jpg"
      ],
      "teljesitmeny_kw": 404
    },
    {
      "_id": 74,
      "kategoria_id": 1,
      "cim": "Toyota Highlander Hybrid",
      "evjarat": "2019",
      "km_allas": 13654,
      "szin": "fekete",
      "uzemanyag": "Hibrid",
      "hengerurtartalom": 3500,
      "teljesitmeny": 295,
      "serulesmentes": true,
      "leiras": "Pénzvisszafizetési garanciát vállalunk az autó futásteljesítményére és állapotára, amelyeket szerződésben vállalunk. Az autókat kizárólag német minősített autókereskedésből importáljuk megrendelésre, az ügyfél egyedi igényei alapján. Az autók egy mindenre kiterjedő ellenőrzési folyamaton mennek keresztül, így kiszűrjük a lehetséges kockázatokat. A több mint 1000 elégedett ügyfél, 8 év piaci jelenlét, 10 hozzáértő, tapasztalt munkatárs és egy leellenőrizhető múltú cég a garancia arra, hogy létezik 100 %-os biztonság az autóvásárlás terén. A gépkocsi 20 % befizetésével finanszírozható, nyílt vagy zártvégű pénzügyi lízinggel. Az ár tájékoztató jellegű amely az Euro/HUF árfolyam függvényében változhat.",
      "hirdetes_datum": "2023-02-05T00:00:00.000Z",
      "vetelar": 19580000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/74a.jpg"
      ],
      "teljesitmeny_kw": 217
    },
    {
      "_id": 80,
      "kategoria_id": 1,
      "cim": "AUDI R8",
      "evjarat": "2017",
      "km_allas": 87850,
      "szin": "babiloni kék",
      "uzemanyag": "benzin",
      "hengerurtartalom": 5204,
      "teljesitmeny": 540,
      "serulesmentes": true,
      "leiras": "Pontos felszereltségért, illetve részletes információért érdeklődjön kollégáinknál. A Magyar Autókereskedőház Zrt. kizárólag németországi márkakereskedői hálózatból, teljes körű ügyintézéssel importál megrendelésre teszt, bemutató és használt járműveket. A vásárlóinknak lehetősége van zárt-, és nyílt végű pénzügyi lízing, illetve tartós bérletre történő beszerzésre is. Autóink magyar rendszámmal, magyar forgalomba helyezéssel kerülnek értékesítésre. A széles Németországi kínálatból szinte minden esetben megtaláljuk az érdeklődésnek megfelelő járművet. Áraink a magyarországi névre íratás költségén kívül mindent tartalmaznak. Ajánlatunk indikatív jellegű. Az általunk hirdetett gépjárművek kizárólag megrendelésre érkeznek az országba.",
      "hirdetes_datum": "2023-01-15T00:00:00.000Z",
      "vetelar": 49999999,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/80a.jpg",
        "https://nitslaszlo.github.io/static/hahu/80b.jpg"
      ],
      "teljesitmeny_kw": 397
    },
    {
      "_id": 81,
      "kategoria_id": 1,
      "cim": "Porsche Taycan 4S Performancebatterie Plus",
      "evjarat": "2020",
      "km_allas": 16000,
      "szin": "antwepeni kék",
      "uzemanyag": "elektromos",
      "hengerurtartalom": -1,
      "teljesitmeny": 489,
      "serulesmentes": true,
      "leiras": "Performancebatterie Plus, 489 LE, kerámia fék, 360 kamera, sport chrono paket, sport design paket, azonnal elvihető! Igény esetén extralistát küldünk tisztelt ügyfelünk, járműveink megtekintéséhez időpont egyeztetős szükséges!",
      "hirdetes_datum": "2023-02-15T00:00:00.000Z",
      "vetelar": 42350000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/81a.jpg"
      ],
      "teljesitmeny_kw": 360
    },
    {
      "_id": 82,
      "kategoria_id": 1,
      "cim": "AUDI Q7 S",
      "evjarat": "2022",
      "km_allas": 13550,
      "szin": "bécsi vörös",
      "uzemanyag": "benzin",
      "hengerurtartalom": 3996,
      "teljesitmeny": 507,
      "serulesmentes": true,
      "leiras": "Pontos felszereltségért, illetve részletes információért érdeklődjön kollégáinknál. A Magyar Autókereskedőház Zrt. kizárólag németországi márkakereskedéi hálózatból, teljes körű ügyintézéssel importál megrendelésre teszt, bemutató és használt járműveket.",
      "hirdetes_datum": "2023-03-15T00:00:00.000Z",
      "vetelar": 46890000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/82a.jpg"
      ],
      "teljesitmeny_kw": 373
    },
    {
      "_id": 83,
      "kategoria_id": 1,
      "cim": "AUDI Q8",
      "evjarat": "2022",
      "km_allas": 13318,
      "szin": "Antimonsárga",
      "uzemanyag": "dízel",
      "hengerurtartalom": 2967,
      "teljesitmeny": 286,
      "serulesmentes": true,
      "leiras": "Pontos felszereltségért, illetve részletes információért érdeklődjön kollégáinknál. A Magyar Autókereskedőház Zrt. kizárólag németországi márkakereskedéi hálózatból, teljes körű ügyintézéssel importál megrendelésre teszt, bemutató és használt járműveket. ",
      "hirdetes_datum": "2023-04-15T00:00:00.000Z",
      "vetelar": 44290000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/83a.jpg"
      ],
      "teljesitmeny_kw": 210
    },
    {
      "_id": 84,
      "kategoria_id": 1,
      "cim": "Porsche 911 Carrera 4 GTS GTS-P",
      "evjarat": "2014",
      "km_allas": 16400,
      "szin": "élénk hanzasárga",
      "uzemanyag": "benzin",
      "hengerurtartalom": 3800,
      "teljesitmeny": 430,
      "serulesmentes": true,
      "leiras": "Pénzvisszafizetési garanciát vállalunk az autó futósteljesítményére és állapotára, amelyeket szerződésben vállalunk. Az autókat kizárólag német minősített autókereskedésből importáljuk megrendelésre, az ügyfél egyedi igényei alapján.",
      "hirdetes_datum": "2023-05-15T00:00:00.000Z",
      "vetelar": 41310000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/84a.jpg",
        "https://nitslaszlo.github.io/static/hahu/84b.jpg",
        "https://nitslaszlo.github.io/static/hahu/84c.jpg"
      ],
      "teljesitmeny_kw": 316
    },
    {
      "_id": 85,
      "kategoria_id": 6,
      "cim": "WEINSBERG Lakókocsi CaraOne 450FU",
      "evjarat": "2018",
      "km_allas": 5946,
      "szin": "fehér",
      "uzemanyag": "n.a.",
      "hengerurtartalom": -1,
      "teljesitmeny": -1,
      "serulesmentes": false,
      "leiras": "Weinsberg CaraOne 450FU Lakókocsi, A képeken látható állapotban, számos funkcióval ellátott. Rengeteg tároló szekrény, Mosdó, Zuhanyzó, Gáztűzhely mosogatóval, Klíma, Gázfűtés, Ledes estifények, Térelválasztó, Hűtő és még számos kényelmi extra. Köszönjük, hogy elolvasta és megtekintette hirdetésünket. Autóinkba Csere-Beszámítás-Ráfizetés lehetséges. Kérésre Alvázszámot rendszámot kiadunk. Tekintse meg további járműveinket, Budapesti telephelyünk szombaton is nyitva! ",
      "hirdetes_datum": "2023-01-23T00:00:00.000Z",
      "vetelar": 5199000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/85a.jpg",
        "https://nitslaszlo.github.io/static/hahu/85b.jpg",
        "https://nitslaszlo.github.io/static/hahu/85c.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 86,
      "kategoria_id": 6,
      "cim": "Hobby 650 lakókocsi",
      "evjarat": "2017",
      "km_allas": 2001,
      "szin": "fehér",
      "uzemanyag": "n.a.",
      "hengerurtartalom": -1,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "Eladó Hobby 650 lakókocsi 2017 évjárat Felszereltség: Mosogató, nagy hűtő fagyasztóval, tűzhely, körfűtés, elektromos padló fűtés, hűtő-fütő tetőklima, mosdófülke beépített bio-Wc-vel és zuhanytálcával, kombiroló, hideg-melegvíz, beépített víztartály, szervizajtó, stabilizátoros vonófej, omnistor, 2Tv (nappali-háló), moover stb... 06705553037",
      "hirdetes_datum": "2023-02-03T00:00:00.000Z",
      "vetelar": 9000000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/86a.jpg",
        "https://nitslaszlo.github.io/static/hahu/86b.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 87,
      "kategoria_id": 6,
      "cim": "Hobby KMF 545 Lakókocsi",
      "evjarat": "2019",
      "km_allas": 3622,
      "szin": "fehér",
      "uzemanyag": "n.a.",
      "hengerurtartalom": -1,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "Eladó egy gyönyörű 2019 Hobby KMF 545 lakókocsi. Össz tömeg 1600kg. Tusoló, wc, hideg - melegvíz. Panoráma tető. Összes ablakon szúnyogháló. Nagy hűtő, fagyasztó.Led hangulat világítás. LED okos panelről vezérelhető a világítás és a fűtés, ami programozható és időzíthető. Emeletes ágy+ franciaágy. 6 fekvőhely Antenna. Tv előkészítés.24v-220v Dometic micro. Gáztűzhely. Friss műszakival. Magyar papíros",
      "hirdetes_datum": "2023-06-29T00:00:00.000Z",
      "vetelar": 9300000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/87a.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 88,
      "kategoria_id": 6,
      "cim": "Sosem használt, új Niewiadow N-Cross DS lakókocsi",
      "evjarat": "2022",
      "km_allas": 0,
      "szin": "fehér",
      "uzemanyag": "n.a.",
      "hengerurtartalom": -1,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "A lakókocsi alapfelszereltsége:  - AL-KO horganyzott alváz fékezett tengellyel, kézifékkel és 4 támasztólábbal  - 850 kg össztömeg  - dupla grafit fekete ablakok  - CEE 230V betáp  - mankókerék rögzítéssel  - talpalószár  - 25 méter betápkábel  - kétégős gázfőzőlap  - Dometic háromüzemű (230V/12V/gáz) hűtőszekrény és fagyasztó  - gáztároló doboz 2 gázpalack számára  - zuhanytálca  - hideg-meleg csap zuhanyfejjel  - lehajtható mosdókagyló  - Thetford kazettás WC  - Rétegelt lemez bútorzat (konyhapult alsó és felső szekrénnyel, dupla ággyá alakítható étkező asztallal, kétszintes emeletes ágy, ruhás szekrény, felső polcok)  - külső fekete-fehér hullám dekor  A lakókocsi az alábbi extra felszereltséget tartalmazza:  - kombiroló az első ablakon  - Truma S3004 gázfűtés  - LED elősátorvilágítás  - harmadik féklámpa  - Truma 230V vízmelegítő  - MIDI Heki tetőablak  - integrált tisztavíz tartály  - USB aljzat  - pótkeréktartó  - pótkerék  - új akkumulátor beépítve  - Omnisztor kihajtható  - Truma fűtés-hűtés: pad alá beépített  - Napelem rendszer inverterrel",
      "hirdetes_datum": "2023-07-18T00:00:00.000Z",
      "vetelar": 8800000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/88a.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 89,
      "kategoria_id": 6,
      "cim": "Fendt Tendenza 495 lakókocsi; sok extra, vizsga és átírás az árban",
      "evjarat": "2015",
      "km_allas": 1357,
      "szin": "fehér",
      "uzemanyag": "n.a.",
      "hengerurtartalom": -1,
      "teljesitmeny": -1,
      "serulesmentes": true,
      "leiras": "Franciaágyas hálószobával és körüléssel, mely szintén ággyá alakítható, így 4 fő részére nyújt kényelmes fekhelyet! Zuhanyfülkével, beépített kazettás wc-vel, melegvízrendszerrel felszerelve! Komplett konyhával: toronyhűtőszekrény, mosogató, gáztűzhely! Az ágyneműtartó kívülről is kényelmesen pakolható a szervízajtón keresztül! Az ablakokon és a panoráma tetőablakokon is kombirolókkal felszerelve! A kétkerekűek kényelmesen szállíthatóak a vonóháromszögre szerelt kerékpártartón! A vontatást stabilizátoros vonófej és ATC menetstabilizátor segíti! Moverrel (lakókocsi mozgató rendszer) és elektromos támasztólábakkal felszerelve! A lakókocsit teljesen útra készen adjuk át! Az ár tartalmazza a friss műszaki vizsga és a névre írás költségét is! Olcsóbb lakókocsit értékegyeztetéssel beszámítunk!",
      "hirdetes_datum": "2023-05-16T00:00:00.000Z",
      "vetelar": 7990000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/89a.jpg"
      ],
      "teljesitmeny_kw": -1
    },
    {
      "_id": 90,
      "kategoria_id": 7,
      "cim": "Marion 450 Open",
      "evjarat": "2850000",
      "km_allas": 10,
      "szin": "Fehér",
      "uzemanyag": "Benzin",
      "hengerurtartalom": -1,
      "teljesitmeny": 420,
      "serulesmentes": true,
      "leiras": "Újszerű állapotban, kiváló hajó.",
      "hirdetes_datum": "2023-01-07T00:00:00.000Z",
      "vetelar": 69000000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/90a.jpg",
        "https://nitslaszlo.github.io/static/hahu/90b.jpg",
        "https://nitslaszlo.github.io/static/hahu/90c.jpg"
      ],
      "teljesitmeny_kw": 309
    },
    {
      "_id": 91,
      "kategoria_id": 7,
      "cim": "Csónak újszerű",
      "evjarat": "1975",
      "km_allas": 690420,
      "szin": "Fehér",
      "uzemanyag": "Benzin",
      "hengerurtartalom": -1,
      "teljesitmeny": 200,
      "serulesmentes": true,
      "leiras": "Alighasznált csónak, jó állapotban.",
      "hirdetes_datum": "2023-10-12T00:00:00.000Z",
      "vetelar": 86400000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/91a.jpg",
        "https://nitslaszlo.github.io/static/hahu/91b.jpg"
      ],
      "teljesitmeny_kw": 147
    },
    {
      "_id": 92,
      "kategoria_id": 7,
      "cim": "Doral 170 Sunquest",
      "evjarat": "2024",
      "km_allas": 23,
      "szin": "Fehér",
      "uzemanyag": "Benzin",
      "hengerurtartalom": -1,
      "teljesitmeny": 169,
      "serulesmentes": true,
      "leiras": "F8 Vitorlával. M45 Sea Marine Motor",
      "vetelar": 56500000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/92a.jpg"
      ],
      "teljesitmeny_kw": 124
    },
    {
      "_id": 93,
      "kategoria_id": 7,
      "cim": "Maxum 1900 SSL",
      "evjarat": "2023",
      "km_allas": 1000,
      "szin": "Fehér",
      "uzemanyag": "Benzin",
      "hengerurtartalom": -1,
      "teljesitmeny": 150,
      "serulesmentes": true,
      "leiras": "Csere is érdekel, akár autóra is.",
      "hirdetes_datum": "2023-08-12T00:00:00.000Z",
      "vetelar": 34500000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/93a.jpg"
      ],
      "teljesitmeny_kw": 110
    },
    {
      "_id": 94,
      "kategoria_id": 7,
      "cim": "Ghost Marine",
      "evjarat": "2001",
      "km_allas": 0,
      "szin": "Fehér",
      "uzemanyag": "Benzin",
      "hengerurtartalom": -1,
      "teljesitmeny": 150,
      "serulesmentes": false,
      "leiras": "A magyar tenger szelleme, rendkívül csendes horgászásra tökéletes hajó.",
      "hirdetes_datum": "2023-06-02T00:00:00.000Z",
      "vetelar": 29500000,
      "kepek": [
        "https://nitslaszlo.github.io/static/hahu/94a.jpg"
      ],
      "teljesitmeny_kw": 110
    }
  ]