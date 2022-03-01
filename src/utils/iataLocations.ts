export interface AutoCompleteProps {
  label: string;
  value: string;
}

const iatalocations: AutoCompleteProps[] = [
  {
    label: "Aalborg",
    value: "AAL",
  },
  {
    label: "Aarhus",
    value: "AAR",
  },
  {
    label: "Abadan",
    value: "ABD",
  },
  {
    label: "Abakan",
    value: "ABA",
  },
  {
    label: "Aberdeen",
    value: "ABR",
  },
  {
    label: "Aberdeen",
    value: "ABZ",
  },
  {
    label: "Abha",
    value: "AHB",
  },
  {
    label: "Abidjan",
    value: "ABJ",
  },
  {
    label: "Abilene",
    value: "ABI",
  },
  {
    label: "Abu Dhabi",
    value: "AUH",
  },
  {
    label: "Abuja",
    value: "ABV",
  },
  {
    label: "Acapulco",
    value: "ACA",
  },
  {
    label: "Acarigua",
    value: "AGV",
  },
  {
    label: "Accra",
    value: "ACC",
  },
  {
    label: "Adak Island",
    value: "ADK",
  },
  {
    label: "Adana",
    value: "ADA",
  },
  {
    label: "Addis Ababa",
    value: "ADD",
  },
  {
    label: "Adelaide",
    value: "ADL",
  },
  {
    label: "Aden",
    value: "ADE",
  },
  {
    label: "Adler",
    value: "AER",
  },
  {
    label: "Agadir",
    value: "AGA",
  },
  {
    label: "Aguascaliente",
    value: "AGU",
  },
  {
    label: "Ahmedabad",
    value: "AMD",
  },
  {
    label: "Ajaccio",
    value: "AJA",
  },
  {
    label: "Akiachak",
    value: "KKI",
  },
  {
    label: "Akiak",
    value: "AKI",
  },
  {
    label: "Akita",
    value: "AXT",
  },
  {
    label: "Akron/Canton",
    value: "CAK",
  },
  {
    label: "Al-Baha",
    value: "ABT",
  },
  {
    label: "Albany",
    value: "ABY",
  },
  {
    label: "Albany",
    value: "ALB",
  },
  {
    label: "Albert Bay",
    value: "YAL",
  },
  {
    label: "Albuquerque",
    value: "ABQ",
  },
  {
    label: "Aleandroupolis",
    value: "AXD",
  },
  {
    label: "Aleppo",
    value: "ALP",
  },
  {
    label: "Alexandria",
    value: "ESF",
  },
  {
    label: "Al-Fujairah",
    value: "FJR",
  },
  {
    label: "Algiers",
    value: "ALG",
  },
  {
    label: "Alicante",
    value: "ALC",
  },
  {
    label: "Allakaket",
    value: "AET",
  },
  {
    label: "Allentown",
    value: "ABE",
  },
  {
    label: "Alma Ata",
    value: "ALA",
  },
  {
    label: "Alor Setar",
    value: "AOR",
  },
  {
    label: "Altoona",
    value: "AOO",
  },
  {
    label: "Amarillo",
    value: "AMA",
  },
  {
    label: "Amchitka",
    value: "AHT",
  },
  {
    label: "Amman",
    value: "AMM",
  },
  {
    label: "Amritsar",
    value: "ATQ",
  },
  {
    label: "Amsterdam",
    value: "AMS",
  },
  {
    label: "value",
    value: "SPL",
  },
  {
    label: "Anchorage",
    value: "ANC",
  },
  {
    label: "Field",
    value: "MRI",
  },
  {
    label: "Ancona",
    value: "AOI",
  },
  {
    label: "Andahuaylas",
    value: "ANS",
  },
  {
    label: "Anguilla",
    value: "AZA",
  },
  {
    label: "Aniak",
    value: "ANI",
  },
  {
    label: "Ankang",
    value: "AKA",
  },
  {
    label: "Ankara",
    value: "ANK",
  },
  {
    label: "Ankara, Esenboga",
    value: "ESB",
  },
  {
    label: "Annecy",
    value: "NCY",
  },
  {
    label: "Antalya",
    value: "AYT",
  },
  {
    label: "Antananarivo",
    value: "TNR",
  },
  {
    label: "Antigua",
    value: "ANU",
  },
  {
    label: "Antofagasta",
    value: "ANF",
  },
  {
    label: "Antwerp",
    value: "ANR",
  },
  {
    label: "Anvik",
    value: "ANV",
  },
  {
    label: "Aomori",
    value: "AOJ",
  },
  {
    label: "Apia",
    value: "APW",
  },
  {
    label: "Appleton",
    value: "ATW",
  },
  {
    label: "Aqaba",
    value: "AQJ",
  },
  {
    label: "Arcata, Eureka",
    value: "ACV",
  },
  {
    label: "Arctic Village",
    value: "ARC",
  },
  {
    label: "Arecibo",
    value: "ARE",
  },
  {
    label: "Arequipa",
    value: "AQP",
  },
  {
    label: "Arica",
    value: "ARI",
  },
  {
    label: "Aruba",
    value: "AUA",
  },
  {
    label: "Ascension",
    value: "ASC",
  },
  {
    label: "Asheville",
    value: "AVL",
  },
  {
    label: "Ashikawa",
    value: "AKJ",
  },
  {
    label: "Ashland, Huntington",
    value: "HTS",
  },
  {
    label: "Asmara",
    value: "ASM",
  },
  {
    label: "Asturias",
    value: "OVD",
  },
  {
    label: "Asuncion",
    value: "ASU",
  },
  {
    label: "Aswan",
    value: "ASW",
  },
  {
    label: "Athens",
    value: "ATH",
  },
  {
    label: "Atlanta",
    value: "ATL",
  },
  {
    label: "Atlanta, Beaver Ruin",
    value: "JAO",
  },
  {
    label: "Atlanta, Perimeter",
    value: "JAJ",
  },
  {
    label: "Atlantic City",
    value: "AIY",
  },
  {
    label: "Field",
    value: "ACY",
  },
  {
    label: "Atmautluak",
    value: "ATT",
  },
  {
    label: "Auckland",
    value: "AKL",
  },
  {
    label: "Augusta",
    value: "AGS",
  },
  {
    label: "Austin",
    value: "AUS",
  },
  {
    label: "Ayacucho",
    value: "AYP",
  },
  {
    label: "Baghdad, Al Muthana",
    value: "BGW",
  },
  {
    label: "International",
    value: "SDA",
  },
  {
    label: "Bahrain",
    value: "BAH",
  },
  {
    label: "Bakersfield",
    value: "BFL",
  },
  {
    label: "Denpasar",
    value: "DPS",
  },
  {
    label: "Balmaceda",
    value: "BBA",
  },
  {
    label: "Baltimore",
    value: "BWI",
  },
  {
    label: "Baltimore, Gl. Martin",
    value: "MTN",
  },
  {
    label: "Bamako",
    value: "BKO",
  },
  {
    label: "Bandar Abbas",
    value: "BND",
  },
  {
    label: "Bandar Seri Bagawan",
    value: "BWN",
  },
  {
    label: "Bangalore",
    value: "BLR",
  },
  {
    label: "Bangkok",
    value: "BKK",
  },
  {
    label: "Bangor",
    value: "BGR",
  },
  {
    label: "Bangui",
    value: "BGF",
  },
  {
    label: "Banjul",
    value: "BJL",
  },
  {
    label: "Baotou",
    value: "BAV",
  },
  {
    label: "Barbados",
    value: "BGI",
  },
  {
    label: "Barcelona",
    value: "BCN",
  },
  {
    label: "Barcelona",
    value: "BLA",
  },
  {
    label: "Bardufoss",
    value: "BDU",
  },
  {
    label: "Bari",
    value: "BRI",
  },
  {
    label: "Barinas",
    value: "BNS",
  },
  {
    label: "Barquisimeto",
    value: "BRM",
  },
  {
    label: "Barranquilla",
    value: "BAQ",
  },
  {
    label: "Barrow",
    value: "BRW",
  },
  {
    label: "Basle",
    value: "BSL",
  },
  {
    label: "Basra",
    value: "BSR",
  },
  {
    label: "Bastia",
    value: "BIA",
  },
  {
    label: "Bastia, Biak",
    value: "BIK",
  },
  {
    label: "Baton Rouge",
    value: "BTR",
  },
  {
    label: "Battle Creek",
    value: "BTL",
  },
  {
    label: "Bay City/Saginaw",
    value: "MBS",
  },
  {
    label: "Beaumont",
    value: "BPT",
  },
  {
    label: "Beaver",
    value: "WBQ",
  },
  {
    label: "Beef Island, Tortola",
    value: "EIS",
  },
  {
    label: "Beijing",
    value: "BJS",
  },
  {
    label: "Beijing",
    value: "PEK",
  },
  {
    label: "value",
    value: "NAY",
  },
  {
    label: "Beira",
    value: "BEW",
  },
  {
    label: "Beirut",
    value: "BEY",
  },
  {
    label: "Belem",
    value: "BEL",
  },
  {
    label: "Belfast",
    value: "BFS",
  },
  {
    label: "Belfast, Belfast City",
    value: "BHD",
  },
  {
    label: "Belgrade",
    value: "BEG",
  },
  {
    label: "Belize",
    value: "BZE",
  },
  {
    label: "Belize, Municipal",
    value: "TZA",
  },
  {
    label: "Bellingham",
    value: "BLI",
  },
  {
    label: "Belo Horizonte",
    value: "BHZ",
  },
  {
    label: "Benghazi",
    value: "BEN",
  },
  {
    label: "Bergen",
    value: "BGO",
  },
  {
    label: "Berlin",
    value: "BER",
  },
  {
    label: "Berlin, Schonefeld",
    value: "SXF",
  },
  {
    label: "Berlin, Tegel",
    value: "TXL",
  },
  {
    label: "Berlin, Tempelhof",
    value: "THF",
  },
  {
    label: "Bermuda",
    value: "BDA",
  },
  {
    label: "Bern",
    value: "BRN",
  },
  {
    label: "Bethel",
    value: "BET",
  },
  {
    label: "Bettles",
    value: "BTT",
  },
  {
    label: "Biak",
    value: "BIK",
  },
  {
    label: "Biarritz",
    value: "BIQ",
  },
  {
    label: "Bilbao",
    value: "BIO",
  },
  {
    label: "Billings",
    value: "BIL",
  },
  {
    label: "Billund",
    value: "BLL",
  },
  {
    label: "Binghamton",
    value: "BGM",
  },
  {
    label: "Bintulu",
    value: "BTU",
  },
  {
    label: "Birmingham",
    value: "BHM",
  },
  {
    label: "Birmingham",
    value: "BHX",
  },
  {
    label: "Bissau",
    value: "BXO",
  },
  {
    label: "Blantyre",
    value: "BLZ",
  },
  {
    label: "Bloemfontein",
    value: "BFN",
  },
  {
    label: "Bloomington",
    value: "BMI",
  },
  {
    label: "Boa Vista",
    value: "BVB",
  },
  {
    label: "Bodo",
    value: "BOO",
  },
  {
    label: "Bogota",
    value: "BOG",
  },
  {
    label: "Boise",
    value: "BOI",
  },
  {
    label: "Bologna",
    value: "BLQ",
  },
  {
    label: "Bombay",
    value: "BOM",
  },
  {
    label: "Bonaire",
    value: "BON",
  },
  {
    label: "Bordeaux",
    value: "BOD",
  },
  {
    label: "Boston",
    value: "BOS",
  },
  {
    label: "Boulder",
    value: "WBU",
  },
  {
    label: "Bourlamaq/Val D’or",
    value: "YVO",
  },
  {
    label: "Bournemouth",
    value: "BOH",
  },
  {
    label: "Bozeman",
    value: "BZN",
  },
  {
    label: "Bradley",
    value: "BDL",
  },
  {
    label: "Brainerd",
    value: "BRD",
  },
  {
    label: "Brasilia",
    value: "BSB",
  },
  {
    label: "Bratislava",
    value: "BTS",
  },
  {
    label: "Brazzaville",
    value: "BZV",
  },
  {
    label: "Bremen",
    value: "BRE",
  },
  {
    label: "Brest",
    value: "BES",
  },
  {
    label: "Bridgeport",
    value: "BDR",
  },
  {
    label: "Brisbane",
    value: "BNE",
  },
  {
    label: "Bristol",
    value: "BRS",
  },
  {
    label: "Brownsville",
    value: "BRO",
  },
  {
    label: "Brussels",
    value: "BRU",
  },
  {
    label: "Bucaramanga",
    value: "BGA",
  },
  {
    label: "Bucharest",
    value: "BUH",
  },
  {
    label: "Bucharest, Baneasa",
    value: "BBU",
  },
  {
    label: "Bucharest, Otopeni",
    value: "OTP",
  },
  {
    label: "Budapest",
    value: "BUD",
  },
  {
    label: "Buenos Aires",
    value: "BUE",
  },
  {
    label: "Newbery",
    value: "AEP",
  },
  {
    label: "Ministro Pistarini",
    value: "EZE",
  },
  {
    label: "Bujumbura",
    value: "BJM",
  },
  {
    label: "Bulawayo",
    value: "BUQ",
  },
  {
    label: "Bundaberg, Blanding",
    value: "BDG",
  },
  {
    label: "Burbank",
    value: "BUR",
  },
  {
    label: "Burlington",
    value: "BTV",
  },
  {
    label: "Bushehr",
    value: "BUZ",
  },
  {
    label: "Butte",
    value: "BTM",
  },
  {
    label: "Cairns",
    value: "CNS",
  },
  {
    label: "Cairo",
    value: "CAI",
  },
  {
    label: "Cajamarca",
    value: "CJA",
  },
  {
    label: "Calama",
    value: "CJC",
  },
  {
    label: "Calcutta",
    value: "CCU",
  },
  {
    label: "Calgary",
    value: "YYC",
  },
  {
    label: "Cali",
    value: "CLO",
  },
  {
    label: "Calicut",
    value: "CCJ",
  },
  {
    label: "Calvi",
    value: "CLY",
  },
  {
    label: "Cambridge Bay",
    value: "YCB",
  },
  {
    label: "Campo Grande",
    value: "CGR",
  },
  {
    label: "Canaima",
    value: "CAJ",
  },
  {
    label: "Cancun",
    value: "CUN",
  },
  {
    label: "Cape Girardeau",
    value: "CGI",
  },
  {
    label: "Cape Town",
    value: "CPT",
  },
  {
    label: "Caracas",
    value: "CCS",
  },
  {
    label: "Cardiff",
    value: "CWL",
  },
  {
    label: "Carlsbad",
    value: "CNM",
  },
  {
    label: "Cartagena",
    value: "CTG",
  },
  {
    label: "Carupano",
    value: "CUP",
  },
  {
    label: "Casablanca",
    value: "AAA",
  },
  {
    label: "Casablanca, Anfa",
    value: "CAS",
  },
  {
    label: "Mohamed V",
    value: "CMN",
  },
  {
    label: "Casper",
    value: "CPR",
  },
  {
    label: "Catania",
    value: "CTA",
  },
  {
    label: "Cayenne",
    value: "CAY",
  },
  {
    label: "Cebu",
    value: "CEB",
  },
  {
    label: "Cedar City",
    value: "CDC",
  },
  {
    label: "City",
    value: "CID",
  },
  {
    label: "Chachapoyas",
    value: "CHH",
  },
  {
    label: "Chalkyits",
    value: "CIK",
  },
  {
    label: "Champaign",
    value: "CMI",
  },
  {
    label: "Changchun",
    value: "CGQ",
  },
  {
    label: "Changsha",
    value: "CSX",
  },
  {
    label: "Charleston",
    value: "CHS",
  },
  {
    label: "Charlotte",
    value: "CLT",
  },
  {
    label: "Chattanooga",
    value: "CHA",
  },
  {
    label: "Chefornak",
    value: "CYF",
  },
  {
    label: "Cheju",
    value: "CJU",
  },
  {
    label: "Chengdu",
    value: "CTU",
  },
  {
    label: "Chetumal",
    value: "CTM",
  },
  {
    label: "Chevak",
    value: "VAK",
  },
  {
    label: "Chiang Mai",
    value: "CNX",
  },
  {
    label: "Chicago",
    value: "CHI",
  },
  {
    label: "Meigs",
    value: "CGX",
  },
  {
    label: "Chicago, Midway",
    value: "MDW",
  },
  {
    label: "Chicago, O’Hare",
    value: "ORD",
  },
  {
    label: "Chichenitza",
    value: "CZA",
  },
  {
    label: "Chiclayo",
    value: "CIX",
  },
  {
    label: "Chico",
    value: "CIC",
  },
  {
    label: "Chignik",
    value: "KCL",
  },
  {
    label: "Chihuahua",
    value: "CUU",
  },
  {
    label: "Chisholm",
    value: "HIB",
  },
  {
    label: "Chittagong",
    value: "CGP",
  },
  {
    label: "Chongqing",
    value: "CKG",
  },
  {
    label: "Christchurch",
    value: "CHC",
  },
  {
    label: "Chuathbaluk",
    value: "CHU",
  },
  {
    label: "Cincinnati",
    value: "CVG",
  },
  {
    label: "Ciudad Del Carmen",
    value: "CME",
  },
  {
    label: "Cleveland",
    value: "CLE",
  },
  {
    label: "Lakefront",
    value: "BKL",
  },
  {
    label: "Cochabamba",
    value: "CBB",
  },
  {
    label: "Cochin",
    value: "COK",
  },
  {
    label: "Coeur D’Alene",
    value: "COE",
  },
  {
    label: "Cold Bay",
    value: "CDB",
  },
  {
    label: "Colima",
    value: "CLQ",
  },
  {
    label: "College Station",
    value: "CLL",
  },
  {
    label: "Cologne",
    value: "CGN",
  },
  {
    label: "Colombo",
    value: "CMB",
  },
  {
    label: "Colorado Springs",
    value: "COS",
  },
  {
    label: "Columbia",
    value: "CAE",
  },
  {
    label: "Columbia",
    value: "COU",
  },
  {
    label: "Columbus",
    value: "CMH",
  },
  {
    label: "Columbus",
    value: "CSG",
  },
  {
    label: "Columbus",
    value: "UBS",
  },
  {
    label: "Conakry",
    value: "CKY",
  },
  {
    label: "Concepcion",
    value: "CCP",
  },
  {
    label: "Copenhagen",
    value: "CPH",
  },
  {
    label: "Roskilde",
    value: "RKE",
  },
  {
    label: "Copiapo",
    value: "CPO",
  },
  {
    label: "Cordova",
    value: "CDV",
  },
  {
    label: "Cork",
    value: "ORK",
  },
  {
    label: "Corning, Elmira",
    value: "ELM",
  },
  {
    label: "Coro",
    value: "CZE",
  },
  {
    label: "Corpus Christie",
    value: "CRP",
  },
  {
    label: "Cabaniss Field",
    value: "NGW",
  },
  {
    label: "Cuddihy Field",
    value: "CUX",
  },
  {
    label: "Cotonou",
    value: "COO",
  },
  {
    label: "Coyhaique",
    value: "GXQ",
  },
  {
    label: "Cozumel",
    value: "CZM",
  },
  {
    label: "Crokked Creek",
    value: "CKD",
  },
  {
    label: "Cruzeiro Do Sul",
    value: "CZS",
  },
  {
    label: "Cuenca",
    value: "CUE",
  },
  {
    label: "Cuiaba",
    value: "CGB",
  },
  {
    label: "Culebra",
    value: "CPX",
  },
  {
    label: "Culiacan",
    value: "CUL",
  },
  {
    label: "Cumana",
    value: "CUM",
  },
  {
    label: "Curacao",
    value: "CUR",
  },
  {
    label: "Curitiba",
    value: "CWB",
  },
  {
    label: "Cusco",
    value: "CUZ",
  },
  {
    label: "Dakar",
    value: "DKR",
  },
  {
    label: "Dalaman",
    value: "DLM",
  },
  {
    label: "Dalian",
    value: "DLC",
  },
  {
    label: "Dallas, Love Field",
    value: "DAL",
  },
  {
    label: "Dallas/Ft. Worth",
    value: "DFW",
  },
  {
    label: "Damascus",
    value: "DAM",
  },
  {
    label: "Danville",
    value: "DNV",
  },
  {
    label: "Dar Es Salaam",
    value: "DAR",
  },
  {
    label: "Darwin",
    value: "DRW",
  },
  {
    label: "Davao",
    value: "DVO",
  },
  {
    label: "Dayton",
    value: "DAY",
  },
  {
    label: "Daytona Beach",
    value: "DAB",
  },
  {
    label: "Decatur",
    value: "DEC",
  },
  {
    label: "Deer Lake",
    value: "YDF",
  },
  {
    label: "Delhi",
    value: "DEL",
  },
  {
    label: "Delta",
    value: "DTA",
  },
  {
    label: "Denver",
    value: "DEN",
  },
  {
    label: "Des Moines",
    value: "DSM",
  },
  {
    label: "Detroit",
    value: "DTT",
  },
  {
    label: "Detroit",
    value: "DTW",
  },
  {
    label: "Detroit",
    value: "DTW",
  },
  {
    label: "Detroit City",
    value: "DET",
  },
  {
    label: "Detroit City",
    value: "DET",
  },
  {
    label: "Detroit, Willow Run",
    value: "YIP",
  },
  {
    label: "Detroit, Willow Run",
    value: "YIP",
  },
  {
    label: "Dhahran",
    value: "DHA",
  },
  {
    label: "Dhahran",
    value: "DHA",
  },
  {
    label: "Dhaka",
    value: "DAC",
  },
  {
    label: "Dillingham",
    value: "DLG",
  },
  {
    label: "Djerba",
    value: "DJE",
  },
  {
    label: "Djibouti",
    value: "JIB",
  },
  {
    label: "Doha",
    value: "DOH",
  },
  {
    label: "Dominica, Cane Field",
    value: "DCF",
  },
  {
    label: "Hall",
    value: "DOM",
  },
  {
    label: "Dothan",
    value: "DHN",
  },
  {
    label: "Douala",
    value: "DLA",
  },
  {
    label: "Dresden",
    value: "DRS",
  },
  {
    label: "Dubai",
    value: "DXB",
  },
  {
    label: "Dublin",
    value: "DUB",
  },
  {
    label: "Duluth",
    value: "DLH",
  },
  {
    label: "Durango\nDurango",
    value: "DGO\nDRO",
  },
  {
    label: "Durban",
    value: "DUR",
  },
  {
    label: "Dusseldorf",
    value: "DUS",
  },
  {
    label: "Dutch Harbor",
    value: "DUT",
  },
  {
    label: "East London",
    value: "ELS",
  },
  {
    label: "East Midlands",
    value: "EMA",
  },
  {
    label: "Easter Island",
    value: "IPC",
  },
  {
    label: "Edinburgh",
    value: "EDI",
  },
  {
    label: "Edmonton",
    value: "YEA",
  },
  {
    label: "Edmonton, Albert Int’l",
    value: "YEG",
  },
  {
    label: "Edmonton, Municipal",
    value: "YXD",
  },
  {
    label: "Field",
    value: "YED",
  },
  {
    label: "Eek",
    value: "EEK",
  },
  {
    label: "Eglin Afb/Valparaiso",
    value: "VPS",
  },
  {
    label: "Eindhoven",
    value: "EIN",
  },
  {
    label: "El Paso",
    value: "ELP",
  },
  {
    label: "El Salvador",
    value: "ESR",
  },
  {
    label: "Elat",
    value: "ETH",
  },
  {
    label: "Elko",
    value: "EKO",
  },
  {
    label: "Ely",
    value: "ELY",
  },
  {
    label: "Enschede",
    value: "ENS",
  },
  {
    label: "Entebbe",
    value: "EBB",
  },
  {
    label: "Ercan",
    value: "ECN",
  },
  {
    label: "Erevan",
    value: "EVN",
  },
  {
    label: "Erfurt",
    value: "ERF",
  },
  {
    label: "Erie",
    value: "ERI",
  },
  {
    label: "Eugene",
    value: "EUG",
  },
  {
    label: "Evansville",
    value: "EVV",
  },
  {
    label: "Evenes",
    value: "EVE",
  },
  {
    label: "Exeter",
    value: "EXT",
  },
  {
    label: "Fairbanks",
    value: "FAI",
  },
  {
    label: "Bedford",
    value: "EWB",
  },
  {
    label: "False Pass",
    value: "KFP",
  },
  {
    label: "Fargo",
    value: "FAR",
  },
  {
    label: "Faro",
    value: "FAO",
  },
  {
    label: "Fayetteville",
    value: "FAY",
  },
  {
    label: "Fayetteville",
    value: "FYV",
  },
  {
    label: "Fez",
    value: "FEZ",
  },
  {
    label: "Fillmore",
    value: "FIL",
  },
  {
    label: "Flagstaff",
    value: "FLG",
  },
  {
    label: "Flint",
    value: "FNT",
  },
  {
    label: "Florence",
    value: "FLR",
  },
  {
    label: "Florence",
    value: "MSL",
  },
  {
    label: "Flores",
    value: "FRS",
  },
  {
    label: "Fort Chima",
    value: "YVP",
  },
  {
    label: "Fort Myers",
    value: "FMY",
  },
  {
    label: "Fort Nelson",
    value: "YYE",
  },
  {
    label: "Fort St. John",
    value: "YXJ",
  },
  {
    label: "Fortaleza",
    value: "FOR",
  },
  {
    label: "Frankfurt",
    value: "FRA",
  },
  {
    label: "Fredericton",
    value: "YFC",
  },
  {
    label: "Freeport",
    value: "FPO",
  },
  {
    label: "Freetown",
    value: "FNA",
  },
  {
    label: "Freetown, Hastings",
    value: "HGS",
  },
  {
    label: "Fresno",
    value: "FAT",
  },
  {
    label: "Friedrichshafen",
    value: "FDH",
  },
  {
    label: "Ft de France",
    value: "FDF",
  },
  {
    label: "Ft Pierce",
    value: "FPR",
  },
  {
    label: "Ft Simpson",
    value: "YFS",
  },
  {
    label: "Ft Smith",
    value: "FSM",
  },
  {
    label: "Ft Wayne",
    value: "FWA",
  },
  {
    label: "Ft Yukon",
    value: "FYU",
  },
  {
    label: "Fukuoka",
    value: "FUK",
  },
  {
    label: "Funchal",
    value: "FNC",
  },
  {
    label: "Fuzhou",
    value: "FOC",
  },
  {
    label: "Gainesvile",
    value: "GNV",
  },
  {
    label: "Galena",
    value: "GAL",
  },
  {
    label: "Garoua",
    value: "GOU",
  },
  {
    label: "Gassim",
    value: "ELQ",
  },
  {
    label: "Gauhati",
    value: "GAU",
  },
  {
    label: "Gemena",
    value: "GMA",
  },
  {
    label: "Geneva",
    value: "GVA",
  },
  {
    label: "Genoa",
    value: "GOA",
  },
  {
    label: "Longview",
    value: "GGG",
  },
  {
    label: "Glasgow",
    value: "GLA",
  },
  {
    label: "Glasgow, Prestwick",
    value: "PIK",
  },
  {
    label: "Goma",
    value: "GOM",
  },
  {
    label: "Goodnew Bay",
    value: "GNU",
  },
  {
    label: "Goose Bay",
    value: "YYR",
  },
  {
    label: "Goroka",
    value: "GKA",
  },
  {
    label: "Gothenburg",
    value: "GOT",
  },
  {
    label: "Gran Canaria",
    value: "LPA",
  },
  {
    label: "Grand Cayman",
    value: "GCM",
  },
  {
    label: "Grand Fork",
    value: "GFK",
  },
  {
    label: "Grand Rapids",
    value: "GRR",
  },
  {
    label: "Grand Turk",
    value: "GDT",
  },
  {
    label: "Grande Prairie",
    value: "YQU",
  },
  {
    label: "Grayling",
    value: "KGX",
  },
  {
    label: "Graz",
    value: "GRZ",
  },
  {
    label: "Great Falls",
    value: "GTF",
  },
  {
    label: "Green Bay",
    value: "GRB",
  },
  {
    label: "Greensboro",
    value: "GSO",
  },
  {
    label: "Greenville",
    value: "GLH",
  },
  {
    label: "Greenville",
    value: "GSP",
  },
  {
    label: "Greenville",
    value: "PGV",
  },
  {
    label: "Grenada",
    value: "GND",
  },
  {
    label: "Grenoble",
    value: "GNB",
  },
  {
    label: "Groningen",
    value: "GRQ",
  },
  {
    label: "Guadalajara",
    value: "GDL",
  },
  {
    label: "Guam",
    value: "GUM",
  },
  {
    label: "Guangzhou",
    value: "CAN",
  },
  {
    label: "Guatemala City",
    value: "GUA",
  },
  {
    label: "Guayaquil",
    value: "GYE",
  },
  {
    label: "Guernsey",
    value: "GCI",
  },
  {
    label: "Guilin",
    value: "KWL",
  },
  {
    label: "Guiyang",
    value: "KWE",
  },
  {
    label: "Gulfport",
    value: "GPT",
  },
  {
    label: "Gunnison",
    value: "GUC",
  },
  {
    label: "Hagen",
    value: "HAG",
  },
  {
    label: "Haikou",
    value: "HAK",
  },
  {
    label: "Hail",
    value: "HAS",
  },
  {
    label: "Hakodate",
    value: "HKD",
  },
  {
    label: "Halifax",
    value: "YHZ",
  },
  {
    label: "Hall Beach",
    value: "YUX",
  },
  {
    label: "Hamburg",
    value: "HAM",
  },
  {
    label: "Hamilton",
    value: "YHM",
  },
  {
    label: "Williamsburg",
    value: "PHF",
  },
  {
    label: "Hangzhou",
    value: "HGH",
  },
  {
    label: "Hanoi",
    value: "HAN",
  },
  {
    label: "Hanover",
    value: "HAJ",
  },
  {
    label: "Harare",
    value: "HRE",
  },
  {
    label: "Harbin",
    value: "HRB",
  },
  {
    label: "Harlingen",
    value: "HRL",
  },
  {
    label: "Harrisburg",
    value: "HAR",
  },
  {
    label: "Hartford",
    value: "HFD",
  },
  {
    label: "Hartford, Barnes",
    value: "BNH",
  },
  {
    label: "Hartford, Bradford",
    value: "BDL",
  },
  {
    label: "Hat Yai",
    value: "HDY",
  },
  {
    label: "Haugesund",
    value: "HAU",
  },
  {
    label: "Havana",
    value: "HAV",
  },
  {
    label: "Hay River",
    value: "YHY",
  },
  {
    label: "Hefei",
    value: "HFE",
  },
  {
    label: "Helena",
    value: "HLN",
  },
  {
    label: "Helsingborg",
    value: "AGH",
  },
  {
    label: "Helsinki",
    value: "HEL",
  },
  {
    label: "Heraklion",
    value: "HER",
  },
  {
    label: "Hermosillo",
    value: "HMO",
  },
  {
    label: "Hilo",
    value: "ITO",
  },
  {
    label: "Hiroshima",
    value: "HIJ",
  },
  {
    label: "Ho Chi Minh City",
    value: "SGN",
  },
  {
    label: "Hohhot",
    value: "HET",
  },
  {
    label: "Holy Cross",
    value: "HCR",
  },
  {
    label: "Homer",
    value: "HOM",
  },
  {
    label: "Hong Kong",
    value: "HKG",
  },
  {
    label: "Honolulu",
    value: "HNL",
  },
  {
    label: "Hoolehua",
    value: "MKK",
  },
  {
    label: "Hooper Bay",
    value: "HPB",
  },
  {
    label: "Hoskins",
    value: "HKN",
  },
  {
    label: "Houston",
    value: "HOU",
  },
  {
    label: "Houston, Hull Field",
    value: "SGR",
  },
  {
    label: "Intercontinental",
    value: "IAH",
  },
  {
    label: "Hughes",
    value: "HUS",
  },
  {
    label: "Humberside",
    value: "HUY",
  },
  {
    label: "Huntsville",
    value: "HSV",
  },
  {
    label: "Huslia",
    value: "HSL",
  },
  {
    label: "Hyannis",
    value: "HYA",
  },
  {
    label: "Hyderabad",
    value: "HYD",
  },
  {
    label: "Iguassu Falls",
    value: "IGU",
  },
  {
    label: "Iliamna",
    value: "ILI",
  },
  {
    label: "Indianapolis",
    value: "IND",
  },
  {
    label: "Innsbruck",
    value: "INN",
  },
  {
    label: "Inuvik",
    value: "YEV",
  },
  {
    label: "Ipoh",
    value: "IPH",
  },
  {
    label: "Iqaluit",
    value: "YFB",
  },
  {
    label: "Iquique",
    value: "IQQ",
  },
  {
    label: "Iron Mountain",
    value: "IMT",
  },
  {
    label: "Isfahan",
    value: "IFN",
  },
  {
    label: "Isiro",
    value: "IRP",
  },
  {
    label: "Islamabad",
    value: "ISB",
  },
  {
    label: "Mary’s",
    value: "ISC",
  },
  {
    label: "Isles of Scil, Tresco",
    value: "TSO",
  },
  {
    label: "Macarthur",
    value: "ISP",
  },
  {
    label: "Istanbul",
    value: "IST",
  },
  {
    label: "Ithaca",
    value: "ITH",
  },
  {
    label: "Ivanoff Bay",
    value: "KIB",
  },
  {
    label: "Izmir",
    value: "IZM",
  },
  {
    label: "Menderes",
    value: "ADB",
  },
  {
    label: "Izmir, Cigli Military",
    value: "IGL",
  },
  {
    label: "Jackson",
    value: "JAC",
  },
  {
    label: "Jackson",
    value: "JAN",
  },
  {
    label: "Jacksonville",
    value: "JAX",
  },
  {
    label: "Jaipur",
    value: "JAI",
  },
  {
    label: "Jakarta",
    value: "CGK",
  },
  {
    label: "Jakarta",
    value: "JKT",
  },
  {
    label: "Perdana Kusuma",
    value: "HLP",
  },
  {
    label: "Janesville",
    value: "JVL",
  },
  {
    label: "Jeddah",
    value: "JED",
  },
  {
    label: "Jersey",
    value: "JER",
  },
  {
    label: "Jinan",
    value: "TNA",
  },
  {
    label: "Johannesburg",
    value: "JNB",
  },
  {
    label: "Johnston Island",
    value: "JON",
  },
  {
    label: "Johor Bahru",
    value: "JHB",
  },
  {
    label: "Jonkoping",
    value: "JKG",
  },
  {
    label: "Juanjui",
    value: "JJI",
  },
  {
    label: "Juba",
    value: "JUB",
  },
  {
    label: "Juliaca",
    value: "JUL",
  },
  {
    label: "Juneau",
    value: "JNU",
  },
  {
    label: "Kabul",
    value: "KBL",
  },
  {
    label: "Kaduna",
    value: "KAD",
  },
  {
    label: "Kagoshima",
    value: "KOJ",
  },
  {
    label: "Kahului",
    value: "OGG",
  },
  {
    label: "Kailua",
    value: "KOA",
  },
  {
    label: "Kalamazoo",
    value: "AZO",
  },
  {
    label: "Kalispell",
    value: "FCA",
  },
  {
    label: "Kalskag",
    value: "KLG",
  },
  {
    label: "Kaltag",
    value: "KAL",
  },
  {
    label: "Kanab",
    value: "KNB",
  },
  {
    label: "Kananga",
    value: "KGA",
  },
  {
    label: "Kano",
    value: "KAN",
  },
  {
    label: "Kansas City",
    value: "MKC",
  },
  {
    label: "International",
    value: "MCI",
  },
  {
    label: "Kaohsiung",
    value: "KHH",
  },
  {
    label: "Karachi",
    value: "KHI",
  },
  {
    label: "Karaganda",
    value: "KGF",
  },
  {
    label: "Karup",
    value: "KRP",
  },
  {
    label: "Kasigluk",
    value: "KUK",
  },
  {
    label: "Kassel",
    value: "KSF",
  },
  {
    label: "Kathmandu",
    value: "KTM",
  },
  {
    label: "Kauai Is",
    value: "LIH",
  },
  {
    label: "Kenai",
    value: "ENA",
  },
  {
    label: "Kerman",
    value: "KER",
  },
  {
    label: "Ketchikan",
    value: "KTN",
  },
  {
    label: "Khabarovsk",
    value: "KHV",
  },
  {
    label: "Kiev",
    value: "IEV",
  },
  {
    label: "Kiev, Borispol",
    value: "KBP",
  },
  {
    label: "Kigali",
    value: "KGL",
  },
  {
    label: "Kilimanjaro",
    value: "JRO",
  },
  {
    label: "Killeen",
    value: "ILE",
  },
  {
    label: "Kimberley",
    value: "KIM",
  },
  {
    label: "Kindu",
    value: "KND",
  },
  {
    label: "King Cover",
    value: "KVC",
  },
  {
    label: "King Salm",
    value: "AKN",
  },
  {
    label: "Kingston",
    value: "KIN",
  },
  {
    label: "Kingston, Tinson",
    value: "KTP",
  },
  {
    label: "Kinshasa",
    value: "FIH",
  },
  {
    label: "Kipnuk",
    value: "KPN",
  },
  {
    label: "Kiruna",
    value: "KRN",
  },
  {
    label: "Kisangani",
    value: "FKI",
  },
  {
    label: "Klagenfurt",
    value: "KLU",
  },
  {
    label: "Knoxville",
    value: "TYS",
  },
  {
    label: "Kochi",
    value: "KCZ",
  },
  {
    label: "Kodiak",
    value: "ADQ",
  },
  {
    label: "Komatsu",
    value: "KMQ",
  },
  {
    label: "Kongiganak",
    value: "KKH",
  },
  {
    label: "Koror",
    value: "ROR",
  },
  {
    label: "Kosrae",
    value: "KSA",
  },
  {
    label: "Kota Kinabalu",
    value: "BKI",
  },
  {
    label: "Kotzebue",
    value: "OTZ",
  },
  {
    label: "Koyukuk",
    value: "KYU",
  },
  {
    label: "Krasnoyarsk",
    value: "KJA",
  },
  {
    label: "Kristiansand",
    value: "KRS",
  },
  {
    label: "Kuala Lumpur",
    value: "KUL",
  },
  {
    label: "Kuching",
    value: "KCH",
  },
  {
    label: "Kumamoto",
    value: "KMJ",
  },
  {
    label: "Kunming",
    value: "KMG",
  },
  {
    label: "Kuopio",
    value: "KUO",
  },
  {
    label: "Kushiro",
    value: "KUH",
  },
  {
    label: "Kuujjuarap",
    value: "YGW",
  },
  {
    label: "Kuwait",
    value: "KWI",
  },
  {
    label: "Kwajalein",
    value: "KWA",
  },
  {
    label: "Kwangju",
    value: "KWJ",
  },
  {
    label: "Kwethluk",
    value: "KWT",
  },
  {
    label: "Kwigillingok",
    value: "KWK",
  },
  {
    label: "La Ceiba",
    value: "LCE",
  },
  {
    label: "La Crosse",
    value: "LSE",
  },
  {
    label: "La Grande",
    value: "YGL",
  },
  {
    label: "La Paz",
    value: "LPB",
  },
  {
    label: "La Paz Mex",
    value: "LAP",
  },
  {
    label: "Labuan",
    value: "LBU",
  },
  {
    label: "Lae",
    value: "LAE",
  },
  {
    label: "Lafayette",
    value: "LFT",
  },
  {
    label: "Lagos",
    value: "LOS",
  },
  {
    label: "Ana",
    value: "SNA",
  },
  {
    label: "Lahad Datu",
    value: "LDU",
  },
  {
    label: "Lahore",
    value: "LHE",
  },
  {
    label: "Lake Charles",
    value: "LCH",
  },
  {
    label: "Lanai City",
    value: "LNY",
  },
  {
    label: "Langkawi",
    value: "LGK",
  },
  {
    label: "Lansing",
    value: "LAN",
  },
  {
    label: "Lanzhou",
    value: "LHW",
  },
  {
    label: "Laredo",
    value: "LRD",
  },
  {
    label: "Larnaca",
    value: "LCA",
  },
  {
    label: "Las Piedras",
    value: "LSP",
  },
  {
    label: "Las Vegas",
    value: "LAS",
  },
  {
    label: "Terminal",
    value: "VGT",
  },
  {
    label: "Launceston",
    value: "LST",
  },
  {
    label: "Lawton",
    value: "LAW",
  },
  {
    label: "Le Havre",
    value: "LEH",
  },
  {
    label: "Leeds",
    value: "LBA",
  },
  {
    label: "Leinster",
    value: "LER",
  },
  {
    label: "Leipzig",
    value: "LEJ",
  },
  {
    label: "Lethbridge",
    value: "YQL",
  },
  {
    label: "Lhasa",
    value: "LXA",
  },
  {
    label: "Libreville",
    value: "LBV",
  },
  {
    label: "Liege",
    value: "LGG",
  },
  {
    label: "Lille",
    value: "LIL",
  },
  {
    label: "Lilongwe",
    value: "LLW",
  },
  {
    label: "Lima",
    value: "LIM",
  },
  {
    label: "Limoges",
    value: "LIG",
  },
  {
    label: "Lincoln",
    value: "LNK",
  },
  {
    label: "Linz",
    value: "LNZ",
  },
  {
    label: "Lisbon",
    value: "LIS",
  },
  {
    label: "Little Rock",
    value: "LIT",
  },
  {
    label: "Liverpool",
    value: "LPL",
  },
  {
    label: "Livingstone",
    value: "LVI",
  },
  {
    label: "Ljubljana",
    value: "LJU",
  },
  {
    label: "Lobito",
    value: "LOB",
  },
  {
    label: "Lome",
    value: "LFW",
  },
  {
    label: "London",
    value: "LON",
  },
  {
    label: "London",
    value: "YXU",
  },
  {
    label: "London, City value",
    value: "LCY",
  },
  {
    label: "London, Gatwick",
    value: "LGW",
  },
  {
    label: "London, Heathrow",
    value: "LHR",
  },
  {
    label: "London, Luton",
    value: "ETN",
  },
  {
    label: "London, Stansted",
    value: "STN",
  },
  {
    label: "Long Beach",
    value: "LGB",
  },
  {
    label: "Loreto",
    value: "LTO",
  },
  {
    label: "Los Angeles",
    value: "LAX",
  },
  {
    label: "Los Angeles",
    value: "VNY",
  },
  {
    label: "Los Mochis",
    value: "LMM",
  },
  {
    label: "Louisville",
    value: "SDF",
  },
  {
    label: "Lourdes/Tarbes",
    value: "LDE",
  },
  {
    label: "Luanda",
    value: "LAD",
  },
  {
    label: "Lubbock",
    value: "LBB",
  },
  {
    label: "Lubumbashi",
    value: "FBM",
  },
  {
    label: "Lucknow",
    value: "LKO",
  },
  {
    label: "Ludwigshafen",
    value: "LUD",
  },
  {
    label: "Lugano",
    value: "LUG",
  },
  {
    label: "Lulea",
    value: "LLA",
  },
  {
    label: "Lumid Pau",
    value: "LUB",
  },
  {
    label: "Lusaka",
    value: "LUN",
  },
  {
    label: "Luxembourg",
    value: "LUX",
  },
  {
    label: "Luxor",
    value: "LXR",
  },
  {
    label: "Lyon",
    value: "LYS",
  },
  {
    label: "Maastricht",
    value: "MST",
  },
  {
    label: "Macon",
    value: "MCN",
  },
  {
    label: "Madison",
    value: "MSN",
  },
  {
    label: "Madras",
    value: "MAA",
  },
  {
    label: "Madrid",
    value: "MAD",
  },
  {
    label: "Magadan",
    value: "GDX",
  },
  {
    label: "Mahe Island",
    value: "SEZ",
  },
  {
    label: "Maiduguri",
    value: "MIU",
  },
  {
    label: "Majuro",
    value: "MAJ",
  },
  {
    label: "Malaga",
    value: "AGP",
  },
  {
    label: "Male",
    value: "MLE",
  },
  {
    label: "Malmo",
    value: "MMA",
  },
  {
    label: "Malongo",
    value: "MAL",
  },
  {
    label: "Malta",
    value: "MLA",
  },
  {
    label: "Manado",
    value: "MDC",
  },
  {
    label: "Managua",
    value: "MGA",
  },
  {
    label: "Manaus",
    value: "MAO",
  },
  {
    label: "Manchester",
    value: "MAN",
  },
  {
    label: "Manchester",
    value: "MHT",
  },
  {
    label: "Manila",
    value: "MNL",
  },
  {
    label: "Manzanillo",
    value: "ZLO",
  },
  {
    label: "Maputo",
    value: "MPM",
  },
  {
    label: "Maracaibo",
    value: "MAR",
  },
  {
    label: "Maribor",
    value: "MBX",
  },
  {
    label: "Marietta, Parkersburg",
    value: "PKB",
  },
  {
    label: "Marion",
    value: "MWA",
  },
  {
    label: "Marquette",
    value: "MQT",
  },
  {
    label: "Marrakech",
    value: "RAK",
  },
  {
    label: "Marseille",
    value: "MRS",
  },
  {
    label: "Marshall",
    value: "MLL",
  },
  {
    label: "Martha’s Vineyard",
    value: "MVY",
  },
  {
    label: "Mashad",
    value: "MHD",
  },
  {
    label: "Matamoros",
    value: "MAM",
  },
  {
    label: "Matsuyama",
    value: "MYJ",
  },
  {
    label: "Maturin",
    value: "MUN",
  },
  {
    label: "Mauritius",
    value: "MRU",
  },
  {
    label: "Mayaguez",
    value: "MAZ",
  },
  {
    label: "Mazatlan",
    value: "MZT",
  },
  {
    label: "Mbandaka",
    value: "MDK",
  },
  {
    label: "Mbuji Mayi",
    value: "MJM",
  },
  {
    label: "Mc Allen",
    value: "MFE",
  },
  {
    label: "Mc Grath",
    value: "MCG",
  },
  {
    label: "Medan",
    value: "MES",
  },
  {
    label: "Medellin",
    value: "MDE",
  },
  {
    label: "Medford",
    value: "MFR",
  },
  {
    label: "Medina",
    value: "MED",
  },
  {
    label: "Meekatharp",
    value: "MKR",
  },
  {
    label: "Mekoryuk",
    value: "MYU",
  },
  {
    label: "Melbourne",
    value: "MEL",
  },
  {
    label: "Melbourne",
    value: "MLB",
  },
  {
    label: "Heliport",
    value: "KAH",
  },
  {
    label: "Melbourne, Essendon",
    value: "MEB",
  },
  {
    label: "Memphis",
    value: "MEM",
  },
  {
    label: "Mendoza",
    value: "MDZ",
  },
  {
    label: "Merida",
    value: "MID",
  },
  {
    label: "Merida",
    value: "MRD",
  },
  {
    label: "Meridian",
    value: "MEI",
  },
  {
    label: "Mexico City",
    value: "MEX",
  },
  {
    label: "Miami",
    value: "MIA",
  },
  {
    label: "Heliport",
    value: "JDM",
  },
  {
    label: "Base",
    value: "MPB",
  },
  {
    label: "Midland",
    value: "MAF",
  },
  {
    label: "Milan",
    value: "MIL",
  },
  {
    label: "Milan, Linate",
    value: "LIN",
  },
  {
    label: "Milan, Malpensa",
    value: "MXP",
  },
  {
    label: "Milan, Orio al Serio",
    value: "BGY",
  },
  {
    label: "Milan, Segrate",
    value: "SWK",
  },
  {
    label: "Milford",
    value: "MLF",
  },
  {
    label: "Milwaukee",
    value: "MKE",
  },
  {
    label: "Minatitlan",
    value: "MTT",
  },
  {
    label: "Mineralnye",
    value: "MRV",
  },
  {
    label: "Minneapolis",
    value: "MSP",
  },
  {
    label: "Minot",
    value: "MOT",
  },
  {
    label: "Minsk",
    value: "MSQ",
  },
  {
    label: "Miri",
    value: "MYY",
  },
  {
    label: "Missoula",
    value: "MSO",
  },
  {
    label: "Miyazaki",
    value: "KMI",
  },
  {
    label: "Mobile",
    value: "MOB",
  },
  {
    label: "Moline",
    value: "MLI",
  },
  {
    label: "Mombasa",
    value: "MBA",
  },
  {
    label: "Moncton",
    value: "YQM",
  },
  {
    label: "Monroe",
    value: "MLU",
  },
  {
    label: "Monrovia",
    value: "MLW",
  },
  {
    label: "International",
    value: "ROB",
  },
  {
    label: "Montego Bay",
    value: "MBJ",
  },
  {
    label: "Monterrey",
    value: "MTY",
  },
  {
    label: "Montevideo",
    value: "MVD",
  },
  {
    label: "Montgomery\nMontpellier",
    value: "MGM\nMPL",
  },
  {
    label: "Montreal",
    value: "YMQ",
  },
  {
    label: "International",
    value: "YUL",
  },
  {
    label: "International",
    value: "YMX",
  },
  {
    label: "Morelia",
    value: "MLM",
  },
  {
    label: "Moroni",
    value: "YVA",
  },
  {
    label: "International",
    value: "HAH",
  },
  {
    label: "Moscow",
    value: "MOW",
  },
  {
    label: "Domodedovo",
    value: "DME",
  },
  {
    label: "Sheremetyevo",
    value: "SVO",
  },
  {
    label: "Moscow, Vnukovo",
    value: "VKO",
  },
  {
    label: "Mount Hagen",
    value: "HGU",
  },
  {
    label: "Muenster",
    value: "FMO",
  },
  {
    label: "Mulhouse",
    value: "MLH",
  },
  {
    label: "Munich",
    value: "MUC",
  },
  {
    label: "Muscat",
    value: "MCT",
  },
  {
    label: "Muskegon",
    value: "MKG",
  },
  {
    label: "Myrtle Beach",
    value: "MYR",
  },
  {
    label: "N’djamena",
    value: "NDJ",
  },
  {
    label: "Nadi",
    value: "NAN",
  },
  {
    label: "Nagasaki",
    value: "NGS",
  },
  {
    label: "Nagoya",
    value: "NGO",
  },
  {
    label: "Nairobi",
    value: "NBO",
  },
  {
    label: "Nairobi",
    value: "WIL",
  },
  {
    label: "Nanchang",
    value: "KHN",
  },
  {
    label: "Nancy",
    value: "ENC",
  },
  {
    label: "Nanisivik",
    value: "YSR",
  },
  {
    label: "Nanjing",
    value: "NKG",
  },
  {
    label: "Nanning",
    value: "NNG",
  },
  {
    label: "Nantes",
    value: "NTE",
  },
  {
    label: "Nantucket",
    value: "ACK",
  },
  {
    label: "Napakiak",
    value: "WNA",
  },
  {
    label: "Napaskiak",
    value: "PKA",
  },
  {
    label: "Naples",
    value: "APF",
  },
  {
    label: "Naples",
    value: "NAP",
  },
  {
    label: "Nashville",
    value: "BNA",
  },
  {
    label: "Nassau",
    value: "NAS",
  },
  {
    label: "Natal",
    value: "NAT",
  },
  {
    label: "Neuchatel",
    value: "NEU",
  },
  {
    label: "New Bern",
    value: "EWN",
  },
  {
    label: "New Orleans",
    value: "MSY",
  },
  {
    label: "New York",
    value: "NYC",
  },
  {
    label: "Kennedy",
    value: "JFK",
  },
  {
    label: "New York, La Guardia",
    value: "LGA",
  },
  {
    label: "New York, Newark",
    value: "EWR",
  },
  {
    label: "Newburgh",
    value: "SWF",
  },
  {
    label: "Newcastle",
    value: "NCL",
  },
  {
    label: "Newtok",
    value: "WWT",
  },
  {
    label: "Niagara Falls",
    value: "IAG",
  },
  {
    label: "Niamey",
    value: "NIM",
  },
  {
    label: "Nice",
    value: "NCE",
  },
  {
    label: "Nightmute",
    value: "NME",
  },
  {
    label: "Niigata",
    value: "KIJ",
  },
  {
    label: "Nimes",
    value: "FNI",
  },
  {
    label: "Ningbo",
    value: "NGB",
  },
  {
    label: "Nis",
    value: "INI",
  },
  {
    label: "Nome",
    value: "OME",
  },
  {
    label: "Norfolk",
    value: "ORF",
  },
  {
    label: "Norilsk",
    value: "NSK",
  },
  {
    label: "Norman Wells",
    value: "YVQ",
  },
  {
    label: "Norrkoping",
    value: "NRK",
  },
  {
    label: "Norwich",
    value: "NWI",
  },
  {
    label: "Nouakchott",
    value: "NKC",
  },
  {
    label: "Noumea",
    value: "NOU",
  },
  {
    label: "Noumea, Magenta",
    value: "GEA",
  },
  {
    label: "Novosibirsk",
    value: "OVB",
  },
  {
    label: "Nuevo Laredo",
    value: "NLD",
  },
  {
    label: "Nulato",
    value: "NUL",
  },
  {
    label: "Nunapitchuk",
    value: "NUP",
  },
  {
    label: "Nuremberg",
    value: "NUE",
  },
  {
    label: "Oakland",
    value: "OAK",
  },
  {
    label: "Oaxaca",
    value: "OAX",
  },
  {
    label: "Oita",
    value: "OIT",
  },
  {
    label: "Okayama",
    value: "OKJ",
  },
  {
    label: "Okinawa",
    value: "OKA",
  },
  {
    label: "Oklahoma City",
    value: "OKC",
  },
  {
    label: "Omaha",
    value: "OMA",
  },
  {
    label: "Ontario",
    value: "ONT",
  },
  {
    label: "Oran",
    value: "ORN",
  },
  {
    label: "Orebro",
    value: "ORB",
  },
  {
    label: "Orlando",
    value: "MCO",
  },
  {
    label: "Osaka",
    value: "OSA",
  },
  {
    label: "Osaka, Itami",
    value: "ITM",
  },
  {
    label: "International",
    value: "KIX",
  },
  {
    label: "Oshkosh",
    value: "OSH",
  },
  {
    label: "Osijek",
    value: "OSI",
  },
  {
    label: "Oslo",
    value: "OSL",
  },
  {
    label: "Oslo, Fornebu value",
    value: "FBU",
  },
  {
    label: "Oslo, Gardermoen",
    value: "GEN",
  },
  {
    label: "Osorno",
    value: "ZOS",
  },
  {
    label: "Ostend",
    value: "OST",
  },
  {
    label: "Ottawa",
    value: "YOW",
  },
  {
    label: "Ouagadougou",
    value: "OUA",
  },
  {
    label: "Oxnard/Ventura",
    value: "OXR",
  },
  {
    label: "Pago Pago",
    value: "PPG",
  },
  {
    label: "Palembang",
    value: "PLM",
  },
  {
    label: "Palermo",
    value: "PMO",
  },
  {
    label: "Palm Springs",
    value: "PSP",
  },
  {
    label: "Palma de Mallorca",
    value: "PMI",
  },
  {
    label: "Panama City ( FL. )",
    value: "PFN",
  },
  {
    label: "Panama City",
    value: "PTY",
  },
  {
    label: "Panama City, Paitilla",
    value: "PAC",
  },
  {
    label: "Papeete",
    value: "PPT",
  },
  {
    label: "Paphos",
    value: "PFO",
  },
  {
    label: "Paramaribo",
    value: "PBM",
  },
  {
    label: "Hoop",
    value: "ORG",
  },
  {
    label: "Paris",
    value: "PAR",
  },
  {
    label: "Paris, Charles de Gaulle",
    value: "CDG",
  },
  {
    label: "Paris, Le Bourget",
    value: "LBG",
  },
  {
    label: "Paris, Orly",
    value: "ORY",
  },
  {
    label: "Pasco",
    value: "PSC",
  },
  {
    label: "Pau",
    value: "PUF",
  },
  {
    label: "Penang",
    value: "PEN",
  },
  {
    label: "Pensacola",
    value: "PNS",
  },
  {
    label: "Peoria",
    value: "PIA",
  },
  {
    label: "Pereira",
    value: "PEI",
  },
  {
    label: "Perpignan",
    value: "PGF",
  },
  {
    label: "Perryville",
    value: "KPV",
  },
  {
    label: "Perth",
    value: "PER",
  },
  {
    label: "Pescara",
    value: "PSR",
  },
  {
    label: "Peshawar",
    value: "PEW",
  },
  {
    label: "Petersburg",
    value: "PSG",
  },
  {
    label: "Philadelphia",
    value: "PHL",
  },
  {
    label: "Philadelphia, North",
    value: "PNE",
  },
  {
    label: "Phnom Penh",
    value: "PNH",
  },
  {
    label: "Phoenix",
    value: "PHX",
  },
  {
    label: "Municipal",
    value: "SCF",
  },
  {
    label: "Phuket",
    value: "HKT",
  },
  {
    label: "Pierre",
    value: "PIR",
  },
  {
    label: "Pisa",
    value: "PSA",
  },
  {
    label: "Pittsburgh",
    value: "PIT",
  },
  {
    label: "Piura",
    value: "PIU",
  },
  {
    label: "Platinum",
    value: "PTU",
  },
  {
    label: "Plymouth",
    value: "PYM",
  },
  {
    label: "Pocatello",
    value: "PIH",
  },
  {
    label: "Pohnpei",
    value: "PNI",
  },
  {
    label: "Point à Pitre",
    value: "PTP",
  },
  {
    label: "Pointe Noire",
    value: "PNR",
  },
  {
    label: "Ponce",
    value: "PSE",
  },
  {
    label: "Ponta Delgada",
    value: "PDL",
  },
  {
    label: "Pori",
    value: "POR",
  },
  {
    label: "Porlamar",
    value: "PMV",
  },
  {
    label: "Port au Prince",
    value: "PAP",
  },
  {
    label: "Port Elizabeth",
    value: "PLZ",
  },
  {
    label: "Port Gentil",
    value: "POG",
  },
  {
    label: "Port Graham",
    value: "PGM",
  },
  {
    label: "Port Harcourt",
    value: "PHC",
  },
  {
    label: "Port Hedland",
    value: "PHE",
  },
  {
    label: "Port Heiden",
    value: "PTH",
  },
  {
    label: "Port Moresby",
    value: "POM",
  },
  {
    label: "Port of Spain, Trinidad",
    value: "POS",
  },
  {
    label: "Port Velho",
    value: "PVH",
  },
  {
    label: "Port Vila",
    value: "VLI",
  },
  {
    label: "Portland",
    value: "PDX",
  },
  {
    label: "Portland",
    value: "PWM",
  },
  {
    label: "Porto",
    value: "OPO",
  },
  {
    label: "Porto Alegre",
    value: "POA",
  },
  {
    label: "Prague",
    value: "PRG",
  },
  {
    label: "Presque Isle",
    value: "PQI",
  },
  {
    label: "Prince George",
    value: "YXS",
  },
  {
    label: "Prince Rupert",
    value: "YPR",
  },
  {
    label: "Providence",
    value: "PVD",
  },
  {
    label: "Providenciales",
    value: "PLS",
  },
  {
    label: "Deadhorse",
    value: "SCC",
  },
  {
    label: "Pucallpa",
    value: "PCL",
  },
  {
    label: "Puebla",
    value: "PBC",
  },
  {
    label: "Puerto Ayachucho",
    value: "PYH",
  },
  {
    label: "Puerto Cabello",
    value: "PBL",
  },
  {
    label: "Puerto Escondido",
    value: "PXM",
  },
  {
    label: "Puerto Maldonado",
    value: "PEM",
  },
  {
    label: "Puerto Montt",
    value: "PMC",
  },
  {
    label: "Puerto Ordaz",
    value: "PZO",
  },
  {
    label: "Puerto Plata",
    value: "POP",
  },
  {
    label: "Puerto Vallarta",
    value: "PVR",
  },
  {
    label: "Punta Arenas",
    value: "PUQ",
  },
  {
    label: "Pusan",
    value: "PUS",
  },
  {
    label: "Pyongyang",
    value: "FNJ",
  },
  {
    label: "Qingdao",
    value: "TAO",
  },
  {
    label: "Quebec",
    value: "YQB",
  },
  {
    label: "Quetta",
    value: "UET",
  },
  {
    label: "Quinhagak",
    value: "KWN",
  },
  {
    label: "Quito",
    value: "UIO",
  },
  {
    label: "Rabat",
    value: "RBA",
  },
  {
    label: "Rabaul",
    value: "RAB",
  },
  {
    label: "Raleigh/Durham",
    value: "RDU",
  },
  {
    label: "Rangoon/Yangon",
    value: "RGN",
  },
  {
    label: "Rapid City",
    value: "RAP",
  },
  {
    label: "Rarotonga",
    value: "RAR",
  },
  {
    label: "Recife",
    value: "REC",
  },
  {
    label: "Red Devil",
    value: "RDV",
  },
  {
    label: "Redding",
    value: "RDD",
  },
  {
    label: "Regina",
    value: "YQR",
  },
  {
    label: "Reno",
    value: "RNO",
  },
  {
    label: "Resolute",
    value: "YRB",
  },
  {
    label: "Reykjavik",
    value: "REK",
  },
  {
    label: "Richmond",
    value: "RIC",
  },
  {
    label: "Riga",
    value: "RIX",
  },
  {
    label: "Riga, Skulte",
    value: "RSC",
  },
  {
    label: "Rimini",
    value: "RMI",
  },
  {
    label: "Rio de Janeiro",
    value: "RIO",
  },
  {
    label: "Internacional",
    value: "GIG",
  },
  {
    label: "Dumont",
    value: "SDU",
  },
  {
    label: "Rio Gallegos",
    value: "RGL",
  },
  {
    label: "Rioja",
    value: "RIJ",
  },
  {
    label: "Riyadh",
    value: "RUH",
  },
  {
    label: "Roanoke",
    value: "ROA",
  },
  {
    label: "Roatan",
    value: "RTB",
  },
  {
    label: "Rochester",
    value: "ROC",
  },
  {
    label: "Rochester",
    value: "RST",
  },
  {
    label: "Rockford",
    value: "RFD",
  },
  {
    label: "Rocky Mount/Wilson",
    value: "RWI",
  },
  {
    label: "Rome",
    value: "ROM",
  },
  {
    label: "Rome, Clampino",
    value: "CIA",
  },
  {
    label: "Rome, Fiumicino",
    value: "FCO",
  },
  {
    label: "Roosevelt",
    value: "ROL",
  },
  {
    label: "Roswell",
    value: "ROW",
  },
  {
    label: "Rota",
    value: "ROP",
  },
  {
    label: "Rotterdam",
    value: "RTM",
  },
  {
    label: "Rouen",
    value: "URO",
  },
  {
    label: "Ruby",
    value: "RBY",
  },
  {
    label: "Russian Mission",
    value: "RSH",
  },
  {
    label: "Saarbruecken",
    value: "SCN",
  },
  {
    label: "Sacramento",
    value: "SMF",
  },
  {
    label: "Saipan",
    value: "SPN",
  },
  {
    label: "Sal",
    value: "SID",
  },
  {
    label: "Salt Lake City",
    value: "SLC",
  },
  {
    label: "Saltillo",
    value: "SLW",
  },
  {
    label: "Salvador",
    value: "SSA",
  },
  {
    label: "Salzburg",
    value: "SZG",
  },
  {
    label: "San Andres Island",
    value: "ADZ",
  },
  {
    label: "San Angelo",
    value: "SJT",
  },
  {
    label: "San Antonio",
    value: "SAT",
  },
  {
    label: "San Antonio",
    value: "SVZ",
  },
  {
    label: "San Diego",
    value: "SAN",
  },
  {
    label: "San Francisco",
    value: "SFO",
  },
  {
    label: "Embarkadero",
    value: "EMB",
  },
  {
    label: "San Jose",
    value: "SJC",
  },
  {
    label: "San Jose",
    value: "SJO",
  },
  {
    label: "San Jose, Los Cabos",
    value: "SJD",
  },
  {
    label: "San Juan",
    value: "SJU",
  },
  {
    label: "San Juan, Isla Grande",
    value: "SIG",
  },
  {
    label: "San Luis Potosi",
    value: "SLP",
  },
  {
    label: "San Pedro Sula",
    value: "SAP",
  },
  {
    label: "San Salvador",
    value: "SAL",
  },
  {
    label: "San Tome",
    value: "SOM",
  },
  {
    label: "Sanaa",
    value: "SAH",
  },
  {
    label: "Sand Point",
    value: "SDP",
  },
  {
    label: "Sandakan",
    value: "SDK",
  },
  {
    label: "Santa Barbara",
    value: "SBA",
  },
  {
    label: "Santa Cruz",
    value: "SRZ",
  },
  {
    label: "Santa Cruz",
    value: "VVI",
  },
  {
    label: "Santa Maria",
    value: "SMX",
  },
  {
    label: "Santiago",
    value: "SCL",
  },
  {
    label: "Santiago de Compostela",
    value: "SCQ",
  },
  {
    label: "Santo Domingo",
    value: "SDQ",
  },
  {
    label: "Santo Domingo",
    value: "STD",
  },
  {
    label: "Sanya",
    value: "SYX",
  },
  {
    label: "Sao Luiz",
    value: "SLZ",
  },
  {
    label: "Sao Paulo",
    value: "SAO",
  },
  {
    label: "Sao Paulo, Congonhas",
    value: "CGH",
  },
  {
    label: "Sao Paulo, Guarulhos",
    value: "GRU",
  },
  {
    label: "Sao Paulo, Viracopos",
    value: "VCP",
  },
  {
    label: "Sao Tome Island",
    value: "TMS",
  },
  {
    label: "Sapporo",
    value: "SPK",
  },
  {
    label: "Sapporo, Chitose",
    value: "CTS",
  },
  {
    label: "Sapporo, Okadama",
    value: "OKD",
  },
  {
    label: "Sarasota/ Bradenton",
    value: "SRQ",
  },
  {
    label: "Sault Ste. Marie",
    value: "YAM",
  },
  {
    label: "Savannah",
    value: "SAV",
  },
  {
    label: "Scammon Bay",
    value: "SCM",
  },
  {
    label: "Scranton, Wilkes-Barre",
    value: "AVP",
  },
  {
    label: "Seattle",
    value: "SEA",
  },
  {
    label: "Sedona",
    value: "SDX",
  },
  {
    label: "Seldovia",
    value: "SOV",
  },
  {
    label: "Sendai",
    value: "SDJ",
  },
  {
    label: "Seoul",
    value: "SEL",
  },
  {
    label: "Sepulot",
    value: "SPE",
  },
  {
    label: "Seward",
    value: "SWD",
  },
  {
    label: "Seville",
    value: "SVQ",
  },
  {
    label: "Shageluk",
    value: "SHX",
  },
  {
    label: "Shanghai",
    value: "SHA",
  },
  {
    label: "Shannon",
    value: "SNN",
  },
  {
    label: "Shantou/Swatow",
    value: "SWA",
  },
  {
    label: "Sharjah",
    value: "SHJ",
  },
  {
    label: "Shemya Islands",
    value: "SYA",
  },
  {
    label: "Shenyang",
    value: "SHE",
  },
  {
    label: "Shenzhen",
    value: "SZX",
  },
  {
    label: "Lerwick / Tingwall",
    value: "LWK",
  },
  {
    label: "Scatsta",
    value: "SCS",
  },
  {
    label: "Sumuburgh",
    value: "LSI",
  },
  {
    label: "Shijiazhuang",
    value: "SJW",
  },
  {
    label: "Shiraz",
    value: "SYZ",
  },
  {
    label: "Shreveport",
    value: "SHV",
  },
  {
    label: "Sibu",
    value: "SBW",
  },
  {
    label: "Simferopol",
    value: "SIP",
  },
  {
    label: "Singapore",
    value: "SIN",
  },
  {
    label: "Singapore, Paya Lebar",
    value: "QPG",
  },
  {
    label: "Singapore, Seletar",
    value: "XSP",
  },
  {
    label: "Sioux Falls",
    value: "FSD",
  },
  {
    label: "Sitka",
    value: "SIT",
  },
  {
    label: "Sleetmute",
    value: "SLQ",
  },
  {
    label: "Sofia",
    value: "SOF",
  },
  {
    label: "Sokoto",
    value: "SKO",
  },
  {
    label: "Soldotna",
    value: "SXW",
  },
  {
    label: "Sonderborg",
    value: "SGD",
  },
  {
    label: "Sondre Stromfjord",
    value: "SFJ",
  },
  {
    label: "South Bend",
    value: "SBN",
  },
  {
    label: "Springfield",
    value: "SGF",
  },
  {
    label: "Springfield",
    value: "SPI",
  },
  {
    label: "St. Denis de La Reunion",
    value: "RUN",
  },
  {
    label: "St. George",
    value: "SGU",
  },
  {
    label: "St. George Island",
    value: "STG",
  },
  {
    label: "St. Johns",
    value: "YYT",
  },
  {
    label: "St. Kitts",
    value: "SKB",
  },
  {
    label: "St. Louis",
    value: "STL",
  },
  {
    label: "St. Lucia",
    value: "SLU",
  },
  {
    label: "St. Lucia, Hewanorra",
    value: "UVF",
  },
  {
    label: "St. Maarten",
    value: "SXM",
  },
  {
    label: "St. Mary’s",
    value: "KSM",
  },
  {
    label: "St. Petersburg",
    value: "LED",
  },
  {
    label: "St. Thomas",
    value: "STT",
  },
  {
    label: "St. Vincent",
    value: "SVD",
  },
  {
    label: "Sta Cruz Huat",
    value: "HUX",
  },
  {
    label: "Stavanger",
    value: "SVG",
  },
  {
    label: "Steamboat Spring",
    value: "SBS",
  },
  {
    label: "Stevens Village",
    value: "SVS",
  },
  {
    label: "Stockholm",
    value: "STO",
  },
  {
    label: "Stockholm, Arlanda",
    value: "ARN",
  },
  {
    label: "Stockholm, Bromma",
    value: "BMA",
  },
  {
    label: "Stockton",
    value: "SCK",
  },
  {
    label: "Stony River",
    value: "SRV",
  },
  {
    label: "Strasbourg",
    value: "SXB",
  },
  {
    label: "Stuttgart",
    value: "STR",
  },
  {
    label: "Sudbury",
    value: "YSB",
  },
  {
    label: "Sukhumi",
    value: "SUI",
  },
  {
    label: "Sundsvall",
    value: "SDL",
  },
  {
    label: "Surabaya",
    value: "SUB",
  },
  {
    label: "Suva",
    value: "SUV",
  },
  {
    label: "Sverdlovsk, Ekaterinburg",
    value: "SVX",
  },
  {
    label: "Sydney",
    value: "SYD",
  },
  {
    label: "Syracuse",
    value: "SYR",
  },
  {
    label: "Tabriz",
    value: "TBZ",
  },
  {
    label: "Tabuk",
    value: "TUU",
  },
  {
    label: "Tacna",
    value: "TCQ",
  },
  {
    label: "Taegu, Korea",
    value: "TAE",
  },
  {
    label: "Taichung",
    value: "TXG",
  },
  {
    label: "Taif",
    value: "TIF",
  },
  {
    label: "Taipei",
    value: "TPE",
  },
  {
    label: "Taipei, Shung Shan",
    value: "TSA",
  },
  {
    label: "Taiyuan",
    value: "TYN",
  },
  {
    label: "Takamatsu",
    value: "TAK",
  },
  {
    label: "Talara",
    value: "TYL",
  },
  {
    label: "Tallahassee",
    value: "TLH",
  },
  {
    label: "Tallinn",
    value: "TLL",
  },
  {
    label: "Tamanrasset",
    value: "TMR",
  },
  {
    label: "Tampa",
    value: "TPA",
  },
  {
    label: "Tampere",
    value: "TMP",
  },
  {
    label: "Tanana",
    value: "TAL",
  },
  {
    label: "Tangier",
    value: "TNG",
  },
  {
    label: "Tarapoto",
    value: "TPP",
  },
  {
    label: "Tashkent",
    value: "TAS",
  },
  {
    label: "Tawau",
    value: "TWU",
  },
  {
    label: "Teesside",
    value: "MME",
  },
  {
    label: "Tegucigalpa",
    value: "TGU",
  },
  {
    label: "Tehran",
    value: "THR",
  },
  {
    label: "Tel Aviv Yafo, Sde Dov",
    value: "SDV",
  },
  {
    label: "Tel Aviv Yafo, Tel Aviv",
    value: "TLV",
  },
  {
    label: "Temuco",
    value: "ZCO",
  },
  {
    label: "Tenerife",
    value: "TCI",
  },
  {
    label: "Rodeos",
    value: "TFN",
  },
  {
    label: "Sofia",
    value: "TFS",
  },
  {
    label: "Terceira",
    value: "TER",
  },
  {
    label: "Terrace",
    value: "YXT",
  },
  {
    label: "Texarkana",
    value: "TXK",
  },
  {
    label: "Thessaloniki",
    value: "SKG",
  },
  {
    label: "Thunder Bay",
    value: "YQT",
  },
  {
    label: "Tianjin",
    value: "TSN",
  },
  {
    label: "Tijuana",
    value: "TIJ",
  },
  {
    label: "Timisoara",
    value: "TSR",
  },
  {
    label: "Tingo Maria",
    value: "TGI",
  },
  {
    label: "Tobago",
    value: "TAB",
  },
  {
    label: "Toksook Bay",
    value: "OOK",
  },
  {
    label: "Tokushima",
    value: "TKS",
  },
  {
    label: "Tokyo",
    value: "TYO",
  },
  {
    label: "Tokyo, Haneda",
    value: "HND",
  },
  {
    label: "Tokyo, Narita value",
    value: "NRT",
  },
  {
    label: "Toledo",
    value: "TOL",
  },
  {
    label: "Tongatapu",
    value: "TBU",
  },
  {
    label: "Topeka",
    value: "TOP",
  },
  {
    label: "Toronto",
    value: "YTO",
  },
  {
    label: "Toronto",
    value: "YYZ",
  },
  {
    label: "Toronto Island",
    value: "YTZ",
  },
  {
    label: "Torreon",
    value: "TRC",
  },
  {
    label: "Tottori",
    value: "TTJ",
  },
  {
    label: "Toulon/Hyeres",
    value: "TLN",
  },
  {
    label: "Toulouse",
    value: "TLS",
  },
  {
    label: "Toyama",
    value: "TOY",
  },
  {
    label: "Traverse City",
    value: "TVC",
  },
  {
    label: "Trenton",
    value: "TTN",
  },
  {
    label: "Tri-City",
    value: "TRI",
  },
  {
    label: "Trieste",
    value: "TRS",
  },
  {
    label: "Tripoli",
    value: "TIP",
  },
  {
    label: "Trivandrum",
    value: "TRV",
  },
  {
    label: "Trombetas",
    value: "TMT",
  },
  {
    label: "Tromso",
    value: "TOS",
  },
  {
    label: "Trondheim",
    value: "TRD",
  },
  {
    label: "Trujillo",
    value: "TRU",
  },
  {
    label: "Truk",
    value: "TKK",
  },
  {
    label: "Tucson",
    value: "TUS",
  },
  {
    label: "Tulsa",
    value: "TUL",
  },
  {
    label: "Tuluksak",
    value: "TLT",
  },
  {
    label: "Tumbes",
    value: "TBP",
  },
  {
    label: "Tunis",
    value: "TUN",
  },
  {
    label: "Tuntutulia",
    value: "WTL",
  },
  {
    label: "Tununak",
    value: "TNK",
  },
  {
    label: "Turin",
    value: "TRN",
  },
  {
    label: "Turku",
    value: "TKU",
  },
  {
    label: "Tuscaloosa",
    value: "TCL",
  },
  {
    label: "Tuxtla Gutierrez",
    value: "TGZ",
  },
  {
    label: "Twin Falls",
    value: "TWF",
  },
  {
    label: "Tyler",
    value: "TYR",
  },
  {
    label: "Ube\nUkiah",
    value: "UBJ\nUKI",
  },
  {
    label: "Ulan Bator",
    value: "ULN",
  },
  {
    label: "Umea",
    value: "UME",
  },
  {
    label: "Unalakleet",
    value: "UNK",
  },
  {
    label: "Urumqi",
    value: "URC",
  },
  {
    label: "Vaasa",
    value: "VAA",
  },
  {
    label: "Wabush",
    value: "YWK",
  },
  {
    label: "Waco",
    value: "ACT",
  },
  {
    label: "Valdosta",
    value: "VLD",
  },
  {
    label: "Valencia",
    value: "VLC",
  },
  {
    label: "Valencia",
    value: "VLN",
  },
  {
    label: "Valera",
    value: "VLV",
  },
  {
    label: "Valladolid",
    value: "VLL",
  },
  {
    label: "Vancouver",
    value: "YVR",
  },
  {
    label: "Warsaw",
    value: "WAW",
  },
  {
    label: "Washington",
    value: "WAS",
  },
  {
    label: "International",
    value: "IAD",
  },
  {
    label: "Washington, National",
    value: "DCA",
  },
  {
    label: "Vasteras",
    value: "VST",
  },
  {
    label: "Watson Lake",
    value: "YQH",
  },
  {
    label: "Wausau",
    value: "AUW",
  },
  {
    label: "Vaxjo",
    value: "VXO",
  },
  {
    label: "Wellington",
    value: "WLG",
  },
  {
    label: "Wenatchee",
    value: "EAT",
  },
  {
    label: "Venetie",
    value: "VEE",
  },
  {
    label: "Venice",
    value: "VCE",
  },
  {
    label: "Venice, Treviso",
    value: "TSF",
  },
  {
    label: "Veracruz",
    value: "VER",
  },
  {
    label: "Vernal",
    value: "VEL",
  },
  {
    label: "Verona",
    value: "VRN",
  },
  {
    label: "West Palm Beach",
    value: "PBI",
  },
  {
    label: "Westchester",
    value: "HPN",
  },
  {
    label: "White River",
    value: "LEB",
  },
  {
    label: "Whitehorse",
    value: "YXY",
  },
  {
    label: "Wichita",
    value: "ICT",
  },
  {
    label: "Wichita Falls",
    value: "SPS",
  },
  {
    label: "Victoria",
    value: "YYJ",
  },
  {
    label: "Vienna",
    value: "VIE",
  },
  {
    label: "Vientiane",
    value: "VTE",
  },
  {
    label: "Vieques",
    value: "VQS",
  },
  {
    label: "Villahermosa",
    value: "VSA",
  },
  {
    label: "Wilmington",
    value: "ILM",
  },
  {
    label: "Vilnius",
    value: "VNO",
  },
  {
    label: "Windhoek",
    value: "WDH",
  },
  {
    label: "Windhoek, Eros",
    value: "ERS",
  },
  {
    label: "Windsor",
    value: "YQG",
  },
  {
    label: "Winnipeg",
    value: "YWG",
  },
  {
    label: "Vitoria",
    value: "VIT",
  },
  {
    label: "Vladivostok",
    value: "VVO",
  },
  {
    label: "Wrangell",
    value: "WRG",
  },
  {
    label: "Wuhan",
    value: "WUH",
  },
  {
    label: "Xiamen",
    value: "XMN",
  },
  {
    label: "Xian",
    value: "SIA",
  },
  {
    label: "Yakima",
    value: "YKM",
  },
  {
    label: "Yakutat",
    value: "YAK",
  },
  {
    label: "Yamagata",
    value: "GAJ",
  },
  {
    label: "Yantai",
    value: "YNT",
  },
  {
    label: "Yap Caroline Island",
    value: "YAP",
  },
  {
    label: "Yellowknife",
    value: "YZF",
  },
  {
    label: "Yinchuang",
    value: "INC",
  },
  {
    label: "Yurimaguas",
    value: "YMS",
  },
  {
    label: "Yuzhno-Sakhalinsk",
    value: "UUS",
  },
  {
    label: "Zacatecas",
    value: "ZCL",
  },
  {
    label: "Zagreb",
    value: "ZAG",
  },
  {
    label: "Zahedan",
    value: "ZAH",
  },
  {
    label: "Zanzibar",
    value: "ZNZ",
  },
  {
    label: "Zaragoza",
    value: "ZAZ",
  },
  {
    label: "Zhanjiang",
    value: "ZHA",
  },
  {
    label: "Zhengzhou",
    value: "CGO",
  },
  {
    label: "Zihuatanejo",
    value: "ZIH",
  },
  {
    label: "Zurich",
    value: "ZRH",
  },
];

export default iatalocations;
