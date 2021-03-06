var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    null;
  }
};

function init() {

var json = {
	id: "root",
	name: "root",
	data: {},
	children: [
		{
		id: "-1035772007",
		name: "Family - Drepanidae",
		data: {},
		children: [
			{
			id: "372380948",
			name: "Subfamily - Thyatirinae",
			data: {},
			children: [
				{
				id: "69467802",
				name: "Habrosyne",
				data: {},
				children: [
					{
					id: "859389228",
					name: "Habrosyne scripta",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1522698696",
				name: "Pseudothyatira",
				data: {},
				children: [
					{
					id: "-1594863482",
					name: "Pseudothyatira cymatophoroides",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "543152812",
				name: "Euthyatira",
				data: {},
				children: [
					{
					id: "-1395739402",
					name: "Euthyatira lorata",
					data: {},
					children:[],
					},
					{
					id: "-608636570",
					name: "Euthyatira pudens",
					data: {},
					children:[],
					},
					{
					id: "-1124428162",
					name: "Euthyatira semicircularis",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-89857025",
				name: "Ceranemota",
				data: {},
				children: [
					{
					id: "876183308",
					name: "Ceranemota crumbi",
					data: {},
					children:[],
					},
					{
					id: "-122909926",
					name: "Ceranemota fasciata",
					data: {},
					children:[],
					},
					{
					id: "-1229341335",
					name: "Ceranemota improvisa",
					data: {},
					children:[],
					},
					{
					id: "-1045721531",
					name: "Ceranemota tearlei",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "104304704",
			name: "Subfamily - Drepaninae",
			data: {},
			children: [
				{
				id: "-1934342350",
				name: "Drepana",
				data: {},
				children: [
					{
					id: "1248241833",
					name: "Drepana arcuata",
					data: {},
					children:[],
					},
					{
					id: "-1231622261",
					name: "Drepana bilineata",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-846315915",
				name: "Eudeilinia",
				data: {},
				children: [
					{
					id: "1427951376",
					name: "Eudeilinia herminiata",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "1355860080",
				name: "Oreta",
				data: {},
				children: [
					{
					id: "651003268",
					name: "Oreta rosea",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			]
		},
		{
		id: "-272938405",
		name: "Family - Uraniidae",
		data: {},
		children: [
			{
			id: "-133787251",
			name: "Subfamily - Epipleminae",
			data: {},
			children: [
				{
				id: "-972533090",
				name: "Callizzia",
				data: {},
				children: [
					{
					id: "199354993",
					name: "Callizzia amorata",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			]
		},
		{
		id: "-881966951",
		name: "Family - Lasiocampidae",
		data: {},
		children: [
			{
			id: "-721941016",
			name: "Subfamily - Macromphaliinae",
			data: {},
			children: [
				{
				id: "1101166661",
				name: "Tolype",
				data: {},
				children: [
					{
					id: "1756762782",
					name: "Tolype distincta",
					data: {},
					children:[],
					},
					{
					id: "739753192",
					name: "Tolype laricis",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "612147610",
			name: "Subfamily - Lasiocampinae",
			data: {},
			children: [
				{
				id: "-1779928879",
				name: "Phyllodesma",
				data: {},
				children: [
					{
					id: "-1171825568",
					name: "Phyllodesma americana",
					data: {},
					children:[],
					},
					{
					id: "84890178",
					name: "Phyllodesma coturnix",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "1266337571",
				name: "Malacosoma",
				data: {},
				children: [
					{
					id: "-444042162",
					name: "Malacosoma californicum",
					data: {},
					children:[],
					},
					{
					id: "-1702828410",
					name: "Malacosoma constrictum",
					data: {},
					children:[],
					},
					{
					id: "-1179230181",
					name: "Malacosoma disstria",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			]
		},
		{
		id: "-279828422",
		name: "Family - Saturniidae",
		data: {},
		children: [
			{
			id: "-483013900",
			name: "Subfamily - Hemileucinae",
			data: {},
			children: [
				{
				id: "1792565618",
				name: "Hemileuca",
				data: {},
				children: [
					{
					id: "-1740028262",
					name: "Hemileuca eglanterina",
					data: {},
					children:[],
					},
					{
					id: "-421385627",
					name: "Hemileuca hera",
					data: {},
					children:[],
					},
					{
					id: "-302355875",
					name: "Hemileuca juno",
					data: {},
					children:[],
					},
					{
					id: "-1329237359",
					name: "Hemileuca nevadensis",
					data: {},
					children:[],
					},
					{
					id: "-452910578",
					name: "Hemileuca nuttalli",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-469748887",
				name: "Coloradia",
				data: {},
				children: [
					{
					id: "-1129774112",
					name: "Coloradia pandora",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-263507739",
			name: "Subfamily - Saturniinae",
			data: {},
			children: [
				{
				id: "683311082",
				name: "Antheraea",
				data: {},
				children: [
					{
					id: "2013234069",
					name: "Antheraea polyphemus",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "1725821609",
				name: "Hyalophora",
				data: {},
				children: [
					{
					id: "2131211100",
					name: "Hyalophora euryalus",
					data: {},
					children:[],
					},
					{
					id: "1867122694",
					name: "Hyalophora columbia",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-773382477",
				name: "Saturnia",
				data: {},
				children: [
					{
					id: "427617375",
					name: "Saturnia mendocino",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			]
		},
		{
		id: "706518984",
		name: "Family - Sphingidae",
		data: {},
		children: [
			{
			id: "-2026651891",
			name: "Subfamily - Sphinginae",
			data: {},
			children: [
				{
				id: "-594266270",
				name: "Manduca",
				data: {},
				children: [
					{
					id: "1826695130",
					name: "Manduca quinquemaculata",
					data: {},
					children:[],
					},
					{
					id: "971313245",
					name: "Manduca sexta",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-177246982",
				name: "Ceratomia",
				data: {},
				children: [
					{
					id: "-1069233732",
					name: "Ceratomia amyntor",
					data: {},
					children:[],
					},
					{
					id: "669726472",
					name: "Ceratomia undulosa",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-775254204",
				name: "Sphinx",
				data: {},
				children: [
					{
					id: "1937250939",
					name: "Sphinx chersis",
					data: {},
					children:[],
					},
					{
					id: "-272513618",
					name: "Sphinx dollii",
					data: {},
					children:[],
					},
					{
					id: "-1179947345",
					name: "Sphinx drupiferarum",
					data: {},
					children:[],
					},
					{
					id: "2049145725",
					name: "Sphinx perelegans",
					data: {},
					children:[],
					},
					{
					id: "883765393",
					name: "Sphinx poecila",
					data: {},
					children:[],
					},
					{
					id: "-709038671",
					name: "Sphinx sequoiae",
					data: {},
					children:[],
					},
					{
					id: "-605777636",
					name: "Sphinx vashti",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1168449999",
				name: "Agrius",
				data: {},
				children: [
					{
					id: "483568897",
					name: "Agrius cingulata",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "834436214",
			name: "Subfamily - Smerinthinae",
			data: {},
			children: [
				{
				id: "473584906",
				name: "Smerinthus",
				data: {},
				children: [
					{
					id: "-1266063274",
					name: "Smerinthus cerisyi",
					data: {},
					children:[],
					},
					{
					id: "-1614851875",
					name: "Smerinthus jamaicensis",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-444155096",
				name: "Paonias",
				data: {},
				children: [
					{
					id: "1660015635",
					name: "Paonias excaecatus",
					data: {},
					children:[],
					},
					{
					id: "-1986853724",
					name: "Paonias myops",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-492235948",
				name: "Pachysphinx",
				data: {},
				children: [
					{
					id: "-988878363",
					name: "Pachysphinx modesta",
					data: {},
					children:[],
					},
					{
					id: "-832854305",
					name: "Pachysphinx occidentalis",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "2032946926",
			name: "Subfamily - Macroglossinae",
			data: {},
			children: [
				{
				id: "-925709880",
				name: "Hemaris",
				data: {},
				children: [
					{
					id: "-1733023780",
					name: "Hemaris thetis",
					data: {},
					children:[],
					},
					{
					id: "-1317911420",
					name: "Hemaris thysbe",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1416073615",
				name: "Proserpinus",
				data: {},
				children: [
					{
					id: "-1846423620",
					name: "Proserpinus clarkiae",
					data: {},
					children:[],
					},
					{
					id: "674921838",
					name: "Proserpinus lucidus",
					data: {},
					children:[],
					},
					{
					id: "853670575",
					name: "Proserpinus flavofasciata",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1686150627",
				name: "Euproserpinus",
				data: {},
				children: [
					{
					id: "-1266511199",
					name: "Euproserpinus wiesti",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-2018793183",
				name: "Darapsa",
				data: {},
				children: [
					{
					id: "264135537",
					name: "Darapsa choerilus",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1741395922",
				name: "Hyles",
				data: {},
				children: [
					{
					id: "2055273493",
					name: "Hyles euphorbiae",
					data: {},
					children:[],
					},
					{
					id: "1182976175",
					name: "Hyles gallii",
					data: {},
					children:[],
					},
					{
					id: "2066593800",
					name: "Hyles lineata",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "856647175",
				name: "Deilephila",
				data: {},
				children: [
					{
					id: "1923906960",
					name: "Deilephila elpenor",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1550589737",
				name: "Erinnyis",
				data: {},
				children: [
					{
					id: "728588420",
					name: "Erinnyis ello",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-111429183",
				name: "Eumorpha",
				data: {},
				children: [
					{
					id: "-1764642984",
					name: "Eumorpha achemon",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			]
		},
		{
		id: "1144739916",
		name: "Family - Notodontidae",
		data: {},
		children: [
			{
			id: "-1704004196",
			name: "Subfamily - Pygaerinae",
			data: {},
			children: [
				{
				id: "206386581",
				name: "Clostera",
				data: {},
				children: [
					{
					id: "352497632",
					name: "Clostera albosigma",
					data: {},
					children:[],
					},
					{
					id: "-209422838",
					name: "Clostera apicalis",
					data: {},
					children:[],
					},
					{
					id: "1912423042",
					name: "Clostera brucei",
					data: {},
					children:[],
					},
					{
					id: "1905406950",
					name: "Clostera strigosa",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-1145518339",
			name: "Subfamily - Notodontinae",
			data: {},
			children: [
				{
				id: "1266367998",
				name: "Pheosia",
				data: {},
				children: [
					{
					id: "2023605566",
					name: "Pheosia rimosa",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "1667204059",
				name: "Odontosia",
				data: {},
				children: [
					{
					id: "2086403510",
					name: "Odontosia elegans",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "658168957",
				name: "Notodonta",
				data: {},
				children: [
					{
					id: "1108329292",
					name: "Notodonta pacifica",
					data: {},
					children:[],
					},
					{
					id: "1082231038",
					name: "Notodonta scitipennis",
					data: {},
					children:[],
					},
					{
					id: "947462095",
					name: "Notodonta torva",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-699241835",
				name: "Gluphisia",
				data: {},
				children: [
					{
					id: "1859914402",
					name: "Gluphisia avimacula",
					data: {},
					children:[],
					},
					{
					id: "1656099964",
					name: "Gluphisia septentrionis",
					data: {},
					children:[],
					},
					{
					id: "-749076948",
					name: "Gluphisia severa",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-2095773667",
				name: "Furcula",
				data: {},
				children: [
					{
					id: "614962112",
					name: "Furcula cinerea",
					data: {},
					children:[],
					},
					{
					id: "704579032",
					name: "Furcula modesta",
					data: {},
					children:[],
					},
					{
					id: "-81923316",
					name: "Furcula occidentalis",
					data: {},
					children:[],
					},
					{
					id: "1242855174",
					name: "Furcula scolopendrina",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "883891718",
			name: "Subfamily - Phalerinae",
			data: {},
			children: [
				{
				id: "1217789109",
				name: "Datana",
				data: {},
				children: [
					{
					id: "1155367525",
					name: "Datana ministra",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-21140451",
				name: "Nadata",
				data: {},
				children: [
					{
					id: "-1291813338",
					name: "Nadata gibbosa",
					data: {},
					children:[],
					},
					{
					id: "-898161711",
					name: "Nadata oregonensis",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "2058173934",
			name: "Subfamily - Heterocampinae",
			data: {},
			children: [
				{
				id: "-1911210880",
				name: "Heterocampa",
				data: {},
				children: [
					{
					id: "1125794676",
					name: "Heterocampa lunata",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-103878493",
				name: "Schizura",
				data: {},
				children: [
					{
					id: "-378746915",
					name: "Schizura concinna",
					data: {},
					children:[],
					},
					{
					id: "-1132859111",
					name: "Schizura conspecta",
					data: {},
					children:[],
					},
					{
					id: "-1092452985",
					name: "Schizura ipomaeae",
					data: {},
					children:[],
					},
					{
					id: "1478210045",
					name: "Schizura unicornis",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "1588533574",
				name: "Oligocentria",
				data: {},
				children: [
					{
					id: "-1368080355",
					name: "Oligocentria pallida",
					data: {},
					children:[],
					},
					{
					id: "1864951272",
					name: "Oligocentria semirufescens",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "1171069585",
			name: "Subfamily - Dioptinae",
			data: {},
			children: [
				{
				id: "-84746131",
				name: "Phryganidia",
				data: {},
				children: [
					{
					id: "220965460",
					name: "Phryganidia californica",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			]
		},
		{
		id: "-1884343957",
		name: "Family - Erebidae",
		data: {},
		children: [
			{
			id: "-1012757008",
			name: "Subfamily - Lymantriinae",
			data: {},
			children: [
				{
				id: "-2043519810",
				name: "Tribe - Lymantriini",
				data: {},
				children: [
					{
					id: "1349176730",
					name: "Lymantria",
					data: {},
					children: [
						{
						id: "191003472",
						name: "Lymantria dispar",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "683528141",
				name: "Tribe - Orgyiini",
				data: {},
				children: [
					{
					id: "-1176769418",
					name: "Gynaephora",
					data: {},
					children: [
						{
						id: "-1463054420",
						name: "Gynaephora rossi",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "541170455",
					name: "Dasychira",
					data: {},
					children: [
						{
						id: "755116161",
						name: "Dasychira grisefacta",
						data: {},
						children:[],
						},
						{
						id: "-662677513",
						name: "Dasychira plagiata",
						data: {},
						children:[],
						},
						{
						id: "886555632",
						name: "Dasychira vagans",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-797154845",
					name: "Orgyia",
					data: {},
					children: [
						{
						id: "1869327764",
						name: "Orgyia antiqua",
						data: {},
						children:[],
						},
						{
						id: "1375076103",
						name: "Orgyia cana",
						data: {},
						children:[],
						},
						{
						id: "1921900090",
						name: "Orgyia pseudotsugata",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "1238941341",
				name: "Tribe - Leucomini",
				data: {},
				children: [
					{
					id: "-565153699",
					name: "Leucoma",
					data: {},
					children: [
						{
						id: "-329241115",
						name: "Leucoma salicis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1690888949",
					name: "Euproctis",
					data: {},
					children: [
						{
						id: "1676834517",
						name: "Euproctis similis",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				]
			},
			{
			id: "-9837156",
			name: "Subfamily - Arctiinae",
			data: {},
			children: [
				{
				id: "-1654197733",
				name: "Tribe - Lithosiini",
				data: {},
				children: [
					{
					id: "-2051330609",
					name: "Cisthene",
					data: {},
					children: [
						{
						id: "-1658185135",
						name: "Cisthene barnesii",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "483028627",
					name: "Hypoprepia",
					data: {},
					children: [
						{
						id: "1904247881",
						name: "Hypoprepia inculta",
						data: {},
						children:[],
						},
						{
						id: "1330568608",
						name: "Hypoprepia miniata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "998450540",
					name: "Bruceia",
					data: {},
					children: [
						{
						id: "-4321786",
						name: "Bruceia pulverina",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "891064626",
					name: "Clemensia",
					data: {},
					children: [
						{
						id: "569731680",
						name: "Clemensia albata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1784976407",
					name: "Eilema",
					data: {},
					children: [
						{
						id: "549023819",
						name: "Eilema bicolor",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-814477607",
					name: "Crambidia",
					data: {},
					children: [
						{
						id: "943585313",
						name: "Crambidia casta",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "134555870",
				name: "Tribe - Arctiini",
				data: {},
				children: [
					{
					id: "-197441344",
					name: "Holoarctia",
					data: {},
					children: [
						{
						id: "-1259458412",
						name: "Holoarctia sordida",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1769531113",
					name: "Neoarctia",
					data: {},
					children: [
						{
						id: "1965606264",
						name: "Neoarctia beanii",
						data: {},
						children:[],
						},
						{
						id: "-648271778",
						name: "Neoarctia brucei",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1718900634",
					name: "Holarctia",
					data: {},
					children: [
						{
						id: "-175431432",
						name: "Holarctia obliterata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-8454017",
					name: "Grammia",
					data: {},
					children: [
						{
						id: "-821377327",
						name: "Grammia behrii",
						data: {},
						children:[],
						},
						{
						id: "951932250",
						name: "Grammia blakei",
						data: {},
						children:[],
						},
						{
						id: "-1581644281",
						name: "Grammia complicata",
						data: {},
						children:[],
						},
						{
						id: "-147945154",
						name: "Grammia doris",
						data: {},
						children:[],
						},
						{
						id: "-1803535049",
						name: "Grammia edwardsii",
						data: {},
						children:[],
						},
						{
						id: "484312029",
						name: "Grammia elongata",
						data: {},
						children:[],
						},
						{
						id: "593611119",
						name: "Grammia eureka",
						data: {},
						children:[],
						},
						{
						id: "-1710349409",
						name: "Grammia margo",
						data: {},
						children:[],
						},
						{
						id: "-978923154",
						name: "Grammia nevadensis",
						data: {},
						children:[],
						},
						{
						id: "-1254942445",
						name: "Grammia ornata",
						data: {},
						children:[],
						},
						{
						id: "-429356801",
						name: "Grammia parthenice",
						data: {},
						children:[],
						},
						{
						id: "341529054",
						name: "Grammia quenseli",
						data: {},
						children:[],
						},
						{
						id: "-1987886287",
						name: "Grammia speciosa",
						data: {},
						children:[],
						},
						{
						id: "783547520",
						name: "Grammia virgo",
						data: {},
						children:[],
						},
						{
						id: "1176609740",
						name: "Grammia virguncula",
						data: {},
						children:[],
						},
						{
						id: "-1857408942",
						name: "Grammia williamsii",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1550223552",
					name: "Notarctia",
					data: {},
					children: [
						{
						id: "836921582",
						name: "Notarctia proxima",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-340399320",
					name: "Parasemia",
					data: {},
					children: [
						{
						id: "-1872666090",
						name: "Parasemia plantaginis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1863196130",
					name: "Pararctia",
					data: {},
					children: [
						{
						id: "70166633",
						name: "Pararctia yarrowii",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1604512947",
					name: "Platarctia",
					data: {},
					children: [
						{
						id: "-119787165",
						name: "Platarctia parthenos",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "810246692",
					name: "Platyprepia",
					data: {},
					children: [
						{
						id: "-584574721",
						name: "Platyprepia virginalis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "2092614952",
					name: "Arctia",
					data: {},
					children: [
						{
						id: "1149640178",
						name: "Arctia caja",
						data: {},
						children:[],
						},
						{
						id: "-1445988477",
						name: "Arctia opulenta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "864710895",
					name: "Virbia",
					data: {},
					children: [
						{
						id: "976503582",
						name: "Virbia ferruginosa",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-531158056",
					name: "Spilosoma",
					data: {},
					children: [
						{
						id: "480959001",
						name: "Spilosoma congrua",
						data: {},
						children:[],
						},
						{
						id: "1603577439",
						name: "Spilosoma pteridis",
						data: {},
						children:[],
						},
						{
						id: "1818779361",
						name: "Spilosoma vagans",
						data: {},
						children:[],
						},
						{
						id: "-784128480",
						name: "Spilosoma vestalis",
						data: {},
						children:[],
						},
						{
						id: "-1216326042",
						name: "Spilosoma virginica",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "669909536",
					name: "Estigmene",
					data: {},
					children: [
						{
						id: "-61498750",
						name: "Estigmene acrea",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "50400282",
					name: "Hyphantria",
					data: {},
					children: [
						{
						id: "-1734155328",
						name: "Hyphantria cunea",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1261000510",
					name: "Hypercompe",
					data: {},
					children: [
						{
						id: "-1101172411",
						name: "Hypercompe permaculata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1680424419",
					name: "Arachnis",
					data: {},
					children: [
						{
						id: "-323938766",
						name: "Arachnis citra",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-891085667",
					name: "Phragmatobia",
					data: {},
					children: [
						{
						id: "-858290494",
						name: "Phragmatobia assimilans",
						data: {},
						children:[],
						},
						{
						id: "-105516809",
						name: "Phragmatobia fuliginosa",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-287252998",
					name: "Pyrrharctia",
					data: {},
					children: [
						{
						id: "-574974828",
						name: "Pyrrharctia isabella",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-2050038511",
					name: "Leptarctia",
					data: {},
					children: [
						{
						id: "-733287262",
						name: "Leptarctia californiae",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1493264498",
					name: "Dodia",
					data: {},
					children: [
						{
						id: "-1948103001",
						name: "Dodia albertae",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-617472578",
					name: "Tyria",
					data: {},
					children: [
						{
						id: "-269491951",
						name: "Tyria jacobaeae",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "2067076528",
					name: "Gnophaela",
					data: {},
					children: [
						{
						id: "573400402",
						name: "Gnophaela latipennis",
						data: {},
						children:[],
						},
						{
						id: "880357473",
						name: "Gnophaela vermiculata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "84752752",
					name: "Lophocampa",
					data: {},
					children: [
						{
						id: "1110695879",
						name: "Lophocampa argentata",
						data: {},
						children:[],
						},
						{
						id: "2108171771",
						name: "Lophocampa maculata",
						data: {},
						children:[],
						},
						{
						id: "-709211749",
						name: "Lophocampa roseata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1449855567",
					name: "Pseudohemihyalea",
					data: {},
					children: [
						{
						id: "1328664741",
						name: "Pseudohemihyalea edwardsii",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-938418621",
					name: "Cycnia",
					data: {},
					children: [
						{
						id: "871095183",
						name: "Cycnia oregonensis",
						data: {},
						children:[],
						},
						{
						id: "1037516663",
						name: "Cycnia tenera",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "2095171070",
					name: "Ectypia",
					data: {},
					children: [
						{
						id: "-2052000986",
						name: "Ectypia clio",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-2109367915",
					name: "Ctenucha",
					data: {},
					children: [
						{
						id: "-959073570",
						name: "Ctenucha rubroscapus",
						data: {},
						children:[],
						},
						{
						id: "-1117445205",
						name: "Ctenucha virginica",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1787707721",
					name: "Cisseps",
					data: {},
					children: [
						{
						id: "2142246903",
						name: "Cisseps fulvicollis",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				]
			},
			{
			id: "1955337667",
			name: "Subfamily - Herminiinae",
			data: {},
			children: [
				{
				id: "-1969572839",
				name: "Idia",
				data: {},
				children: [
					{
					id: "-1128131791",
					name: "Idia aemula",
					data: {},
					children:[],
					},
					{
					id: "-347866792",
					name: "Idia americalis",
					data: {},
					children:[],
					},
					{
					id: "-803478803",
					name: "Idia concisa",
					data: {},
					children:[],
					},
					{
					id: "-1025412838",
					name: "Idia immaculalis",
					data: {},
					children:[],
					},
					{
					id: "1923424798",
					name: "Idia lubricalis",
					data: {},
					children:[],
					},
					{
					id: "-460834652",
					name: "Idia occidentalis",
					data: {},
					children:[],
					},
					{
					id: "135196907",
					name: "Idia suffusalis",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "1437223331",
				name: "Phalaenophana",
				data: {},
				children: [
					{
					id: "-1019843813",
					name: "Phalaenophana pyramusalis",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1898929996",
				name: "Zanclognatha",
				data: {},
				children: [
					{
					id: "1332837659",
					name: "Zanclognatha lutalba",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1917733408",
				name: "Chytolita",
				data: {},
				children: [
					{
					id: "1028261521",
					name: "Chytolita petrealis",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "566737376",
				name: "Phalaenostola",
				data: {},
				children: [
					{
					id: "-996838684",
					name: "Phalaenostola metonalis",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "1040986275",
				name: "Tetanolita",
				data: {},
				children: [
					{
					id: "-1654545012",
					name: "Tetanolita palligera",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-195766761",
				name: "Bleptina",
				data: {},
				children: [
					{
					id: "955876127",
					name: "Bleptina caradrinalis",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "1929752132",
				name: "Palthis",
				data: {},
				children: [
					{
					id: "-731051486",
					name: "Palthis angulalis",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-1056829001",
			name: "Subfamily - Hypeninae",
			data: {},
			children: [
				{
				id: "-1357544183",
				name: "Hypena",
				data: {},
				children: [
					{
					id: "-104060144",
					name: "Hypena abalienalis",
					data: {},
					children:[],
					},
					{
					id: "-167272782",
					name: "Hypena atomaria",
					data: {},
					children:[],
					},
					{
					id: "2075739455",
					name: "Hypena bijugalis",
					data: {},
					children:[],
					},
					{
					id: "-1527200884",
					name: "Hypena californica",
					data: {},
					children:[],
					},
					{
					id: "1439346191",
					name: "Hypena decorata",
					data: {},
					children:[],
					},
					{
					id: "1972208857",
					name: "Hypena edictalis",
					data: {},
					children:[],
					},
					{
					id: "1363549698",
					name: "Hypena humuli",
					data: {},
					children:[],
					},
					{
					id: "1967467265",
					name: "Hypena modestoides",
					data: {},
					children:[],
					},
					{
					id: "-829905360",
					name: "Hypena palparia",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-1802513971",
			name: "Subfamily - Rivulinae",
			data: {},
			children: [
				{
				id: "598387959",
				name: "Rivula",
				data: {},
				children: [
					{
					id: "-1821126521",
					name: "Rivula propinqualis",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-254819600",
			name: "Subfamily - Scoliopteryginae",
			data: {},
			children: [
				{
				id: "-136324698",
				name: "Tribe - Scoliopterygini",
				data: {},
				children: [
					{
					id: "-563342863",
					name: "Scoliopteryx",
					data: {},
					children: [
						{
						id: "-140222203",
						name: "Scoliopteryx libatrix",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				]
			},
			{
			id: "225619222",
			name: "Subfamily - Scolecocampinae",
			data: {},
			children: [
				{
				id: "463849448",
				name: "Phobolosia",
				data: {},
				children: [
					{
					id: "-1817863659",
					name: "Phobolosia anfracta",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "1090629450",
			name: "Subfamily - Boletobiinae",
			data: {},
			children: [
				{
				id: "1260246815",
				name: "Mycterophora",
				data: {},
				children: [
					{
					id: "-1413281723",
					name: "Mycterophora inexplicata",
					data: {},
					children:[],
					},
					{
					id: "531564446",
					name: "Mycterophora longipalpata",
					data: {},
					children:[],
					},
					{
					id: "-1602644551",
					name: "Mycterophora monticola",
					data: {},
					children:[],
					},
					{
					id: "-1487139728",
					name: "Mycterophora rubricans",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "570933830",
				name: "Metalectra",
				data: {},
				children: [
					{
					id: "-2041176648",
					name: "Metalectra bigallis",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-122098068",
			name: "Subfamily - Eublemminae",
			data: {},
			children: [
				{
				id: "-1929587776",
				name: "Eublemma",
				data: {},
				children: [
					{
					id: "-1218216032",
					name: "Eublemma minima",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "1468979523",
			name: "Subfamily - Phytometrinae",
			data: {},
			children: [
				{
				id: "626491839",
				name: "Hemeroplanis",
				data: {},
				children: [
					{
					id: "1620424763",
					name: "Hemeroplanis finitima",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-952253657",
				name: "Spargaloma",
				data: {},
				children: [
					{
					id: "-479298809",
					name: "Spargaloma sexpunctata",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-2027123318",
			name: "Subfamily - Erebinae",
			data: {},
			children: [
				{
				id: "-283664847",
				name: "Tribe - Toxocampini",
				data: {},
				children: [
					{
					id: "-1426509742",
					name: "Lygephila",
					data: {},
					children: [
						{
						id: "-988417884",
						name: "Lygephila victoria",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "-1957044151",
				name: "Tribe - Thermesiini",
				data: {},
				children: [
					{
					id: "1005836815",
					name: "Ascalapha",
					data: {},
					children: [
						{
						id: "-2085507463",
						name: "Ascalapha odorata",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "-210176796",
				name: "Tribe - Catocalini",
				data: {},
				children: [
					{
					id: "1229603298",
					name: "Catocala",
					data: {},
					children: [
						{
						id: "-648809849",
						name: "Catocala aholibah",
						data: {},
						children:[],
						},
						{
						id: "1960051859",
						name: "Catocala allusa",
						data: {},
						children:[],
						},
						{
						id: "-1723536648",
						name: "Catocala amatrix",
						data: {},
						children:[],
						},
						{
						id: "912268295",
						name: "Catocala briseis",
						data: {},
						children:[],
						},
						{
						id: "1727533171",
						name: "Catocala californica",
						data: {},
						children:[],
						},
						{
						id: "617486137",
						name: "Catocala chelidonia",
						data: {},
						children:[],
						},
						{
						id: "1866935946",
						name: "Catocala faustina",
						data: {},
						children:[],
						},
						{
						id: "-1766636628",
						name: "Catocala grotiana",
						data: {},
						children:[],
						},
						{
						id: "23074601",
						name: "Catocala hermia",
						data: {},
						children:[],
						},
						{
						id: "2091736654",
						name: "Catocala ilia",
						data: {},
						children:[],
						},
						{
						id: "1901123949",
						name: "Catocala irene",
						data: {},
						children:[],
						},
						{
						id: "557935115",
						name: "Catocala junctura",
						data: {},
						children:[],
						},
						{
						id: "11449366",
						name: "Catocala neogama",
						data: {},
						children:[],
						},
						{
						id: "564571084",
						name: "Catocala ophelia",
						data: {},
						children:[],
						},
						{
						id: "-175789330",
						name: "Catocala relicta",
						data: {},
						children:[],
						},
						{
						id: "1855234564",
						name: "Catocala semirelicta",
						data: {},
						children:[],
						},
						{
						id: "1264275099",
						name: "Catocala ultronia",
						data: {},
						children:[],
						},
						{
						id: "-1078831133",
						name: "Catocala unijuga",
						data: {},
						children:[],
						},
						{
						id: "988490388",
						name: "Catocala verilliana",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "1603243871",
				name: "Tribe - Melipotini",
				data: {},
				children: [
					{
					id: "1261437424",
					name: "Cissusa",
					data: {},
					children: [
						{
						id: "-1944762509",
						name: "Cissusa indiscreta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1407446121",
					name: "Litocala",
					data: {},
					children: [
						{
						id: "-914365825",
						name: "Litocala sexsignata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-286115147",
					name: "Melipotis",
					data: {},
					children: [
						{
						id: "1608475455",
						name: "Melipotis indomita",
						data: {},
						children:[],
						},
						{
						id: "-1307443025",
						name: "Melipotis jucunda",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1624975930",
					name: "Bulia",
					data: {},
					children: [
						{
						id: "1572545696",
						name: "Bulia deducta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-431805520",
					name: "Drasteria",
					data: {},
					children: [
						{
						id: "1284718257",
						name: "Drasteria adumbrata",
						data: {},
						children:[],
						},
						{
						id: "-1303023019",
						name: "Drasteria convergens",
						data: {},
						children:[],
						},
						{
						id: "143574263",
						name: "Drasteria divergens",
						data: {},
						children:[],
						},
						{
						id: "-392871100",
						name: "Drasteria edwardsii",
						data: {},
						children:[],
						},
						{
						id: "-303153310",
						name: "Drasteria hastingsii",
						data: {},
						children:[],
						},
						{
						id: "1637110481",
						name: "Drasteria howlandii",
						data: {},
						children:[],
						},
						{
						id: "921208024",
						name: "Drasteria hudsonica",
						data: {},
						children:[],
						},
						{
						id: "-237206048",
						name: "Drasteria inepta",
						data: {},
						children:[],
						},
						{
						id: "-968300681",
						name: "Drasteria mirifica",
						data: {},
						children:[],
						},
						{
						id: "-792757182",
						name: "Drasteria nubicola",
						data: {},
						children:[],
						},
						{
						id: "1331795191",
						name: "Drasteria ochracea",
						data: {},
						children:[],
						},
						{
						id: "584170527",
						name: "Drasteria pallescens",
						data: {},
						children:[],
						},
						{
						id: "1397043522",
						name: "Drasteria perplexa",
						data: {},
						children:[],
						},
						{
						id: "2028371849",
						name: "Drasteria petricola",
						data: {},
						children:[],
						},
						{
						id: "668422501",
						name: "Drasteria sabulosa",
						data: {},
						children:[],
						},
						{
						id: "992861288",
						name: "Drasteria scrupulosa",
						data: {},
						children:[],
						},
						{
						id: "796431143",
						name: "Drasteria stretchii",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "1414173996",
				name: "Tribe - Euclidiini",
				data: {},
				children: [
					{
					id: "698117245",
					name: "Caenurgina",
					data: {},
					children: [
						{
						id: "1252374851",
						name: "Caenurgina annexa",
						data: {},
						children:[],
						},
						{
						id: "-1176286534",
						name: "Caenurgina caerulea",
						data: {},
						children:[],
						},
						{
						id: "362860564",
						name: "Caenurgina crassiuscula",
						data: {},
						children:[],
						},
						{
						id: "1106569105",
						name: "Caenurgina erechtea",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "533012350",
					name: "Euclidia",
					data: {},
					children: [
						{
						id: "-741089120",
						name: "Euclidia ardita",
						data: {},
						children:[],
						},
						{
						id: "889439439",
						name: "Euclidia cuspidea",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "473203742",
				name: "Tribe - Ophiusini",
				data: {},
				children: [
					{
					id: "1646669954",
					name: "Zale",
					data: {},
					children: [
						{
						id: "1449855175",
						name: "Zale duplicata",
						data: {},
						children:[],
						},
						{
						id: "362489034",
						name: "Zale lunata",
						data: {},
						children:[],
						},
						{
						id: "-516840595",
						name: "Zale minerea",
						data: {},
						children:[],
						},
						{
						id: "774112219",
						name: "Zale rubi",
						data: {},
						children:[],
						},
						{
						id: "1111697574",
						name: "Zale termina",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				]
			},
			]
		},
		{
		id: "-142299741",
		name: "Family - Euteliidae",
		data: {},
		children: [
			{
			id: "-846345490",
			name: "Subfamily - Euteliinae",
			data: {},
			children: [
				{
				id: "-2039803085",
				name: "Marathyssa",
				data: {},
				children: [
					{
					id: "-1391220853",
					name: "Marathyssa inficita",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			]
		},
		{
		id: "1556547519",
		name: "Family - Nolidae",
		data: {},
		children: [
			{
			id: "-1119298980",
			name: "Subfamily - Nolinae",
			data: {},
			children: [
				{
				id: "1642799122",
				name: "Meganola",
				data: {},
				children: [
					{
					id: "1090979701",
					name: "Meganola minuscula",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "1383380812",
				name: "Nola",
				data: {},
				children: [
					{
					id: "-212527425",
					name: "Nola cilicoides",
					data: {},
					children:[],
					},
					{
					id: "-1739511739",
					name: "Nola minna",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "87823739",
				name: "Nycteola",
				data: {},
				children: [
					{
					id: "1812890387",
					name: "Nycteola cinereana",
					data: {},
					children:[],
					},
					{
					id: "1106570033",
					name: "Nycteola columbiana",
					data: {},
					children:[],
					},
					{
					id: "127146630",
					name: "Nycteola frigidana",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			]
		},
		{
		id: "-157804133",
		name: "Family - Noctuidae",
		data: {},
		children: [
			{
			id: "1342303208",
			name: "Subfamily - Plusiinae",
			data: {},
			children: [
				{
				id: "1082570524",
				name: "Tribe - Abrostolini",
				data: {},
				children: [
					{
					id: "582553488",
					name: "Abrostola",
					data: {},
					children: [
						{
						id: "99927640",
						name: "Abrostola urentis",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "310895446",
				name: "Tribe - Argyrogrammatini",
				data: {},
				children: [
					{
					id: "-1349221141",
					name: "Trichoplusia",
					data: {},
					children: [
						{
						id: "-390726315",
						name: "Trichoplusia ni",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "944563902",
					name: "Chrysodeixis",
					data: {},
					children: [
						{
						id: "-1637660746",
						name: "Chrysodeixis eriosoma",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "703013086",
				name: "Tribe - Plusiini",
				data: {},
				children: [
					{
					id: "918274878",
					name: "Rachiplusia",
					data: {},
					children: [
						{
						id: "2116426381",
						name: "Rachiplusia ou",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1993722429",
					name: "Diachrysia",
					data: {},
					children: [
						{
						id: "-1569163040",
						name: "Diachrysia aeroides",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1080469536",
					name: "Euchalcia",
					data: {},
					children: [
						{
						id: "1098374486",
						name: "Euchalcia albavitta",
						data: {},
						children:[],
						},
						{
						id: "1783886720",
						name: "Euchalcia borealis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1589781466",
					name: "Polychrysia",
					data: {},
					children: [
						{
						id: "1067229042",
						name: "Polychrysia esmeralda",
						data: {},
						children:[],
						},
						{
						id: "-1820625273",
						name: "Polychrysia morigera",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1432239413",
					name: "Pseudeva",
					data: {},
					children: [
						{
						id: "-317100584",
						name: "Pseudeva palligera",
						data: {},
						children:[],
						},
						{
						id: "588498451",
						name: "Pseudeva purpurigera",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "288987191",
					name: "Eosphoropteryx",
					data: {},
					children: [
						{
						id: "-14230231",
						name: "Eosphoropteryx thyatyroides",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-2033827442",
					name: "Autographa",
					data: {},
					children: [
						{
						id: "2005868507",
						name: "Autographa ampla",
						data: {},
						children:[],
						},
						{
						id: "-1824242044",
						name: "Autographa bimaculata",
						data: {},
						children:[],
						},
						{
						id: "-503743192",
						name: "Autographa buraetica",
						data: {},
						children:[],
						},
						{
						id: "-1753390161",
						name: "Autographa californica",
						data: {},
						children:[],
						},
						{
						id: "944684970",
						name: "Autographa corusca",
						data: {},
						children:[],
						},
						{
						id: "753217893",
						name: "Autographa flagellum",
						data: {},
						children:[],
						},
						{
						id: "178136239",
						name: "Autographa mappa",
						data: {},
						children:[],
						},
						{
						id: "743697572",
						name: "Autographa metallica",
						data: {},
						children:[],
						},
						{
						id: "-1079557208",
						name: "Autographa pasiphaeia",
						data: {},
						children:[],
						},
						{
						id: "-396521745",
						name: "Autographa pseudogamma",
						data: {},
						children:[],
						},
						{
						id: "1258659214",
						name: "Autographa rubidus",
						data: {},
						children:[],
						},
						{
						id: "-1324192287",
						name: "Autographa sansoni",
						data: {},
						children:[],
						},
						{
						id: "1108276070",
						name: "Autographa speciosa",
						data: {},
						children:[],
						},
						{
						id: "-1754906798",
						name: "Autographa v-alba",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "765493884",
					name: "Megalographa",
					data: {},
					children: [
						{
						id: "1210884496",
						name: "Megalographa biloba",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1342881270",
					name: "Syngrapha",
					data: {},
					children: [
						{
						id: "418017024",
						name: "Syngrapha abstrusa",
						data: {},
						children:[],
						},
						{
						id: "2077775448",
						name: "Syngrapha alias",
						data: {},
						children:[],
						},
						{
						id: "-23193782",
						name: "Syngrapha alticola",
						data: {},
						children:[],
						},
						{
						id: "1295988889",
						name: "Syngrapha angulidens",
						data: {},
						children:[],
						},
						{
						id: "1053998803",
						name: "Syngrapha borea",
						data: {},
						children:[],
						},
						{
						id: "832803448",
						name: "Syngrapha celsa",
						data: {},
						children:[],
						},
						{
						id: "-354676558",
						name: "Syngrapha diasema",
						data: {},
						children:[],
						},
						{
						id: "788704160",
						name: "Syngrapha epigaea",
						data: {},
						children:[],
						},
						{
						id: "-1540180360",
						name: "Syngrapha ignea",
						data: {},
						children:[],
						},
						{
						id: "-316774693",
						name: "Syngrapha interrogationis",
						data: {},
						children:[],
						},
						{
						id: "789293150",
						name: "Syngrapha microgamma",
						data: {},
						children:[],
						},
						{
						id: "415510419",
						name: "Syngrapha octoscripta",
						data: {},
						children:[],
						},
						{
						id: "517667193",
						name: "Syngrapha orophila",
						data: {},
						children:[],
						},
						{
						id: "-690330836",
						name: "Syngrapha parilis",
						data: {},
						children:[],
						},
						{
						id: "-741304697",
						name: "Syngrapha rectangula",
						data: {},
						children:[],
						},
						{
						id: "-1029819064",
						name: "Syngrapha viridisigma",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1630956994",
					name: "Anagrapha",
					data: {},
					children: [
						{
						id: "1476985597",
						name: "Anagrapha falcifera",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1596374636",
					name: "Plusia",
					data: {},
					children: [
						{
						id: "2139751173",
						name: "Plusia nichollae",
						data: {},
						children:[],
						},
						{
						id: "545596982",
						name: "Plusia putnami",
						data: {},
						children:[],
						},
						{
						id: "2119607134",
						name: "Plusia venusta",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				]
			},
			{
			id: "-129828295",
			name: "Subfamily - Eustrotiinae",
			data: {},
			children: [
				{
				id: "-1703357918",
				name: "Deltote",
				data: {},
				children: [
					{
					id: "1729861553",
					name: "Deltote bellicula",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-587550141",
				name: "Protodeltote",
				data: {},
				children: [
					{
					id: "-1667882224",
					name: "Protodeltote albidula",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-1148795362",
			name: "Subfamily - Acontiinae",
			data: {},
			children: [
				{
				id: "1519821280",
				name: "Tribe - Acontiini",
				data: {},
				children: [
					{
					id: "1909774895",
					name: "Ponometia",
					data: {},
					children: [
						{
						id: "1473524775",
						name: "Ponometia binocula",
						data: {},
						children:[],
						},
						{
						id: "2030657540",
						name: "Ponometia candefacta",
						data: {},
						children:[],
						},
						{
						id: "533161488",
						name: "Ponometia elegantula",
						data: {},
						children:[],
						},
						{
						id: "1934058708",
						name: "Ponometia nigra",
						data: {},
						children:[],
						},
						{
						id: "1325146519",
						name: "Ponometia semiflava",
						data: {},
						children:[],
						},
						{
						id: "1814294527",
						name: "Ponometia sutrix",
						data: {},
						children:[],
						},
						{
						id: "-1429714525",
						name: "Ponometia tortricina",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-641342725",
					name: "Tarache",
					data: {},
					children: [
						{
						id: "1136422322",
						name: "Tarache areli",
						data: {},
						children:[],
						},
						{
						id: "-257025138",
						name: "Tarache arida",
						data: {},
						children:[],
						},
						{
						id: "607349096",
						name: "Tarache augustipennis",
						data: {},
						children:[],
						},
						{
						id: "930045178",
						name: "Tarache flavipennis",
						data: {},
						children:[],
						},
						{
						id: "60426418",
						name: "Tarache knowltoni",
						data: {},
						children:[],
						},
						{
						id: "860095382",
						name: "Tarache lanceolata",
						data: {},
						children:[],
						},
						{
						id: "-564088626",
						name: "Tarache major",
						data: {},
						children:[],
						},
						{
						id: "1943697553",
						name: "Tarache toddi",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-363953412",
					name: "Acontia",
					data: {},
					children: [
						{
						id: "1789961429",
						name: "Acontia coquillettii",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				]
			},
			{
			id: "789479990",
			name: "Subfamily - Pantheinae",
			data: {},
			children: [
				{
				id: "-1045777644",
				name: "Panthea",
				data: {},
				children: [
					{
					id: "-905820153",
					name: "Panthea acronyctoides",
					data: {},
					children:[],
					},
					{
					id: "108409173",
					name: "Panthea furcilla",
					data: {},
					children:[],
					},
					{
					id: "-1048493563",
					name: "Panthea gigantea",
					data: {},
					children:[],
					},
					{
					id: "-1633961869",
					name: "Panthea virginarius",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1134031409",
				name: "Colocasia",
				data: {},
				children: [
					{
					id: "-1832698634",
					name: "Colocasia propinquilinea",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "116062728",
				name: "Charadra",
				data: {},
				children: [
					{
					id: "-1546813561",
					name: "Charadra deridens",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-158239759",
			name: "Subfamily - Dilobinae",
			data: {},
			children: [
				{
				id: "2035197187",
				name: "Raphia",
				data: {},
				children: [
					{
					id: "704699308",
					name: "Raphia frater",
					data: {},
					children:[],
					},
					{
					id: "-1356056316",
					name: "Raphia pallula",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-1136297463",
			name: "Subfamily - Acronictinae",
			data: {},
			children: [
				{
				id: "-1633911907",
				name: "Acronicta",
				data: {},
				children: [
					{
					id: "1230748552",
					name: "Acronicta americana",
					data: {},
					children:[],
					},
					{
					id: "-685622508",
					name: "Acronicta cyanescens",
					data: {},
					children:[],
					},
					{
					id: "-758929688",
					name: "Acronicta dactylina",
					data: {},
					children:[],
					},
					{
					id: "1603660465",
					name: "Acronicta parallela",
					data: {},
					children:[],
					},
					{
					id: "-1658900251",
					name: "Acronicta fragilis",
					data: {},
					children:[],
					},
					{
					id: "-1552952922",
					name: "Acronicta funeralis",
					data: {},
					children:[],
					},
					{
					id: "-1719690371",
					name: "Acronicta grisea",
					data: {},
					children:[],
					},
					{
					id: "1009141470",
					name: "Acronicta hasta",
					data: {},
					children:[],
					},
					{
					id: "-1267949901",
					name: "Acronicta impleta",
					data: {},
					children:[],
					},
					{
					id: "44775630",
					name: "Acronicta impressa",
					data: {},
					children:[],
					},
					{
					id: "917819578",
					name: "Acronicta innotata",
					data: {},
					children:[],
					},
					{
					id: "1948718274",
					name: "Acronicta lanceolaria",
					data: {},
					children:[],
					},
					{
					id: "2035051800",
					name: "Acronicta lepusculina",
					data: {},
					children:[],
					},
					{
					id: "1413687447",
					name: "Acronicta lupini",
					data: {},
					children:[],
					},
					{
					id: "1971649229",
					name: "Acronicta marmorata",
					data: {},
					children:[],
					},
					{
					id: "1312724970",
					name: "Acronicta oblinita",
					data: {},
					children:[],
					},
					{
					id: "-1618898872",
					name: "Acronicta perdita",
					data: {},
					children:[],
					},
					{
					id: "1878829437",
					name: "Acronicta quadrata",
					data: {},
					children:[],
					},
					{
					id: "1533461455",
					name: "Acronicta radcliffei",
					data: {},
					children:[],
					},
					{
					id: "-1145948446",
					name: "Acronicta spinea",
					data: {},
					children:[],
					},
					{
					id: "-2083221806",
					name: "Acronicta strigulata",
					data: {},
					children:[],
					},
					{
					id: "-1012298538",
					name: "Acronicta vulpina",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "253149263",
				name: "Simyra",
				data: {},
				children: [
					{
					id: "21901267",
					name: "Simyra insularis",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-1056871081",
			name: "Subfamily - Metoponiinae",
			data: {},
			children: [
				{
				id: "-22865516",
				name: "Tyta",
				data: {},
				children: [
					{
					id: "-639190527",
					name: "Tyta luctuosa",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-985597490",
			name: "Subfamily - Cuculliinae",
			data: {},
			children: [
				{
				id: "-113763446",
				name: "Cucullia",
				data: {},
				children: [
					{
					id: "1512535809",
					name: "Cucullia antipoda",
					data: {},
					children:[],
					},
					{
					id: "921042643",
					name: "Cucullia basipuncta",
					data: {},
					children:[],
					},
					{
					id: "-546832638",
					name: "Cucullia dorsalis",
					data: {},
					children:[],
					},
					{
					id: "-1311450941",
					name: "Cucullia eulepis",
					data: {},
					children:[],
					},
					{
					id: "1083244704",
					name: "Cucullia eurekae",
					data: {},
					children:[],
					},
					{
					id: "-1101406122",
					name: "Cucullia florea",
					data: {},
					children:[],
					},
					{
					id: "-1834642473",
					name: "Cucullia intermedia",
					data: {},
					children:[],
					},
					{
					id: "-1242056635",
					name: "Cucullia luna",
					data: {},
					children:[],
					},
					{
					id: "1993796835",
					name: "Cucullia mcdunnoughi",
					data: {},
					children:[],
					},
					{
					id: "-1055626974",
					name: "Cucullia montanae",
					data: {},
					children:[],
					},
					{
					id: "-1993835091",
					name: "Cucullia omissa",
					data: {},
					children:[],
					},
					{
					id: "1924016578",
					name: "Cucullia postera",
					data: {},
					children:[],
					},
					{
					id: "-2102297098",
					name: "Cucullia pulla",
					data: {},
					children:[],
					},
					{
					id: "-1546650994",
					name: "Cucullia serraticornis",
					data: {},
					children:[],
					},
					{
					id: "-1766715605",
					name: "Cucullia similaris",
					data: {},
					children:[],
					},
					{
					id: "-31269659",
					name: "Cucullia speyeri",
					data: {},
					children:[],
					},
					{
					id: "-451777548",
					name: "Cucullia strigata",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "221781390",
				name: "Dolocucullia",
				data: {},
				children: [
					{
					id: "-811400682",
					name: "Dolocucullia dentilinea",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-1971299150",
			name: "Subfamily - Amphipyrinae",
			data: {},
			children: [
				{
				id: "995994900",
				name: "Tribe - Amphipyrini",
				data: {},
				children: [
					{
					id: "-1791283076",
					name: "Amphipyra",
					data: {},
					children: [
						{
						id: "-609901651",
						name: "Amphipyra brunneoatra",
						data: {},
						children:[],
						},
						{
						id: "1791772683",
						name: "Amphipyra glabella",
						data: {},
						children:[],
						},
						{
						id: "-173523651",
						name: "Amphipyra pyramidoides",
						data: {},
						children:[],
						},
						{
						id: "350653049",
						name: "Amphipyra tragopoginis",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "-219904374",
				name: "Tribe - Psaphidini",
				data: {},
				children: [
					{
					id: "-55906044",
					name: "Pseudocopivaleria",
					data: {},
					children: [
						{
						id: "-1637618942",
						name: "Pseudocopivaleria sonoma",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1495232735",
					name: "Pleromella",
					data: {},
					children: [
						{
						id: "311355477",
						name: "Pleromella opter",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1928637603",
					name: "Feralia",
					data: {},
					children: [
						{
						id: "-1679452873",
						name: "Feralia comstocki",
						data: {},
						children:[],
						},
						{
						id: "-1379263246",
						name: "Feralia deceptiva",
						data: {},
						children:[],
						},
						{
						id: "1080382048",
						name: "Feralia februalis",
						data: {},
						children:[],
						},
						{
						id: "446545371",
						name: "Feralia jocosa",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-540358543",
					name: "Triocnemis",
					data: {},
					children: [
						{
						id: "1127959370",
						name: "Triocnemis saporis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1632249139",
					name: "Acopa",
					data: {},
					children: [
						{
						id: "139380358",
						name: "Acopa perpallida",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "-1416921830",
				name: "Tribe - Stiriini",
				data: {},
				children: [
					{
					id: "1964029378",
					name: "Plagiomimicus",
					data: {},
					children: [
						{
						id: "-1909073966",
						name: "Plagiomimicus dimidiata",
						data: {},
						children:[],
						},
						{
						id: "741951100",
						name: "Plagiomimicus expallidus",
						data: {},
						children:[],
						},
						{
						id: "89285608",
						name: "Plagiomimicus spumosum",
						data: {},
						children:[],
						},
						{
						id: "2100847839",
						name: "Plagiomimicus tepperi",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-175147068",
					name: "Stiria",
					data: {},
					children: [
						{
						id: "765633777",
						name: "Stiria rugifrons",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1674422171",
					name: "Neogrotella",
					data: {},
					children: [
						{
						id: "1525959408",
						name: "Neogrotella spaldingi",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "989349554",
					name: "Tristyla",
					data: {},
					children: [
						{
						id: "2047713410",
						name: "Tristyla alboplagiata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1738933124",
					name: "Axenus",
					data: {},
					children: [
						{
						id: "-610240783",
						name: "Axenus amplus",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1034926725",
					name: "Annaphila",
					data: {},
					children: [
						{
						id: "-716818423",
						name: "Annaphila arvalis",
						data: {},
						children:[],
						},
						{
						id: "-268736497",
						name: "Annaphila casta",
						data: {},
						children:[],
						},
						{
						id: "2084847125",
						name: "Annaphila danistica",
						data: {},
						children:[],
						},
						{
						id: "-837092193",
						name: "Annaphila decia",
						data: {},
						children:[],
						},
						{
						id: "-94952075",
						name: "Annaphila depicta",
						data: {},
						children:[],
						},
						{
						id: "574378106",
						name: "Annaphila diva",
						data: {},
						children:[],
						},
						{
						id: "-354881661",
						name: "Annaphila macfarlandi",
						data: {},
						children:[],
						},
						{
						id: "-125106351",
						name: "Annaphila mera",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				]
			},
			{
			id: "853780319",
			name: "Subfamily - Oncocnemidinae",
			data: {},
			children: [
				{
				id: "-198450191",
				name: "Catabena",
				data: {},
				children: [
					{
					id: "-1889472922",
					name: "Catabena lineolata",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-531249725",
				name: "Calophasia",
				data: {},
				children: [
					{
					id: "1336252081",
					name: "Calophasia lunula",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-97943188",
				name: "Behrensia",
				data: {},
				children: [
					{
					id: "1611775133",
					name: "Behrensia conchiformis",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "1013356750",
				name: "Pleromelloida",
				data: {},
				children: [
					{
					id: "572728808",
					name: "Pleromelloida bonuscula",
					data: {},
					children:[],
					},
					{
					id: "1154903455",
					name: "Pleromelloida cinerea",
					data: {},
					children:[],
					},
					{
					id: "607762040",
					name: "Pleromelloida conserta",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-101565356",
				name: "Sympistis",
				data: {},
				children: [
					{
					id: "-135991298",
					name: "Sympistis acheron",
					data: {},
					children:[],
					},
					{
					id: "1381076271",
					name: "Sympistis albifasciata",
					data: {},
					children:[],
					},
					{
					id: "1586399942",
					name: "Sympistis anweileri",
					data: {},
					children:[],
					},
					{
					id: "1159403597",
					name: "Sympistis apep",
					data: {},
					children:[],
					},
					{
					id: "-94981722",
					name: "Sympistis aterrima",
					data: {},
					children:[],
					},
					{
					id: "1565615642",
					name: "Sympistis augustus",
					data: {},
					children:[],
					},
					{
					id: "250548175",
					name: "Sympistis badistriga",
					data: {},
					children:[],
					},
					{
					id: "-1527802168",
					name: "Sympistis barnesii",
					data: {},
					children:[],
					},
					{
					id: "-1864546393",
					name: "Sympistis californiae",
					data: {},
					children:[],
					},
					{
					id: "-709855653",
					name: "Sympistis chalybdis",
					data: {},
					children:[],
					},
					{
					id: "-1730022818",
					name: "Sympistis cherti",
					data: {},
					children:[],
					},
					{
					id: "-2084442749",
					name: "Sympistis chionanti",
					data: {},
					children:[],
					},
					{
					id: "767824596",
					name: "Sympistis chorda",
					data: {},
					children:[],
					},
					{
					id: "234558893",
					name: "Sympistis cibalis",
					data: {},
					children:[],
					},
					{
					id: "777461101",
					name: "Sympistis columbia",
					data: {},
					children:[],
					},
					{
					id: "1390827551",
					name: "Sympistis coprocolor",
					data: {},
					children:[],
					},
					{
					id: "674001516",
					name: "Sympistis corusca",
					data: {},
					children:[],
					},
					{
					id: "-824037667",
					name: "Sympistis definita",
					data: {},
					children:[],
					},
					{
					id: "-752855595",
					name: "Sympistis dentata",
					data: {},
					children:[],
					},
					{
					id: "1275591387",
					name: "Sympistis dinalda",
					data: {},
					children:[],
					},
					{
					id: "-1055308871",
					name: "Sympistis dunbari",
					data: {},
					children:[],
					},
					{
					id: "-1819516654",
					name: "Sympistis extremis",
					data: {},
					children:[],
					},
					{
					id: "-1631950433",
					name: "Sympistis fifia",
					data: {},
					children:[],
					},
					{
					id: "293929952",
					name: "Sympistis figurata",
					data: {},
					children:[],
					},
					{
					id: "-638555652",
					name: "Sympistis fortis",
					data: {},
					children:[],
					},
					{
					id: "1779930185",
					name: "Sympistis funebris",
					data: {},
					children:[],
					},
					{
					id: "-213580360",
					name: "Sympistis glennyi",
					data: {},
					children:[],
					},
					{
					id: "1251760865",
					name: "Sympistis goedeni",
					data: {},
					children:[],
					},
					{
					id: "-1001507568",
					name: "Sympistis greyi",
					data: {},
					children:[],
					},
					{
					id: "-1399078719",
					name: "Sympistis hathor",
					data: {},
					children:[],
					},
					{
					id: "1876658020",
					name: "Sympistis hayesi",
					data: {},
					children:[],
					},
					{
					id: "1780700310",
					name: "Sympistis heliophila",
					data: {},
					children:[],
					},
					{
					id: "-487816583",
					name: "Sympistis homogena",
					data: {},
					children:[],
					},
					{
					id: "-1582242711",
					name: "Sympistis incubus",
					data: {},
					children:[],
					},
					{
					id: "-18697602",
					name: "Sympistis iricolor",
					data: {},
					children:[],
					},
					{
					id: "-1358443401",
					name: "Sympistis lacticollis",
					data: {},
					children:[],
					},
					{
					id: "-146590599",
					name: "Sympistis lapponica",
					data: {},
					children:[],
					},
					{
					id: "-1973845767",
					name: "Sympistis major",
					data: {},
					children:[],
					},
					{
					id: "-2003521975",
					name: "Sympistis meadiana",
					data: {},
					children:[],
					},
					{
					id: "-1349667589",
					name: "Sympistis melantho",
					data: {},
					children:[],
					},
					{
					id: "1406543797",
					name: "Sympistis minor",
					data: {},
					children:[],
					},
					{
					id: "1138747210",
					name: "Sympistis mirificalis",
					data: {},
					children:[],
					},
					{
					id: "-1927444584",
					name: "Sympistis nigrita",
					data: {},
					children:[],
					},
					{
					id: "1876246232",
					name: "Sympistis occata",
					data: {},
					children:[],
					},
					{
					id: "-704048347",
					name: "Sympistis orbicularis",
					data: {},
					children:[],
					},
					{
					id: "1064826871",
					name: "Sympistis pallida",
					data: {},
					children:[],
					},
					{
					id: "-1911811890",
					name: "Sympistis pallidior",
					data: {},
					children:[],
					},
					{
					id: "-358378141",
					name: "Sympistis parvacana",
					data: {},
					children:[],
					},
					{
					id: "1837815276",
					name: "Sympistis parvanigra",
					data: {},
					children:[],
					},
					{
					id: "106686586",
					name: "Sympistis perscripta",
					data: {},
					children:[],
					},
					{
					id: "-1733021527",
					name: "Sympistis poliochroa",
					data: {},
					children:[],
					},
					{
					id: "-1910113643",
					name: "Sympistis pudorata",
					data: {},
					children:[],
					},
					{
					id: "1935644028",
					name: "Sympistis punctilinea",
					data: {},
					children:[],
					},
					{
					id: "1204500915",
					name: "Sympistis ragani",
					data: {},
					children:[],
					},
					{
					id: "659771286",
					name: "Sympistis sagittata",
					data: {},
					children:[],
					},
					{
					id: "1158118334",
					name: "Sympistis sandaraca",
					data: {},
					children:[],
					},
					{
					id: "2080939281",
					name: "Sympistis satanella",
					data: {},
					children:[],
					},
					{
					id: "1918201697",
					name: "Sympistis saundersiana",
					data: {},
					children:[],
					},
					{
					id: "850290750",
					name: "Sympistis saxatilis",
					data: {},
					children:[],
					},
					{
					id: "-326689756",
					name: "Sympistis semicollaris",
					data: {},
					children:[],
					},
					{
					id: "1415825095",
					name: "Sympistis sesmu",
					data: {},
					children:[],
					},
					{
					id: "137525029",
					name: "Sympistis seth",
					data: {},
					children:[],
					},
					{
					id: "685914446",
					name: "Sympistis shirleyae",
					data: {},
					children:[],
					},
					{
					id: "-1970477898",
					name: "Sympistis simplex",
					data: {},
					children:[],
					},
					{
					id: "-1439768582",
					name: "Sympistis sobek",
					data: {},
					children:[],
					},
					{
					id: "1633240542",
					name: "Sympistis stabilis",
					data: {},
					children:[],
					},
					{
					id: "-1063928983",
					name: "Sympistis tartarea",
					data: {},
					children:[],
					},
					{
					id: "836454668",
					name: "Sympistis tenuifascia",
					data: {},
					children:[],
					},
					{
					id: "891852112",
					name: "Sympistis umbrifascia",
					data: {},
					children:[],
					},
					{
					id: "985308041",
					name: "Sympistis viriditincta",
					data: {},
					children:[],
					},
					{
					id: "845302513",
					name: "Sympistis wilsoni",
					data: {},
					children:[],
					},
					{
					id: "-1818297286",
					name: "Sympistis youngi",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "389378852",
			name: "Subfamily - Agaristinae",
			data: {},
			children: [
				{
				id: "-1999709002",
				name: "Eudryas",
				data: {},
				children: [
					{
					id: "-1390612447",
					name: "Eudryas brevipennis",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-616366112",
				name: "Alypia",
				data: {},
				children: [
					{
					id: "1174281973",
					name: "Alypia langtoni",
					data: {},
					children:[],
					},
					{
					id: "-581043602",
					name: "Alypia ridingsii",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-371222890",
				name: "Androloma",
				data: {},
				children: [
					{
					id: "-971372312",
					name: "Androloma maccullochii",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "1273522132",
			name: "Subfamily - Condicinae",
			data: {},
			children: [
				{
				id: "1369087594",
				name: "Tribe - Condicini",
				data: {},
				children: [
					{
					id: "-129239426",
					name: "Condica",
					data: {},
					children: [
						{
						id: "-786282277",
						name: "Condica albolabes",
						data: {},
						children:[],
						},
						{
						id: "788763072",
						name: "Condica discistriga",
						data: {},
						children:[],
						},
						{
						id: "117883650",
						name: "Condica lunata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-2008021025",
					name: "Ogdoconta",
					data: {},
					children: [
						{
						id: "1678516451",
						name: "Ogdoconta cinereola",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				]
			},
			{
			id: "1803588660",
			name: "Subfamily - Heliothinae",
			data: {},
			children: [
				{
				id: "1643587583",
				name: "Microhelia",
				data: {},
				children: [
					{
					id: "1369742484",
					name: "Microhelia angelica",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "2026724821",
				name: "Heliothodes",
				data: {},
				children: [
					{
					id: "268901078",
					name: "Heliothodes diminutiva",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "845674575",
				name: "Eutricopis",
				data: {},
				children: [
					{
					id: "-247576823",
					name: "Eutricopis nexilis",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1306724042",
				name: "Pyrrhia",
				data: {},
				children: [
					{
					id: "-1084387814",
					name: "Pyrrhia cilisca",
					data: {},
					children:[],
					},
					{
					id: "-1893816323",
					name: "Pyrrhia exprimens",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "1396314899",
				name: "Helicoverpa",
				data: {},
				children: [
					{
					id: "1019905607",
					name: "Helicoverpa zea",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-718759134",
				name: "Heliothis",
				data: {},
				children: [
					{
					id: "1446471459",
					name: "Heliothis acesias",
					data: {},
					children:[],
					},
					{
					id: "1004762289",
					name: "Heliothis belladonna",
					data: {},
					children:[],
					},
					{
					id: "1924189578",
					name: "Heliothis borealis",
					data: {},
					children:[],
					},
					{
					id: "627871161",
					name: "Heliothis ononis",
					data: {},
					children:[],
					},
					{
					id: "-423041631",
					name: "Heliothis oregonica",
					data: {},
					children:[],
					},
					{
					id: "-40105015",
					name: "Heliothis phloxiphaga",
					data: {},
					children:[],
					},
					{
					id: "-625354462",
					name: "Heliothis proruptus",
					data: {},
					children:[],
					},
					{
					id: "2065215162",
					name: "Heliothis virescens",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1660691852",
				name: "Heliocheilus",
				data: {},
				children: [
					{
					id: "-1714874583",
					name: "Heliocheilus paradoxus",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "-1968003366",
				name: "Schinia",
				data: {},
				children: [
					{
					id: "-1637400042",
					name: "Schinia acutilinea",
					data: {},
					children:[],
					},
					{
					id: "184503726",
					name: "Schinia albafascia",
					data: {},
					children:[],
					},
					{
					id: "792781681",
					name: "Schinia arcigera",
					data: {},
					children:[],
					},
					{
					id: "-1291259213",
					name: "Schinia argentifascia",
					data: {},
					children:[],
					},
					{
					id: "-2121496642",
					name: "Schinia biundulata",
					data: {},
					children:[],
					},
					{
					id: "-821439758",
					name: "Schinia crotchii",
					data: {},
					children:[],
					},
					{
					id: "1709538169",
					name: "Schinia cumatilis",
					data: {},
					children:[],
					},
					{
					id: "-974167355",
					name: "Schinia deserticola",
					data: {},
					children:[],
					},
					{
					id: "-1752572390",
					name: "Schinia edwardsii",
					data: {},
					children:[],
					},
					{
					id: "47727717",
					name: "Schinia florida",
					data: {},
					children:[],
					},
					{
					id: "1062584910",
					name: "Schinia gaurae",
					data: {},
					children:[],
					},
					{
					id: "-21886404",
					name: "Schinia honesta",
					data: {},
					children:[],
					},
					{
					id: "-1519244013",
					name: "Schinia illustra",
					data: {},
					children:[],
					},
					{
					id: "1219579725",
					name: "Schinia intermontana",
					data: {},
					children:[],
					},
					{
					id: "-1552573700",
					name: "Schinia jaguarina",
					data: {},
					children:[],
					},
					{
					id: "868238459",
					name: "Schinia luxa",
					data: {},
					children:[],
					},
					{
					id: "-1191226024",
					name: "Schinia lynda",
					data: {},
					children:[],
					},
					{
					id: "202209430",
					name: "Schinia meadi",
					data: {},
					children:[],
					},
					{
					id: "1472378973",
					name: "Schinia mortua",
					data: {},
					children:[],
					},
					{
					id: "-509914078",
					name: "Schinia nuchalis",
					data: {},
					children:[],
					},
					{
					id: "1420621271",
					name: "Schinia oleagina",
					data: {},
					children:[],
					},
					{
					id: "-677172183",
					name: "Schinia perminuta",
					data: {},
					children:[],
					},
					{
					id: "-1638037180",
					name: "Schinia persimilis",
					data: {},
					children:[],
					},
					{
					id: "-555722552",
					name: "Schinia rivulosa",
					data: {},
					children:[],
					},
					{
					id: "403166305",
					name: "Schinia sexplagiata",
					data: {},
					children:[],
					},
					{
					id: "-1472689146",
					name: "Schinia suetus",
					data: {},
					children:[],
					},
					{
					id: "-1529557472",
					name: "Schinia tertia",
					data: {},
					children:[],
					},
					{
					id: "-1189705075",
					name: "Schinia tobia",
					data: {},
					children:[],
					},
					{
					id: "472959509",
					name: "Schinia unimacula",
					data: {},
					children:[],
					},
					{
					id: "-1373119497",
					name: "Schinia vacciniae",
					data: {},
					children:[],
					},
					{
					id: "813545564",
					name: "Schinia villosa",
					data: {},
					children:[],
					},
					{
					id: "1060092536",
					name: "Schinia walsinghami",
					data: {},
					children:[],
					},
					]
				},
				{
				id: "847366939",
				name: "Heliolonche",
				data: {},
				children: [
					{
					id: "-1294582769",
					name: "Heliolonche modicella",
					data: {},
					children:[],
					},
					{
					id: "-389781189",
					name: "Heliolonche pictipennis",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "-256231423",
			name: "Subfamily - Bryophilinae",
			data: {},
			children: [
				{
				id: "-1187473491",
				name: "Cryphia",
				data: {},
				children: [
					{
					id: "-906657346",
					name: "Cryphia cuerva",
					data: {},
					children:[],
					},
					{
					id: "-2146711632",
					name: "Cryphia olivacea",
					data: {},
					children:[],
					},
					]
				},
				]
			},
			{
			id: "217136268",
			name: "Subfamily - Noctuinae",
			data: {},
			children: [
				{
				id: "-1810068470",
				name: "Tribe - Prodeniini",
				data: {},
				children: [
					{
					id: "779150689",
					name: "Spodoptera",
					data: {},
					children: [
						{
						id: "-538644919",
						name: "Spodoptera exigua",
						data: {},
						children:[],
						},
						{
						id: "1402460333",
						name: "Spodoptera praefica",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "2038442570",
				name: "Tribe - Elaphriini",
				data: {},
				children: [
					{
					id: "1912385892",
					name: "Elaphria",
					data: {},
					children: [
						{
						id: "1687941964",
						name: "Elaphria alapallida",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1577088718",
					name: "Galgula",
					data: {},
					children: [
						{
						id: "2084598095",
						name: "Galgula partita",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "1791251448",
				name: "Tribe - Caradrinini",
				data: {},
				children: [
					{
					id: "1016010521",
					name: "Protoperigea",
					data: {},
					children: [
						{
						id: "2002439029",
						name: "Protoperigea anotha",
						data: {},
						children:[],
						},
						{
						id: "49491673",
						name: "Protoperigea parvulata",
						data: {},
						children:[],
						},
						{
						id: "6090977",
						name: "Protoperigea posticata",
						data: {},
						children:[],
						},
						{
						id: "1408000273",
						name: "Protoperigea umbricata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-409999088",
					name: "Caradrina",
					data: {},
					children: [
						{
						id: "1648333814",
						name: "Caradrina camina",
						data: {},
						children:[],
						},
						{
						id: "-564981334",
						name: "Caradrina distinctoides",
						data: {},
						children:[],
						},
						{
						id: "-273348969",
						name: "Caradrina meralis",
						data: {},
						children:[],
						},
						{
						id: "1031529794",
						name: "Caradrina morpheus",
						data: {},
						children:[],
						},
						{
						id: "844640501",
						name: "Caradrina multifera",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1356149338",
					name: "Proxenus",
					data: {},
					children: [
						{
						id: "1133225117",
						name: "Proxenus mendosa",
						data: {},
						children:[],
						},
						{
						id: "-2093296444",
						name: "Proxenus mindara",
						data: {},
						children:[],
						},
						{
						id: "-598115814",
						name: "Proxenus miranda",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "110333663",
				name: "Tribe - Actinotiini",
				data: {},
				children: [
					{
					id: "672504671",
					name: "Nedra",
					data: {},
					children: [
						{
						id: "1538024892",
						name: "Nedra dora",
						data: {},
						children:[],
						},
						{
						id: "-1475225057",
						name: "Nedra hoeffleri",
						data: {},
						children:[],
						},
						{
						id: "318697109",
						name: "Nedra stewarti",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1861537559",
					name: "Alastria",
					data: {},
					children: [
						{
						id: "-369811659",
						name: "Alastria chico",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "-1806525380",
				name: "Tribe - Phlogophorini",
				data: {},
				children: [
					{
					id: "-2120996061",
					name: "Euplexia",
					data: {},
					children: [
						{
						id: "-512979571",
						name: "Euplexia benesimilis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1864784116",
					name: "Phlogophora",
					data: {},
					children: [
						{
						id: "1781185834",
						name: "Phlogophora periculosa",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "50828735",
				name: "Tribe - Apameini",
				data: {},
				children: [
					{
					id: "-1190804967",
					name: "Apamea",
					data: {},
					children: [
						{
						id: "-1093566835",
						name: "Apamea acera",
						data: {},
						children:[],
						},
						{
						id: "1878633531",
						name: "Apamea albina",
						data: {},
						children:[],
						},
						{
						id: "-1962753661",
						name: "Apamea alia",
						data: {},
						children:[],
						},
						{
						id: "-925981929",
						name: "Apamea amputatrix",
						data: {},
						children:[],
						},
						{
						id: "-2054408237",
						name: "Apamea antennata",
						data: {},
						children:[],
						},
						{
						id: "-228487150",
						name: "Apamea atriclava",
						data: {},
						children:[],
						},
						{
						id: "1490505565",
						name: "Apamea aurianticolor",
						data: {},
						children:[],
						},
						{
						id: "133012996",
						name: "Apamea burgessi",
						data: {},
						children:[],
						},
						{
						id: "23882364",
						name: "Apamea centralis",
						data: {},
						children:[],
						},
						{
						id: "-233346215",
						name: "Apamea cinefacta",
						data: {},
						children:[],
						},
						{
						id: "-612034372",
						name: "Apamea cogitata",
						data: {},
						children:[],
						},
						{
						id: "1096579199",
						name: "Apamea commoda",
						data: {},
						children:[],
						},
						{
						id: "-855570711",
						name: "Apamea contradicta",
						data: {},
						children:[],
						},
						{
						id: "-532156440",
						name: "Apamea cuculliformis",
						data: {},
						children:[],
						},
						{
						id: "1945650139",
						name: "Apamea devastator",
						data: {},
						children:[],
						},
						{
						id: "985819495",
						name: "Apamea digitula",
						data: {},
						children:[],
						},
						{
						id: "-1725122624",
						name: "Apamea impulsa",
						data: {},
						children:[],
						},
						{
						id: "717893513",
						name: "Apamea indocilis",
						data: {},
						children:[],
						},
						{
						id: "64375121",
						name: "Apamea inficita",
						data: {},
						children:[],
						},
						{
						id: "764436625",
						name: "Apamea inordinata",
						data: {},
						children:[],
						},
						{
						id: "-1209730764",
						name: "Apamea lignicolora",
						data: {},
						children:[],
						},
						{
						id: "-180770577",
						name: "Apamea longula",
						data: {},
						children:[],
						},
						{
						id: "-270099970",
						name: "Apamea lutosa",
						data: {},
						children:[],
						},
						{
						id: "745280833",
						name: "Apamea maxima",
						data: {},
						children:[],
						},
						{
						id: "-1973301686",
						name: "Apamea niveivenosa",
						data: {},
						children:[],
						},
						{
						id: "-1500536832",
						name: "Apamea occidens",
						data: {},
						children:[],
						},
						{
						id: "-387805808",
						name: "Apamea plutonia",
						data: {},
						children:[],
						},
						{
						id: "702206214",
						name: "Apamea scoparia",
						data: {},
						children:[],
						},
						{
						id: "-1085158182",
						name: "Apamea siskiyou",
						data: {},
						children:[],
						},
						{
						id: "366770555",
						name: "Apamea sora",
						data: {},
						children:[],
						},
						{
						id: "-1016960387",
						name: "Apamea sordens",
						data: {},
						children:[],
						},
						{
						id: "-112310872",
						name: "Apamea spaldingi",
						data: {},
						children:[],
						},
						{
						id: "-1550577071",
						name: "Apamea tahoeensis",
						data: {},
						children:[],
						},
						{
						id: "625739768",
						name: "Apamea unita",
						data: {},
						children:[],
						},
						{
						id: "1744892305",
						name: "Apamea vultuosa",
						data: {},
						children:[],
						},
						{
						id: "-306650948",
						name: "Apamea zeta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "397898143",
					name: "Melanapamea",
					data: {},
					children: [
						{
						id: "723093210",
						name: "Melanapamea mixta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1044395906",
					name: "Lateroligia",
					data: {},
					children: [
						{
						id: "-1750231046",
						name: "Lateroligia ophiogramma",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1414519008",
					name: "Resapamea",
					data: {},
					children: [
						{
						id: "1188296477",
						name: "Resapamea enargia",
						data: {},
						children:[],
						},
						{
						id: "823769886",
						name: "Resapamea innota",
						data: {},
						children:[],
						},
						{
						id: "-1635822527",
						name: "Resapamea passer",
						data: {},
						children:[],
						},
						{
						id: "1871642421",
						name: "Resapamea venosa",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1063169111",
					name: "Mesapamea",
					data: {},
					children: [
						{
						id: "1725143687",
						name: "Mesapamea fractilinea",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-681050289",
					name: "Eremobina",
					data: {},
					children: [
						{
						id: "1315379695",
						name: "Eremobina claudens",
						data: {},
						children:[],
						},
						{
						id: "297542299",
						name: "Eremobina unicincta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1141230081",
					name: "Oligia",
					data: {},
					children: [
						{
						id: "830000981",
						name: "Oligia divesta",
						data: {},
						children:[],
						},
						{
						id: "-69042638",
						name: "Oligia obtusa",
						data: {},
						children:[],
						},
						{
						id: "-1091885897",
						name: "Oligia rampartensis",
						data: {},
						children:[],
						},
						{
						id: "-2004719321",
						name: "Oligia tusa",
						data: {},
						children:[],
						},
						{
						id: "1201798406",
						name: "Oligia violacea",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "2116076036",
					name: "Neoligia",
					data: {},
					children: [
						{
						id: "-2022087019",
						name: "Neoligia albirena",
						data: {},
						children:[],
						},
						{
						id: "393856035",
						name: "Neoligia invenusta",
						data: {},
						children:[],
						},
						{
						id: "-1266883595",
						name: "Neoligia lancea",
						data: {},
						children:[],
						},
						{
						id: "-678031663",
						name: "Neoligia lillooet",
						data: {},
						children:[],
						},
						{
						id: "1263419939",
						name: "Neoligia subjuncta",
						data: {},
						children:[],
						},
						{
						id: "-469917591",
						name: "Neoligia tonsa",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "537150727",
					name: "Euros",
					data: {},
					children: [
						{
						id: "174485009",
						name: "Euros cervina",
						data: {},
						children:[],
						},
						{
						id: "637829487",
						name: "Euros osticollis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "22026384",
					name: "Xylomoia",
					data: {},
					children: [
						{
						id: "796089261",
						name: "Xylomoia indirecta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1368894990",
					name: "Photedes",
					data: {},
					children: [
						{
						id: "1654953390",
						name: "Photedes defecta",
						data: {},
						children:[],
						},
						{
						id: "668056536",
						name: "Photedes didonea",
						data: {},
						children:[],
						},
						{
						id: "-730516181",
						name: "Photedes inops",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1914064623",
					name: "Hypocoena",
					data: {},
					children: [
						{
						id: "-1415194181",
						name: "Hypocoena basistriga",
						data: {},
						children:[],
						},
						{
						id: "-830752539",
						name: "Hypocoena rufostrigata",
						data: {},
						children:[],
						},
						{
						id: "-873113685",
						name: "Hypocoena inquinata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1963540027",
					name: "Benjaminiola",
					data: {},
					children: [
						{
						id: "1604722917",
						name: "Benjaminiola colorada",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1165820982",
					name: "Capsula",
					data: {},
					children: [
						{
						id: "1602103473",
						name: "Capsula alameda",
						data: {},
						children:[],
						},
						{
						id: "-49438576",
						name: "Capsula oblonga",
						data: {},
						children:[],
						},
						{
						id: "213632161",
						name: "Capsula subflava",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1003685407",
					name: "Macronoctua",
					data: {},
					children: [
						{
						id: "-1727829738",
						name: "Macronoctua onusta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "2077834206",
					name: "Helotropha",
					data: {},
					children: [
						{
						id: "-778369437",
						name: "Helotropha reniformis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-234898293",
					name: "Amphipoea",
					data: {},
					children: [
						{
						id: "-1736895170",
						name: "Amphipoea americana",
						data: {},
						children:[],
						},
						{
						id: "-1456391418",
						name: "Amphipoea keiferi",
						data: {},
						children:[],
						},
						{
						id: "776244853",
						name: "Amphipoea lunata",
						data: {},
						children:[],
						},
						{
						id: "293454422",
						name: "Amphipoea pacifica",
						data: {},
						children:[],
						},
						{
						id: "-95270006",
						name: "Amphipoea senilis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1524466661",
					name: "Hydraecia",
					data: {},
					children: [
						{
						id: "-910593630",
						name: "Hydraecia obliqua",
						data: {},
						children:[],
						},
						{
						id: "721743050",
						name: "Hydraecia pallescens",
						data: {},
						children:[],
						},
						{
						id: "621135080",
						name: "Hydraecia perobliqua",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1733232915",
					name: "Papaipema",
					data: {},
					children: [
						{
						id: "33405010",
						name: "Papaipema insulidens",
						data: {},
						children:[],
						},
						{
						id: "-559401712",
						name: "Papaipema limata",
						data: {},
						children:[],
						},
						{
						id: "300340185",
						name: "Papaipema pertincta",
						data: {},
						children:[],
						},
						{
						id: "1625406345",
						name: "Papaipema sauzalitae",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "-1660940736",
				name: "Tribe - Arzamini",
				data: {},
				children: [
					{
					id: "-866845932",
					name: "Bellura",
					data: {},
					children: [
						{
						id: "-340988885",
						name: "Bellura gortynoides",
						data: {},
						children:[],
						},
						{
						id: "-1759139343",
						name: "Bellura obliqua",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "-193643249",
				name: "Tribe - Xylenini",
				data: {},
				children: [
					{
					id: "1574791253",
					name: "Xylena",
					data: {},
					children: [
						{
						id: "188003518",
						name: "Xylena brucei",
						data: {},
						children:[],
						},
						{
						id: "-1368015495",
						name: "Xylena cineritia",
						data: {},
						children:[],
						},
						{
						id: "306434283",
						name: "Xylena curvimacula",
						data: {},
						children:[],
						},
						{
						id: "1894961697",
						name: "Xylena nupera",
						data: {},
						children:[],
						},
						{
						id: "-339272553",
						name: "Xylena thoracica",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-2128893049",
					name: "Lithomoia",
					data: {},
					children: [
						{
						id: "-1871998980",
						name: "Lithomoia germana",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-932577024",
					name: "Homoglaea",
					data: {},
					children: [
						{
						id: "-1317182179",
						name: "Homoglaea californica",
						data: {},
						children:[],
						},
						{
						id: "-1266200645",
						name: "Homoglaea carbonaria",
						data: {},
						children:[],
						},
						{
						id: "-902089705",
						name: "Homoglaea dives",
						data: {},
						children:[],
						},
						{
						id: "60386854",
						name: "Homoglaea hircina",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "672891688",
					name: "Litholomia",
					data: {},
					children: [
						{
						id: "-531349965",
						name: "Litholomia napaea",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "349537428",
					name: "Lithophane",
					data: {},
					children: [
						{
						id: "-1275980359",
						name: "Lithophane amanda",
						data: {},
						children:[],
						},
						{
						id: "-879071851",
						name: "Lithophane atara",
						data: {},
						children:[],
						},
						{
						id: "-1080148425",
						name: "Lithophane baileyi",
						data: {},
						children:[],
						},
						{
						id: "-1912754777",
						name: "Lithophane boogeri",
						data: {},
						children:[],
						},
						{
						id: "-957558307",
						name: "Lithophane contenta",
						data: {},
						children:[],
						},
						{
						id: "1537672365",
						name: "Lithophane dilatocula",
						data: {},
						children:[],
						},
						{
						id: "-541645904",
						name: "Lithophane disposita",
						data: {},
						children:[],
						},
						{
						id: "224921771",
						name: "Lithophane fagina",
						data: {},
						children:[],
						},
						{
						id: "-1347155921",
						name: "Lithophane gausapata",
						data: {},
						children:[],
						},
						{
						id: "543045312",
						name: "Lithophane georgii",
						data: {},
						children:[],
						},
						{
						id: "-1539087981",
						name: "Lithophane innominata",
						data: {},
						children:[],
						},
						{
						id: "194199527",
						name: "Lithophane itata",
						data: {},
						children:[],
						},
						{
						id: "-1966400671",
						name: "Lithophane jefferyi",
						data: {},
						children:[],
						},
						{
						id: "-402411471",
						name: "Lithophane pertorrida",
						data: {},
						children:[],
						},
						{
						id: "846418368",
						name: "Lithophane petulca",
						data: {},
						children:[],
						},
						{
						id: "-87345014",
						name: "Lithophane pexata",
						data: {},
						children:[],
						},
						{
						id: "2035969341",
						name: "Lithophane ponderosa",
						data: {},
						children:[],
						},
						{
						id: "913435820",
						name: "Lithophane thaxteri",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "791656156",
					name: "Eupsilia",
					data: {},
					children: [
						{
						id: "-1245981671",
						name: "Eupsilia devia",
						data: {},
						children:[],
						},
						{
						id: "483399977",
						name: "Eupsilia fringata",
						data: {},
						children:[],
						},
						{
						id: "322234642",
						name: "Eupsilia sidus",
						data: {},
						children:[],
						},
						{
						id: "-1281173795",
						name: "Eupsilia tristigmata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "314572444",
					name: "Epiglaea",
					data: {},
					children: [
						{
						id: "-1908876905",
						name: "Epiglaea apiata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-2008458453",
					name: "Eucirroedia",
					data: {},
					children: [
						{
						id: "-1567342253",
						name: "Eucirroedia pampina",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "914512761",
					name: "Mesogona",
					data: {},
					children: [
						{
						id: "1474683153",
						name: "Mesogona olivata",
						data: {},
						children:[],
						},
						{
						id: "2056786167",
						name: "Mesogona rubra",
						data: {},
						children:[],
						},
						{
						id: "-1299570303",
						name: "Mesogona subcuprea",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1288279425",
					name: "Agrochola",
					data: {},
					children: [
						{
						id: "568785469",
						name: "Agrochola pulchella",
						data: {},
						children:[],
						},
						{
						id: "1610215760",
						name: "Agrochola purpurea",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1572957602",
					name: "Sunira",
					data: {},
					children: [
						{
						id: "67768566",
						name: "Sunira bicolorago",
						data: {},
						children:[],
						},
						{
						id: "615559684",
						name: "Sunira decipiens",
						data: {},
						children:[],
						},
						{
						id: "-1080508346",
						name: "Sunira verberata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-406178710",
					name: "Anathix",
					data: {},
					children: [
						{
						id: "258582644",
						name: "Anathix aggressa",
						data: {},
						children:[],
						},
						{
						id: "-1102007389",
						name: "Anathix puta",
						data: {},
						children:[],
						},
						{
						id: "-1990932328",
						name: "Anathix ralla",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "301860080",
					name: "Xanthia",
					data: {},
					children: [
						{
						id: "-1373411711",
						name: "Xanthia tatago",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "416735401",
					name: "Hillia",
					data: {},
					children: [
						{
						id: "1351978619",
						name: "Hillia iris",
						data: {},
						children:[],
						},
						{
						id: "-1771117179",
						name: "Hillia maida",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "396284611",
					name: "Parastichtis",
					data: {},
					children: [
						{
						id: "1649437356",
						name: "Parastichtis suspecta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1369044594",
					name: "Aseptis",
					data: {},
					children: [
						{
						id: "1576334124",
						name: "Aseptis adnixa",
						data: {},
						children:[],
						},
						{
						id: "-1285560399",
						name: "Aseptis binotata",
						data: {},
						children:[],
						},
						{
						id: "-1813767174",
						name: "Aseptis characta",
						data: {},
						children:[],
						},
						{
						id: "2060835660",
						name: "Aseptis ethnica",
						data: {},
						children:[],
						},
						{
						id: "-1579544935",
						name: "Aseptis fannatica",
						data: {},
						children:[],
						},
						{
						id: "-1154828662",
						name: "Aseptis fumosa",
						data: {},
						children:[],
						},
						{
						id: "1979961247",
						name: "Aseptis marina",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1347217818",
					name: "Epidemas",
					data: {},
					children: [
						{
						id: "-1581147401",
						name: "Epidemas obscurus",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "115449366",
					name: "Brachylomia",
					data: {},
					children: [
						{
						id: "630302555",
						name: "Brachylomia algens",
						data: {},
						children:[],
						},
						{
						id: "2108650716",
						name: "Brachylomia discinigra",
						data: {},
						children:[],
						},
						{
						id: "-873510522",
						name: "Brachylomia discolor",
						data: {},
						children:[],
						},
						{
						id: "-1913689199",
						name: "Brachylomia elda",
						data: {},
						children:[],
						},
						{
						id: "-635035946",
						name: "Brachylomia obscurifascia",
						data: {},
						children:[],
						},
						{
						id: "738835618",
						name: "Brachylomia populi",
						data: {},
						children:[],
						},
						{
						id: "187076482",
						name: "Brachylomia rectifascia",
						data: {},
						children:[],
						},
						{
						id: "2008712587",
						name: "Brachylomia sierra",
						data: {},
						children:[],
						},
						{
						id: "-1699081168",
						name: "Brachylomia thula",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-342948353",
					name: "Hyppa",
					data: {},
					children: [
						{
						id: "-598255508",
						name: "Hyppa brunneicrista",
						data: {},
						children:[],
						},
						{
						id: "-2102182746",
						name: "Hyppa contrasta",
						data: {},
						children:[],
						},
						{
						id: "-639884227",
						name: "Hyppa indistincta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1974892466",
					name: "Cosmia",
					data: {},
					children: [
						{
						id: "-1488971870",
						name: "Cosmia calami",
						data: {},
						children:[],
						},
						{
						id: "1365018440",
						name: "Cosmia elisae",
						data: {},
						children:[],
						},
						{
						id: "874306792",
						name: "Cosmia praeacuta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1853390871",
					name: "Zotheca",
					data: {},
					children: [
						{
						id: "197226123",
						name: "Zotheca tranquilla",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-769962194",
					name: "Enargia",
					data: {},
					children: [
						{
						id: "-1538125660",
						name: "Enargia decolor",
						data: {},
						children:[],
						},
						{
						id: "1316212827",
						name: "Enargia fausta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-398135306",
					name: "Ipimorpha",
					data: {},
					children: [
						{
						id: "-1375323209",
						name: "Ipimorpha nanaimo",
						data: {},
						children:[],
						},
						{
						id: "1402712269",
						name: "Ipimorpha pleonectusa",
						data: {},
						children:[],
						},
						{
						id: "929967048",
						name: "Ipimorpha viridipallida",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1841785961",
					name: "Andropolia",
					data: {},
					children: [
						{
						id: "-1463981144",
						name: "Andropolia aedon",
						data: {},
						children:[],
						},
						{
						id: "-1279963903",
						name: "Andropolia contacta",
						data: {},
						children:[],
						},
						{
						id: "-940958032",
						name: "Andropolia diversilineata",
						data: {},
						children:[],
						},
						{
						id: "-1073344812",
						name: "Andropolia theodori",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-407049595",
					name: "Rhizagrotis",
					data: {},
					children: [
						{
						id: "-1280650923",
						name: "Rhizagrotis albalis",
						data: {},
						children:[],
						},
						{
						id: "201992789",
						name: "Rhizagrotis cloanthoides",
						data: {},
						children:[],
						},
						{
						id: "715823504",
						name: "Rhizagrotis modesta",
						data: {},
						children:[],
						},
						{
						id: "-1737672829",
						name: "Rhizagrotis stylata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-984633010",
					name: "Fishia",
					data: {},
					children: [
						{
						id: "-1726323344",
						name: "Fishia connecta",
						data: {},
						children:[],
						},
						{
						id: "1934318225",
						name: "Fishia discors",
						data: {},
						children:[],
						},
						{
						id: "-919282986",
						name: "Fishia illocata",
						data: {},
						children:[],
						},
						{
						id: "-2030444972",
						name: "Fishia yosemitae",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-374728883",
					name: "Platypolia",
					data: {},
					children: [
						{
						id: "-716334678",
						name: "Platypolia anceps",
						data: {},
						children:[],
						},
						{
						id: "-2105227628",
						name: "Platypolia contadina",
						data: {},
						children:[],
						},
						{
						id: "1979150140",
						name: "Platypolia loda",
						data: {},
						children:[],
						},
						{
						id: "-519499756",
						name: "Platypolia mactata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1638103222",
					name: "Xylotype",
					data: {},
					children: [
						{
						id: "1136028799",
						name: "Xylotype arcadia",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1370168770",
					name: "Dryotype",
					data: {},
					children: [
						{
						id: "423487629",
						name: "Dryotype opina",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1623496967",
					name: "Mniotype",
					data: {},
					children: [
						{
						id: "-567402882",
						name: "Mniotype ducta",
						data: {},
						children:[],
						},
						{
						id: "244760801",
						name: "Mniotype tenera",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-254954632",
					name: "Sutyna",
					data: {},
					children: [
						{
						id: "-301025931",
						name: "Sutyna privata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "53010379",
					name: "Ufeus",
					data: {},
					children: [
						{
						id: "-1346466079",
						name: "Ufeus hulsti",
						data: {},
						children:[],
						},
						{
						id: "-1999410952",
						name: "Ufeus satyricus",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1326081862",
					name: "Chytonix",
					data: {},
					children: [
						{
						id: "1701755423",
						name: "Chytonix palliatricula",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "628373014",
					name: "Properigea",
					data: {},
					children: [
						{
						id: "-322971842",
						name: "Properigea albimacula",
						data: {},
						children:[],
						},
						{
						id: "1567830941",
						name: "Properigea niveirena",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "402109572",
					name: "Pseudobryomima",
					data: {},
					children: [
						{
						id: "1648916183",
						name: "Pseudobryomima muscosa",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-633342231",
					name: "Pseudanarta",
					data: {},
					children: [
						{
						id: "1160156382",
						name: "Pseudanarta caeca",
						data: {},
						children:[],
						},
						{
						id: "-1787966557",
						name: "Pseudanarta crocea",
						data: {},
						children:[],
						},
						{
						id: "1265405343",
						name: "Pseudanarta flava",
						data: {},
						children:[],
						},
						{
						id: "-2138512538",
						name: "Pseudanarta singula",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "-1985341939",
				name: "Tribe - Orthosiini",
				data: {},
				children: [
					{
					id: "-1121396179",
					name: "Perigonica",
					data: {},
					children: [
						{
						id: "-951034985",
						name: "Perigonica angulata",
						data: {},
						children:[],
						},
						{
						id: "-1503052556",
						name: "Perigonica pectinata",
						data: {},
						children:[],
						},
						{
						id: "-2030871175",
						name: "Perigonica tertia",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-15369624",
					name: "Acerra",
					data: {},
					children: [
						{
						id: "-1449943088",
						name: "Acerra normalis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1319140836",
					name: "Stretchia",
					data: {},
					children: [
						{
						id: "422888403",
						name: "Stretchia muricina",
						data: {},
						children:[],
						},
						{
						id: "1434530984",
						name: "Stretchia pictipennis",
						data: {},
						children:[],
						},
						{
						id: "497163799",
						name: "Stretchia plusiaeformis",
						data: {},
						children:[],
						},
						{
						id: "-1903713717",
						name: "Stretchia prima",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "277714183",
					name: "Orthosia",
					data: {},
					children: [
						{
						id: "673769262",
						name: "Orthosia arthrolita",
						data: {},
						children:[],
						},
						{
						id: "875981365",
						name: "Orthosia behrensiana",
						data: {},
						children:[],
						},
						{
						id: "1446831210",
						name: "Orthosia ferrigera",
						data: {},
						children:[],
						},
						{
						id: "-996397762",
						name: "Orthosia hibisci",
						data: {},
						children:[],
						},
						{
						id: "2136717514",
						name: "Orthosia mys",
						data: {},
						children:[],
						},
						{
						id: "-115648254",
						name: "Orthosia pacifica",
						data: {},
						children:[],
						},
						{
						id: "-868303404",
						name: "Orthosia praeses",
						data: {},
						children:[],
						},
						{
						id: "1272526053",
						name: "Orthosia pulchella",
						data: {},
						children:[],
						},
						{
						id: "-1892543667",
						name: "Orthosia revicta",
						data: {},
						children:[],
						},
						{
						id: "696906624",
						name: "Orthosia segregata",
						data: {},
						children:[],
						},
						{
						id: "652432384",
						name: "Orthosia terminata",
						data: {},
						children:[],
						},
						{
						id: "1993589010",
						name: "Orthosia transparens",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1222291737",
					name: "Egira",
					data: {},
					children: [
						{
						id: "1647267812",
						name: "Egira cognata",
						data: {},
						children:[],
						},
						{
						id: "-975401806",
						name: "Egira crucialis",
						data: {},
						children:[],
						},
						{
						id: "1227221328",
						name: "Egira curialis",
						data: {},
						children:[],
						},
						{
						id: "2049455910",
						name: "Egira dolosa",
						data: {},
						children:[],
						},
						{
						id: "-449598762",
						name: "Egira februalis",
						data: {},
						children:[],
						},
						{
						id: "-1395324204",
						name: "Egira hiemalis",
						data: {},
						children:[],
						},
						{
						id: "2081027331",
						name: "Egira perlubens",
						data: {},
						children:[],
						},
						{
						id: "964726207",
						name: "Egira rubrica",
						data: {},
						children:[],
						},
						{
						id: "1699998293",
						name: "Egira simplex",
						data: {},
						children:[],
						},
						{
						id: "-1535785502",
						name: "Egira vanduzeei",
						data: {},
						children:[],
						},
						{
						id: "1286364604",
						name: "Egira variabilis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1532696315",
					name: "Admetovis",
					data: {},
					children: [
						{
						id: "358379502",
						name: "Admetovis oxymorus",
						data: {},
						children:[],
						},
						{
						id: "-1061237900",
						name: "Admetovis similaris",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "478852906",
				name: "Tribe - Tholerini",
				data: {},
				children: [
					{
					id: "-501232494",
					name: "Tholera",
					data: {},
					children: [
						{
						id: "1511180343",
						name: "Tholera americana",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1573696479",
					name: "Nephelodes",
					data: {},
					children: [
						{
						id: "966707581",
						name: "Nephelodes demaculata",
						data: {},
						children:[],
						},
						{
						id: "-1191934108",
						name: "Nephelodes minians",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "1658465823",
				name: "Tribe - Hadenini",
				data: {},
				children: [
					{
					id: "-1710418049",
					name: "Escaria",
					data: {},
					children: [
						{
						id: "590317196",
						name: "Escaria clauda",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1947587326",
					name: "Afotella",
					data: {},
					children: [
						{
						id: "1920938601",
						name: "Afotella cylindrica",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "793758397",
					name: "Hadenella",
					data: {},
					children: [
						{
						id: "195346977",
						name: "Hadenella pergentilis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1642016517",
					name: "Anarta",
					data: {},
					children: [
						{
						id: "-1903976074",
						name: "Anarta alta",
						data: {},
						children:[],
						},
						{
						id: "1223543798",
						name: "Anarta antica",
						data: {},
						children:[],
						},
						{
						id: "1085915622",
						name: "Anarta columbica",
						data: {},
						children:[],
						},
						{
						id: "-1927715571",
						name: "Anarta crotchii",
						data: {},
						children:[],
						},
						{
						id: "-1464287703",
						name: "Anarta decepta",
						data: {},
						children:[],
						},
						{
						id: "1999565243",
						name: "Anarta edwardsii",
						data: {},
						children:[],
						},
						{
						id: "-654393116",
						name: "Anarta farnhami",
						data: {},
						children:[],
						},
						{
						id: "-250499426",
						name: "Anarta fervida",
						data: {},
						children:[],
						},
						{
						id: "1555341427",
						name: "Anarta fulgora",
						data: {},
						children:[],
						},
						{
						id: "-1861127640",
						name: "Anarta fusculenta",
						data: {},
						children:[],
						},
						{
						id: "-1465004779",
						name: "Anarta hadeniformis",
						data: {},
						children:[],
						},
						{
						id: "1406281644",
						name: "Anarta hamata",
						data: {},
						children:[],
						},
						{
						id: "-1822114395",
						name: "Anarta montanica",
						data: {},
						children:[],
						},
						{
						id: "-1381015144",
						name: "Anarta mutata",
						data: {},
						children:[],
						},
						{
						id: "-1342584733",
						name: "Anarta nigrolunata",
						data: {},
						children:[],
						},
						{
						id: "-338743852",
						name: "Anarta oregonica",
						data: {},
						children:[],
						},
						{
						id: "-1937519806",
						name: "Anarta ptilodonta",
						data: {},
						children:[],
						},
						{
						id: "1604731360",
						name: "Anarta trifolii",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1981774538",
					name: "Scotogramma",
					data: {},
					children: [
						{
						id: "35994233",
						name: "Scotogramma orida",
						data: {},
						children:[],
						},
						{
						id: "360202997",
						name: "Scotogramma stretchii",
						data: {},
						children:[],
						},
						{
						id: "75059356",
						name: "Scotogramma submarina",
						data: {},
						children:[],
						},
						{
						id: "1021307077",
						name: "Scotogramma yakima",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-2044459928",
					name: "Tridepia",
					data: {},
					children: [
						{
						id: "947983655",
						name: "Tridepia nova",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "458924756",
					name: "Coranarta",
					data: {},
					children: [
						{
						id: "962490910",
						name: "Coranarta luteola",
						data: {},
						children:[],
						},
						{
						id: "-1279574597",
						name: "Coranarta macrostigma",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1103115894",
					name: "Polia",
					data: {},
					children: [
						{
						id: "1432036195",
						name: "Polia discalis",
						data: {},
						children:[],
						},
						{
						id: "1839532191",
						name: "Polia imbrifera",
						data: {},
						children:[],
						},
						{
						id: "-1882371777",
						name: "Polia nimbosa",
						data: {},
						children:[],
						},
						{
						id: "362445903",
						name: "Polia nugatis",
						data: {},
						children:[],
						},
						{
						id: "-732295931",
						name: "Polia piniae",
						data: {},
						children:[],
						},
						{
						id: "159151651",
						name: "Polia propodea",
						data: {},
						children:[],
						},
						{
						id: "776620772",
						name: "Polia purpurissata",
						data: {},
						children:[],
						},
						{
						id: "1098508594",
						name: "Polia richardsoni",
						data: {},
						children:[],
						},
						{
						id: "1307441172",
						name: "Polia rogenhoferi",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "822280520",
					name: "Melanchra",
					data: {},
					children: [
						{
						id: "-2025513907",
						name: "Melanchra adjuncta",
						data: {},
						children:[],
						},
						{
						id: "-1744841164",
						name: "Melanchra assimilis",
						data: {},
						children:[],
						},
						{
						id: "-1051022689",
						name: "Melanchra picta",
						data: {},
						children:[],
						},
						{
						id: "2087424984",
						name: "Melanchra pulverulenta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "464343225",
					name: "Lacanobia",
					data: {},
					children: [
						{
						id: "649015382",
						name: "Lacanobia atlantica",
						data: {},
						children:[],
						},
						{
						id: "186975439",
						name: "Lacanobia grandis",
						data: {},
						children:[],
						},
						{
						id: "-1105760461",
						name: "Lacanobia nevadae",
						data: {},
						children:[],
						},
						{
						id: "-2105720423",
						name: "Lacanobia radix",
						data: {},
						children:[],
						},
						{
						id: "-1354739066",
						name: "Lacanobia subjuncta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "845520770",
					name: "Spiramater",
					data: {},
					children: [
						{
						id: "858993276",
						name: "Spiramater lutra",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "930768583",
					name: "Trichordestra",
					data: {},
					children: [
						{
						id: "-203218126",
						name: "Trichordestra dodii",
						data: {},
						children:[],
						},
						{
						id: "2107623590",
						name: "Trichordestra legitima",
						data: {},
						children:[],
						},
						{
						id: "-1697915881",
						name: "Trichordestra lilacina",
						data: {},
						children:[],
						},
						{
						id: "-520568298",
						name: "Trichordestra liquida",
						data: {},
						children:[],
						},
						{
						id: "1002205559",
						name: "Trichordestra tacoma",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "108483818",
					name: "Papestra",
					data: {},
					children: [
						{
						id: "1827847210",
						name: "Papestra biren",
						data: {},
						children:[],
						},
						{
						id: "-43193379",
						name: "Papestra brenda",
						data: {},
						children:[],
						},
						{
						id: "-213993209",
						name: "Papestra cristifera",
						data: {},
						children:[],
						},
						{
						id: "1216237305",
						name: "Papestra invalida",
						data: {},
						children:[],
						},
						{
						id: "1660176980",
						name: "Papestra quadrata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-386392696",
					name: "Hada",
					data: {},
					children: [
						{
						id: "1083291392",
						name: "Hada sutrina",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "318547486",
					name: "Mamestra",
					data: {},
					children: [
						{
						id: "2134312167",
						name: "Mamestra configurata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "224619735",
					name: "Sideridis",
					data: {},
					children: [
						{
						id: "1189292427",
						name: "Sideridis fuscolutea",
						data: {},
						children:[],
						},
						{
						id: "234875842",
						name: "Sideridis maryx",
						data: {},
						children:[],
						},
						{
						id: "841876807",
						name: "Sideridis rosea",
						data: {},
						children:[],
						},
						{
						id: "1229018989",
						name: "Sideridis uscripta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1549993259",
					name: "Hecatera",
					data: {},
					children: [
						{
						id: "227474504",
						name: "Hecatera dysodea",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "75401733",
					name: "Hadena",
					data: {},
					children: [
						{
						id: "-584118318",
						name: "Hadena caelestis",
						data: {},
						children:[],
						},
						{
						id: "329380161",
						name: "Hadena capsularis",
						data: {},
						children:[],
						},
						{
						id: "1735585124",
						name: "Hadena ectrapela",
						data: {},
						children:[],
						},
						{
						id: "-1295935714",
						name: "Hadena siskiyou",
						data: {},
						children:[],
						},
						{
						id: "-288316284",
						name: "Hadena variolata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1019311763",
					name: "Dargida",
					data: {},
					children: [
						{
						id: "-1989923299",
						name: "Dargida diffusa",
						data: {},
						children:[],
						},
						{
						id: "-301961422",
						name: "Dargida procinctus",
						data: {},
						children:[],
						},
						{
						id: "89432212",
						name: "Dargida terrapictalis",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "-15598668",
				name: "Tribe - Leucaniini",
				data: {},
				children: [
					{
					id: "423526947",
					name: "Mythimna",
					data: {},
					children: [
						{
						id: "1780332028",
						name: "Mythimna oxygala",
						data: {},
						children:[],
						},
						{
						id: "459280750",
						name: "Mythimna unipuncta",
						data: {},
						children:[],
						},
						{
						id: "1679559288",
						name: "Mythimna yukonensis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-499349958",
					name: "Leucania",
					data: {},
					children: [
						{
						id: "-811799023",
						name: "Leucania anteoclara",
						data: {},
						children:[],
						},
						{
						id: "-2050551956",
						name: "Leucania commoides",
						data: {},
						children:[],
						},
						{
						id: "212482478",
						name: "Leucania farcta",
						data: {},
						children:[],
						},
						{
						id: "754455317",
						name: "Leucania insueta",
						data: {},
						children:[],
						},
						{
						id: "-1646017413",
						name: "Leucania multilinea",
						data: {},
						children:[],
						},
						{
						id: "-483401593",
						name: "Leucania oregona",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "592825930",
				name: "Tribe - Eriopygini",
				data: {},
				children: [
					{
					id: "2030543837",
					name: "Lasionycta",
					data: {},
					children: [
						{
						id: "1078930990",
						name: "Lasionycta brunnea",
						data: {},
						children:[],
						},
						{
						id: "-149026918",
						name: "Lasionycta caesia",
						data: {},
						children:[],
						},
						{
						id: "129763463",
						name: "Lasionycta carolynae",
						data: {},
						children:[],
						},
						{
						id: "-1496200943",
						name: "Lasionycta fergusoni",
						data: {},
						children:[],
						},
						{
						id: "-1019363052",
						name: "Lasionycta gelida",
						data: {},
						children:[],
						},
						{
						id: "-1575299904",
						name: "Lasionycta haida",
						data: {},
						children:[],
						},
						{
						id: "-1669706124",
						name: "Lasionycta illima",
						data: {},
						children:[],
						},
						{
						id: "-1393281375",
						name: "Lasionycta impingens",
						data: {},
						children:[],
						},
						{
						id: "-1300329391",
						name: "Lasionycta lagganata",
						data: {},
						children:[],
						},
						{
						id: "373498978",
						name: "Lasionycta leucocycla",
						data: {},
						children:[],
						},
						{
						id: "-734013833",
						name: "Lasionycta luteola",
						data: {},
						children:[],
						},
						{
						id: "-1853535228",
						name: "Lasionycta macleani",
						data: {},
						children:[],
						},
						{
						id: "1644964245",
						name: "Lasionycta mutilata",
						data: {},
						children:[],
						},
						{
						id: "829858197",
						name: "Lasionycta perplexa",
						data: {},
						children:[],
						},
						{
						id: "-11011967",
						name: "Lasionycta perplexella",
						data: {},
						children:[],
						},
						{
						id: "1956814129",
						name: "Lasionycta poca",
						data: {},
						children:[],
						},
						{
						id: "1717474683",
						name: "Lasionycta promulsa",
						data: {},
						children:[],
						},
						{
						id: "-1792755786",
						name: "Lasionycta pulverea",
						data: {},
						children:[],
						},
						{
						id: "-148658953",
						name: "Lasionycta quadrilunata",
						data: {},
						children:[],
						},
						{
						id: "1388551796",
						name: "Lasionycta sasquatch",
						data: {},
						children:[],
						},
						{
						id: "2133690070",
						name: "Lasionycta secedens",
						data: {},
						children:[],
						},
						{
						id: "-943772601",
						name: "Lasionycta silacea",
						data: {},
						children:[],
						},
						{
						id: "-1662254895",
						name: "Lasionycta subfuscula",
						data: {},
						children:[],
						},
						{
						id: "902539202",
						name: "Lasionycta taigata",
						data: {},
						children:[],
						},
						{
						id: "-1205033273",
						name: "Lasionycta uniformis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-961144373",
					name: "Psammopolia",
					data: {},
					children: [
						{
						id: "-1034995166",
						name: "Psammopolia arietis",
						data: {},
						children:[],
						},
						{
						id: "-1872141372",
						name: "Psammopolia wyatti",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1344112002",
					name: "Lacinipolia",
					data: {},
					children: [
						{
						id: "-762240485",
						name: "Lacinipolia anguina",
						data: {},
						children:[],
						},
						{
						id: "366181427",
						name: "Lacinipolia comis",
						data: {},
						children:[],
						},
						{
						id: "-1724759257",
						name: "Lacinipolia cuneata",
						data: {},
						children:[],
						},
						{
						id: "-766902828",
						name: "Lacinipolia davena",
						data: {},
						children:[],
						},
						{
						id: "2135167969",
						name: "Lacinipolia longiclava",
						data: {},
						children:[],
						},
						{
						id: "1375365361",
						name: "Lacinipolia lorea",
						data: {},
						children:[],
						},
						{
						id: "407203625",
						name: "Lacinipolia lustralis",
						data: {},
						children:[],
						},
						{
						id: "1562778208",
						name: "Lacinipolia meditata",
						data: {},
						children:[],
						},
						{
						id: "1580205869",
						name: "Lacinipolia olivacea",
						data: {},
						children:[],
						},
						{
						id: "-516137770",
						name: "Lacinipolia patalis",
						data: {},
						children:[],
						},
						{
						id: "38316132",
						name: "Lacinipolia pensilis",
						data: {},
						children:[],
						},
						{
						id: "905749868",
						name: "Lacinipolia quadrilineata",
						data: {},
						children:[],
						},
						{
						id: "-1529756797",
						name: "Lacinipolia rectilinea",
						data: {},
						children:[],
						},
						{
						id: "1829615300",
						name: "Lacinipolia renigera",
						data: {},
						children:[],
						},
						{
						id: "161038946",
						name: "Lacinipolia stricta",
						data: {},
						children:[],
						},
						{
						id: "1751970071",
						name: "Lacinipolia strigicollis",
						data: {},
						children:[],
						},
						{
						id: "-796405363",
						name: "Lacinipolia vicina",
						data: {},
						children:[],
						},
						{
						id: "-1292961481",
						name: "Lacinipolia vittula",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "22004030",
					name: "Trichocerapoda",
					data: {},
					children: [
						{
						id: "842442490",
						name: "Trichocerapoda oblita",
						data: {},
						children:[],
						},
						{
						id: "1891695452",
						name: "Trichocerapoda strigata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "295205770",
					name: "Anhimella",
					data: {},
					children: [
						{
						id: "199278202",
						name: "Anhimella contrahens",
						data: {},
						children:[],
						},
						{
						id: "915011685",
						name: "Anhimella pacifica",
						data: {},
						children:[],
						},
						{
						id: "-1795655135",
						name: "Anhimella perbrunnea",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1692121179",
					name: "Homorthodes",
					data: {},
					children: [
						{
						id: "-698407621",
						name: "Homorthodes carneola",
						data: {},
						children:[],
						},
						{
						id: "1528716195",
						name: "Homorthodes communis",
						data: {},
						children:[],
						},
						{
						id: "-1082028025",
						name: "Homorthodes discreta",
						data: {},
						children:[],
						},
						{
						id: "1089663752",
						name: "Homorthodes fractura",
						data: {},
						children:[],
						},
						{
						id: "-1148039847",
						name: "Homorthodes furfurata",
						data: {},
						children:[],
						},
						{
						id: "-814283657",
						name: "Homorthodes hanhami",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1508335659",
					name: "Protorthodes",
					data: {},
					children: [
						{
						id: "-309689169",
						name: "Protorthodes alfkenii",
						data: {},
						children:[],
						},
						{
						id: "803097494",
						name: "Protorthodes curtica",
						data: {},
						children:[],
						},
						{
						id: "-539312589",
						name: "Protorthodes incincta",
						data: {},
						children:[],
						},
						{
						id: "2065963392",
						name: "Protorthodes oviduca",
						data: {},
						children:[],
						},
						{
						id: "726741341",
						name: "Protorthodes perforata",
						data: {},
						children:[],
						},
						{
						id: "-1058353011",
						name: "Protorthodes rufula",
						data: {},
						children:[],
						},
						{
						id: "1505672167",
						name: "Protorthodes texana",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "435824180",
					name: "Ulolonche",
					data: {},
					children: [
						{
						id: "1958072766",
						name: "Ulolonche dilecta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1424742244",
					name: "Pseudorthodes",
					data: {},
					children: [
						{
						id: "1939290443",
						name: "Pseudorthodes irrorata",
						data: {},
						children:[],
						},
						{
						id: "1395117038",
						name: "Pseudorthodes puerilis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-443040962",
					name: "Orthodes",
					data: {},
					children: [
						{
						id: "-647227528",
						name: "Orthodes delecta",
						data: {},
						children:[],
						},
						{
						id: "578799581",
						name: "Orthodes detracta",
						data: {},
						children:[],
						},
						{
						id: "-1833613514",
						name: "Orthodes goodelli",
						data: {},
						children:[],
						},
						{
						id: "-689514638",
						name: "&quot;Orthodes&quot; noverca",
						data: {},
						children:[],
						},
						{
						id: "76491163",
						name: "Orthodes obscura",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1719555077",
					name: "Zosteropoda",
					data: {},
					children: [
						{
						id: "1449311462",
						name: "Zosteropoda hirtipes",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				{
				id: "-867769526",
				name: "Tribe - Noctuini",
				data: {},
				children: [
					{
					id: "-35163040",
					name: "Peridroma",
					data: {},
					children: [
						{
						id: "-168014831",
						name: "Peridroma saucia",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1680693854",
					name: "Anicla",
					data: {},
					children: [
						{
						id: "81517261",
						name: "Anicla exuberans",
						data: {},
						children:[],
						},
						{
						id: "-162978101",
						name: "Anicla tepperi",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1894414953",
					name: "Striacosta",
					data: {},
					children: [
						{
						id: "-1457233899",
						name: "Striacosta albicosta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-415580080",
					name: "Actebia",
					data: {},
					children: [
						{
						id: "-712912655",
						name: "Actebia balanitis",
						data: {},
						children:[],
						},
						{
						id: "1124980308",
						name: "Actebia fennica",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-734268265",
					name: "Dichagyris",
					data: {},
					children: [
						{
						id: "-387313250",
						name: "Dichagyris grotei",
						data: {},
						children:[],
						},
						{
						id: "-218259356",
						name: "Dichagyris variabilis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1430570859",
					name: "Eucoptocnemis",
					data: {},
					children: [
						{
						id: "1067444450",
						name: "Eucoptocnemis canescens",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-2039063366",
					name: "Richia",
					data: {},
					children: [
						{
						id: "-1906685614",
						name: "Richia parentalis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-668061159",
					name: "Copablepharon",
					data: {},
					children: [
						{
						id: "-1103813180",
						name: "Copablepharon absidum",
						data: {},
						children:[],
						},
						{
						id: "-1994186682",
						name: "Copablepharon atrinotum",
						data: {},
						children:[],
						},
						{
						id: "-2059815003",
						name: "Copablepharon canariana",
						data: {},
						children:[],
						},
						{
						id: "1386920734",
						name: "Copablepharon columbia",
						data: {},
						children:[],
						},
						{
						id: "-1082975249",
						name: "Copablepharon fuscum",
						data: {},
						children:[],
						},
						{
						id: "-639701969",
						name: "Copablepharon grandis",
						data: {},
						children:[],
						},
						{
						id: "1261631594",
						name: "Copablepharon mutans",
						data: {},
						children:[],
						},
						{
						id: "-1268691085",
						name: "Copablepharon spiritum",
						data: {},
						children:[],
						},
						{
						id: "2098733851",
						name: "Copablepharon viridisparsa",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1500786147",
					name: "Protogygia",
					data: {},
					children: [
						{
						id: "991419858",
						name: "Protogygia album",
						data: {},
						children:[],
						},
						{
						id: "17280202",
						name: "Protogygia arena",
						data: {},
						children:[],
						},
						{
						id: "-1449135369",
						name: "Protogygia comstocki",
						data: {},
						children:[],
						},
						{
						id: "-1637823254",
						name: "Protogygia enalaga",
						data: {},
						children:[],
						},
						{
						id: "-2132788958",
						name: "Protogygia lagena",
						data: {},
						children:[],
						},
						{
						id: "-1466665339",
						name: "Protogygia milleri",
						data: {},
						children:[],
						},
						{
						id: "-1287307911",
						name: "Protogygia postera",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "574463267",
					name: "Euxoa",
					data: {},
					children: [
						{
						id: "1472973366",
						name: "Euxoa aberrans",
						data: {},
						children:[],
						},
						{
						id: "-1134713586",
						name: "Euxoa adumbrata",
						data: {},
						children:[],
						},
						{
						id: "-861791393",
						name: "Euxoa aequalis",
						data: {},
						children:[],
						},
						{
						id: "-1241041722",
						name: "Euxoa agema",
						data: {},
						children:[],
						},
						{
						id: "-686914785",
						name: "Euxoa albipennis",
						data: {},
						children:[],
						},
						{
						id: "-1220004707",
						name: "Euxoa altens",
						data: {},
						children:[],
						},
						{
						id: "-848386924",
						name: "Euxoa annulipes",
						data: {},
						children:[],
						},
						{
						id: "-2039242290",
						name: "Euxoa apopsis",
						data: {},
						children:[],
						},
						{
						id: "-348814694",
						name: "Euxoa atomaris",
						data: {},
						children:[],
						},
						{
						id: "-1034647629",
						name: "Euxoa atristrigata",
						data: {},
						children:[],
						},
						{
						id: "469522194",
						name: "Euxoa auripennis",
						data: {},
						children:[],
						},
						{
						id: "-1792092078",
						name: "Euxoa aurulenta",
						data: {},
						children:[],
						},
						{
						id: "-1647530351",
						name: "Euxoa auxiliaris",
						data: {},
						children:[],
						},
						{
						id: "2063830886",
						name: "Euxoa basalis",
						data: {},
						children:[],
						},
						{
						id: "-431648594",
						name: "Euxoa bicollaris",
						data: {},
						children:[],
						},
						{
						id: "-1599544213",
						name: "Euxoa bifasciata",
						data: {},
						children:[],
						},
						{
						id: "-423621114",
						name: "Euxoa biformata",
						data: {},
						children:[],
						},
						{
						id: "299569898",
						name: "Euxoa bochus",
						data: {},
						children:[],
						},
						{
						id: "1406757344",
						name: "Euxoa brevipennis",
						data: {},
						children:[],
						},
						{
						id: "-1872356845",
						name: "Euxoa brunneigera",
						data: {},
						children:[],
						},
						{
						id: "-144794453",
						name: "Euxoa campestris",
						data: {},
						children:[],
						},
						{
						id: "894443255",
						name: "Euxoa cana",
						data: {},
						children:[],
						},
						{
						id: "267842142",
						name: "Euxoa castanea",
						data: {},
						children:[],
						},
						{
						id: "-1707429561",
						name: "Euxoa catenula",
						data: {},
						children:[],
						},
						{
						id: "-2139006568",
						name: "Euxoa choris",
						data: {},
						children:[],
						},
						{
						id: "-795479322",
						name: "Euxoa cicatricosa",
						data: {},
						children:[],
						},
						{
						id: "1538087250",
						name: "Euxoa cinereopallidus",
						data: {},
						children:[],
						},
						{
						id: "1342119838",
						name: "Euxoa citricolor",
						data: {},
						children:[],
						},
						{
						id: "-32552516",
						name: "Euxoa comosa",
						data: {},
						children:[],
						},
						{
						id: "-1807138959",
						name: "Euxoa cona",
						data: {},
						children:[],
						},
						{
						id: "-458598770",
						name: "Euxoa costata",
						data: {},
						children:[],
						},
						{
						id: "-189403806",
						name: "Euxoa dargo",
						data: {},
						children:[],
						},
						{
						id: "2130263862",
						name: "Euxoa declarata",
						data: {},
						children:[],
						},
						{
						id: "-1972344598",
						name: "Euxoa difformis",
						data: {},
						children:[],
						},
						{
						id: "-1354856588",
						name: "Euxoa divergens",
						data: {},
						children:[],
						},
						{
						id: "-1580119762",
						name: "Euxoa dodi",
						data: {},
						children:[],
						},
						{
						id: "957741503",
						name: "Euxoa edictalis",
						data: {},
						children:[],
						},
						{
						id: "-1623796648",
						name: "Euxoa emma",
						data: {},
						children:[],
						},
						{
						id: "317748572",
						name: "Euxoa excogita",
						data: {},
						children:[],
						},
						{
						id: "1921537094",
						name: "Euxoa extranea",
						data: {},
						children:[],
						},
						{
						id: "440517578",
						name: "Euxoa faulkneri",
						data: {},
						children:[],
						},
						{
						id: "-607116831",
						name: "Euxoa flavicollis",
						data: {},
						children:[],
						},
						{
						id: "1072769459",
						name: "Euxoa foeminalis",
						data: {},
						children:[],
						},
						{
						id: "-70608296",
						name: "Euxoa furtivus",
						data: {},
						children:[],
						},
						{
						id: "-618068801",
						name: "Euxoa hardwicki",
						data: {},
						children:[],
						},
						{
						id: "917135577",
						name: "Euxoa henrietta",
						data: {},
						children:[],
						},
						{
						id: "-496656028",
						name: "Euxoa hollemani",
						data: {},
						children:[],
						},
						{
						id: "1040898555",
						name: "Euxoa idahoensis",
						data: {},
						children:[],
						},
						{
						id: "123930915",
						name: "Euxoa infausta",
						data: {},
						children:[],
						},
						{
						id: "-773737268",
						name: "Euxoa infracta",
						data: {},
						children:[],
						},
						{
						id: "-37429222",
						name: "Euxoa intermontana",
						data: {},
						children:[],
						},
						{
						id: "-1540346450",
						name: "Euxoa intrita",
						data: {},
						children:[],
						},
						{
						id: "-969975802",
						name: "Euxoa laetificans",
						data: {},
						children:[],
						},
						{
						id: "467469935",
						name: "Euxoa latro",
						data: {},
						children:[],
						},
						{
						id: "-927436653",
						name: "Euxoa lewisi",
						data: {},
						children:[],
						},
						{
						id: "1318057320",
						name: "Euxoa lillooet",
						data: {},
						children:[],
						},
						{
						id: "-190821915",
						name: "Euxoa lineifrons",
						data: {},
						children:[],
						},
						{
						id: "122318214",
						name: "Euxoa lucida",
						data: {},
						children:[],
						},
						{
						id: "-313961618",
						name: "Euxoa macleani",
						data: {},
						children:[],
						},
						{
						id: "415689178",
						name: "Euxoa maimes",
						data: {},
						children:[],
						},
						{
						id: "-1086854664",
						name: "Euxoa manitobana",
						data: {},
						children:[],
						},
						{
						id: "-93579112",
						name: "Euxoa medialis",
						data: {},
						children:[],
						},
						{
						id: "1631174906",
						name: "Euxoa melura",
						data: {},
						children:[],
						},
						{
						id: "591273605",
						name: "Euxoa messoria",
						data: {},
						children:[],
						},
						{
						id: "966143757",
						name: "Euxoa mimallonis",
						data: {},
						children:[],
						},
						{
						id: "-63059889",
						name: "Euxoa misturata",
						data: {},
						children:[],
						},
						{
						id: "432530191",
						name: "Euxoa mitis",
						data: {},
						children:[],
						},
						{
						id: "1995800316",
						name: "Euxoa moerens",
						data: {},
						children:[],
						},
						{
						id: "-336252747",
						name: "Euxoa munis",
						data: {},
						children:[],
						},
						{
						id: "146946714",
						name: "Euxoa murdocki",
						data: {},
						children:[],
						},
						{
						id: "-989121221",
						name: "Euxoa nevada",
						data: {},
						children:[],
						},
						{
						id: "-299076989",
						name: "Euxoa nomas",
						data: {},
						children:[],
						},
						{
						id: "-1117413267",
						name: "Euxoa nostra",
						data: {},
						children:[],
						},
						{
						id: "982255897",
						name: "Euxoa obeliscoides",
						data: {},
						children:[],
						},
						{
						id: "-1171782928",
						name: "Euxoa oblongistigma",
						data: {},
						children:[],
						},
						{
						id: "1386805454",
						name: "Euxoa occidentalis",
						data: {},
						children:[],
						},
						{
						id: "-1663195204",
						name: "Euxoa ochrogaster",
						data: {},
						children:[],
						},
						{
						id: "-1724762117",
						name: "Euxoa olivalis",
						data: {},
						children:[],
						},
						{
						id: "-1508247680",
						name: "Euxoa olivia",
						data: {},
						children:[],
						},
						{
						id: "1047635961",
						name: "Euxoa pallidimacula",
						data: {},
						children:[],
						},
						{
						id: "-1703227128",
						name: "Euxoa pallipennis",
						data: {},
						children:[],
						},
						{
						id: "-1838571450",
						name: "Euxoa perexcellens",
						data: {},
						children:[],
						},
						{
						id: "-1437888240",
						name: "Euxoa permixta",
						data: {},
						children:[],
						},
						{
						id: "-308754875",
						name: "Euxoa perolivalis",
						data: {},
						children:[],
						},
						{
						id: "-616461689",
						name: "Euxoa perpolita",
						data: {},
						children:[],
						},
						{
						id: "-643932245",
						name: "Euxoa plagigera",
						data: {},
						children:[],
						},
						{
						id: "-427712586",
						name: "Euxoa pleuritica",
						data: {},
						children:[],
						},
						{
						id: "1384074974",
						name: "Euxoa pluralis",
						data: {},
						children:[],
						},
						{
						id: "-1919497864",
						name: "Euxoa punctigera",
						data: {},
						children:[],
						},
						{
						id: "-659548662",
						name: "Euxoa quadridentata",
						data: {},
						children:[],
						},
						{
						id: "843177794",
						name: "Euxoa quebecensis",
						data: {},
						children:[],
						},
						{
						id: "834079612",
						name: "Euxoa recula",
						data: {},
						children:[],
						},
						{
						id: "-1875678828",
						name: "Euxoa ridingsiana",
						data: {},
						children:[],
						},
						{
						id: "-2083134048",
						name: "Euxoa rockburnei",
						data: {},
						children:[],
						},
						{
						id: "-474503005",
						name: "Euxoa rufula",
						data: {},
						children:[],
						},
						{
						id: "-1917987888",
						name: "Euxoa satiens",
						data: {},
						children:[],
						},
						{
						id: "-2021042303",
						name: "Euxoa satis",
						data: {},
						children:[],
						},
						{
						id: "1548230515",
						name: "Euxoa scotogrammoides",
						data: {},
						children:[],
						},
						{
						id: "1565315595",
						name: "Euxoa septentrionalis",
						data: {},
						children:[],
						},
						{
						id: "-1515831081",
						name: "Euxoa servitus",
						data: {},
						children:[],
						},
						{
						id: "1780625782",
						name: "Euxoa setonia",
						data: {},
						children:[],
						},
						{
						id: "-78070426",
						name: "Euxoa shasta",
						data: {},
						children:[],
						},
						{
						id: "921954054",
						name: "Euxoa silens",
						data: {},
						children:[],
						},
						{
						id: "-1903293371",
						name: "Euxoa simona",
						data: {},
						children:[],
						},
						{
						id: "-34936954",
						name: "Euxoa simulata",
						data: {},
						children:[],
						},
						{
						id: "-1005700216",
						name: "Euxoa subandera",
						data: {},
						children:[],
						},
						{
						id: "1383509564",
						name: "Euxoa taura",
						data: {},
						children:[],
						},
						{
						id: "-368931012",
						name: "Euxoa terrenus",
						data: {},
						children:[],
						},
						{
						id: "1162805906",
						name: "Euxoa tessellata",
						data: {},
						children:[],
						},
						{
						id: "-880282457",
						name: "Euxoa tocoyae",
						data: {},
						children:[],
						},
						{
						id: "1198905034",
						name: "Euxoa trifasciata",
						data: {},
						children:[],
						},
						{
						id: "1696903792",
						name: "Euxoa tristicula",
						data: {},
						children:[],
						},
						{
						id: "1205942811",
						name: "Euxoa tronellus",
						data: {},
						children:[],
						},
						{
						id: "1158796141",
						name: "Euxoa ustulata",
						data: {},
						children:[],
						},
						{
						id: "1568053853",
						name: "Euxoa vallus",
						data: {},
						children:[],
						},
						{
						id: "-541466665",
						name: "Euxoa vetusta",
						data: {},
						children:[],
						},
						{
						id: "2138359844",
						name: "Euxoa westermanni",
						data: {},
						children:[],
						},
						{
						id: "-1038744690",
						name: "Euxoa wilsoni",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-900579317",
					name: "Feltia",
					data: {},
					children: [
						{
						id: "-912142691",
						name: "Feltia herilis",
						data: {},
						children:[],
						},
						{
						id: "1996654304",
						name: "Feltia jaculifera",
						data: {},
						children:[],
						},
						{
						id: "-1012012342",
						name: "Feltia mollis",
						data: {},
						children:[],
						},
						{
						id: "-314564745",
						name: "Feltia nigrita",
						data: {},
						children:[],
						},
						{
						id: "1319470403",
						name: "Feltia subgothica",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1312020532",
					name: "Agrotis",
					data: {},
					children: [
						{
						id: "1267119619",
						name: "Agrotis antica",
						data: {},
						children:[],
						},
						{
						id: "1846757124",
						name: "Agrotis daedalus",
						data: {},
						children:[],
						},
						{
						id: "376473801",
						name: "Agrotis gravis",
						data: {},
						children:[],
						},
						{
						id: "2132394994",
						name: "Agrotis ipsilon",
						data: {},
						children:[],
						},
						{
						id: "-1264276883",
						name: "Agrotis longicornis",
						data: {},
						children:[],
						},
						{
						id: "2077200329",
						name: "Agrotis obliqua",
						data: {},
						children:[],
						},
						{
						id: "281371639",
						name: "Agrotis orthogonia",
						data: {},
						children:[],
						},
						{
						id: "479430399",
						name: "Agrotis ruta",
						data: {},
						children:[],
						},
						{
						id: "-772649444",
						name: "Agrotis vancouverensis",
						data: {},
						children:[],
						},
						{
						id: "-1875900444",
						name: "Agrotis venerabilis",
						data: {},
						children:[],
						},
						{
						id: "-1351860104",
						name: "Agrotis vetusta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1850371443",
					name: "Ochropleura",
					data: {},
					children: [
						{
						id: "628211305",
						name: "Ochropleura implecta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-268766930",
					name: "Diarsia",
					data: {},
					children: [
						{
						id: "1544484305",
						name: "Diarsia calgary",
						data: {},
						children:[],
						},
						{
						id: "1060669338",
						name: "Diarsia dislocata",
						data: {},
						children:[],
						},
						{
						id: "-1816952983",
						name: "Diarsia esurialis",
						data: {},
						children:[],
						},
						{
						id: "174929585",
						name: "Diarsia rosaria",
						data: {},
						children:[],
						},
						{
						id: "-889585257",
						name: "Diarsia rubifera",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-119184178",
					name: "Cerastis",
					data: {},
					children: [
						{
						id: "-2122530805",
						name: "Cerastis enigmatica",
						data: {},
						children:[],
						},
						{
						id: "1907643817",
						name: "Cerastis gloriosa",
						data: {},
						children:[],
						},
						{
						id: "1018340239",
						name: "Cerastis salicarum",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1077772644",
					name: "Paradiarsia",
					data: {},
					children: [
						{
						id: "1084632342",
						name: "Paradiarsia littoralis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1653769590",
					name: "Lycophotia",
					data: {},
					children: [
						{
						id: "-344815066",
						name: "Lycophotia phyllophora",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1461602862",
					name: "Rhyacia",
					data: {},
					children: [
						{
						id: "1555925947",
						name: "Rhyacia clemens",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "882559131",
					name: "Chersotis",
					data: {},
					children: [
						{
						id: "13113189",
						name: "Chersotis juncta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-457805240",
					name: "Noctua",
					data: {},
					children: [
						{
						id: "-1455781083",
						name: "Noctua pronuba",
						data: {},
						children:[],
						},
						{
						id: "1158254881",
						name: "Noctua comes",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1310711072",
					name: "Cryptocala",
					data: {},
					children: [
						{
						id: "106573711",
						name: "Cryptocala acadiensis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "946081213",
					name: "Spaelotis",
					data: {},
					children: [
						{
						id: "1751680920",
						name: "Spaelotis bicava",
						data: {},
						children:[],
						},
						{
						id: "876880783",
						name: "Spaelotis clandestina",
						data: {},
						children:[],
						},
						{
						id: "-1868656775",
						name: "Spaelotis havilae",
						data: {},
						children:[],
						},
						{
						id: "-500042600",
						name: "Spaelotis unicava",
						data: {},
						children:[],
						},
						{
						id: "1868701811",
						name: "Spaelotis velicava",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-2024389315",
					name: "Eurois",
					data: {},
					children: [
						{
						id: "458742937",
						name: "Eurois astricta",
						data: {},
						children:[],
						},
						{
						id: "-357564734",
						name: "Eurois nigra",
						data: {},
						children:[],
						},
						{
						id: "-620039406",
						name: "Eurois occulta",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "475899380",
					name: "Graphiphora",
					data: {},
					children: [
						{
						id: "-1482034214",
						name: "Graphiphora augur",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1188859815",
					name: "Anaplectoides",
					data: {},
					children: [
						{
						id: "-1578144609",
						name: "Anaplectoides prasina",
						data: {},
						children:[],
						},
						{
						id: "628542898",
						name: "Anaplectoides pressus",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "468605990",
					name: "Aplectoides",
					data: {},
					children: [
						{
						id: "-1209516342",
						name: "Aplectoides condita",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "350988806",
					name: "Eueretagrotis",
					data: {},
					children: [
						{
						id: "781222843",
						name: "Eueretagrotis perattentus",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1100287919",
					name: "Archanarta",
					data: {},
					children:[],
					},
					{
					id: "1308036244",
					name: "Xestia",
					data: {},
					children: [
						{
						id: "594084534",
						name: "Xestia atrata",
						data: {},
						children:[],
						},
						{
						id: "1448617561",
						name: "Xestia bryanti",
						data: {},
						children:[],
						},
						{
						id: "-1880955389",
						name: "Xestia c-nigrum",
						data: {},
						children:[],
						},
						{
						id: "1416812290",
						name: "Xestia cinerascens",
						data: {},
						children:[],
						},
						{
						id: "-380338250",
						name: "Xestia fabulosa",
						data: {},
						children:[],
						},
						{
						id: "1814490728",
						name: "Xestia finatimis",
						data: {},
						children:[],
						},
						{
						id: "1864471285",
						name: "Xestia homogena",
						data: {},
						children:[],
						},
						{
						id: "107821976",
						name: "Xestia imperita",
						data: {},
						children:[],
						},
						{
						id: "-1765709430",
						name: "Xestia infimatis",
						data: {},
						children:[],
						},
						{
						id: "1784634405",
						name: "Xestia intermedia",
						data: {},
						children:[],
						},
						{
						id: "-1597859379",
						name: "Xestia lupa",
						data: {},
						children:[],
						},
						{
						id: "-911445555",
						name: "Xestia lyngei",
						data: {},
						children:[],
						},
						{
						id: "351709119",
						name: "Xestia maculata",
						data: {},
						children:[],
						},
						{
						id: "-1746942923",
						name: "Xestia mixta",
						data: {},
						children:[],
						},
						{
						id: "-978518328",
						name: "Xestia mustelina",
						data: {},
						children:[],
						},
						{
						id: "1615242888",
						name: "Xestia oblata",
						data: {},
						children:[],
						},
						{
						id: "676800964",
						name: "Xestia okakensis",
						data: {},
						children:[],
						},
						{
						id: "721163170",
						name: "Xestia perquiritata",
						data: {},
						children:[],
						},
						{
						id: "1660243816",
						name: "Xestia plebeia",
						data: {},
						children:[],
						},
						{
						id: "-1055587644",
						name: "Xestia praevia",
						data: {},
						children:[],
						},
						{
						id: "1590039723",
						name: "Xestia smithii",
						data: {},
						children:[],
						},
						{
						id: "-1292372856",
						name: "Xestia speciosa",
						data: {},
						children:[],
						},
						{
						id: "-1756559569",
						name: "Xestia tecta",
						data: {},
						children:[],
						},
						{
						id: "-1630535264",
						name: "Xestia ursae",
						data: {},
						children:[],
						},
						{
						id: "1219033541",
						name: "Xestia vernilis",
						data: {},
						children:[],
						},
						{
						id: "688928932",
						name: "Xestia verniloides",
						data: {},
						children:[],
						},
						{
						id: "-1331615508",
						name: "Xestia xanthographa",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1133048892",
					name: "Coenophila",
					data: {},
					children: [
						{
						id: "-714345009",
						name: "Coenophila opacifrons",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "379774468",
					name: "Prognorisma",
					data: {},
					children: [
						{
						id: "164414625",
						name: "Prognorisma substrigata",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1237062610",
					name: "Agnorisma",
					data: {},
					children: [
						{
						id: "340531759",
						name: "Agnorisma bugrai",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "715894847",
					name: "Pseudohermonassa",
					data: {},
					children: [
						{
						id: "-562063268",
						name: "Pseudohermonassa flavotincta",
						data: {},
						children:[],
						},
						{
						id: "1065291179",
						name: "Pseudohermonassa tenuicula",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1631048769",
					name: "Setagrotis",
					data: {},
					children: [
						{
						id: "535020902",
						name: "Setagrotis pallidicollis",
						data: {},
						children:[],
						},
						{
						id: "-794419459",
						name: "Setagrotis radiola",
						data: {},
						children:[],
						},
						{
						id: "-708918386",
						name: "Setagrotis vocalis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1699824281",
					name: "Tesagrotis",
					data: {},
					children: [
						{
						id: "-1290945698",
						name: "Tesagrotis amia",
						data: {},
						children:[],
						},
						{
						id: "1944062089",
						name: "Tesagrotis atrifrons",
						data: {},
						children:[],
						},
						{
						id: "489279660",
						name: "Tesagrotis corrodera",
						data: {},
						children:[],
						},
						{
						id: "1368264472",
						name: "Tesagrotis piscipellis",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "1709319362",
					name: "Adelphagrotis",
					data: {},
					children: [
						{
						id: "-1447620300",
						name: "Adelphagrotis carissima",
						data: {},
						children:[],
						},
						{
						id: "1360993017",
						name: "Adelphagrotis indeterminata",
						data: {},
						children:[],
						},
						{
						id: "-1322232433",
						name: "Adelphagrotis stellaris",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-1725469309",
					name: "Parabagrotis",
					data: {},
					children: [
						{
						id: "-557203942",
						name: "Parabagrotis cupidissima",
						data: {},
						children:[],
						},
						{
						id: "-1295531768",
						name: "Parabagrotis exsertistigma",
						data: {},
						children:[],
						},
						{
						id: "-287390219",
						name: "Parabagrotis formalis",
						data: {},
						children:[],
						},
						{
						id: "185369175",
						name: "Parabagrotis insularis",
						data: {},
						children:[],
						},
						{
						id: "1986456681",
						name: "Parabagrotis sulinaris",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "316329884",
					name: "Protolampra",
					data: {},
					children: [
						{
						id: "149156735",
						name: "Protolampra rufipectus",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "544095009",
					name: "Abagrotis",
					data: {},
					children: [
						{
						id: "-644585357",
						name: "Abagrotis alampeta",
						data: {},
						children:[],
						},
						{
						id: "44108499",
						name: "Abagrotis apposita",
						data: {},
						children:[],
						},
						{
						id: "-1176833642",
						name: "Abagrotis baueri",
						data: {},
						children:[],
						},
						{
						id: "-645842679",
						name: "Abagrotis brunneipennis",
						data: {},
						children:[],
						},
						{
						id: "-2065936744",
						name: "Abagrotis cupida",
						data: {},
						children:[],
						},
						{
						id: "1588426124",
						name: "Abagrotis dickeli",
						data: {},
						children:[],
						},
						{
						id: "1177343963",
						name: "Abagrotis discoidalis",
						data: {},
						children:[],
						},
						{
						id: "1062683336",
						name: "Abagrotis dodi",
						data: {},
						children:[],
						},
						{
						id: "-51547632",
						name: "Abagrotis duanca",
						data: {},
						children:[],
						},
						{
						id: "644943813",
						name: "Abagrotis erratica",
						data: {},
						children:[],
						},
						{
						id: "-1001862737",
						name: "Abagrotis forbesi",
						data: {},
						children:[],
						},
						{
						id: "-952911817",
						name: "Abagrotis glenni",
						data: {},
						children:[],
						},
						{
						id: "1699145953",
						name: "Abagrotis hermina",
						data: {},
						children:[],
						},
						{
						id: "-2105968227",
						name: "Abagrotis mirabilis",
						data: {},
						children:[],
						},
						{
						id: "-1521187175",
						name: "Abagrotis nanalis",
						data: {},
						children:[],
						},
						{
						id: "-1068150114",
						name: "Abagrotis nefascia",
						data: {},
						children:[],
						},
						{
						id: "-150804392",
						name: "Abagrotis orbis",
						data: {},
						children:[],
						},
						{
						id: "-1615666835",
						name: "Abagrotis petalama",
						data: {},
						children:[],
						},
						{
						id: "-1353755151",
						name: "Abagrotis placida",
						data: {},
						children:[],
						},
						{
						id: "-981905713",
						name: "Abagrotis pulchrata",
						data: {},
						children:[],
						},
						{
						id: "-714852002",
						name: "Abagrotis reedi",
						data: {},
						children:[],
						},
						{
						id: "-335905390",
						name: "Abagrotis rubicundis",
						data: {},
						children:[],
						},
						{
						id: "-1226766150",
						name: "Abagrotis scopeops",
						data: {},
						children:[],
						},
						{
						id: "1703890571",
						name: "Abagrotis trigona",
						data: {},
						children:[],
						},
						{
						id: "-1452156270",
						name: "Abagrotis turbulenta",
						data: {},
						children:[],
						},
						{
						id: "800873077",
						name: "Abagrotis variata",
						data: {},
						children:[],
						},
						{
						id: "-1776589410",
						name: "Abagrotis vittifrons",
						data: {},
						children:[],
						},
						]
					},
					{
					id: "-636229986",
					name: "Pronoctua",
					data: {},
					children: [
						{
						id: "-986829421",
						name: "Pronoctua craboi",
						data: {},
						children:[],
						},
						{
						id: "-1353346672",
						name: "Pronoctua peabodyae",
						data: {},
						children:[],
						},
						{
						id: "2062352033",
						name: "Pronoctua pyrophiloides",
						data: {},
						children:[],
						},
						{
						id: "751583009",
						name: "Pronoctua typica",
						data: {},
						children:[],
						},
						]
					},
					]
				},
				]
			},
			]
		},
		]
};


//Create a new ST instance  
var st = new $jit.ST({  
    //id of viz container element  
    injectInto: 'infovis',  
    //set duration for the animation  
    duration: 800,  
    //set animation transition type  
    transition: $jit.Trans.Quart.easeInOut,  
    //set distance between node and its children  
    levelDistance: 90,  
    //enable panning  
    Navigation: {  
      enable:true,  
      panning:true  
    },  
    //set node and edge styles  
    //set overridable=true for styling individual  
    //nodes or edges  
    Node: {  
        width: 50+'px',
		autoHeight: true,		
        type: 'rectangle',  
        color: '#aaa',  
        overridable: true  
    },  
      
    Edge: {  
        type: 'bezier',  
        overridable: true  
    },  
      
    onBeforeCompute: function(node){  
        Log.write("loading " + node.name);  
    },  
      
    onAfterCompute: function(){  
        Log.write("done");  
    },  
      
    //This method is called on DOM label creation.  
    //Use this method to add event handlers and styles to  
    //your node.  
    onCreateLabel: function(label, node){  
        label.id = node.id;              
        label.innerHTML = node.name;  
        label.onclick = function(){  
              st.onClick(node.id);
        };  
        //set label styles  
        var style = label.style;  
        //style.width = 100 + 'px';  
        //style.height = 40 + 'px';              
        style.cursor = 'pointer';  
        style.color = '#000000';  
        style.fontSize = '1em';  
        style.textAlign= 'left';  
        style.paddingTop = '3px';  
    },  
      
    //This method is called right before plotting  
    //a node. It's useful for changing an individual node  
    //style properties before plotting it.  
    //The data properties prefixed with a dollar  
    //sign will override the global node style properties.  
    onBeforePlotNode: function(node){  
        //add some color to the nodes in the path between the  
        //root node and the selected node.  
        if (node.selected) {  
            node.data.$color = "#ff7";  
        }  
        else {  
            delete node.data.$color;  
            //if the node belongs to the last plotted level  
            if(!node.anySubnode("exist")) {  
                //count children number  
                var count = 0;  
                node.eachSubnode(function(n) { count++; });  
                //assign a node color based on  
                //how many children it has  
                node.data.$color = ['#FF0000', '#FF2A2A', '#FF5555', '#FF7F7F', '#FFAAAA', '#FFD4D4'][count % 6];                      
            }  
        }  
    },  
      
    //This method is called right before plotting  
    //an edge. It's useful for changing an individual edge  
    //style properties before plotting it.  
    //Edge data proprties prefixed with a dollar sign will  
    //override the Edge global style properties.  
    onBeforePlotLine: function(adj){  
        if (adj.nodeFrom.selected && adj.nodeTo.selected) {  
            adj.data.$color = "#eed";  
            adj.data.$lineWidth = 3;  
        }  
        else {  
            delete adj.data.$color;  
            delete adj.data.$lineWidth;  
        }  
    }  
});  
//load json data  
st.loadJSON(json);  
//compute node positions and layout  
st.compute();  
//optional: make a translation of the tree  
st.geom.translate(new $jit.Complex(-200, 0), "current");  
//emulate a click on the root node.  
st.onClick(st.root);  
};
