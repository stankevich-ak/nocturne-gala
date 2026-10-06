import fs from 'node:fs/promises';
import { Workbook, SpreadsheetFile } from '@oai/artifact-tool';

const out = '/Users/anna/Documents/website/nocturne-gala/outputs/01a0e696-0f3d-7ad0-8f4e-3335b1154e16/Blood_Moon_Ball_Island_Press_Outreach.xlsx';
const rows = [];
const add = (priority, name, type, area, contact, website, angle, source, caveat='') => rows.push([priority,name,type,area,contact,website,angle,source,caveat]);

// Direct editorial and event-submission routes in Greater Victoria.
add('A','Victoria Buzz — editorial','Local news','Greater Victoria','tips@victoriabuzz.com','https://victoriabuzz.com/','Pitch a photo-ready story: Victoria’s costume ball trades the usual Halloween bar crawl for beginner-friendly historic dancing.','https://victoriabuzz.com/tip/');
add('A','Victoria Buzz — events calendar','Event calendar','Greater Victoria','https://victoriabuzz.com/vbeventsadd/','https://victoriabuzz.com/','Submit a concise event listing with date, venue, ticket link, costume note and a strong vertical image.','https://victoriabuzz.com/vbeventsadd/');
add('A','Destination Greater Victoria','Visitor event calendar','Greater Victoria','https://www.tourismvictoria.com/events-calendar/submit-an-event','https://www.tourismvictoria.com/','Frame it as an unusual visitor-friendly Halloween night out; provide a 1200×900 image and full itinerary.','https://www.tourismvictoria.com/events-calendar/submit-an-event');
add('A','ArtsVictoria.ca','Arts calendar','Greater Victoria','https://www.artsvictoria.ca/about','https://www.artsvictoria.ca/','Lead with the historic dance workshop and social dancing; list both October dates clearly.','https://www.artsvictoria.ca/about');
add('A','LiveVictoria.com','Live event calendar','Greater Victoria','https://livevictoria.com/submit_listing','https://livevictoria.com/','Describe the music and dance program, then provide the ball date, venue and ticket link.','https://livevictoria.com/submit_listing');
add('A','LampPost Victoria','Local events newsletter','Greater Victoria','https://lamppostvictoria.beehiiv.com/subscribe/','https://lamppostvictoria.beehiiv.com/','Submit a short “what, when, where, why now” entry; emphasize an elegant Halloween alternative and the pre-ball workshop.','https://lamppostvictoria.beehiiv.com/subscribe/');
add('A','100.3 The Q! community events','Radio event calendar','Greater Victoria','https://www.theq.fm/events/','https://www.theq.fm/','Submit a short audience-friendly event listing and offer an on-air costume or dance demonstration.','https://www.theq.fm/events/');
add('A','The Martlet','Campus newspaper','Victoria / UVic','https://martlet.ca/contact/','https://martlet.ca/','Pitch a student-accessible Halloween experience and beginner-friendly dance; disclose ticket price plainly.','https://martlet.ca/contact/');
add('A','Times Colonist — life & arts','Regional newspaper','Greater Victoria','localnews@timescolonist.com','https://www.timescolonist.com/','Pitch the revival of historical social dance in Victoria with organizer interview and strong event photos.','https://www.ourplacesociety.com/wp-content/uploads/2025/10/TC_A3_Thanksgiving_Oct0725.pdf','Newsroom email printed in 2025 paper; confirm current desk before sending.');
add('A','Times Colonist — local events','Event calendar','Greater Victoria','https://www.timescolonist.com/local-events/','https://www.timescolonist.com/','Use the event creation route with precise times, location, tickets and costume expectations.','https://www.timescolonist.com/local-events/');
add('A','Greater Victoria News','Local newspaper','Greater Victoria','newsroom@vicnews.com','https://www.vicnews.com/','Lead with a first-time Victoria Halloween ball and a local organizer interview; provide visuals.','https://www.vicnews.com/news/photos-nuxalk-chief-teary-eyed-as-totem-pole-removed-from-victoria-museum-111106');
add('A','CHEK News','Island television news','Vancouver Island','https://cheknews.ca/','https://cheknews.ca/','Offer a highly visual rehearsal, costumes and a short on-camera historic dance demonstration.','https://www.nanaimo.ca/your-government/news-events/news/2023/08/17/links-to-local-news-outlets','Use website contact route; editorial email not verified here.');
add('A','CFAX 1070','News and talk radio','Greater Victoria','cfax.news@bellmedia.ca','https://www.cfax1070.com/','Offer a concise interview about why Victoria is embracing an elegant, participatory Halloween ball.','https://www.cfax1070.com/contact-us/');
add('A','Monday Magazine','Arts and entertainment','Greater Victoria','michelle.cabana@blackpress.ca','https://mondaymag.com/','Focus on the theatrical atmosphere, music, costumes and dance program; request the arts editor through the published contact.','https://carpentermediagroup.com/locations/','Published contact appears to be a publisher, not a dedicated arts editor.');
add('A','Victoria News / Greater Victoria News','Community newspaper','Greater Victoria','newsroom@vicnews.com','https://www.vicnews.com/','Ask for a short things-to-do feature with practical attendance details and a high-quality event image.','https://www.vicnews.com/news/photos-nuxalk-chief-teary-eyed-as-totem-pole-removed-from-victoria-museum-111106','Same editorial newsroom as Greater Victoria News row; use one pitch, not two emails.');
add('A','Tourism Vancouver Island','Island visitor event calendar','Vancouver Island','https://vancouverisland.travel/events','https://vancouverisland.travel/','Position the ball as a weekend trip to Victoria for Island visitors; list workshop and ball dates separately.','https://vancouverisland.travel/events');
add('A','VanIsleLocal','Island event calendar','Vancouver Island','https://vanislelocal.ca/events/submit','https://vanislelocal.ca/','Provide factual details in two short sentences; its editor reviews submissions and discourages promotional claims.','https://vanislelocal.ca/events/submit');
add('A','Island Happenings','Island event guide','Vancouver Island','https://www.islandhappenings.ca/','https://www.islandhappenings.ca/','Submit the official event page, dates, venue and what makes this a worthwhile Island outing.','https://www.islandhappenings.ca/');
add('A','HarbourLiving','Island events calendar','Vancouver Island','https://harbourliving.ca/events/user-register/','https://harbourliving.ca/','Post the finalized public event with start/end times, ticket price and dress guidance.','https://harbourliving.ca/events/user-register/');
add('A','VanIsleNet','Island events calendar','Vancouver Island','https://vanislenet.net/events','https://vanislenet.net/','Submit the event with date, Victoria location and official page; use arts-and-culture category.','https://vanislenet.net/events');
add('A','Vanislander','Island events guide','Vancouver Island','https://vanislander.com/forms/flag-event','https://vanislander.com/','Frame as a destination experience and include a source link so editors can verify all details.','https://vanislander.com/forms/flag-event');
add('A','Arts BC community events','Arts calendar','Victoria / BC arts community','https://artsbc.org/community-event-submission/','https://artsbc.org/','Highlight the historic dance workshop as participatory arts; prepare a square event image.','https://artsbc.org/community-event-submission/');
add('B','Focus on Victoria — events','Local magazine calendar','Greater Victoria','https://www.focusonvictoria.ca/events/','https://www.focusonvictoria.ca/','Create an event entry with the cultural-history angle and a clear distinction between workshop and ball.','https://www.focusonvictoria.ca/events/');
add('B','Do250','Local event guide / Instagram','Greater Victoria','@do250','https://do250.com/','Pitch an image-rich “not another bar crawl” Halloween option with the exact ticket link.','https://www.movingtovictoria.com/best-instagram-accounts-in-victoria','Social handle from local guide; confirm current account activity before DM.');
add('B','Victoria Scoop','Local events website','Greater Victoria','https://www.victoriascoop.ca/','https://www.victoriascoop.ca/','Offer a practical what-to-do-on-Halloween story, especially the dance and costume experience.','https://www.victoriascoop.ca/','Confirm submission/contact route on site before outreach.');
add('B','Little Local Victoria','Local newsletter / Instagram','Greater Victoria','@littlelocalvictoria','https://www.littlelocal.com/','Only approach if the event age policy suits its family audience; emphasize dress-up and beginner-friendly activity.','https://www.littlelocal.com/about','Audience is family-focused; check event age suitability first.');
add('B','Let’s Visit Victoria','Local visitor guide','Greater Victoria','https://letsvisitvictoria.com/','https://letsvisitvictoria.com/','Suggest a Halloween weekend itinerary with the ball as an evening anchor and workshop as preparation.','https://letsvisitvictoria.com/','Find current contact route on site before pitching.');
add('B','Downtown Victoria Business Association — Vibin’','Local events newsletter','Greater Victoria','https://downtownvictoria.ca/vibin/','https://downtownvictoria.ca/','Suggest the ball for a broader Victoria weekend roundup; mention Esquimalt venue clearly.','https://downtownvictoria.ca/vibin/','The venue is outside downtown; editorial fit may be limited.');
add('B','YAM magazine','Lifestyle magazine','Greater Victoria','info@yammagazine.ca','https://www.yammagazine.com/','Pitch costume design, elegant local nightlife and the revival of formal social dance.','https://magsbc.com/member_magazines/yam-victoria/','Long-lead print; online coverage may be more realistic for October 30.');
add('B','Boulevard Magazine','Lifestyle magazine','Vancouver Island','https://www.boulevardmagazines.com/','https://www.boulevardmagazines.com/','Pitch the ball’s visual design, fashion and local cultural experience as a photo feature.','https://carpentermediagroup.com/locations/','Use publisher directory to request editorial contact; print lead time may be long.');
add('B','Nanaimo Magazine / Voyager','Island magazine','Nanaimo / Vancouver Island','nanaimomagazine@shaw.ca','https://nanaimomagazine.ca/','Pitch a Victoria weekend trip for Island readers; lead with the novel historic dance experience.','https://nanaimomagazine.ca/','Confirm editorial interest before sending a full release.');
add('B','WestCoast Families','Family magazine','Greater Victoria','https://westcoastfamilies.com/contact-us/','https://westcoastfamilies.com/','Only pitch if age policy allows families; supply clear age, cost and workshop details.','https://westcoastfamilies.com/contact-us/','Family audience; potentially poor fit for an adults-only ball.');
add('B','Victoria BC Magazine','Local magazine','Greater Victoria','editor@victoriabcmagazine.com','https://www.victoriabcmagazine.com/','Offer a short event calendar item on historic dance and costume; confirm the publication is actively updating.','https://www.victoriabcmagazine.com/Contact.php','Site may be dated; verify active publication before outreach.');
add('B','Dance Victoria','Dance organization newsletter','Greater Victoria','info@dancevictoria.com','https://www.dancevictoria.com/','Ask whether its community audience would welcome a historic social-dance workshop listing; avoid implying endorsement.','https://www.dancevictoria.com/newsletter','Organization newsletter, not an open press desk.');
add('B','CFUV 101.9 FM','Campus/community radio','Victoria / UVic','https://cfuv.uvic.ca/','https://cfuv.uvic.ca/','Offer an interview or guest demonstration about inclusive roles in historical dancing and the October workshop.','https://cfuv.uvic.ca/music-submissions/','Music submission page is not an event submission; contact station directly.');
add('B','CHLY 101.7 FM','Campus/community radio','Nanaimo / Vancouver Island','https://chly.squarespace.com/events','https://www.chly.ca/','Submit as a Vancouver Island community event; hosts choose items for on-air mentions.','https://chly.squarespace.com/events');
add('B','Nanaimo News Now','Island news site','Nanaimo / Vancouver Island','https://nanaimonewsnow.com/','https://nanaimonewsnow.com/','Pitch a short Island arts/entertainment brief for readers willing to travel to Victoria.','https://www.nanaimo.ca/your-government/news-events/news/2023/08/17/links-to-local-news-outlets','Find a current newsroom route before sending.');
add('B','The Discourse — Vancouver Island','Local journalism','Vancouver Island','https://thediscourse.ca/','https://thediscourse.ca/','Pitch only with a broader community or cultural angle beyond the event announcement.','https://www.nanaimo.ca/your-government/news-events/news/2023/08/17/links-to-local-news-outlets','Low likelihood for a straight event release.');
add('B','Coast FM / My Coast Now','Island radio news','Nanaimo / Vancouver Island','https://www.mycoastnow.com/','https://www.mycoastnow.com/','Offer a concise arts outing for South Island listeners with a short organizer interview.','https://www.nanaimo.ca/your-government/news-events/news/2023/08/17/links-to-local-news-outlets','Confirm newsroom contact on station site.');
add('B','CTV Vancouver Island','Island television news','Vancouver Island','https://vancouverisland.ctvnews.ca/','https://vancouverisland.ctvnews.ca/','Offer costume footage, a rehearsal, and a concise explanation of what is new locally.','https://www.nanaimo.ca/your-government/news-events/news/2023/08/17/links-to-local-news-outlets','Use verified newsroom contact on its website.');
add('B','CBC Vancouver Island','Island radio/news','Vancouver Island','https://www.cbc.ca/news/canada/british-columbia','https://www.cbc.ca/','Pitch the human story of bringing a historic social ball to Victoria; offer participants and rehearsal access.','https://www.nanaimo.ca/your-government/news-events/news/2023/08/17/links-to-local-news-outlets','Use verified local CBC contact route; a generic event notice may be too thin.');
add('B','The Zone @ 91.3','Victoria radio','Greater Victoria','https://www.thezone.fm/','https://www.thezone.fm/','Offer a short on-air Halloween activity segment with a live dance teaser.','https://www.thezone.fm/','Find current programming contact; no event form verified.');
add('B','Rocktographers','Local arts photo outlet / Instagram','Greater Victoria','@rocktographers','https://rocktographers.ca/','Offer access to dramatic costumes, dancing and low-light performance photography.','https://www.movingtovictoria.com/best-instagram-accounts-in-victoria','Social account from local guide; confirm current handle and coverage.');
add('B','Tasting Victoria','Local food guide / Instagram','Greater Victoria','@tastingvictoria','https://www.tastingvictoria.com/','Only pitch if refreshments are a real editorial hook; do not frame this as a food event without specifics.','https://www.tastingvictoria.com/about','Niche food focus; lower fit than event guides.');
add('B','Moving to Victoria','Local guide','Greater Victoria','https://www.movingtovictoria.com/','https://www.movingtovictoria.com/','Suggest it as a distinctive local experience for newcomers making friends through dance.','https://www.movingtovictoria.com/best-instagram-accounts-in-victoria','Confirm current editorial contact on site.');
add('B','Cowichan Valley Voice','Island arts/culture publication','Cowichan Valley','https://cowichanvalleyvoice.com/','https://cowichanvalleyvoice.com/','Pitch a South Island cultural day trip focused on historical dance and costumes.','https://cowichanvalleyvoice.com/','Regional readership; confirm Victoria-event coverage.');
add('B','Comox Valley Arts community calendar','Regional arts calendar','Comox Valley','https://comoxvalleyarts.com/community-calendar/','https://comoxvalleyarts.com/','Only submit if it accepts out-of-region events; lead with the participatory workshop.','https://comoxvalleyarts.com/community-calendar/','Likely restricted to local arts events.');
add('B','Island Parent','Regional family publication','Vancouver Island','https://islandparent.ca/','https://islandparent.ca/','Only pitch if event age policy fits; otherwise skip.','https://islandparent.ca/','Family-focused; verify current contact route and eligibility.');
add('B','Victoria Chamber community calendar','Business/community calendar','Greater Victoria','https://victoriachamber.ca/membership/benefits-discounts-savings/community-calendar/','https://victoriachamber.ca/','If eligible, list the ball as a local cultural event with workshop and ticket link.','https://victoriachamber.ca/membership/benefits-discounts-savings/community-calendar/','Member login is required; do not use unless organizer is a member.');
add('B','Victoria Vibes','Independent local events site','Greater Victoria','contact.victoriavibes@gmail.com','https://victoriavibes.ca/','Ask whether the ball is already in its feed; publish to Times Colonist, ArtsVictoria or Tourism Victoria first.','https://victoriavibes.ca/','Site asks organizers to submit to its source calendars rather than directly.');

// Island newspapers: the publisher verifies each title and provides a route, but these are lower-priority for a Victoria event.
const directory='https://carpentermediagroup.com/locations/';
const papers=[
 ['Alberni Valley News','Port Alberni','teresa.bird@blackpress.ca','https://albernivalleynews.com/','Connect the event to a weekend Victoria visit for Alberni readers.'],
 ['North Island Gazette','North Island','natasha.griffiths@northislandgazette.com','https://northislandgazette.com/','Offer a brief South Island Halloween travel idea rather than a local-event listing.'],
 ['Oak Bay News','Oak Bay','https://carpentermediagroup.com/locations/','https://oakbaynews.com/','Pitch an arts outing close to Oak Bay, with photography and beginner-friendly details.'],
 ['Campbell River Mirror','Campbell River','jacquie.duns@campbellrivermirror.com','https://campbellrivermirror.com/','Make the case for a Victoria weekend escape and specify travel-ready schedule.'],
 ['Parksville Qualicum Beach News','Oceanside','teresa.bird@blackpress.ca','https://pqbnews.com/','Offer an Island weekend getaway angle with both workshop and ball dates.'],
 ['Chemainus Valley Courier','Chemainus','sean.mccue@blackpress.ca','https://chemainusvalleycourier.ca/','Frame as participatory theatre/dance, appealing to arts-minded Chemainus readers.'],
 ['Peninsula News Review','Saanich Peninsula','https://carpentermediagroup.com/locations/','https://peninsulanewsreview.com/','Pitch a nearby costume event accessible to Sidney and Peninsula readers.'],
 ['Comox Valley Record','Comox Valley','https://carpentermediagroup.com/locations/','https://comoxvalleyrecord.com/','Offer a South Island cultural weekend angle, not a local calendar item.'],
 ['Saanich News','Saanich','jgairdner@blackpress.ca','https://saanichnews.com/','Pitch the beginner workshop and the ball as a Greater Victoria Halloween outing.'],
 ['Cowichan Valley Citizen','Duncan / Cowichan','david.vandeventer@blackpress.ca','https://cowichanvalleycitizen.com/','Show how Cowichan couples or friends could make a Victoria night of it.'],
 ['Sooke News Mirror','Sooke','https://carpentermediagroup.com/locations/','https://sookenewsmirror.com/','Offer practical driving, workshop and ticket details for Sooke readers.'],
 ['Goldstream News Gazette','West Shore','cathy.webster@goldstreamgazette.com','https://goldstreamgazette.com/','Pitch a nearby Esquimalt evening alternative to Halloween pub events.'],
 ['Tofino-Ucluelet Westerly News','West Coast','teresa.bird@blackpress.ca','https://westerlynews.ca/','Low-fit unless framed as a Victoria weekend travel feature.'],
 ['Ladysmith Chronicle','Ladysmith','sean.mccue@blackpress.ca','https://ladysmithchronicle.com/','Pitch a South Island cultural trip for dance and costume enthusiasts.'],
 ['Vancouver Island Free Daily','Vancouver Island','teresa.bird@blackpress.ca','https://vancouverislandfreedaily.com/','Offer an Island-wide lifestyle brief on the first-time ball and workshop.'],
 ['Lake Cowichan Gazette','Lake Cowichan','david.vandeventer@blackpress.ca','https://lakecowichangazette.com/','Low-fit unless positioned as a regional Halloween excursion.'],
 ['Nanaimo News Bulletin','Nanaimo','sean.mccue@blackpress.ca','https://nanaimobulletin.com/','Pitch a Victoria weekend arts trip, with photo opportunity and clear ticket details.'],
];
for(const [name,area,contact,website,angle] of papers) add('C',name,'Community newspaper',area,contact,website,angle,directory,'Published publisher contact, not necessarily an editorial inbox; ask to be routed to arts/events editor.');

// Other verified, distinct local channels with narrower relevance.
add('C','Victoria Brief','Local online publication','Greater Victoria','https://thevictorianbrief.com/contact','https://thevictorianbrief.com/','Offer a short local-events note with the unusual historic dance and costume angle.','https://thevictorianbrief.com/contact','Check current publication activity.');
add('C','Rogers TV Victoria','Community television','Greater Victoria','https://www.rogerstv.com/victoria/shows','https://www.rogerstv.com/victoria/','Offer an interview or filmed workshop demonstration for a community program.','https://www.rogerstv.com/victoria/shows','Confirm show pitch route.');
add('C','Rogers TV Parksville','Community television','Oceanside','https://rogerstv.com/parksville/shows','https://rogerstv.com/parksville/','Pitch only as a broader Island cultural story with participants from Oceanside.','https://rogerstv.com/parksville/shows','Low geographic fit.');
add('C','The Westshore','Local news/site','West Shore','https://www.thewestshore.ca/','https://www.thewestshore.ca/','Highlight proximity to the West Shore and the unusual Halloween experience.','https://www.thewestshore.ca/','Confirm editorial route and current activity.');
add('C','Nanaimo Arts Council','Arts organization','Nanaimo','https://nanaimoartscouncil.ca/home/','https://nanaimoartscouncil.ca/','Ask if they share Island arts outings; lead with workshop and inclusive dance roles.','https://nanaimoartscouncil.ca/home/','Not a news outlet; outreach only if it shares outside-region events.');
add('C','Cowichan Culture','Arts organization','Cowichan','https://cowichanculture.ca/','https://cowichanculture.ca/','Ask whether it shares regional arts events; present the participatory dance angle.','https://cowichanculture.ca/','Likely local-only event scope.');
add('C','Port Alberni Scout','Local event guide','Port Alberni','https://portalberniscout.ca/events/','https://portalberniscout.ca/','Offer as a Victoria weekend outing only if the guide covers off-island-town events.','https://portalberniscout.ca/events/','Low geographic fit; verify acceptance.');

// Remove one duplicate newsroom entry before export and preserve highest priority order.
const unique = rows.filter(r => r[1] !== 'Victoria News / Greater Victoria News');
const wb=Workbook.create();
const top=wb.worksheets.add('Top 20');
const sh=wb.worksheets.add('Outreach');
sh.showGridLines=false;
sh.getRange('A1:I1').merge();
sh.getRange('A1').values=[['Blood Moon Ball | Victoria & Vancouver Island press outreach']];
sh.getRange('A2:I2').merge();
sh.getRange('A2').values=[[`${unique.length} researched routes • Checked 5 October 2026 • A = best first, B = selective, C = distant or conditional`]];
sh.getRange('A3:I3').merge();
sh.getRange('A3').values=[['Use one tailored pitch per outlet. Calendars often need a listing form; publishers listed in C may need to route you to an editor. Check caveats before sending.']];
const header=['Priority','Source / account','Type','Area','Email, handle or submission route','Website','Pitch angle for this outlet','Verification source','Eligibility / contact caveat'];
sh.getRange('A5:I5').values=[header];
sh.getRange(`A6:I${5+unique.length}`).values=unique;
const table=sh.tables.add(`A5:I${5+unique.length}`,true,'BloodMoonOutreach');
table.style='TableStyleMedium2';
sh.freezePanes.freezeRows(5);
sh.getRange(`A1:I${5+unique.length}`).format.font={name:'Aptos',size:10};
sh.getRange('A1:I1').format={fill:'#241018',font:{name:'Aptos Display',size:18,bold:true,color:'#F1D28C'}};
sh.getRange('A2:I2').format={fill:'#32151E',font:{name:'Aptos',size:10,bold:true,color:'#FFFFFF'}};
sh.getRange('A3:I3').format={fill:'#F6EFE9',font:{name:'Aptos',size:10,color:'#5F3E42'}};
sh.getRange('A5:I5').format={fill:'#68232C',font:{name:'Aptos',size:10,bold:true,color:'#FFFFFF'}};
const widths=[11,31,24,22,48,36,82,54,62];
for(let i=0;i<9;i++) sh.getRangeByIndexes(0,i,5+unique.length,1).format.columnWidth=widths[i];
sh.getRange(`A5:I${5+unique.length}`).format.wrapText=true;
sh.getRange('A1:I1').format.rowHeight=34;
sh.getRange('A2:I3').format.rowHeight=24;
sh.getRange('A5:I5').format.rowHeight=32;
sh.getRange(`A6:I${5+unique.length}`).format.rowHeight=58;

// Working shortlist: distinct reader view for the next outreach pass.
const shortlist = [
  [1,'Victoria Buzz','Press pitch + listing','High local news reach and frequent things-to-do coverage.','Send a visual story tip; also submit the event form.','tips@victoriabuzz.com','https://victoriabuzz.com/tip/'],
  [2,'Times Colonist','Press pitch + listing','Prominent Victoria newspaper with life-and-arts coverage.','Pitch the return of an elegant, participatory ball; add a local interview and photos.','localnews@timescolonist.com','https://www.timescolonist.com/entertainment/'],
  [3,'CHEK News','TV story pitch','Island-wide television; best upside if it films the event.','Offer costumed rehearsal footage and a short dance demonstration.','https://cheknews.ca/','https://cheknews.ca/'],
  [4,'Destination Greater Victoria','Event listing','Official visitor calendar with strong Victoria relevance.','Submit a complete visitor-ready listing and 1200×900 image.','https://www.tourismvictoria.com/events-calendar/submit-an-event','https://www.tourismvictoria.com/events-calendar/submit-an-event'],
  [5,'Do250','Event listing','Well-known local events guide with current Victoria event coverage.','Request event editing access, check for duplicates, then add a ticket URL and text-free photo.','https://do250.com/p/about-us','https://do250.com/p/about-us'],
  [6,'Greater Victoria News','Press pitch','Community news audience across Greater Victoria.','Send the first-time-event angle with organizer interview and images.','newsroom@vicnews.com','https://www.vicnews.com/'],
  [7,'CTV Vancouver Island','TV story pitch','Large Island news audience; competitive editorial selection.','Offer visually strong costumes, rehearsal and a concise local story.','https://vancouverisland.ctvnews.ca/','https://vancouverisland.ctvnews.ca/'],
  [8,'CBC Vancouver Island','Radio/TV story pitch','Island-wide public news audience; needs a people or culture story.','Pitch why historical social dancing is returning, with participant voices.','https://www.cbc.ca/','https://www.cbc.ca/'],
  [9,'CFAX 1070','Radio interview pitch','Victoria news-and-talk audience.','Offer an organizer interview and a quick explanation of how beginners join.','cfax.news@bellmedia.ca','https://www.cfax1070.com/contact-us/'],
  [10,'LampPost Victoria','Newsletter listing','Newsletter specifically focused on local activities.','Submit a tight what/when/where summary and the ticket link.','https://lamppostvictoria.beehiiv.com/subscribe/','https://lamppostvictoria.beehiiv.com/subscribe/'],
  [11,'HarbourLiving','Event listing','Established Island-wide events calendar.','Post exact times, venue, ticket types, price and dress code.','https://harbourliving.ca/events/user-register/','https://harbourliving.ca/events/user-register/'],
  [12,'ArtsVictoria','Arts listing','Arts audience suited to the workshop and social-dance aspect.','Submit the workshop and ball accurately, without duplicating dates.','https://www.artsvictoria.ca/about','https://www.artsvictoria.ca/about'],
  [13,'LiveVictoria','Event listing','Active arts and performance calendar.','List the dance experience and music program with the official ticket link.','https://livevictoria.com/submit_listing','https://livevictoria.com/submit_listing'],
  [14,'100.3 The Q!','Radio calendar','Popular Victoria radio brand with a community-events form.','Submit the calendar form and offer a short segment if appropriate.','https://www.theq.fm/events/','https://www.theq.fm/events/'],
  [15,'Monday Magazine','Arts press pitch','Recognizable local arts and entertainment publication.','Emphasize theatrical atmosphere, costume design and the historic dance program.','michelle.cabana@blackpress.ca','https://carpentermediagroup.com/locations/'],
  [16,'YAM','Lifestyle press pitch','Victoria lifestyle publication; strongest for fashion and culture.','Pitch the visual design and local cultural experience rather than only the date.','info@yammagazine.ca','https://magsbc.com/member_magazines/yam-victoria/'],
  [17,'Tourism Vancouver Island','Event listing','Island-wide travel discovery route.','Frame the ball as a Victoria weekend outing and submit the event.','https://vancouverisland.travel/events','https://vancouverisland.travel/events'],
  [18,'Island Happenings','Island event guide','Island-wide edited event recommendations.','Provide source-backed details, dates, ticket link and a concise reason to attend.','https://www.islandhappenings.ca/','https://www.islandhappenings.ca/'],
  [19,'VanIsleLocal','Event listing','Editor-reviewed Island events calendar.','Submit factual copy; avoid promotional claims in the description.','https://vanislelocal.ca/events/submit','https://vanislelocal.ca/events/submit'],
  [20,'Capital Daily','Selective story pitch','Influential Victoria journalism, but a standard event release is a poor fit.','Pitch only if there is a substantive community or cultural story beyond ticket sales.','tips@capitaldaily.ca','https://www.capitaldaily.ca/submit-news-tips'],
];
top.showGridLines=false;
top.getRange('A1:G1').merge();
top.getRange('A1').values=[['Top 20 | Blood Moon Ball outreach']];
top.getRange('A2:G2').merge();
top.getRange('A2').values=[['Practical priority order for October 2026: local reach × editorial fit × chance of useful coverage. This is not a measured audience ranking.']];
top.getRange('A3:G3').merge();
top.getRange('A3').values=[['Start with 1–14. A news pitch needs a story and strong visuals; an event listing needs complete, factual attendance details.']];
top.getRange('A5:G5').values=[['Rank','Outlet','Route','Why it is here','Next action','Contact / submission','Source']];
top.getRange('A6:G25').values=shortlist;
const topTable=top.tables.add('A5:G25',true,'TopTwentyOutreach');
topTable.style='TableStyleMedium2';
top.freezePanes.freezeRows(5);
top.getRange('A1:G25').format.font={name:'Aptos',size:10};
top.getRange('A1:G1').format={fill:'#241018',font:{name:'Aptos Display',size:18,bold:true,color:'#F1D28C'}};
top.getRange('A2:G2').format={fill:'#32151E',font:{name:'Aptos',size:10,bold:true,color:'#FFFFFF'}};
top.getRange('A3:G3').format={fill:'#F6EFE9',font:{name:'Aptos',size:10,color:'#5F3E42'}};
top.getRange('A5:G5').format={fill:'#68232C',font:{name:'Aptos',size:10,bold:true,color:'#FFFFFF'}};
for(const [i,w] of [8,28,22,59,69,53,50].entries()) top.getRangeByIndexes(0,i,25,1).format.columnWidth=w;
top.getRange('A5:G25').format.wrapText=true;
top.getRange('A1:G1').format.rowHeight=34;
top.getRange('A2:G3').format.rowHeight=24;
top.getRange('A5:G5').format.rowHeight=30;
top.getRange('A6:G25').format.rowHeight=60;
wb.recalculate();
await fs.mkdir(out.slice(0,out.lastIndexOf('/')),{recursive:true});
const xlsx=await SpreadsheetFile.exportXlsx(wb);
await xlsx.save(out);
const inspect=await wb.inspect({kind:'region',sheetId:'Outreach',range:'A1:I7',maxChars:1500});
console.log(JSON.stringify({output:out,count:unique.length,preview:inspect.ndjson?.slice(0,1500)??inspect}));
