var debugVars = {}; // Could be handy

var items = [
    "Bos",
    "Canavara Sekeri",
    "Kroket Rulo",
    "Sopa",
    "Bandaj",
    "Kayalik Seker",
    "Kurbaga Yüzükleri",
    "Örümcek Donut",
    "Sakin Sogan",
    "Hayalet Meyvesi",
    "Örümcek Sirkesi",
    "Karameleli Pasta",
    "Solmus Kurdele",
    "Oyuncak Bıçak",
    "Saglam Eldiven",
    "Erkeksi Bandana",
    "Karadam Parçası",
    "Güzel Dondurma",
    "Puppydough Dondurma",
    "Bisikle",
    "Unisikle",
    "Tarçınlı Ekmek",
    "Temmie Gevrekleri",
    "Terkedilmis Kis",
    "Eski Tutu",
    "Ballet Ayakkabıları",
    "Dövme Kartı",
    "Sinirli Köpek",
    "Köpek Salatası",
    "Köpek Artıgı (1)",
    "Köpek Artıgı (2)",
    "Köpek Artıgı (3)",
    "Köpek Artıgı (4)",
    "Köpek Artıgı (5)",
    "Köpek Artıgı (6)",
    "Astronot Yiyecegi",
    "Anında Makarna",
    "Yengeç Elması",
    "Sosisli...?",
    "Sıcak Kedi",
    "Glamburger",
    "Deniz Çayı",
    "Yıldızlı Yiyecek",
    "Efsanevi Kahraman",
    "Bulutlu Gözlükler",
    "Yırtık Defter",
    "Kirli Önlük",
    "Yanmıs Tava",
    "Kovboy Sapkası",
    "Bos Tabanca",
    "Kalp Kolye",
    "Eskimis Hançer",
    "Gerçek Bıçak",
    "Kolye",
    "Kötü Hafıza",
    "Rüya",
    "Undyne'in Mektubu",
    "Undyne Mektubu EX",
    "Patates Cipsi",
    "Çözünebilir Yiyecek",
    "Gizemli Anahtar",
    "Yüz Bitfek",
    "Hush Puppy",
    "Salyangoz Pastası",
    "temy zırhı",
    "<invalid>"
];

var weapons = {
    // "0": "Bos",
    "3": "Sopa",
    "13": "Oyuncak Bıçal",
    "14": "Sert Eldiven",
    "25": "Bale Pabuçları",
    "45": "Yırtık DEfter",
    "47": "Yanmıs Tava",
    "49": "Bos Tabanca",
    "51": "Hançer",
    "52": "Gerçek Bıçak"
};

var armors = {
    // "0": "Bos",
    "4": "Bandaj",
    "12": "Solmus Kurdele",
    "15": "Erkeksi Bandana",
    "24": "Tozlu Etek",
    "44": "Bugulu Gözlükler",
    "46": "Lekeli Önlük",
    "48": "Kovbot Sapkası",
    "50": "Kalpli Madalyon",
    "53": "Madalyon",
    "64": "temy zırhı"
};

var cellOpts = {
    "0": "Bos",
    "201": "Merhaba De",
    "202": "Bulmaca Yardımcı",
    "203": "Kendin Hakkında",
    "204": "Ona \"Anne\" de",
    "205": "Flört",
    "206": "Toriel'ın Telefonu",
    "210": "Papyrus'ın Telefonu",
    "220": "Boyutsal Kutu A",
    "221": "Boyutsal Kutu B"
};

var weaponAts = {
    "3": 0,   // sopa
    "13": 3,  // oyuncak bıçak
    "14": 5,  // sert eldiven
    "25": 7,  // bale pabuçları
    "45": 2,  // yırtık defter
    "47": 10, // yanmıs tava
    "49": 12, // bos tabanca
    "51": 15, // hançer
    "52": 99  // gerçek bıçak
};

var armorAts = {
    "48": 5, // kovbot sapkası
    "64": 10 // temy zırhı
}

var armorDfs = {
    "4": 0,   // bandaj
    "12": 3,  // solmus kurdele
    "15": 7,  // erkeksi bandana
    "24": 10, // tozlu etek
    "44": 6,  // bugulu gözlükler
    "46": 11, // lekeli önlük
    "48": 12, // kovboy sapkası
    "50": 15, // kalp madalyon
    "53": 99, // madalyon
    "64": 20  // temy zırhı
};

var rooms = [[], [], []];
rooms[2] = [
    "Baslangıç [Dogchecked]",
    "Giris [Dogchecked]",
    "Baslık [Dogchecked]",
    "Menü [Dogchecked]",
    "Harabeler - Baslangıc",
    "Harabeler - Flowey noktası",
    "Harabeler - Giris [KAYIT]",
    "Harabeler - ilk bulmaca",
    "Harabeler - Dügme bulmacası",
    "Harabeler - Cansız maken",
    "Harabeler - Dikenler bulmacası",
    "Harabeler - Uzun koridor",
    "Harabeler - Yaprak yıgını [KAYIT]",
    "Harabeler - seker sütunu",
    "Harabeler - Zorunlu düsme kapısı",
    "Harabeler - ilk tas itme bulmacası",
    "Harabeler - Tuzak kapılı koridor bulmacası",
    "Harabeler - Konusan tas",
    "Harabeler - Fare Deligi [KAYIT]",
    "Harabeler - Napstablook",
    "Harabeler - Örümcek Kermesi",
    "Harabeler - 2 kurbaga",
    "Harabeler - Tuzak kapısının altına gizlenmis anahtar bulmacası",
    "Harabeler - 3 Sütun Oda 1",
    "Harabeler - 3 Sütun Oda 2",
    "Harabeler - 3 Sütun Oda 3",
    "Harabeler - 3 Sütun Oda 4",
    "Harabeler - Sütun Oda Çukur",
    "Harabeler - 3 yönlü çatal",
    "Harabeler - Toriel dedikoducu kurbaga",
    "Harabeler - Oyun bıçak odası",
    "Harabeler - Ev [KAYIT]",
    "Toriel'ın Evi: Giris",
    "Toriel'ın Evi: Okuma Odası",
    "Toriel'ın Evi: Koridor",
    "Toriel'ın Evi: Toriel'ın Odası",
    "Toriel'ın Evi: Senin Odan",
    "Toriel'ın Evi: Mutfak",
    "Toriel'ın Bodrumu 1",
    "Toriel'ın Bodrumu 2",
    "Toriel'ın Bodrumu 3",
    "Toriel'ın Bodrumu: Toriel Savası",
    "Toriel'ın Bodrumu: Flowey'e Çıkan Koridor",
    "Toriel'ın Bodrumu: Flowey",
    "Karaltan - Harabeler Çıkıs",
    "Karaltan - Karanlık Yol",
    "Karaltan - Kutulu Yol [KAYIT]",
    "Karaltan - Balıkçılık Odası",
    "Karaltan - Papyrus'ın Nöbetçi istasyonu",
    "Karaltan - Doggo",
    "Karaltan - Pusula isareti",
    "Karaltan - Kardan Adam",
    "Karaltan - Elektrikli Labirent",
    "Karaltan - Karlı Golf",
    "Karaltan - 2 bekçi köpegi kulübesi",
    "Karaltan - Monster Kidz Kelime Arama",
    "Karaltan - Spagetti [KAYIT]",
    "Karaltan - Uyarı: Köpek Evililigi",
    "Karaltan - XO bulmacası 1",
    "Karaltan - XO bulmacası 2",
    "Karaltan - Renkli karo bulmaca",
    "Karaltan - Köpek Evi [KAYIT]",
    "Karaltan - Kar Papyrus & Sans",
    "Karaltan - Kaygan XO bulmacası",
    "Karaltan - Takipçi Sans",
    "Karaltan - Buzlu Magara Giris",
    "Karaltan - Kar pofudukları (Büyük Dog)",
    "Karaltan - Ölümcül Dehset Eldiveni",
    "Karaltan - Kasaba [KAYIT]",
    "Karaltan Kasabası: Buz tasıyan kurt",
    "Karaltan Kasabası: Tekne limanı",
    "Karaltan Kasabası: Han lobi",
    "Karaltan Kasabası: Han yatak odası",
    "Karaltan Kasabası: Grillby's",
    "Karaltan Kasabası: Kütüphane",
    "Karaltan Kasabası: Papyrus'un kulübesi",
    "Karaltan Kasabası: Papyrus ve Sans'in evi",
    "Karaltan Kasabası: Papyrus'un odası",
    "Karaltan Kasabası: Sans'in odası [Köpek kontrolü yapıldı]",
    "Karaltan Kasabası: Sans'in odası (karanlık) [Köpek kontrolü yapıldı]",
    "Karaltan Kasabası: Sans'in bodrumu [Köpek kontrolü yapıldı]",
    "Karaltan - Papyrus Savası",
    "Selale - Giris",
    "Selale - Denetim Noktası [KAYIT]",
    "Selale - Dusen taslar",
    "Selale - Tutu odasi",
    "Selale - Koridor [KAYIT]",
    "Selale - Zambak padi koprusu",
    "Selale - Zambak padi dikey koprusu",
    "Selale - Quiche odasi",
    "Selale - Teleskop",
    "Selale - Bot tahtasi",
    "Selale - Undyne Mızrak kacirma 1",
    "Selale - Mızrak kacirmadan sonra ogul",
    "Selale - Kristal [KAYIT]",
    "Selale - Sans Teleskobu",
    "Selale - Guzel Dondurma Dukkani",
    "Selale - Ayrilmis Yollar",
    "Selale - Bale ayakkabilari",
    "Selale - Ogul",
    "Selale - Onionsan",
    "Selale - Artefakt merkezi",
    "Selale - Piyano",
    "Selale - Efsanevi Artefakt",
    "Selale - Yasli Heykel",
    "Selale - Semsiyeler",
    "Selale - Yasli Yol 1",
    "Selale - Yasli Yol 2",
    "Selale - Saray Manzarasi",
    "Selale - Sembiye kenari",
    "Selale - Köprü [KAYIT]",
    "Selale - Köprü Undyne Kaçıs",
    "Selale - Köprü düsüs",
    "Selale - Çöp Bölgesi Çiçek yatagı",
    "Selale - Çöp Bölgesi [KAYIT]",
    "Selale - Sinirli Manken",
    "Selale - Sessiz Alan [KAYIT]",
    "Selale - Undyne'in evi giris",
    "Selale - Undyne'in evi",
    "Selale - Ikiz Hayalet evleri",
    "Selale - Napstablook'un evi",
    "Selale - Hapstablook'un evi içi",
    "Selale - Salyangoz Çiftligi",
    "Selale - Pre Bird (Kullanilmamis)",
    "Selale - Kaplumbaga dukkani",
    "Selale - Nehir botu",
    "Selale - 2 Selale",
    "Selale - Mantar labirenti",
    "Selale - Temmie Köyü [KAYIT]",
    "Selale - Lamba labirenti",
    "Selale - Arkanda",
    "Selale - Daha fazla çiçek",
    "Selale - Magara köprüsü",
    "Selale - Magara çıkısı",
    "Selale - Undyne bölgesi",
    "Selale - Undyne bölgesi + 1",
    "Selale - Sıcakdiyara Hosgeldiniz",
    "Sıcakdiyar - Giris",
    "Sıcakdiyar - Su tankı",
    "Sıcakdiyar - Laboratuvar Girisi [KAYIT]",
    "Sıcakdiyar - Nehir teknesi",
    "Sıcakdiyar - Laboratuvar Merkezi",
    "Sıcakdiyar - Laboratuvar Üst Katı",
    "Sıcakdiyar - Laboratuvar Çıkısı",
    "Sıcakdiyar - Kosu bantları 1",
    "Sıcakdiyar - Magma Odası [KAYIT]",
    "Sıcakdiyar - Yanmıs Tava",
    "Sıcakdiyar - Lazerler 1",
    "Sıcakdiyar - Bulmaca Kapısı 1",
    "Sıcakdiyar - Sol Boz Bulmaca Girisi",
    "Sıcakdiyar - Sol Kutu Bulmacası",
    "Sıcakdiyar - Sag Kutu Bulmaca Girisi",
    "Sıcakdiyar - Sag Kutu Bulmacası",
    "Sıcakdiyar - Ok Köprüsü",
    "Sıcakdiyar - Mutfak",
    "Sıcakdiyar - Çekirdek Görünümü [KAYIT]",
    "Sıcakdiyar - Asansör R1",
    "Sıcakdiyar - Asansör R2",
    "Sıcakdiyar - Hot Dog Standı",
    "Sıcakdiyar - Sanat Kulübü Girisi",
    "Sıcakdiyar - Sanat Kulübü",
    "Sıcakdiyar - Lekeli Önlük",
    "Sıcakdiyar - Kosu bandı anahtarı bulmacası",
    "Sıcakdiyar - Ok bulmacası",
    "Sıcakdiyar - Kötü Görüs Alanı [KAYIT]",
    "Sıcakdiyar - Bro korumalar",
    "Sıcakdiyar - Bombastik Haber raporu",
    "Sıcakdiyar - Üst Çekirdek Görünümü",
    "Sıcakdiyar - Asansör L2",
    "Sıcakdiyar - Asansör L3",
    "Sıcakdiyar - Örümcek Kek Satısı",
    "Sıcakdiyar - F3 Bulmaca Kapısı",
    "Sıcakdiyar - F3 Güney Bulmaca Girisi",
    "Sıcakdiyar - F3 Güney Bulmaca",
    "Sıcakdiyar - F3 Kuzey Bulmaca Girisi",
    "Sıcakdiyar - F3 Kuzey Bulmaca",
    "Sıcakdiyar - Örümcek Girisi [KAYIT]",
    "Sıcakdiyar - Örümcek Odası",
    "Sıcakdiyar - Mettaton Afisi",
    "Sıcakdiyar - Tiyatro Sahnesi",
    "Sıcakdiyar - Renkli Fayans Labirenti 2",
    "Sıcakdiyar - Güzel Dondurma Standı",
    "Sıcakdiyar - Otel Girisi",
    "Sıcakdiyar - Otel Lobi [KAYIT]",
    "Sıcakdiyar - Otel Restoranı",
    "Sıcakdiyar - Otel Koridoru",
    "Sıcakdiyar - Otel Arka Sokak",
    "Sıcakdiyar - Asansör R3",
    "Sıcakdiyar - Çekirdek Girisi",
    "Sıcakdiyar - Çekirdek Asansörü",
    "Sıcakdiyar - Çekirdek Çukuru",
    "Sıcakdiyar - Çekirdek Asansörünün Kuzeyi",
    "Sıcakdiyar - Çekirdek Yanlıs sıralı lazerler",
    "Sıcakdiyar - Çekirdek Kavsagı",
    "Sıcakdiyar - Çekirdek Kör Nokta",
    "Sıcakdiyar - Çekirdek Güç Lazer Bulmacası",
    "Sıcakdiyar - Çekirdek Dalı [KAYIT]",
    "Sıcakdiyar - Çekirdek Buz Yıgını",
    "Sıcakdiyar - Çekirdek Batı Bulmaca Girisi",
    "Sıcakdiyar - Çekirdek Batı Bulmaca Girisi + 1",
    "Sıcakdiyar - Çekirdek Batı Bulmaca Girisi + 2",
    "Sıcakdiyar - Çekirdek Dogu Para Çöp Kutusu Girisi",
    "Sıcakdiyar - Çekirdek Sonu - 3",
    "Sıcakdiyar - 100G Çöp Kutusunun Güneyi",
    "Sıcakdiyar - Çekirdek Sonu - 4",
    "Sıcakdiyar - Çekirdek Kaybol",
    "Sıcakdiyar - Çekirdek Batı Bulmaca",
    "Sıcakdiyar - Çekirdek Glamburger Çöp Kutusu",
    "Sıcakdiyar - Çekirdek 100G Çöp Kutusu",
    "Sıcakdiyar - Çekirdek Savas Köprüsü",
    "Sıcakdiyar - Çekirdek Sonu - 1",
    "Sıcakdiyar - Çekirdek Sonu [KAYIT]",
    "Sıcakdiyar - Çekirdek Mettaton Odası",
    "Sıcakdiyar - Çekirdek Final Asansör Girisi",
    "Sıcakdiyar - Asansör L1",
    "Sıcakdiyar - Çekirdek Son Asansör",
    "Kale Asansörü [KAYIT]",
    "Kale - Baska Bir Asansör",
    "Kale - Karanlık Yol",
    "Yeni Ev [KAYIT]",
    "Yeni Ev - Giris",
    "Yeni Ev - Okuma Odası",
    "Yeni Ev - Koridor",
    "Yeni Ev - Asgore'un Odası",
    "Yeni Ev - Senin Odan",
    "Yeni Ev - Mutfak",
    "Yeni Ev - Bodrum 1",
    "Yeni Ev - Bodrum 2",
    "Yeni Ev - Bodrum 3",
    "Yeni Ev - Bodrum 4",
    "Yeni Ev - Asansör",
    "Son Koridor [KAYIT]",
    "Taht Giris [KAYIT]",
    "Taht Giris - Merdivenlerin Asagısı",
    "Taht Giris - Mezarlar",
    "Taht Odası [KAYIT]",
    "Son [KAYIT]",
    "Bariyer",
    "Flowey savas sonrası",
    "Nötr kreditler [Köpek kontrolü yapıldı]",
    "Dısarıya Yol [Köpek kontrolü yapıldı]",
    "Dısarısı [Köpek kontrolü yapıldı]",
    "Lab Asansörü",
    "Gerçek Lab - Asansör",
    "Gerçek Lab - Asansör Giris",
    "Gerçek Lab - Güney Korridor",
    "Gerçek Laboratuvar [KAYIT]",
    "Gerçek Lab - Batı Korrdior 1",
    "Gerçek Lab - Batı Musluklar",
    "Gerçek Lab - Batı kırmızı anahtar yuvası",
    "Gerçek Lab - Kuzey Korridor 1",
    "Gerçek Lab - Yadak Odası [KAYIT]",
    "Gerçek Lab - Kuzeydogu Koridoru",
    "Gerçek Lab - Kuzeydogu mavi anahtar yuvası",
    "Gerçek Lab - Kuzey Korridor 2",
    "Gerçek Lab - Yesil anahtar",
    "Gerçek Lab - Kuzeybatı kafatası [KAYIT?]",
    "Gerçek Lab - Sarı Anahtar Yuvası + TV",
    "Gerçek Lab - Kuzeybatı buzdolapları",
    "Gerçek Lab - Yesil Anahtar Yuvası",
    "Gerçek Lab - Fanlar",
    "Gerçek Lab - Asansör 2",
    "Gerçek Lab - Güç odası korridor",
    "Gerçek Lab - Güç Odası",
    "Gaster Odası",
    "Karaltan - Buz Magarası 1",
    "Karaltan - Gelistirici Odası [Köpek kontrolü yapıldı]",
    "room2 [Dogchecked]",
    "Waterfall - Mysteryman hallway [Dogchecked]",
    "Waterfall - Mysteryman room [Dogchecked]",
    "Snowdin - Sound Test Room [Dogchecked]",
    "TESTROOM [Dogchecked]",
    "Waterfall - Redacted [Dogchecked]",
    "Waterfall - Cut Bridge Puzzle [Dogchecked]",
    "room_overworld [Dogchecked]",
    "room_overworld3 [Dogchecked]",
    "Bullet Test [Dogchecked]",
    "room_water16A [Dogchecked]",
    "Pacifist credits [Dogchecked]",
    "Pacifist credits - Highway [Dogchecked]",
    "Pacifist credits - Beach [Dogchecked]",
    "Pacifist credits - Mettaton performance [Dogchecked]",
    "Pacifist credits - School entrance [Dogchecked]",
    "Pacifist credits - Mount Ebott [Dogchecked]",
    "Pacifist credits - Special Thanks [Dogchecked]",
    "Pacifist credits - Bedroom [Dogchecked]",
    "Pacifist credits - The End [Dogchecked]",
    "Sprite Test [Dogchecked]",
    "Settings menu [Dogchecked]",
    "Control test room [Dogchecked]",
    "Omega Flowey - Initializer [Dogchecked]",
    "Omega Flowey - Fake intro [Dogchecked]",
    "Omega Flowey - Fake menu [Dogchecked]",
    "Omega Flowey - Fake save point [Dogchecked] [SAVE?]",
    "Omega Flowey [Dogchecked]",
    "Omega Flowey - Respawn mocking [Dogchecked]",
    "room_fire4 [Dogchecked]",
    "room_fire10_old [Dogchecked]",
    "room_fire10A_old [Dogchecked]",
    "Snowdin - Ice Puzzle [Dogchecked]",
    "Harabeler - Rock Candy [Dogchecked]",
    "Snowdin - Growing snowball [Dogchecked]",
    "Waterfall - Torch puzzle [Dogchecked]",
    "Waterfall - Meet Undyne (Unused) [Dogchecked]",
    "Waterfall - Rooted mushroom [Dogchecked]",
    "room_monsteralign_test [Dogchecked]",
    "Battle room [Dogchecked]",
    "Flowey battle room [Dogchecked]",
    "\"Fast\" battle room [Dogchecked]",
    "New Home - Story battle room [Dogchecked]",
    "Game Over [Dogchecked]",
    "Snowdin Town - Shop [Dogchecked]",
    "Waterfall - Gerson's shop [Dogchecked]",
    "Hotland - Bratty and Catty [Dogchecked]",
    "Hotland - Burgerpants [Dogchecked]",
    "Waterfall - Tem Shop [Dogchecked]",
    "River person transition room [Dogchecked]",
    "Papyrus date [Dogchecked]",
    "Alphys date [Dogchecked]",
    "Omega Flowey - Wilting [Dogchecked]",
    "Flowey's pacifist speech [Dogchecked]",
    "room_empty [Dogchecked]",
    "room_emptywhite [Dogchecked]",
    "room_emptyblack [Dogchecked]",
    "Genocide - The Nothingness [Dogchecked]",
    "Snowdin - Title [Dogchecked]",
    "Köpek kontrolü odası",
    "Hotland - Quiz battle (Unused) [Dogchecked]",
    "Pre-Asriel scene (Unused) [Dogchecked]",
    "Pre-Asriel scene 2 (Unused) [Dogchecked]",
    "Asriel appears [Dogchecked]",
    "Asriel room [Dogchecked]",
    "Asriel flashbacks [Dogchecked]",
    "Asriel animation test [Dogchecked]",
    "Asriel phase 2 animation test [Dogchecked]",
    "Snowdin - Dog Shrine [Dogchecked]"
];

for (var i = 0; i < rooms[2].length; i++) {
    if (rooms[2][i].indexOf("[SAVE]") !== -1) {
        rooms[0][i] = rooms[2][i];
        rooms[1][i] = rooms[2][i];
    } else if (rooms[2][i].indexOf("[Dogchecked]") === -1) {
        rooms[1][i] = rooms[2][i];
    }
}
// rooms[0] is SAVE points only, rooms[1] is non-Dogchecked only, rooms[2] contains all rooms.

var roomSelectOptions = [
    "Sadece KAYIT noktaları",
    "Yalnızca erisilebilir odalar",
    "Tüm odalar"
];

// Flags initialized in flags.js
var flagFor = { // Link flags with inputs
    "sav-fun": 5,
    "sav-defeatedasriel": 7,
    "sav-trainingdummystate": 14,
    "sav-torielstate": 45,
    "sav-doggostate": 52,
    "sav-dogamydogaressastate": 53,
    "sav-greaterdogstate": 54,
    "sav-comedianstate": 57,
    "sav-papyrusstate": 67,
    "sav-shyrenstate": 81,
    "sav-ruinskills": 202,
    "sav-snowdinkills": 203,
    "sav-waterfallkills": 204,
    "sav-hotlandkills": 205,
    "sav-undynestate1": 251,
    "sav-maddummystate": 252,
    "sav-undynestate2": 350,
    "sav-muffetstate": 397,
    "sav-broguardsstate": 402,
    "sav-mettatonstate": 425,
    "sav-undyne-cell": 465
};

var inputForFlag = {}; // and vice versa
for (var id in flagFor) {
    inputForFlag["sav-flag-" + flagFor[id]] = id;
}

var killedBool = [
    "Baslangıç durum",
    "Öldürüldü",
];

var simpleDogStates = [
    "Baslangıç durum",
    "Öldürüldü",
    "Getir götür oynadı (Bagıslandı)"
];

var stateChoiceArrays = {
    "sav-trainingdummystate": [
        "Baslangıç durum",
        "Öldürüldü",
        "Konusuldu",
        "Saçmalıklarından bıktı"
    ],
    "sav-torielstate": {
        "0": "Baslangıç durum",
        "1": "Bodrumda",
        "3": "Kaçınıldı",
        "4": "Öldürüldü",
        "5": "Bagıslandı"
    },
    "sav-doggostate": simpleDogStates,
    "sav-dogamydogaressastate": simpleDogStates,
    "sav-greaterdogstate": [
        "Baslangıç durum",
        "Öldürüldü",
        "Getir götür oynadı (Bagıslandı)",
        "Umursanmaı"
    ],
    "sav-comedianstate": [
        "Baslangıç durum",
        "Sakasına gülüldü [Sarı kredi]",
        "Öldürüldü"
    ],
    "sav-papyrusstate": {
        "-3": "Üç kez kaybedildi",
        "-2": "Iki kez kaybedildi",
        "-1": "Bir kez kaybedildi",
        "0": "Baslangıc durum",
        "1": "Öldürüldü"
    },
    "sav-shyrenstate": [
        "Baslangıc durum",
        "Öldürüldü",
        "Mırıldanma devam edildi [Sarı kredi]"
    ],
    "sav-undynestate1": killedBool, // Undyne The Undying
    "sav-maddummystate": killedBool, // *Glad Dummy
    "sav-undynestate2": [ // Undyne in general
        "Baslangıc durum",
        "Öldürüldü",
        "Hasta(?)"
    ],
    "sav-muffetstate": killedBool,
    "sav-broguardsstate": killedBool,
    "sav-mettatonstate": killedBool,
    "sav-weapon": weapons,
    "sav-armor": armors,
    "sav-plotvalue": {
        // "0": "New game",
        // "1": "Flowey intro complete",
        "2": "Ilk Kayıt",
        "3": "Basamaklı karo bulmacası tamamlandı",
        "4": "Toriel anahtar bulmacasında bekliyor",
        "4.5": "Ilk dügme çevrildi",
        "5": "Anahtar bulmacası tamamlandı",
        "5.5": "Toriel mankende bekliyor",
        // "6": "Dummy defeated",
        "7": "Toriel dikenler bulmacasında",
        // "7.5": "Crossing spike puzzle",
        "8": "Dikenler bulmacası tamamlandı",
        // "8.5": "Unnecessary Tension",
        "9": "Toriel ayrıldı",
        "9.2": "Toriel bulmaca çagrısı alındı",
        "9.4": "Toriel tercih çagrısı alındı",
        "9.6": "Toriel onay çagrısı alındı",
        "9.8": "Toriel alerji çagrısı aldı",
        // "10.3": "Napstablook spared",
        // "10.35": "Battle exited",
        // "10.4": "And some dialogue", // needs better desc.
        "11": "Napstablook yenildi",
        "12": "Toriel cep telefonu çagrısı alındı",
        "13": "Sadece bir anahtar bulmacası çözüldü",
        "14": "Mavi dügme çevrildi",
        "15": "Kırmızı dügme çevrildi",
        "16": "Yesil dügme çevrildi",
        "17": "Harabelerin sonunda Toriel ile bulustu",
        "18": "Toriel yatak odasında bekliyor",
        "19": "Toriel okuma",
        "19.1": "Uyku önerisi alındı",
        "19.2": "\"Her zaman ögretmen olmak istemisimdir. \"",
        // "19.3": "Receiving snail fact",
        "19.4": "Salyangoz bilgisi alındı",
        // "19.9": "\"I have to do something\"",
        // "20": "Toriel standing up",
        "21": "Toriel bodrumda",
        "22": "Toriel bodrumda 2",
        "23": "Toriel bodrumda 3",
        "24": "Toriel Harabeler Çıkısında",
        // It goes back to 11 for a moment here, fwiw. Copy-paste.
        "25": "Toriel yenildi",
        // "28": "Flowey judgment complete",
        // "30": "Exited Ruins",
        // "36": "Met Sans and Papyrus, Sans hasn't left",
        "37": "Sans/Papyrus intro tamamlandı",
        "40": "Papyrus tas sahnesi tamamlandı",
        // "41": "Doggo defeated, still in battle",
        "42": "Doggo yenildi",
        "43": "Görünmez labirent tamamlandı",
        "47": "Çapraz Bulmaca tamamlandı",
        "49": "Kar altı anahtarı açıldı",
        // "50": "Dogi defeated, still in battle",
        "51": "Dogi yenildi",
        "53": "Küçük XO bulmacası tamamlandı",
        "54": "Büyük XO bulmacası baslangıc",
        "56": "Büyük XO bulmacası tamamlandı",
        "57": "XO bulmacaları tamamlandı (Soykırım)",
        "58": "Papyrus'un karo bulmacası tamamlandı",
        "63": "Buzlu XO bulmacası tamamlandı",
        // "60": "Greater Dog defeated, still in battle",
        // "61": "Greater Dog spared",
        "65": "Büyük köpek yenildi",
        "67": "Ölümcül Dehset Eldiveni tamamlandı",
        // "100": "Papyrus defeated, in post-battle cutscene",
        "101": "Papyrus yenildi",
        "106": "Undyne intro tamamlandı",
        "107": "Tohumlu Köprü bulmacaları tamamlandı", // technically when you get Papyrus's call, or don't get it as the case may be, but this seems more apt.
        "108": "Gizli kapı açıldı",
        // "109": "", // Something about that unused torch puzzle in room_water7_older? Inaccessible anyway.
        "110": "Undyne mızrak atma sahnesi tamamlandı",
        "111": "Shyren yenildi",
        "112": "Canavar Çocuk çömeliyor",
        "113": "Tırmanılan çıkıntı",
        "115": "Undyne köprü kovalama sahnesi tamamlandı (çöpe giris)",
        "116": "Kızgın Manken yenildi",
        "117": "Napstablook'un direktifleri alındı/Mutlu Manken yenildi", // verify
        "118": "\"A r k a n d a.\" sahnesi tamamlandı",
        "119": "Ölümsüz Undyne Öncesi", // Set by a trigger in room_water19. The trigger also causes the Flowey echo flower and "Shouldn't proceed yet" on Genocide.
        "120": "Son Canavar Çocuk sahnesi tammalandı",
        "121": "Undyne'ın konusması alındı",
        "122": "Undyne yenildi",
        // "126": "Quiz show complete, phone not upgraded",
        "127": "Quiz gösterisi tammalandı (Nötr/Pasifist)",
        "130": "Alphys kapatması alındı",
        "131": "Alphys lazer açıklaması alındı",
        "132": "Alphys atıcı bulmaca açıklaması alındı",
        "133": "İlk atıcı bulmacası tamamlandı", // triggers on door opening
        "133.5": "Alphys'in gereksiz bulmaca açıklaması alındı",
        // "134": "Ingredients collected",
        "135": "Yemek pisirme gösterisi tamamlandı",
        "137": "Alphys CORE açıklaması alındı",
        "139": "Alphys üç anahtar açıklaması alındı",
        "140": "Üç anahtarlı bulmaca tamamlandı",
        "143": "Alphys banyo çagrısı alındı",
        "146": "Kraliyet Muhafızları yenildi (Nötr/Pasifist)",
        "160": "Mettaton girisi tamamlandı (Soykırım)",
        "161": "Haber gösterisi tamamlandı",
        "162": "\"insan ruhunla bariyeri geçebilirsin! \"",
        "163": "\"UnderNet'te arkadas olalım!\"",
        "164": "İkinci nisancı bulmacası tamamlandı/Kraliyet Muhafızları yenildi (Soykırım)",
        "165": "Muffet yenildi (Tarafsız/Pasifist)",
        // "167": "Opera scene complete",
        "168": "Mettaton'un karo bulmacası tamamlandı",
        "176": "Benekli paralı askerler",
        "177": "Alphys asansör çagrısı alındı",
        "179": "İlk Madjick savası tamamlandı",
        "180": "Alphys lazer çagrısı alındı",
        "181": "Alphys özür çagrısı alındı",
        "182": "\"Saga dogru gitmeyi dene! \"",
        "184": "Lazer köprüsü yeniden etkinlestiriliyor tamamlandı",
        "185": "\"Bu benim haritama hiç benzemiyor\"/Muffet yenildi (Soykırım)",
        // "193": "Mettaton defeated, Alphys scene incomplete",
        "199": "Mettaton yenildi",
        "201": "Gerçek Laboratuvar tamamlandı (Pasifist)/Son Koridor tamamlandı (Nötr/Soykırım)",
        "206": "Asgore intro tamamlandı",
        "207": "\"Disçiye bir ziyaret\"",
        "208": "Asgore Öncesi",
        "999": "Pasifist epilog"
    },
    "sav-location": rooms[1],
    "ini-location": rooms[1],
    "allowed-locations": roomSelectOptions,
    "allowed-locations-2": roomSelectOptions,
    "ini-omega-flowey-soul": [
        "Hiçbiri (Baslangıc durum)",
        "Açık Mavi (Baslangıc savas)",
        "Turuncu",
        "Mavi",
        "Mor",
        "Yesil",
        "Sarı",
        "Yok (Son)"
    ]
};

for (var i = 1; i <= 8; i++) {
    stateChoiceArrays["sav-invslot" + i] = items;
    stateChoiceArrays["sav-cellslot" + i] = cellOpts;
}

function parseIniFromText(text) {
    "use strict";
    var lines = text.match(/[^\r\n]+/g);
    var section = null;
    var ini = {};
    lines.forEach(function(line) {
        // Ignore empty lines
        if (line === "") {
            return;
        }
        // If line starts with [, it is a section header
        var lbracket = line.indexOf("[");
        if (lbracket !== -1) {
            var rbracket = line.slice(lbracket).indexOf("]") + lbracket;
            if (rbracket !== -1) {
                section = line.slice(lbracket + 1, rbracket);
                ini[section] = {};
            }
        } else { // Otherwise, it is assumed to be an assignment
            if (section === null) {
                throw "Assignment outside of a section";
            }
            var eq = line.indexOf("=");
            if (eq === -1) {
                throw "Expected '='";
            }
            var lquot = line.indexOf('"');
            if (lquot === -1) {
                throw "Expected '\"'";
            }
            var rquot = line.slice(lquot + 1).indexOf('"') + lquot + 1;
            if (rquot === -1) {
                throw "Unterminated value string";
            }
            var value = line.slice(lquot + 1, rquot);
            var key = line.slice(0, eq);
            ini[section][key] = value;
        }
    });
    return ini;
}

function flowey_laugh_once() {
    "use strict";
    if (localStorage.getItem("laughed") !== "true") {
        document.getElementById("floweyimg").src = "res/flowey_evil.png";
        if(!document.getElementById("mute").checked) {
            var audio = new Audio("res/flowey_laugh.mp3");
            audio.play();
        }
        localStorage.setItem("laughed", "true");
    }
}


// Load undertale.ini data into an ini object and execute a closure on it.
function loadIniFromFile(file, closure) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        try {
            closure(parseIniFromText(text));
        } catch (err) {
            window.alert("Hata ayrıştırma undertale.ini: " + err);
        }
    };
    reader.readAsText(file);
}

// Load save data from a file into an array of values, and execute a closure on it.
function loadSaveFromFile(file, closure) {
    "use strict";
    var reader = new FileReader();
    reader.onload = function(e) {
        var text = e.target.result;
        closure(text.match(/[^\r\n]+/g).map(function(line) {
            return line.trim();
        }));
    };
    reader.readAsText(file);
}

// Update the persistent data form from an ini object.
function updatePersistentDataForm(iniobj) {
    "use strict";
    document.getElementById("ini-name").value = iniobj.General.Name;
    updateSelection("ini-location", iniobj.General.Room);
    document.getElementById("ini-kills").value = Number(iniobj.General.Kills.trim());
    document.getElementById("ini-love").value = Number(iniobj.General.Love.trim());
    if (iniobj.FFFFF) {
        if (iniobj.FFFFF.F) {
            document.getElementById("ini-omega-flowey-trapped").checked = (Number(iniobj.FFFFF.F.trim()) === 1);
        }
        if (iniobj.FFFFF.P) {
            updateSelection("ini-omega-flowey-soul", iniobj.FFFFF.P);
        }
        if (iniobj.FFFFF.D) {
            document.getElementById("ini-omega-flowey-deaths").value = Number(iniobj.FFFFF.D.trim());
        }
    } else {
        document.getElementById("ini-omega-flowey-trapped").checked = false;
    }
    if (iniobj.reset) {
        if (iniobj.reset.s_key) {
            document.getElementById("ini-dodged-all-special-thanks").checked = (Number(iniobj.reset.s_key.trim()) === 1);
        }
    } else {
        document.getElementById("ini-dodged-all-special-thanks").checked = false;
    }
    if (iniobj.General.fun) {
        document.getElementById("ini-fun").value = Number(iniobj.General.fun.trim());
    }
}

// Update an ini object from the persistent data form.
function updateIniFromForm(ini) {
    "use strict";
    ini.General.Name = document.getElementById("ini-name").value;
    ini.General.Room = document.getElementById("ini-location").value;
    ini.General.Kills = document.getElementById("ini-kills").value;
    ini.General.Love = document.getElementById("ini-love").value;
    if (document.getElementById("ini-omega-flowey-trapped").checked) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        ini.FFFFF.F = "1";
    } else {
        if (ini.FFFFF) {
            ini.FFFFF.F = "0";
        }
    }
    var upcomingSoul = Number(document.getElementById("ini-omega-flowey-soul").value);
    if (upcomingSoul) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        ini.FFFFF.P = upcomingSoul;
    }
    var timesDied = Number(document.getElementById("ini-omega-flowey-deaths").value);
    if (timesDied) {
        if (!ini.FFFFF) {
            ini.FFFFF = {};
        }
        if (ini.FFFFF) {
            ini.FFFFF.D = timesDied;
        }
    }
    if (document.getElementById("ini-dodged-all-special-thanks").checked) {
        if (!ini.reset) {
            ini.reset = {};
        }
        ini.reset.s_key = "1";
    } else {
        if (ini.reset) {
            ini.reset.s_key = "0";
        }
    }
    var fun = Number(document.getElementById("ini-fun").value);
    if (fun) {
        ini.General.fun = fun;
    }
}

function updateSelection(id, value, newChoiceArray) {
    "use strict";
    var select = document.getElementById(id);
    
    // Sanitize value
    if (typeof value === "string") {
        value = Number(value.trim());
    } else if (value === undefined) {
        if (select.value === undefined) {
            window.alert(id + ", form girişi için değer bulunamadı, varsayılan değer 0.");
            value = 0;
        } else {
            value = select.value;
        }
    }
    
    // Switch selected array
    if (newChoiceArray) {
        stateChoiceArrays[id] = newChoiceArray;
    }
    
    // Default case if incorrect ID is used (or stateChoiceArrays missing a case)
    if (!stateChoiceArrays[id]) {
        window.alert(id + " form girişi için ilişkili dizi bulunamadı, varsayılan olarak [\”Error\"].");
        stateChoiceArrays[id] = ["Error"];
    }
    
    // Add "Unrecognized" value if necessary
    if (!stateChoiceArrays[id][value]) {
        stateChoiceArrays[id][value] = "Unrecognized (" + value + ")";
    }
    
    // Clear old options
    while (select.firstChild) {
        select.removeChild(select.firstChild);
    }
    
    // Create options
    for (var key of Object.keys(stateChoiceArrays[id]).sort((a, b) => a - b)) { // (Decimal keys don't automatically sort correctly)
        var newOption = document.createElement("option");
        newOption.setAttribute("value", key);
        var newContent = document.createTextNode(stateChoiceArrays[id][key]);
        newOption.appendChild(newContent);
        select.appendChild(newOption);
    }
    
    // Update value
    select.value = value;
}

// Update the save data form from an array of values.
function updateSaveDataForm(values) {
    "use strict";
    document.getElementById("sav-name").value = values[0];
    document.getElementById("sav-kills").value = values[11];
    document.getElementById("sav-love").value = values[1];
    document.getElementById("sav-hp").value = values[2];
    document.getElementById("sav-exp").value = values[9];
    document.getElementById("sav-gold").value = values[10];
    document.getElementById("sav-at").value = values[4];
    document.getElementById("sav-weaponat").value = values[5];
    document.getElementById("sav-df").value = values[6];
    document.getElementById("sav-armordf").value = values[7];
    document.getElementById("sav-undyne-cell").checked = (Number(values[495].trim()) === 1);
    if (Number(values[495].trim()) === 1) {
        cellOpts[210] = "Papyrus and Undyne";
    } else {
        cellOpts[210] = "Papyrus's Phone";
    }
    for (var i = 1; i <= 8; i++) {
        updateSelection("sav-invslot" + i, values[10 + (i * 2)]);
        updateSelection("sav-cellslot" + i, values[11 + (i * 2)]);
    }
    if (document.getElementById("allow-non-equipables").checked) {
        updateSelection("sav-weapon", values[28], items);
        updateSelection("sav-armor", values[29], items);
    } else {
        updateSelection("sav-weapon", values[28], weapons);
        updateSelection("sav-armor", values[29], armors);
    }
    updateSelection("sav-trainingdummystate", values[44]);
    updateSelection("sav-torielstate", values[75]);
    updateSelection("sav-doggostate", values[82]);
    updateSelection("sav-dogamydogaressastate", values[83]);
    updateSelection("sav-greaterdogstate", values[84]);
    updateSelection("sav-comedianstate", values[87]);
    updateSelection("sav-papyrusstate", values[97]);
    updateSelection("sav-shyrenstate", values[111]);
    document.getElementById("sav-ruinskills").value = values[232];
    document.getElementById("sav-snowdinkills").value = values[233];
    document.getElementById("sav-waterfallkills").value = values[234];
    document.getElementById("sav-hotlandkills").value = values[235];
    updateSelection("sav-undynestate1", values[281]);
    updateSelection("sav-maddummystate", values[282]);
    updateSelection("sav-undynestate2", values[380]);
    updateSelection("sav-muffetstate", values[427]);
    updateSelection("sav-broguardsstate", values[432]);
    updateSelection("sav-mettatonstate", values[455]);
    document.getElementById("sav-exitedtruelab").checked = (Number(values[523].trim()) === 12);
    document.getElementById("sav-defeatedasriel").checked = (Number(values[37].trim()) === 1);
    updateSelection("sav-plotvalue", values[542]);
    if (Number(values[545].trim()) != document.getElementById("sav-havecell").checked) {
        document.getElementById("cellslots").classList.toggle('hidden');
    }
    document.getElementById("sav-havecell").checked = (Number(values[545].trim()) === 1);
    updateSelection("sav-location", values[547]);
    document.getElementById("sav-fun").value = Number(values[35].trim());
    for (var i = 0; i < 512; i++) {
        if (document.getElementById("sav-flag-" + i).nodeName === "SELECT") {
            updateSelection("sav-flag-" + i, values[30 + i], flags[i][2]);
        } else {
            document.getElementById("sav-flag-" + i).value = values[30 + i];
        }
        // Update checkboxes (should have no ill effects on non-checkbox-based flags)
        document.getElementById("sav-flag-" + i).previousSibling.checked = Number(document.getElementById("sav-flag-" + i).value);
    }
}

// Update an array of values from the save data form.
function updateSaveValuesFromForm(values) {
    "use strict";
    values[523] = "0"; // Initialize correctly
    for (var i = 0; i < flags.length; i++) {
        values[30 + i] = document.getElementById("sav-flag-" + i).value;
    }
    values[0] = document.getElementById("sav-name").value;
    values[1] = document.getElementById("sav-love").value;
    values[2] = document.getElementById("sav-hp").value;
    values[4] = document.getElementById("sav-at").value;
    values[5] = document.getElementById("sav-weaponat").value;
    values[6] = document.getElementById("sav-df").value;
    values[7] = document.getElementById("sav-armordf").value;
    values[9] = document.getElementById("sav-exp").value;
    values[10] = document.getElementById("sav-gold").value;
    values[11] = document.getElementById("sav-kills").value;
    for (var i = 1; i <= 8; i++) {
        values[10 + (i * 2)] = document.getElementById("sav-invslot" + i).value;
        values[11 + (i * 2)] = document.getElementById("sav-cellslot" + i).value;
    }
    values[28] = document.getElementById("sav-weapon").value;
    values[29] = document.getElementById("sav-armor").value;
    values[44] = document.getElementById("sav-trainingdummystate").value;
    values[75] = document.getElementById("sav-torielstate").value;
    values[82] = document.getElementById("sav-doggostate").value;
    values[83] = document.getElementById("sav-dogamydogaressastate").value;
    values[84] = document.getElementById("sav-greaterdogstate").value;
    values[87] = document.getElementById("sav-comedianstate").value;
    values[97] = document.getElementById("sav-papyrusstate").value;
    values[111] = document.getElementById("sav-shyrenstate").value;
    values[232] = document.getElementById("sav-ruinskills").value;
    values[233] = document.getElementById("sav-snowdinkills").value;
    values[234] = document.getElementById("sav-waterfallkills").value;
    values[235] = document.getElementById("sav-hotlandkills").value;
    values[281] = document.getElementById("sav-undynestate1").value;
    values[282] = document.getElementById("sav-maddummystate").value;
    values[380] = document.getElementById("sav-undynestate2").value;
    values[427] = document.getElementById("sav-muffetstate").value;
    values[432] = document.getElementById("sav-broguardsstate").value;
    values[455] = document.getElementById("sav-mettatonstate").value;
    values[495] = Number(document.getElementById("sav-undyne-cell").checked);
    if (document.getElementById("sav-exitedtruelab").checked) {
        values[523] = "12";
    }
    values[37] = Number(document.getElementById("sav-defeatedasriel").checked);
    values[542] = document.getElementById("sav-plotvalue").value;
    values[545] = Number(document.getElementById("sav-havecell").checked);
    values[547] = document.getElementById("sav-location").value;
    values[35] = document.getElementById("sav-fun").value;
}

function saveIniToFile(ini) {
    "use strict";
    var string = "";
    for (var section in ini) {
        string += "[" + section + "]\r\n";
        for (var key in ini[section]) {
            string += key + "=\"" + ini[section][key] + "\"\r\n";
        }
    }
    var blob = new Blob([string], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "undertale.ini", true);
    flowey_laugh_once();
}

function saveSaveValuesToFile(values) {
    "use strict";
    var string = "";
    for (var i = 0; i < values.length; i++) {
        string += values[i] + "\r\n";
    }
    var blob = new Blob([string], {type: "application/octet-stream"});
    saveAs(blob, "file0", true);
    flowey_laugh_once();
}

function loadPresetSelect() {
    "use strict";
    var selectNode = document.getElementById("builtinpresetselect");
    for (var k in presets) {
        var newOption = document.createElement("option");
        var newContent = document.createTextNode(k);
        newOption.appendChild(newContent);
        selectNode.appendChild(newOption);
    }
}

function start() {
    "use strict";
    var userPresets = localStorage.getItem("userPresets");
    var advancedMode = (localStorage.getItem("advanced") == "true");
    if (userPresets === null) {
        localStorage.setItem("userPresets", JSON.stringify({}));
    } else {
        for (var key in JSON.parse(userPresets)) {
            var presetSelect2 = document.getElementById("userpresetselect");
            var option2 = document.createElement("option");
            var text2 = document.createTextNode(key);
            option2.appendChild(text2);
            presetSelect2.appendChild(option2);
        }
    }
    if (localStorage.getItem("laughed") === "true") {
        document.getElementById("floweyimg").src = "res/flowey_evil.png";
    }
    var ini, saveLines;
    function loadPreset(name) {
        ini = presets[name].ini;
        saveLines = presets[name].lines;
        updateSaveDataForm(saveLines);
        updatePersistentDataForm(ini);
    }
    // Initialize form
    updateSelection("allowed-locations", 1);
    updateSelection("allowed-locations-2", 1);
    var advanced = document.getElementById("advanced");
    if (advancedMode) {
        advanced.classList.remove('hidden');
        document.getElementById("hide-advanced").innerHTML = "Sakla";
    }
    for (var i = 0; i < flags.length; i += 3) {
        for (var j = 0; j < 3; j++) {
            var checkDesc = false;
            var newLabel = document.createElement("label");
            newLabel.setAttribute("for", "sav-flag-" + (i + j));
            newLabel.innerHTML = "[" + (i + j) + "] " + flags[i + j][0];
            if (typeof flags[i + j][1] === "string") {
                newLabel.title = flags[i + j][1];
                checkDesc = true;
            }
            
            // Hide unused flags, highlight debug ones.
            if (flags[i + j][0] === "unused" || (checkDesc && (
                flags[i + j][1].indexOf("nused") !== -1 || // "U" removed for case insensitivity
                flags[i + j][1].indexOf("Unaccessed") !== -1
            ))) {
                newLabel.classList.add("gray");
            } else if (checkDesc && flags[i + j][1].indexOf("Debug") !== -1) {
                newLabel.classList.add("red");
            }
            
            advanced.appendChild(newLabel);
        }
        for (var j = 0; j < 3; j++) {
            var newField;
            if (typeof flags[i + j][2] === "object") { // Options listed
                newField = document.createElement("select");
                for (var key of Object.keys(flags[i + j][2]).sort((a, b) => a - b)) { // (Decimal keys don't automatically sort correctly)
                    var newOption = document.createElement("option");
                    newOption.setAttribute("value", key);
                    var newContent = document.createTextNode(flags[i + j][2][key]);
                    newOption.appendChild(newContent);
                    newField.appendChild(newOption);
                }
                newField.setAttribute("id", "sav-flag-" + (i + j));
                newField.value = 0;
                if (i > 500) {
                    debugVars[i + j] = newField;
                }
            } else if (typeof flags[i + j][2] === "string") { // Simple boolean
                newField = document.createElement("div");
                newField.setAttribute("class", "checkbox");
                newField.style.marginTop = 0;
                var newOption = document.createElement("input");
                newOption.setAttribute("type", "checkbox");
                newOption.addEventListener("change", function() {
                    this.nextSibling.value = Number(this.checked);
                });
                newField.appendChild(newOption);
                newOption = document.createElement("input");
                newOption.setAttribute("type", "number");
                newOption.addEventListener("change", function() {
                    this.previousSibling.checked = Number(this.value);
                });
                newOption.style.width = "100%";
                newOption.setAttribute("id", "sav-flag-" + (i + j));
                newOption.value = 0;
                newField.appendChild(newOption);
            } else { // Numerical value
                newField = document.createElement("input");
                newField.setAttribute("type", "number");
                newField.setAttribute("id", "sav-flag-" + (i + j));
                newField.value = 0;
            }
            advanced.appendChild(newField);
        }
    }
    loadPresetSelect();
    loadPreset("Harabeler Baslangıc");
    
    // Selecting a file
    var iniFile, saveFile;
    document.getElementById("ini-file").addEventListener("change", function(evt) {
        iniFile = evt.target.files[0];
        if (iniFile) {
            document.getElementById("ini-loadbutton").classList.remove('disabled');
            document.querySelector(`label[for="${event.target.id}"]`).style = "border-color: #fff"
        } else {
            document.getElementById("ini-loadbutton").classList.add('disabled');
        }
    });
    document.getElementById("sav-file").addEventListener("change", function (evt) {
        saveFile = evt.target.files[0];
        if (saveFile) {
            document.getElementById("sav-loadbutton").classList.remove('disabled');
            document.querySelector(`label[for="${event.target.id}"]`).style = "border-color: #fff"
        } else {
            document.getElementById("sav-loadbutton").classList.add('disabled');
        }
    });
    
    // Loading
    document.getElementById("ini-loadbutton").addEventListener("click", function() {
        if (!iniFile) {
            window.alert("Önce bir dosya seçmeniz gerekiyor!");
            return;
        }
        loadIniFromFile(iniFile, function(iniobj) {
            updatePersistentDataForm(iniobj);
            ini = iniobj;
        });
    });
    document.getElementById("sav-loadbutton").addEventListener("click", function() {
        if (!saveFile) {
            window.alert("Önce bir dosya seçmeniz gerekiyor!");
            return;
        }
        loadSaveFromFile(saveFile, function(lines) {
            updateSaveDataForm(lines);
            saveLines = lines;
        });
    });
    
    // Saving
    document.getElementById("ini-savebutton").addEventListener("click", function() {
        updateIniFromForm(ini);
        saveIniToFile(ini);
    });
    document.getElementById("sav-savebutton").addEventListener("click", function() {
        updateSaveValuesFromForm(saveLines);
        saveSaveValuesToFile(saveLines);
    });
    
    // system_information download
    document.getElementById("savesi2").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_962", true);
        flowey_laugh_once();
    });
    document.getElementById("savesi3").addEventListener("click", function() {
        var blob = new Blob([], {type: "application/octet-stream"});
        saveAs(blob, "system_information_963", true);
        flowey_laugh_once();
    });
    
    // Weapon/armor AT/DF calculation
    var weaponSelect = document.getElementById("sav-weapon");
    var armorSelect = document.getElementById("sav-armor");
    weaponSelect.addEventListener("change", function() {
        var weaponAt = weaponAts[weaponSelect.value];
        var armorAt = armorAts[armorSelect.value] || 0; // Cowboy Hat, Temmie Armor
        if (typeof weaponAt !== "undefined") {
            document.getElementById("sav-weaponat").value = weaponAt + armorAt;
        }
        
    });
    armorSelect.addEventListener("change", function() {
        var df = armorDfs[armorSelect.value];
        if (typeof df !== "undefined") {
            document.getElementById("sav-armordf").value = df;
        }
        var weaponAt = weaponAts[weaponSelect.value];
        var armorAt = armorAts[armorSelect.value] || 0;
        if (typeof weaponAt !== "undefined") {
            document.getElementById("sav-weaponat").value = weaponAt + armorAt;
        } else {
            document.getElementById("sav-weaponat").value = Number(document.getElementById("sav-weaponat").value) + armorAt;
        }
    });
    
    // Interface-altering options
    var allowedLocations1 = document.getElementById("allowed-locations");
    var allowedLocations2 = document.getElementById("allowed-locations-2");
    const updateAllowedLocations1 = () => {
        allowedLocations2.value = allowedLocations1.value;
        updateSelection("ini-location", undefined, rooms[allowedLocations1.value]);
        updateSelection("sav-location", undefined, rooms[allowedLocations1.value]);
    };
    const updateAllowedLocations2 = () => {
        allowedLocations1.value = allowedLocations2.value;
        updateSelection("ini-location", undefined, rooms[allowedLocations1.value]);
        updateSelection("sav-location", undefined, rooms[allowedLocations1.value]);
    };
    allowedLocations1.addEventListener("change", updateAllowedLocations1);
    allowedLocations2.addEventListener("change", updateAllowedLocations2);
    document.getElementById("allow-non-equipables").addEventListener("change", function() {
        if (document.getElementById("allow-non-equipables").checked) {
            updateSelection("sav-weapon", undefined, items);
            updateSelection("sav-armor",  undefined, items);
        } else {
            updateSelection("sav-weapon", undefined, weapons);
            updateSelection("sav-armor",  undefined, armors);
        }
    });
    document.getElementById("sav-havecell").addEventListener("change", function() {
        document.getElementById("cellslots").classList.toggle('hidden');
    });
    var callUndyne = document.getElementById("sav-undyne-cell");
    callUndyne.addEventListener("change", function() {
        if (callUndyne.checked) {
            cellOpts[210] = "Papyrus and Undyne";
        } else {
            cellOpts[210] = "Papyrus's Phone";
        }
        for (var i = 1; i <= 8; i++) {
            updateSelection("sav-cellslot" + i);
        }
    });
    
    // Presets
    document.getElementById("builtinpresetload").addEventListener("click", function() {
        var name = document.getElementById("builtinpresetselect").value;
        loadPreset(name);
    });
    function saveUserPreset(name) {
        updateIniFromForm(ini);
        updateSaveValuesFromForm(saveLines);
        var obj = {
            "ini": ini,
            "lines": saveLines,
        };
        var presets = JSON.parse(localStorage.getItem("userPresets"));
        presets[name] = obj;
        localStorage.setItem("userPresets",JSON.stringify(presets));
    }
    document.getElementById("userpresetnew").addEventListener("click", function() {
        var name = window.prompt("Yeni ön ayarınızın adını girin");
        if (name === null || name === "") {
            window.alert("Geçerli bir ad girmediniz, ön ayar oluşturulmadı.");
        } else {
            saveUserPreset(name);
            var presetSelect = document.getElementById("userpresetselect");
            var option = document.createElement("option");
            var text = document.createTextNode(name);
            option.appendChild(text);
            presetSelect.appendChild(option);
            presetSelect.value = name;
            document.getElementById("userpresetload").classList.remove('disabled');
            document.getElementById("userpresetsave").classList.remove('disabled');
            document.getElementById("userpresetdelete").classList.remove('disabled');
            document.getElementById("userpresetexport").classList.remove('disabled');
        }
    });
    document.getElementById("userpresetsave").addEventListener("click", function() {
        var name = document.getElementById("userpresetselect").value;
        if (name !== null && name !== "") {
            saveUserPreset(name);
        } else {
            window.alert("Önce geçerli bir ön ayar seçmeniz gerekir!");
        }
    });
    document.getElementById("userpresetload").addEventListener("click", function() {
        var name = document.getElementById("userpresetselect").value;
        if (name !== null && name !== "") {
            var item = localStorage.getItem("userPresets");
            var presets = JSON.parse(item);
            var obj = presets[name];
            ini = obj.ini;
            saveLines = obj.lines;
            updateSaveDataForm(saveLines);
            updatePersistentDataForm(ini);
        } else {
            window.alert("Önce geçerli bir ön ayar seçmeniz gerekir!");
        }
    });
    document.getElementById("userpresetdelete").addEventListener("click", function() {
        var selection = document.getElementById("userpresetselect");
        var name = selection.value;
        var children = selection.childNodes;
        for (var i = 0; i < children.length; i++) {
            if (children[i].value === name) {
                selection.removeChild(children[i]);
                break;
            }
        }
        var item = localStorage.getItem("userPresets");
        var presets = JSON.parse(item);
        delete presets[name];
        localStorage.setItem("userPresets", JSON.stringify(presets));
        if (document.getElementById("userpresetselect").value === "") {
            document.getElementById("userpresetload").classList.add('disabled');
            document.getElementById("userpresetsave").classList.add('disabled');
            document.getElementById("userpresetdelete").classList.add('disabled');
            document.getElementById("userpresetexport").classList.add('disabled');
        }
    });
    if (document.getElementById("userpresetselect").value !== "") {
        document.getElementById("userpresetload").classList.remove('disabled');
        document.getElementById("userpresetsave").classList.remove('disabled');
        document.getElementById("userpresetdelete").classList.remove('disabled');
        document.getElementById("userpresetexport").classList.remove('disabled');
    }
    document.getElementById("userpresetexport").addEventListener("click", function() {
        var presets = JSON.parse(localStorage.getItem("userPresets"));
        var name = document.getElementById("userpresetselect").value;
        saveUserPreset(name);
        var preset = presets[name];
        var string = "presets[\"" + name + "\"] = " + JSON.stringify(preset) + ";";
        var blob = new Blob([string], {type: "application/octet-stream"});
        saveAs(blob, name + ".js", true);
    });
    
    document.getElementById("floweyimg").addEventListener("click", function() {
        document.getElementById("floweyimg").src = "res/flowey_wink.png";
        localStorage.setItem("laughed", false);
    });
    document.getElementById("hide-advanced").addEventListener("click", function() {
        if (advancedMode) {
            advanced.classList.add('hidden');
            advancedMode = false;
            localStorage.setItem("advanced", false);
            this.innerHTML = "Göster";
        } else {
            advanced.classList.remove('hidden');
            advancedMode = true;
            localStorage.setItem("advanced", true);
            this.innerHTML = "Sakla";
        }
    });
    
    var saveElements = document.querySelectorAll("input[id^=\"sav-\"],select[id^=\"sav-\"]");
    for (var i = 0; i < saveElements.length; i++) {
        if (flagFor[saveElements[i].id] >= 0) {
            saveElements[i].addEventListener("change", function() {
                if (this.type == "checkbox") {
                    document.getElementById("sav-flag-" + flagFor[this.id]).value = Number(this.checked);
                } else {
                    document.getElementById("sav-flag-" + flagFor[this.id]).value = this.value;
                }
            });
        } else if (inputForFlag[saveElements[i].id]) {
            saveElements[i].addEventListener("change", function() {
                var targetElement = document.getElementById(inputForFlag[this.id]);
                if (targetElement.type == "checkbox") {
                    targetElement.checked = Number(this.value);
                } else if (targetElement.type == "number") {
                    targetElement.value = this.value;
                } else { // dropdown
                    updateSelection(targetElement.id, this.value);
                }
            });
        }
    }

    // Synchronize locations select and number inputs
    document.getElementById("ini-location-num").addEventListener("change", () => {
        // Force All Rooms when manually changing ID
        document.getElementById("allowed-locations").selectedIndex = 2;
        updateAllowedLocations1();
        document.getElementById("ini-location").value = document.getElementById("ini-location-num").value;
    });
    document.getElementById("ini-location").addEventListener("change", () => {
        document.getElementById("ini-location-num").value = document.getElementById("ini-location").value;
    });
    document.getElementById("sav-location-num").addEventListener("change", () => {
        // Force All Rooms when manually changing ID
        document.getElementById("allowed-locations-2").selectedIndex = 2;
        updateAllowedLocations2();
        document.getElementById("sav-location").value = document.getElementById("sav-location-num").value;
    });
    document.getElementById("sav-location").addEventListener("change", () => {
        document.getElementById("sav-location-num").value = document.getElementById("sav-location").value;
    });
    // Sync initial values too
    document.getElementById("sav-location-num").value = document.getElementById("sav-location").value;
    document.getElementById("ini-location-num").value = document.getElementById("ini-location").value;
}

document.addEventListener("DOMContentLoaded", start);
