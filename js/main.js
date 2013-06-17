//promene ID-eva
function promena1(){
	document.getElementById('kontejner').id='odgovor1';
};

function promena2(){
	document.getElementById('odgovor1').id='odgovor2';
};

function promena3(){
	document.getElementById('odgovor2').id='odgovor3';
};



//Pocetak, prvo pitanje
function domaci(){
	document.getElementById('kontejner').innerHTML='<p>Da li ti se sviđa napredni kurs Web Dizajna na SAE Institutu?</p><input type="text" id="prPit" value="" placeholder=""><button type="submit" onclick="prviOdgovor();">Submit</button>';
	promena1();
 };



//obrada prvog odgovora i drugo pitanje
function prviOdgovor(){
	var $prOdg = document.getElementById('prPit').value.toLowerCase();
	if ($prOdg.indexOf('ne') !== -1) { 
		document.getElementById('odgovor1').innerHTML='<p>Zašto onda ideš na njega?</p><input type="text" id="drPitNe" value="" placeholder=""><button type="submit" onclick="drugiOdgovor();">Submit</button>';

		promena2();
	}
	else if (($prOdg.indexOf('da') !== -1) || ($prOdg.indexOf('svidja') !== -1) || ($prOdg.indexOf('sviđa') !== -1)) {
		document.getElementById('odgovor1').innerHTML='<p>Da li misliš da treba nešto promeniti?</p><input type="text" id="drPitDa" value="" placeholder=""><button type="submit" onclick="drugiOdgovor();">Submit</button>';

		promena2();
	}
	else if ($prOdg=='onako'){
		document.getElementById('odgovor1').innerHTML='<p>Kako to misliš "onako"? Da ili ne?</p><input type="text" id="prPit" value="" placeholder=""><button type="submit" onclick="prviOdgovor();">Submit</button>';

	}
	else {
		document.getElementById('odgovor1').innerHTML='<p>Ne razumem odgovor: da ili ne?</p><input type="text" id="prPit" value="" placeholder=""><button type="submit" onclick="prviOdgovor();">Submit</button>';

	};

};

//obrada drugog odgovora i trece pitanje
function drugiOdgovor(){
	if (!document.getElementById('drPitDa') ) {
		var $drOdg = document.getElementById('drPitNe').value.toLowerCase();
		if (($drOdg.indexOf('zato što') !== -1) || ($drOdg.indexOf('zato sto') !== -1) || ($drOdg.indexOf('jer') !== -1) ) { 
			document.getElementById('odgovor2').innerHTML='<p>Da li je to dovoljan razlog?</p><input type="text" id="drPitZato" value="" placeholder=""><button type="submit" onclick="treciOdgovor();">Submit</button>';

			promena3();
		}
		else if (($drOdg == 'onako') || ($drOdg == 'tako') || ($drOdg == 'eto') || ($drOdg == 'zato') || ($drOdg == 'ne znam') || ($drOdg == 'nemam pojma')) {
			document.getElementById('odgovor2').innerHTML='<p>Zbog sira i vojne muzike?</p><input type="text" id="drPitEto" value="" placeholder=""><button type="submit" onclick="treciOdgovor();">Submit</button>';

			promena3();
		}
		else {
			document.getElementById('odgovor2').innerHTML='<p>Ne razumem odgovor... Objasni mi.</p><input type="text" id="drPitNe" value="" placeholder=""><button type="submit" onclick="drugiOdgovor();">Submit</button>';

		};		
	}
	else {
		var $drOdg = document.getElementById('drPitDa').value.toLowerCase();
		if (($drOdg.indexOf('da') !== -1) || (($drOdg.indexOf('mislim') !== -1 ) && ($drOdg.indexOf('ne') == -1)) || ($drOdg.indexOf('mozda') !== -1) || ($drOdg.indexOf('možda') !== -1) ) { 
			document.getElementById('odgovor2').innerHTML='<p>Nabroj šta bi menjao/menjala (odvoj zarezima):</p><input type="text" id="drPitMenja" value="" placeholder=""><button type="submit" onclick="treciOdgovor();">Submit</button>';
			promena3();
		}
		else if ($drOdg.indexOf('ne') !== -1) {
			document.getElementById('odgovor2').innerHTML='<p>Zašto onda ne radiš domaći?</p><input type="text" id="drPitDoma" value="" placeholder=""><button type="submit" onclick="treciOdgovor();">Submit</button>';

			promena3();
		}
		else {
			document.getElementById('odgovor2').innerHTML='<p>Ne razumem odgovor... Objasni mi.</p><input type="text" id="prPitDa" value="" placeholder=""><button type="submit" onclick="drugiOdgovor();">Submit</button>';

		};		

	};

};


//obrada treceg odogovora i konacni zakljucak
function treciOdgovor(){
	if (document.getElementById('drPitZato')) {
		var $trOdg = document.getElementById('drPitZato').value.toLowerCase();
		if ($trOdg.indexOf('ne') !== -1) { 
			document.getElementById('odgovor3').innerHTML='<h3>A ti nemoj?</h3>';
		}
		else if ($trOdg.indexOf('da') !== -1)  {
			document.getElementById('odgovor3').innerHTML='<h3>E pa muči se onda i dalje!</h3>';

		}
		else {
			document.getElementById('odgovor3').innerHTML='<p>Ne razumem odgovor: da ili ne?</p><input type="text" id="drPitZato" value="" placeholder=""><button type="submit" onclick="treciOdgovor();">Submit</button>';

		};
	}
	else if (document.getElementById('drPitEto')) {
		var $trOdg = document.getElementById('drPitEto').value.toLowerCase();
		if ($trOdg.indexOf('ne') !== -1) { 
			document.getElementById('odgovor3').innerHTML='<h3>Onda smisli razlog!</h3>';
		}
		else if ($trOdg.indexOf('da') !== -1)  {
			document.getElementById('odgovor3').innerHTML='<h3>Razumemo se!</h3>';

		}
		else {
			document.getElementById('odgovor3').innerHTML='<p>Ne razumem odgovor: da ili ne?</p><input type="text" id="drPitEto" value="" placeholder=""><button type="submit" onclick="treciOdgovor();">Submit</button>';

		};
	}

	else if (document.getElementById('drPitMenja')) {
		var $trOdg = document.getElementById('drPitMenja').value.toLowerCase();
		if ($trOdg.indexOf(',') !== -1) { 
			document.getElementById('odgovor3').innerHTML='<h3>Evo, prosledićemo listu Vladi!</h3>';
		}
		else if (($trOdg.indexOf('nista') !== -1) || ($trOdg.indexOf('ništa') !== -1) || ($trOdg.indexOf('ne znam') !== -1)) {
			document.getElementById('odgovor3').innerHTML='<h3>Malo bi, a malo ne bi, a?</h3>';

		}
		else {
			document.getElementById('odgovor3').innerHTML='<h3>Pa reci Vladi, možda može da promeni!</h3>';

		};

	}
	
	else {
		var $trOdg = document.getElementById('drPitDoma').value.toLowerCase();
		if (($trOdg.indexOf('radim') !== -1) && ($trOdg.indexOf('ne') == -1)) { 
			document.getElementById('odgovor3').innerHTML="<h3>Izvin'te, moja greška!</h3>";
		}
		else if (($trOdg.indexOf('nemam vremena') !== -1) || ($trOdg.indexOf('koji') !== -1) || ($trOdg.indexOf('ne znam') !== -1)) {
			document.getElementById('odgovor3').innerHTML='<h3>Hajde, nema zabušavanja!</h3>';

		}
		else {
			document.getElementById('odgovor3').innerHTML='<p>Ne razumem odgovor, pojasni mi.</p><input type="text" id="drPitDoma" value="" placeholder=""><button type="submit" onclick="treciOdgovor();">Submit</button>';

		};

	}
}