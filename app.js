const Discord = require('discord.js');
const client = new Discord.Client();
var firebase = require('firebase');
var crypto = require('crypto');
var startTime, endTime;
startTime = new Date();
var allHashes = [];
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;
// Initialize Firebase
var config = {
	apiKey: "AIzaSyD3zo4cObu6beM_2O8iRY-6K5-RdklOJF8",
	authDomain: "nodebot-c9481.firebaseapp.com",
	databaseURL: "https://nodebot-c9481-default-rtdb.firebaseio.com",
	projectId: "nodebot-c9481",
	storageBucket: "nodebot-c9481.appspot.com",
	messagingSenderId: "151256295142"
};

firebase.initializeApp(config);

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


var newTime = new Date().getTime()  - 150 * 60000;


// var rlrl = firebase.database().ref('RL-RL');
// console.log(firebase.database().ref('RL-RL').remove())
// rlrl.orderByChild('TimeStamp').startAt(newTime).on('child_added', function(snapshot) {
//     var trade = snapshot.val();
// 	console.log('1')
// 	snapshot.
//     // if (trade.TimeStamp)
// });





////////////////////////////////////	DELETE	//////////////////////////////
// var bigtits = firebase.database().ref("RL-RL");
// bigtits.once('value', function(snapshot) {
// 	snapshot.forEach(function(childSnapshot) {
// 		console.log(1)
// 		bigtits.child(childSnapshot.key).remove();
// 	});
// });

// setInterval(async function () {

// 	var ref = firebase.database().ref('RL-RL');
// 	var now = Date.now();
// 	var cutoff = now - 93 * 60 * 60 * 1000;
// 	var old = ref.orderByChild('TimeStamp').endAt(cutoff).limitToLast(1);
// 	old.on('child_added', function(snapshot) {
// 		console.log(1)
// 		snapshot.ref.remove();
// 	});
// console.log("Removed")
// }, 5 * 1000); 


client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.token);

client.on('message', async message => {
	var tempMessage = message.content.toLowerCase();
	if ((tempMessage.includes("[h]")) && (tempMessage.includes("[w]")) || (tempMessage.includes("(h)")) && (tempMessage.includes("(w)")) || (tempMessage.includes(":BTH:")) && (tempMessage.includes(":BTW:"))) {

		var messages = message.content.toLowerCase().split("\n");
		var messageAuthor = message.author.username + "#" + message.author.discriminator;
		var steamName = "";
		var serverId = message.guild.id;
		var serverName = message.guild.name;
		var channelId = message.channel.id;
		var channelName = message.channel.name;

        //RLCS.TRADE
        if (serverName == "RLCS.TRADE") {

        	if (channelName == "pc_rl_to_rl") {
        		var hasGame = "RL";
        		var wantGame = "RL";
        	}
        	if (channelName == "pc_rl_to_cs") {
        		var hasGame = "RL";
        		var wantGame = "CS";
        	}
        	if (channelName == "pc_cs_to_cs") {
        		var hasGame = "CS";
        		var wantGame = "CS";
        	}

        	var discordURL = "'https://discord.gg/vYyJnSrntZ'";
        	var discordServer = "RLCS.TRADE";
        	var serverLogo = "/static/rlcsLogo.png"
        };

        //RocketVerse
        if (String(serverId) == "786446233555566593") {

        	if (String(channelId) == "786455732711063552") {
        		var hasGame = "RL";
        		var wantGame = "RL";
        	}

        	var discordURL = "'https://discord.gg/QKxsVtNTWZ'";
        	var discordServer = "Rocketverse";
        	var serverLogo = "/static/rocketverselogo.png"

        };	
        
        //Rocket Traders
        if (String(serverId)  == "562290964639776815") {

        	if (String(channelId) == "797607934170628116") {
        		var hasGame = "RL";
        		var wantGame = "RL";
        	}
        	if (String(channelId) == "807792760982732831") {
        		var hasGame = "RL";
        		var wantGame = "CS";
        	}

        	var discordURL = "'https://discord.gg/hn96NMrdQP'";
        	var discordServer = "Rocket Traders";
        	var serverLogo = "/static/rockettraderslogo.png"

        };

        //TradeHub
        if (String(serverId) == "354453659880521739"){
        	if(String(channelId) == "355465572554637313"){
        		var hasGame = "RL";
        		var wantGame = "RL";
        	}
        	if(String(channelId) == "369582811067318282"){
        		var hasGame = "RL";
        		var wantGame = "Cash";
        	}
        }

        //BoSF
        if (String(serverId)  == "593648497530634251") {
        	var rlrltradearray = ["679885099927732326","679885570482110529","679884758838149134","679884803532783678","679884984202297359","679884909267255337","679885070127202413","679885462227517489","679884829805772886","679884782557200438","681982641200955436"]

        	if (rlrltradearray.includes(String(channelId))) {
        		var hasGame = "RL";
        		var wantGame = "RL";
        	}
        	var discordURL = "'https://discord.gg/kr6RbvwfwD'";
        	var discordServer = "BoSF";
        	var serverLogo = "/static/bosflogo.png"

        };

        //Rocket Planet
        if (String(serverId)  == "247628906914512896") {

        	if (String(channelId) == "249642821047418881") {
        		var hasGame = "RL";
        		var wantGame = "RL";
        	}
        	if (String(channelId) == "414397169580113920") {
        		var hasGame = "RL";
        		var wantGame = "CS";
        	}
        	if (String(channelId) == "760313065001713734") {
        		var hasGame = "RL";
        		var wantGame = "Cash";
        	}

        	var discordURL = "'https://discord.gg/trade'";
        	var discordServer = "Rocket Planet";
        	var serverLogo = "/static/rocketplanetlogo.png"
        };

         //Trade Central
        if (String(serverId)  == "223259649967652887") {

        	// var rlrlarray =["565265723258306580","616324781645758497","565265964799623177","565266607295954994","565266288751017996","565268347185266710","565268529683759115","565266294279110676","385973199294169088","565268325613961226","565266895691972637"]
        	// var rlcsarray =["565265786051231751","565266456326176779"]
        	// var rlcasharray = ["565266849919402016"]
        	// var rlogarray =["565265786051231751"]
        	// var cscsarray =["565267476452081754","565267952086286336","565266493177331742","565267629892173855"]
        	// var cscasharray =["565267819323850752"]
        	// var csogarray = ["565266456326176779"]
        	// var ogogarray =["565269026331295787","565267106304622642","565268477481320469","565267563681153055","565265582283423744"]
        	// var ogcasharray =["565265486271479831"]
			// var cashcasharray =["565268973453705241"]

        	if (String(channelId) == "565265723258306580" || String(channelId) == "616324781645758497" || String(channelId) == "565265964799623177" || String(channelId) == "565266607295954994" || String(channelId) == "565266288751017996" || String(channelId) == "565268347185266710" || String(channelId) == "565268529683759115" || String(channelId) == "565266294279110676" || String(channelId) == "385973199294169088" || String(channelId) == "565268325613961226" || String(channelId) == "565266895691972637") {
        		var hasGame = "RL";
        		var wantGame = "RL";
        	}
        	if (String(channelId) == "565265786051231751" || String(channelId) == "565266456326176779") {
        		var hasGame = "RL";
        		var wantGame = "CS";
        	}
        	if (String(channelId) == "565266849919402016") {
        		var hasGame = "RL";
        		var wantGame = "CASH";
        	}
        	if (String(channelId) == "565265786051231751") {
        		var hasGame = "RL";
        		var wantGame = "OG";
        	}
        	if (String(channelId) == "565267476452081754" || String(channelId) == "565267952086286336" || String(channelId) == "565266493177331742" || String(channelId) == "565267629892173855") {
        		var hasGame = "CS";
        		var wantGame = "CS";
        	}
        	if (String(channelId) == "565267819323850752") {
        		var hasGame = "CS";
        		var wantGame = "CASH";
        	}
        	if (String(channelId) == "565266456326176779") {
        		var hasGame = "CS";
        		var wantGame = "OG";
        	}
        	if (String(channelId) == "565269026331295787" || String(channelId) == "565267106304622642" || String(channelId) == "565268477481320469" || String(channelId) == "565267563681153055" || String(channelId) == "565265582283423744") {
        		var hasGame = "OG";
        		var wantGame = "OG";
        	}
        	if (String(channelId) == "565265486271479831") {
        		var hasGame = "OG";
        		var wantGame = "CASH";
        	}
			if (String(channelId) == "565268973453705241") {
				var hasGame = "CASH";
				var wantGame = "CASH";
			}

        	var discordURL = "'https://discord.gg/tradecentral'";
        	var discordServer = "Trade Central";
        	var serverLogo = "/static/tclogo.png"
        };

		var gamesOptions = ["RL", "CS", "OG", "CASH"];
		if (gamesOptions.includes(hasGame) && gamesOptions.includes(wantGame)) {
			var timeStamp = new Date().getTime()  - 1.5 * 1000;
			var i;
			for (i = 0; i < messages.length; i++) {


				if (messages[i].includes("[h]")) {
					try {
						var currentMessage = messages[i].trim();
						currentMessage = currentMessage.replace(/`/g,"").replace(/[*_\-<>]/g,"").replace(/:credits:651952971894095872/g,"credits").replace(/:credit:757345342646911114/g,"credits").replace(/:.*:/, '');
						currentMessage = currentMessage.replace("[h]", "").split("[w]");
						var haveItem = currentMessage[0].trim();
						var wantItem = currentMessage[1].trim();
						checkHashUpload(messageAuthor, haveItem, wantItem, timeStamp, steamName, hasGame, wantGame, discordURL, discordServer, serverLogo)
					} catch {
						continue;
					}
				} else if (messages[i].includes("(h)")) {
					try {
						var currentMessage = messages[i].trim();
						currentMessage = currentMessage.replace(/`/g,"").replace(/[*_\-<>]/g,"").replace(/:credits:651952971894095872/g,"credits").replace(/:credit:757345342646911114/g,"credits").replace(/:.*:/, '');
						currentMessage = currentMessage.replace("(h)", "").split("(w)");
						var haveItem = currentMessage[0].trim();
						var wantItem = currentMessage[1].trim();
						checkHashUpload(messageAuthor, haveItem, wantItem, timeStamp, steamName, hasGame, wantGame, discordURL, discordServer, serverLogo)
					} catch {
						continue;
					}
				} else if (messages[i].includes("{h}")) {
					try {
						var currentMessage = messages[i].trim();
						currentMessage = currentMessage.replace(/`/g,"").replace(/[*_\-<>]/g,"").replace(/:credits:651952971894095872/g,"credits").replace(/:credit:757345342646911114/g,"credits").replace(/:.*:/, '');
						currentMessage = currentMessage.replace("{h}", "").split("{w}");
						var haveItem = currentMessage[0].trim();
						var wantItem = currentMessage[1].trim();
						checkHashUpload(messageAuthor, haveItem, wantItem, timeStamp, steamName, hasGame, wantGame, discordURL, discordServer, serverLogo)
					} catch {
						continue;
					}
				} else if (messages[i].includes(":BTH:")) {
					try {
						var currentMessage = messages[i].trim();
						currentMessage = currentMessage.replace(/`/g,"").replace(/[*_\-<>]/g,"").replace(/:credits:651952971894095872/g,"credits").replace(/:credit:757345342646911114/g,"credits").replace(/:.*:/, '');
						currentMessage = currentMessage.replace(":BTH:", "").split(":BTW:");
						var haveItem = currentMessage[0].trim();
						var wantItem = currentMessage[1].trim();
						checkHashUpload(messageAuthor, haveItem, wantItem, timeStamp, steamName, hasGame, wantGame, discordURL, discordServer, serverLogo)
					} catch {
						continue;
					}
				} else {
					continue;
				}
				

				// // data = messageAuthor + "▓■⁰≙⁰■▓" + haveItem + "▓■⁰≙⁰■▓" + wantItem + "▓■⁰≙⁰■▓" + timeStamp + "▓■⁰≙⁰■▓" + steamName + "▓■⁰≙⁰■▓" + hasGame + "▓■⁰≙⁰■▓" + wantGame + "▓■⁰≙⁰■▓" + discordURL + "▓■⁰≙⁰■▓" + discordServer + "▓■⁰≙⁰■▓" + serverLogo;

				// var checkHash = haveItem + ' ' + wantItem + ' ' + messageAuthor;
				// var hash = crypto.createHash('md5').update(checkHash).digest('hex');
				// if (allHashes.indexOf(hash) !== -1){
				// 	// console.log("Exists ");
				// 	counter2 = counter2 + 1;
				// 	continue;
				// }
				// else{
				// 	allHashes.push(hash);
				// }

				
				// data = {
				// 	Discord : messageAuthor,
				// 	Has : haveItem,
				// 	Want : wantItem,
				// 	TimeStamp : timeStamp,
				// 	Steam : steamName,
				// 	HasGame : hasGame,
				// 	WantGame : wantGame,
				// 	DiscordURL : discordURL,
				// 	DiscordServer : discordServer,
				// 	ServerLogo : serverLogo
				// }

				// console.log(data)

				// // await new Promise(resolve => setTimeout(resolve, 1000));

				// if (hasGame == "RL" && wantGame == "RL") {
				// 	var myDataRef = firebase.database().ref('RL-RL');
				// 	myDataRef.push(data);
				// }
				// if (hasGame == "RL" && wantGame == "CS") {
				// 	var myDataRef = firebase.database().ref('RL-CS');
				// 	myDataRef.push(data);
				// }
				// if (hasGame == "RL" && wantGame == "OG") {
				// 	var myDataRef = firebase.database().ref('RL-OG');
				// 	myDataRef.push(data);
				// }
				// if (hasGame == "RL" && wantGame == "CASH") {
				// 	var myDataRef = firebase.database().ref('RL-CASH');
				// 	myDataRef.push(data);
				// }
				// if (hasGame == "CS" && wantGame == "CS") {
				// 	var myDataRef = firebase.database().ref('CS-CS');
				// 	myDataRef.push(data);
				// }
				// if (hasGame == "CS" && wantGame == "OG") {
				// 	var myDataRef = firebase.database().ref('CS-OG');
				// 	myDataRef.push(data);
				// }
				// if (hasGame == "CS" && wantGame == "CASH") {
				// 	var myDataRef = firebase.database().ref('CS-CASH');
				// 	myDataRef.push(data);
				// }
				// if (hasGame == "OG" && wantGame == "OG") {
				// 	var myDataRef = firebase.database().ref('OG-OG');
				// 	myDataRef.push(data);
				// }
				// if (hasGame == "OG" && wantGame == "CASH") {
				// 	var myDataRef = firebase.database().ref('OG-CASH');
				// 	myDataRef.push(data);
				// }
				// counter3 = counter3 + 1;
				// console.log("ALL- " + counter1 + " EXISTED- " + counter2 + " ADDED- " + counter3 + "   " + ((new Date() - startTime)/(1000 * 60)).toFixed(2));


				// // DELAY LOGIC #USELESS
				// // if (rlrl.length == 10) {
				// //     var uploadrlrl = rlrl;
				// //     rlrl = [];
				// //     var j;
				// //     for (j = 0; j < uploadrlrl.length; j++) {
				// //         var myDataRef = firebase.database().ref('RL-RL');
				// //         myDataRef.push(uploadrlrl[j]);
				// //         await sleep(500);
				// //     }
				// // }
				// // if (rlcs.length == 10) {
				// //     var uploadrlcs = rlcs;
				// //     rlcs = [];
				// //     var j;
				// //     for (j = 0; j < uploadrlcs.length; j++) {
				// //         var myDataRef = firebase.database().ref('RL-CS');
				// //         myDataRef.push(uploadrlcs[j]);
				// //         await sleep(500);
				// //     }
				// // }
				// // if (cscs.length == 10) {
				// //     var uploadcscs = cscs;
				// //     cscs = [];
				// //     var j;
				// //     for (j = 0; j < uploadcscs.length; j++) {
				// //         var myDataRef = firebase.database().ref('CS-CS');
				// //         myDataRef.push(uploadcscs[j]);
				// //         await sleep(500);
				// //     }
				// // }
			}
		}
    }
});










function checkHashUpload(messageAuthor, haveItem, wantItem, timeStamp, steamName, hasGame, wantGame, discordURL, discordServer, serverLogo){

	counter1 = counter1 + 1
	var checkHash = discordServer + ' ' + haveItem + ' ' + wantItem + ' ' + messageAuthor;
	
	var hash = crypto.createHash('md5').update(checkHash).digest('hex');
	if (allHashes.indexOf(hash) !== -1){
		console.log("Exists ");
		counter2 = counter2 + 1;
	}
	else{
		allHashes.push(hash);
		data = {
			Discord : messageAuthor,
			Has : haveItem,
			Want : wantItem,
			TimeStamp : timeStamp,
			Steam : steamName,
			HasGame : hasGame,
			WantGame : wantGame,
			DiscordURL : discordURL,
			DiscordServer : discordServer,
			ServerLogo : serverLogo
		}

		// await new Promise(resolve => setTimeout(resolve, 1000));

		if (hasGame == "RL" && wantGame == "RL") {
			var myDataRef = firebase.database().ref('RL-RL');
			myDataRef.push(data);
		}
		if (hasGame == "RL" && wantGame == "CS") {
			var myDataRef = firebase.database().ref('RL-CS');
			myDataRef.push(data);
		}
		if (hasGame == "RL" && wantGame == "OG") {
			var myDataRef = firebase.database().ref('RL-OG');
			myDataRef.push(data);
		}
		if (hasGame == "RL" && wantGame == "CASH") {
			var myDataRef = firebase.database().ref('RL-CASH');
			myDataRef.push(data);
		}
		if (hasGame == "CS" && wantGame == "CS") {
			var myDataRef = firebase.database().ref('CS-CS');
			myDataRef.push(data);
		}
		if (hasGame == "CS" && wantGame == "OG") {
			var myDataRef = firebase.database().ref('CS-OG');
			myDataRef.push(data);
		}
		if (hasGame == "CS" && wantGame == "CASH") {
			var myDataRef = firebase.database().ref('CS-CASH');
			myDataRef.push(data);
		}
		if (hasGame == "OG" && wantGame == "OG") {
			var myDataRef = firebase.database().ref('OG-OG');
			myDataRef.push(data);
		}
		if (hasGame == "OG" && wantGame == "CASH") {
			var myDataRef = firebase.database().ref('OG-CASH');
			myDataRef.push(data);
		}
		if (hasGame == "CASH" && wantGame == "CASH") {
			var myDataRef = firebase.database().ref('CASH-CASH');
			myDataRef.push(data);
		}
		counter3 = counter3 + 1;
		console.log("ALL- " + counter1 + " EXISTED- " + counter2 + " ADDED- " + counter3 + "   " + ((new Date() - startTime)/(1000 * 60)).toFixed(2));
		messageAuthor = null
		haveItem = null
		wantItem = null
		timeStamp = null
		steamName = null
		hasGame = null
		wantGame = null
		discordURL = null
		discordServer = null
		serverLogo = null
		
	}
}



setInterval(function () {
	var pussylips = ['RL-RL','RL-CS','RL-OG','RL-CASH','CS-CS','CS-OG','CS-CASH','OG-OG','OG-CASH','CASH-CASH','Chat']
	for (dicktip in pussylips){
		console.log(firebase.database().ref(dicktip).remove())
		// var bigtits = firebase.database().ref(dicktip);
		// bigtits.once('value', function(snapshot) {
		// 	snapshot.forEach(function(childSnapshot) {
		// 		// var cumshot = childSnapshot.val(); 
		// 		// cumshot = cumshot.split('▓■⁰≙⁰■▓');
		// 		// let currentTime = new Date();
		// 		// let uploadTime = new Date(cumshot[3]);
		// 		// let hours = Math.floor((currentTime - uploadTime) / (1000 * 60 * 60));
		// 		let days = Math.floor((currentTime - uploadTime) / (1000 * 60 * 60 * 24));
		// 		if (days >= 1) {
		// 			bigtits.child(childSnapshot.key).remove();
		// 		}
		// 	});
		// });
	}
	console.log("Removed")
}, 24 * 60 * 60 * 1000); 
