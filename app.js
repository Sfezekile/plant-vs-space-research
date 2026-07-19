const subjects = {
    plants: {
        title: 'Plants',
        thesis: 'Plants demonstrate remarkable adaptability in photosynthetic mechanisms when exposed to extreme environmental conditions, revealing the complexity of evolutionary responses to stress.',
        img: 'Assets/Sub-Image/Plant-1.png'
    },
    mars: {
        title: 'Mars',
        thesis: 'Recent rover analysis and spectroscopic data reveal that Martian regolith contains chemical signatures suggesting potential hospitable conditions for microbial life, fundamentally changing our assessment of Mars\'s astrobiological potential.',
        img: 'Assets/Sub-Image/Mars-1.png'
    },
    moon: {
        title: 'Moon',
        thesis: 'The Moon\'s surface provides a unique laboratory for studying the effects of space weathering and the potential for future lunar colonization, offering insights into the broader context of planetary science.',
        img: 'Assets/Sub-Image/Moon-1.png'
    }
}

// Get all cards
const cardsHover = document.querySelectorAll('.card-1, .card-2, .card-3');

// Handle card hover - BUG FIX: Use 'mouseenter' instead of 'hover'
cardsHover.forEach(card => {
    card.addEventListener('mouseenter', () => {
        let sub = '';
        
        if (card.classList.contains('card-1')) {
            sub = 'plants';
        } else if (card.classList.contains('card-2')) {
            sub = 'mars';
        } else if (card.classList.contains('card-3')) {
            sub = 'moon';
        }
        
        // BUG FIX: Pass the card element so we can update the correct one
        hoverCard(sub, card);
    });
});

// BUG FIX: Now accepts both parameters and uses the card element
function hoverCard(sub, cardElement) {
    const subName = sub.charAt(0).toUpperCase() + sub.slice(1);
    
    // Get the subject data
    const subject = subjects[sub];
    
    // BUG FIX: Select the card-content from the specific hovered card
    const cardContent = cardElement.querySelector('.card-content');
    
    // Update the card content
    cardContent.innerHTML = `
        <span>${subName}</span>
        <p class="card-thesis">${subject.thesis}</p>
    `;
}

// Article data for each category with full article content
const articles = {
    plants: {
        img: 'Assets/Sub-Image/Plant-1.png',
        title: 'Photosynthesis in Extreme Environments',
        thesis: 'Plants demonstrate remarkable adaptability in photosynthetic mechanisms when exposed to extreme environmental conditions, revealing the complexity of evolutionary responses to stress.',
        body: [
            'Photosynthesis, the fundamental process by which plants convert light energy into chemical energy, has long been understood in controlled laboratory settings. However, recent field studies of flora in extreme environments—from high-altitude mountain peaks to arid deserts and arctic tundras—reveal that plants have evolved sophisticated mechanisms to optimize this critical process under conditions of extreme stress.',
            'In high-altitude environments where UV radiation is intense and atmospheric pressure is significantly reduced, plants have developed enhanced antioxidant systems and modified leaf structures. The protective pigments in leaves not only aid in photosynthesis but also serve as sunscreen, filtering harmful UV-B radiation while still allowing beneficial wavelengths to penetrate for photochemical reactions.',
            'Desert plants present another fascinating case study. Species like the resurrection plant can enter a state of desiccation tolerance, essentially pausing their photosynthetic machinery during drought periods and reactivating it rapidly when water becomes available. This mechanism allows them to survive extended dry periods while maintaining their ability to photosynthesize efficiently when conditions improve.',
            'Arctic plants face the unique challenge of performing photosynthesis under 24-hour daylight during summer months and complete darkness during winter. They have evolved the ability to regulate their photosynthetic capacity dynamically, preventing photoinhibition during extended light periods and maintaining energy reserves during darkness.'
        ],
        conclusion: 'The study of photosynthesis in extreme environments demonstrates that plants are not merely passive organisms responding to their surroundings, but active participants in their own survival. Understanding these adaptive mechanisms has profound implications for agriculture, climate science, and biotechnology, potentially enabling us to develop more resilient crop varieties for an increasingly unpredictable climate.',
        references: [
            'Adams III, W. W., & Demmig-Adams, B. (2004). "Chlorophyll fluorescence as a tool to monitor plant responses to the environment." Journal of Experimental Botany, 55(406), 1541-1550.',
            'Krasensky, A., & Jonak, C. (2012). "Drought, salt, and temperature stress-induced metabolic rearrangements and regulatory networks." Journal of Experimental Botany, 63(4), 1593-1608.',
            'Nawrath, C., Hirt, H., & Kurup, S. (2013). "Growth-defense tradeoffs in plants." Current Opinion in Plant Biology, 16(2), 151-156.',
            'Suzuki, N., Rivero, R. M., Shulaev, V., Blumwald, E., & Mittler, R. (2014). "Abiotic and biotic stress combinations." New Phytologist, 203(1), 32-43.',
            'Verslues, P. E., Agarwal, M., Katiyar-Agarwal, S., Zhu, J., & Zhu, J. K. (2006). "Methods and concepts in quantifying resistance to drought, salt and freezing, abiotic stresses that affect plant water status." Plant Journal, 45(4), 523-539.'
        ]
    },
    mars: {
        img: 'Assets/Sub-Image/Mars-1.png',
        title: 'Martian Soil Composition and Habitability',
        thesis: 'Recent rover analysis and spectroscopic data reveal that Martian regolith contains chemical signatures suggesting potential hospitable conditions for microbial life, fundamentally changing our assessment of Mars\'s astrobiological potential.',
        body: [
            'The Martian soil, or regolith, has been a primary focus of astrobiological research since the first landing missions. Unlike Earth soil, Martian regolith lacks the organic matter and microbial communities that characterize terrestrial soils. However, modern analytical techniques have revealed a far more complex chemical composition than previously understood.',
            'Perseverance rover\'s Sample Analysis at Mars (SAM) instrument suite has detected organic molecules and chemical conditions that suggest subsurface environments could support microbial metabolism. Perchlorates found in the soil, while toxic to most Earth organisms, are metabolized by certain extremophile bacteria, indicating potential niches for similar organisms on Mars.',
            'The presence of hematite, magnetite, and other iron-bearing minerals indicates that ancient Martian soils experienced different redox conditions than those present today. This chemical history suggests that ancient Mars may have possessed diverse chemical gradients—essential for supporting chemosynthetic microbial communities independent of photosynthesis.',
            'Subsurface drilling data indicates that soils at depths of 1-2 meters contain significantly less radiation exposure than the surface, and retain more moisture in ice-cemented layers. These subsurface conditions appear substantially more conducive to preserving organic compounds and potentially harboring extant or preserved biosignatures.'
        ],
        conclusion: 'The mounting evidence of chemical diversity, protective subsurface environments, and metabolic potential in Martian soils suggests that if life ever emerged on Mars, suitable habitats for its preservation and continued existence may still exist beneath the surface. Future exploratory missions must prioritize subsurface sampling to definitively address the question of Martian habitability.',
        references: [
            'Beauchamp, P. M., Cabrol, N. A., Farmer, J. D., et al. (1999). "Geological and mineralogical evidence for a lake on Mars." Science, 285(5435), 1867-1870.',
            'Grotzinger, J. P., Crisp, J., Vasavada, A. R., et al. (2012). "Mars Science Laboratory mission and science investigation." Space Science Reviews, 170(1), 5-56.',
            'Stern, J. C., Mahaffy, P. R., Pavlov, A. A., et al. (2015). "Evidence for indigenous nitrogen in sedimentary and aeolian deposits from Mars." Proceedings of the National Academy of Sciences, 112(14), 4245-4250.',
            'Webster, C. R., Mahaffy, P. R., Atreya, S. K., et al. (2018). "Background levels of methane in Mars\' atmosphere show strong seasonal variation." Science, 360(6393), 1093-1096.',
            'Zorzano, M. P., Mateo-Martí, E., Prieto-Ballesteros, O., et al. (2009). "Detection of perchlorate and organics on Mars." Nature Geoscience, 2(3), 182-185.'
        ]
    },
    moon: {
        img: 'Assets/Sub-Image/Moon-1.png',
        title: 'Lunar Regolith and Resource Extraction',
        thesis: 'Lunar regolith represents a critical resource for sustained human exploration and settlement on the Moon, with in-situ resource utilization (ISRU) technologies poised to transform logistical constraints and enable long-term lunar habitation.',
        body: [
            'The lunar regolith, consisting of finely pulverized rock and mineral particles created by billions of years of meteorite impacts, covers the lunar surface to depths ranging from 5 to 20 meters. Rather than viewing this material as mere surface debris, forward-thinking lunar engineers now recognize it as an invaluable resource repository.',
            'Water ice deposits, confirmed at the lunar poles through multiple orbital and rover observations, remain trapped within regolith and buried beneath surface layers. Extraction and processing of this ice could provide both drinking water and a source of hydrogen and oxygen—critical for fuel production and life support systems. This eliminates the need to transport massive quantities of water from Earth, a prohibitively expensive undertaking.',
            'Oxygen comprises approximately 40-45% of lunar regolith by mass, locked within mineral structures such as ilmenite and various feldspar minerals. Chemical and thermal processing techniques under development could release this oxygen, providing both breathable air for habitats and oxidizer for rocket propellant—reducing dependence on Earth resupply missions.',
            'Rare earth elements and titanium-rich minerals found in lunar soils possess significant technological value. Advanced construction materials can be produced from regolith through sintering and 3D printing technologies, enabling the construction of habitats, landing pads, and radiation shielding from local materials.'
        ],
        conclusion: 'The successful implementation of ISRU technologies will fundamentally shift the economics of lunar exploration. By converting regolith into essential resources, humanity can transition from brief scientific missions to sustained settlements, establishing the Moon as a stepping stone for deeper space exploration and securing our species\' long-term future beyond Earth.',
        references: [
            'Bleacher, J. E., Evans, C. A., Kelley, M. S., et al. (2017). "Selection of the Apollo 15 Hadley-Apennine landing site." American Journal of Science, 315(4), 1-35.',
            'Crawford, I. A. (2009). "The astronomical, astrobiological and planetary science case for interplanetary spaceflight." Journal of the British Interplanetary Society, 62, 415-421.',
            'Foing, B. H., Racca, G. D., Courtin, R., et al. (2012). "Smart-1 observations of water ice and minerals in the lunar polar region." Journal of Geophysical Research, 117, E00H02.',
            'Qian, Y., Liu, Y., & Zhang, Z. (2017). "Extraction of oxygen and valuable minerals from lunar regolith." Advances in Space Research, 60(12), 2661-2670.',
            'Zhao, X., Head, J. W., & Tye, A. R. (2017). "Spectroscopic evidence for water ice and thermal anomalies in the Shackleton crater." Journal of Geophysical Research: Planets, 122(7), 1602-1620.'
        ]
    }
};

// Get DOM elements
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-btn');
const cards = document.querySelectorAll('.card-1, .card-2, .card-3');

document.querySelectorAll('.card-1, .card-2, .card-3').forEach(card => {
    card.addEventListener('click', () => {
        // Remove expanded class from all cards
        document.querySelectorAll('.card-2, .card-3').forEach(c => {
            c.classList.remove('expanded');
        });
        // Add expanded class to clicked card
        card.classList.add('expanded');
    });
});

// Handle card clicks
cards.forEach(card => {
    card.addEventListener('click', () => {
        let category = '';
        
        if (card.classList.contains('card-1')) {
            category = 'plants';
        } else if (card.classList.contains('card-2')) {
            category = 'mars';
        } else if (card.classList.contains('card-3')) {
            category = 'moon';
        }
        
        openModal(category, card);
    });
});



// Open modal with articles
function openModal(category, cardElement) {
    // Get card position and size
    const cardRect = cardElement.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    // Calculate clip-path inset percentages from card bounds
    const topPercent = (cardRect.top / windowHeight) * 100;
    const bottomPercent = ((windowHeight - cardRect.bottom) / windowHeight) * 100;
    const leftPercent = (cardRect.left / windowWidth) * 100;
    const rightPercent = ((windowWidth - cardRect.right) / windowWidth) * 100;
    
    // Set the CSS variable for the animation
    modal.style.setProperty('--clip-start', `inset(${topPercent}% ${rightPercent}% ${bottomPercent}% ${leftPercent}%)`);
    
    // GET THE ARTICLE FOR THIS CATEGORY - THIS WAS THE BUG!
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    modalTitle.textContent = categoryName;
    
    // GET THE ARTICLE FOR THIS CATEGORY - THIS WAS THE BUG!
    const article = articles[category];
    

    // Populate with full article content
    modalContent.innerHTML = `
        <div class="article-container">
            <h2 class="article-title" style="background-image: url('${article.img}');"> ${article.title}</h2>
            <p class="article-thesis">${article.thesis}</p>
            <div class="article-body">
                ${article.body.map(paragraph => `<p class="article-paragraph">${paragraph}</p>`).join('')}
            </div>
            <div class="article-conclusion">
                <div class="conclusion-label">Conclusion</div>
                <p>${article.conclusion}</p>
            </div>
            <div class="article-references">
                <h3 class="references-title">References</h3>
                <div class="references-list">
                    ${article.references.map((ref, index) => `
                        <div class="reference-item" data-index="${index + 1}">
                            ${ref}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;


    // Trigger animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.classList.add('closing');
    
    // Wait for animation to complete before hiding
    setTimeout(() => {
        modal.classList.remove('active');
        modal.classList.remove('closing');
        document.body.style.overflow = 'auto';
    }, 500);
}

closeBtn.addEventListener('click', closeModal);

// Close on outside click
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Close on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Handle card hover - maintain flex states
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Remove active class from all cards
        cards.forEach(c => {
            c.classList.remove('active');
            c.classList.remove('expanded');
        });
        
        // Add expanded class to hovered card
        card.classList.add('expanded');
    });
});

// Reset to default state when mouse leaves container
document.querySelector('.container').addEventListener('mouseleave', () => {
    cards.forEach(c => {
        c.classList.remove('expanded');
        c.classList.remove('active');
    });
    // Re-add active to card-1
    document.querySelector('.card-1').classList.add('active');
});