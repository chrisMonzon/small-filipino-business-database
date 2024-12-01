-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 23, 2024 at 11:41 PM
-- Server version: 10.6.19-MariaDB-cll-lve
-- PHP Version: 8.1.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `small_business`
--

-- --------------------------------------------------------

--
-- Table structure for table `business`
--

CREATE TABLE `business` (
  `business_id` int(11) DEFAULT NULL,
  `business_name` text DEFAULT NULL,
  `type` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `social_media` text DEFAULT NULL,
  `email` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `business`
--

INSERT INTO `business` (`business_id`, `business_name`, `type`, `description`, `social_media`, `email`) VALUES
(1, '843/Eight Four Three', 'Arts/Crafts/Decor', '843/Eight Four Three is a Filipinx queer owned and operated shop that strives to help the Filipino community be proud of their heritage. Selling patches, pins, and stickers, customers can fulfill the saying of being ''proud to be Pinoy.''', 'EightFourThree.bigcartel.com IG: @EightFourThree', 'https://www.eightfourthree.co/contact'),
(2, 'Adeling', 'Jewelry/Makeup', 'Adeling is a shop that celebrates the fun and beauty of Filipino culture. Each item in their shop is made or designed by artists and artisans from the Philippines as well as the diaspora. Adeling''s goal is to uplift the FilAm community by fostering connection through products that highlight shared Filipino experiences.', 'Website: www.ShopAdeling.com Insta/TikTok: @ShopAdeling', 'shopadeling@gmail.com'),
(3, 'Amber Agave', 'Food/Drink', 'Amber Agave is an Asian American founded and owned pop-up boba shop. Often participating in catering and community events in the Chicagoland area, Amber Agave crafts drinks that aim to celebrate cultural identity and reinterpret the way we experience beverage consumption.', 'AmberAgave.us IG: @Amber.Agave', 'connect@amberagave.us'),
(4, 'Amplified Apparel', 'Clothing/Accessories', 'After many challenges regarding timing, doubts, and trials/errors, the dream I had of starting a small side business finally came to fruition. Inspired by my upbringing in the Philippines and being a woman IN a minority, I decided to start Ampilfied Apparel in order to create designs that bring more presence to both our Philippine culture and women empowerment in the community. Our pieces include shirts, hoodies, shorts, joggers, sling bags, tank tops and hats.', 'ig: @ampilfied_apparel fb: Ampilfied Apparel store: Hawthorne Mall', 'ampilfiedapparel22@gmail.com'),
(5, 'Andreen''s Cookies', 'Food/Drink', 'Andreen''s Cookie Shop was started in early 2023 in a college apartment. Andreen''s love for baking and dedication toward sharing her Filipino culture are at the heart of this unique business. Indulge in a mouthwatering selection of cookies, each lovingly crafted to capture your favorite Asian flavors and desserts. From the classic sweetness of yema and ube to the refreshing taste of pandan and the delectable crunch of turon, our cookies offer an unforgettable flavor experience.', 'ig: @andreenscookies', 'Andreen.isidoro@gmail.com'),
(6, 'Arkipelago Books', 'ETC.', 'Arkipelago Books is a California based bookstore, distributor, and pillar of the community. The store primarily sells and distributes Filipino and Filipino American specialty books. With shipping available and participation in local events, any interested readers can indulge in Filipino literature, culture, social sciences, art, poetry, history, and more.', 'Website: www.ArkipelagoBooks.com Instagram: @ArkipelagoBooks', 'info@archipelagobooks.org'),
(7, 'Bongga Co.', 'Clothing/Accessories', 'Bongga Co., inspired by the Filipino slang ''fabulous,'' was founded with a vision to uplift and inspire by spreading positivity while shedding light on the lesser-known aspects of Filipino culture through its incorporation of local slang. The brand offers a collection of aesthetic handcrafted hoodies, crewnecks, and totes, all meticulously designed in-house and produced by hand to reflect the vibrant spirit of Filipino creativity.', 'Website: www.BonggaCo.com Insta/TikTok: @ShopBongga.Co', 'hello.bonggaco@gmail.com'),
(8, 'Carina''s Cupcakery', 'Food/Drink', 'Carina''s Cupcakery is a Chicagoland based home bakery. Offering local delivery and pick-up, those with a sweet tooth can enjoy Filipino flavor inspired desserts baked by Carina herself. From cupcakes and cakes to macaroons and even cupcake making lessons, satisfy your cupcake craving or book your next party with Carina!', 'IG: @CarinasCupcakery CarinasCupcakery.com', 'https://www.carinascupcakery.com/contact-carina'),
(9, 'Chorva Co.', 'Clothing/Accessories', 'Husband and wife Marlo & Meg were inspired to create and design products that reminded them of the motherland- Philippines. Chorva is a slang word for whatever it is you want it to be. Chorva products offers Filipino inspired designs from hoodies, crewneck sweatshirts, hats, totes, accessories, and stickers.', 'instagram: chorva.co', 'chorva.co@gmail.com'),
(10, 'Crochet Cama', 'Arts/Crafts/Decor', 'I started my business recently over last summer by attending a few art markets here and there as a vendor. I started off just doing crochet for fun and gifting it to friends and family, but I have now turned my passion into items I can share with more people.', 'ig: @CrochetCama', 'mcamasosa@gmail.com'),
(11, 'Emma''s Projects', 'Clothing/Accessories', 'Eighteen year old Emma Fadullon is a Filipina-American creator based in the suburbs of Chicago. Emma started at thirteen, sewing scrunchies and headbands for other people to love and enjoy. We hope you can be one of those people!', 'ig: @emmasprojects', ''),
(12, 'Fernwood Barbers', 'ETC.', 'Fernwood Barbers is a Filipino owned barbershop in Chicago. With locations in North Center and Logan Square, members of the Chicagoland community can get quality haircuts while also being surrounded by creativity, as the shop often collaborates or shows support for other community projects or hustles.', 'Website: www.FernwoodBarbers.com Instagram: @FernwoodBarbers', 'FERNWOODBARBERS@GMAIL.COM'),
(13, 'Filipinta', 'Jewelry/Makeup', 'Filipinta, which is a combination of the words ''Filipina'' and ''pinta,'' meaning paint, is a beauty brand that enhances the beauty of the Philippine culture and people. Based in New York with worldwide shipping, Filipinta offers makeup, accessories, box sets, and candles!', 'Website: www.Filipinta.com Instagram: @FilipintaBeauty', 'filipintabeauty@gmail.com'),
(14, 'FOR US, DEAR', 'Arts/Crafts/Decor', 'Handcrafted home goods made to be shared with partners, lovers, and friends. A connection of culture for us, through Asian-flavor inspired scents. For Us, Dear. is a FIL-AM owned business founded by Alyssa Dichoso.', 'IG: @For.Us.Dear', 'alyssadich@gmail.com'),
(15, 'HaribyArt', 'Arts/Crafts/Decor', 'HaribyArt is where artistic endeavors thrive. Founded and owned by a Filipino immigrant, HaribyArt promotes Filipino culture through apparel, stationery, and art. All designs are made with love and are a constant reminder to be unapologetically Pinoy.', 'HaribyArt.com tiktok: @haribyart', 'haribypaperco@gmail.com'),
(16, 'Kilig Candles Co.', 'Arts/Crafts/Decor', 'Kilig Candles Co., is a Canadian based eco-friendly candle brand under Truly Lifestyle Brand. Founded by Sean Blishen in 2020, Kilig offers sustainable and vegan coconut soy candles. The business works alongside Adhika, a non-profit organization to donate meals to children in the Philippines with every purchase.', 'Website: TrulyLifestyleBrand.com/collections/all-candles Instagram: @KiligCandleCo', 'hello@kiligcandleco.com'),
(17, 'Loren''s Macarons', 'Food/Drink', 'I always had a knack for baking throughout my childhood to now and I really wanted to challenge myself by making a rather difficult dessert... French macarons! With many years of practice, I finally managed to get the recipe right and I wanted to include not only my own creative take on them, but to add my own culture, the Philippines, by infusing flavors such as ube, buko pandan, mango, etc! With each macaron I create, I not only honor the artistry of French pastry-making but also share a piece of my Filipino heritage with those who indulge in my delectable creations. It''s a journey of taste, culture, and personal growth that continues to inspire me every day.', 'ig: @lorens._.macarons', 'lfaga2@illinois.edu'),
(18, 'Masiramon Chicago', 'Food/Drink', 'Masiramon Chicago specializes in authentic Filipino desserts and ulam (entrees) as well as Filipino inspired baked goods. My mission is to share the Filipino culture and flavors to the Chicagoland area. I enjoy incorporating Filipino flavors such as ube and calamansi like my top selling items- ube brownies and ube creme brulee.', 'ig: masiramon.chicago linktr.ee/masiramon.chicago', 'masiramon.chicago@gmail.com'),
(19, 'Mondaysuck', 'Clothing/Accessories', 'Mondaysuck is a Filipino owned, California based clothing brand inspired by streetwear and the West Coast vibe. With various apparel collections, Mondaysuck aims to create original, yet simplistic fashion pieces.', 'IG: @MONDAYSUCK Mondaysuck.com', 'service@mondaysuck.com'),
(20, 'Morena Collective', 'Clothing/Accessories', 'Morena Collective strives to empower the Filipinx community through apparel that celebrates the beauty of our shared heritage. In support of their mission to amplify the voices that have long been marginalized by Western standards, a portion of every sale is donated to organizations that uplift these communities.', 'IG: morena.collective / morenacollective.co', 'morenacollective@gmail.com'),
(21, 'MuijiStudio', 'Arts/Crafts/Decor', 'MuijiStudio is a small business based in Bloomington, IL. Specializing in stickers, stationery, and other accessories, owner Jenny Yip channels her heritage into her work, creating art celebrating Filipino and other Asian cultures. Her designs incorporate nostalgia, building joy and inspiring people to embrace their most authentic selves.', 'IG: @MuijiStudio MuijiStudio.com', 'muijistudio@gmail.com'),
(22, 'Mutuc Clay Earrings', 'Jewelry/Makeup', 'Mutuc Clay Earrings is a Filipina owned jewelry business based Chicago, IL. With a wide selection of handmade polymer clay earrings, jewelry enthusiasts can find unique and Filipino inspired accessories with Mutuc Clay.', 'IG: @Mutuc.Clay', ''),
(23, 'Pinny Planet', 'Arts/Crafts/Decor', 'Pinny Planet is a multi-fandom shop that focuses on creating merchandise to highlight the growing hobby of enamel pin\n24,Ruby''s Fast Food,Food/Drink,Ruby''s Fast Food is a family-owned business in Chicago', ' IL that serves traditional Filipino foods. They have been open since 1997', ' and they have even been featured by star chef Andrew Zimmern on Food Network and Travel Channel.\"'),
(25, 'Sage Rose Co.', 'Jewelry/Makeup', 'SageRoseCo was created by Dani Eustaquio during her freshman year of college! Dani wanted to make her jewelry accessible for everyone, selling trendy and size-inclusive jewelry at affordable prices! SageRoseCo offers rings from sizes 5-13 (including half sizes!) as well as beaded necklaces and bracelets.', 'Website: sageroseco.etsy.com IG/TikTok: @sageroseco', 'danikaeustaquio@gmail.com'),
(26, 'Salamat Cookies', 'Food/Drink', 'Salamat Cookies is an Indiana based business that celebrates Filipino culture with one flavored cookie at a time. Offering nationwide shipping, vegan and gluten free options, anyone can enjoy Salamat cookies.', 'Website: www.SalamatCookies.com IG: @SalamatCookies', 'eat@salamatcookies.com'),
(27, 'Tita Bun Collective', 'Clothing/Accessories', 'Tita Bun Collective started during the pandemic as a way to find and amplify community. Through fashion and art, Tita Bun Co. highlights the beauty and voices of where we come from. Designs are proudly inspired by the Filipino culture and experience of growing up in Hawaii.', 'Website: www.TitaBunCo.com Instagram: @TitaBunCo', 'titabunco@gmail.com'),
(28, 'Tita Mia''s', 'Food/Drink', 'Tita Mia''s is a Filipino restaurant and Cafe located in Niles, Illinois. With a menu full of Filipino delights and desserts, satisfy your cravings at Tita Mia''s!', 'IG: @Tita_Mias_Filipino', ''),
(29, 'Unreleased Grounds', 'Food/Drink', 'Unreleased Grounds is a Filipino owned brand selling t-shirts, hoodies, and more to establish a community and a future coffee shop.', 'Website: www.UnreleasedGrounds.com IG: @UnreleasedGrounds', 'https://unreleasedgrounds.com/pages/contact'),
(30, 'Veloria Coffee', 'Food/Drink', 'Veloria Coffee, a Filipino-owned Coffee Roaster, excels in crafting small-batch specialty coffee sourced globally. With a focus on introducing and showcasing high-quality specialty coffee from the Philippines.', 'Website: www.VeloriaCoffee.com IG: @VeloriaCoffee Facebook: Veloria Coffee', 'vilma@veloriacoffee.com'),
(31, 'Wounded Healing Art', 'Jewelry/Makeup', 'Wounded Healing Art is a Pinay-owned jewelry brand. Based in the San Francisco Bay area, Wounded Healing Art aims to combine intention and style by selling and accessorizing crystals inspired by Philippine culture, AAPI influence, and the crystals themselves. Started in 2019, this brand sells online through their website and participates in local pop-ups.', 'Website: www.WoundedHealingArt.com Instagram: @WoundedHealingArt', 'woundedhealingart@gmail.com'),
(32, 'YPArtistry', 'Arts/Crafts/Decor', 'YPArtistry is a Filipina-American small business founded by Ysabelle in 2020. Ysabelle has loved drawing ever since she could remember and began crocheting since she was 8 years old. Using her passion for art and her love for animals, Ysabelle has made YPArtistry a source for animal crochet plushies, hand-designed stickers, and other handmade crafts!', 'Website: ypartistry.etsy.com IG: @ypartistry', 'ypinp2@illinois.edu');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
