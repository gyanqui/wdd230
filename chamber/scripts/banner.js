
const currentDate = new Date();
const currentDay = currentDate.getDay();

if (currentDay === 1 || currentDay === 2) {
    const banner = document.createElement('div');
    banner.id = 'banner';
    banner.innerHTML = `"🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."`;

    const header = document.querySelector('.site-header');
    header.insertBefore(banner, header.firstChild);
}
