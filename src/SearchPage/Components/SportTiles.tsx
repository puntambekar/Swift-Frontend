import Venue from "../../Models/Venue";
import { SportsTile } from "./SportsTile";

export const SportsTiles = () => {
    const arr: string[] = ["tile 1", "tile 2", "tile 3", "tile 4", "tile 5", "tile 6", "tile 7", "tile 8", "tile 9", "tile 10", "tile 11", "tile 12",
        "tile 13", "tile 14", "tile 15", "tile 16", "tile 17", "tile 18", "tile 19", "tile 20", "tile 21", "tile 22", "tile 23", "tile 24"];

        // Generate fictional names, addresses, and cities
const fictionalNames = [
    "Golden Grove",
    "Sapphire Haven",
    "Sunset Oasis",
    "Mystic Gardens",
    "Twilight Terrace",
    "Crystal Ballroom",
    "Enchanted Hall",
    "Moonlit Courtyard",
    "Starlight Lounge",
    "Royal Pavilion",
    "Emerald Elegance",
    "Crimson Court",
    "Silver Springs",
    "Opulent Orchid",
    "Dazzling Dreams",
    "Harmony Haven",
    "Radiant Reflections",
    "Ethereal Elegance",
    "Grand Gala",
    "Whispering Willows",
    "Velvet Vista",
    "Celestial Center",
    "Azure Atrium",
    "Jubilant Junction"
];

const fictionalAddresses = [
    "123 Main Street",
    "456 Elm Avenue",
    "789 Oak Boulevard",
    "101 Pine Lane",
    "202 Maple Drive",
    "303 Cedar Place",
    "404 Birch Road",
    "505 Willow Street",
    "606 Redwood Avenue",
    "707 Sycamore Lane",
    "808 Cedar Boulevard",
    "909 Oak Street",
    "210 Pine Avenue",
    "321 Maple Boulevard",
    "432 Elm Lane",
    "543 Redwood Drive",
    "654 Birch Place",
    "765 Cedar Road",
    "876 Willow Lane",
    "987 Main Drive",
    "108 Pine Place",
    "219 Oak Drive",
    "320 Maple Road",
    "431 Elm Lane",
    "542 Redwood Place"
];

const fictionalCities = [
    "Fictionville",
    "Imaginatown",
    "Dreamlandia",
    "Fantasia City",
    "Whimsyville",
    "Enchantopolis",
    "Storybook Springs",
    "Wonderville",
    "Mystical Metropolis",
    "Harmony Haven",
    "Utopia Springs",
    "Wonderland",
    "Fableburg",
    "Mythosburg",
    "Fairytale Town",
    "Dreamscape City",
    "Epicville",
    "Fanciful Falls",
    "Nebula City",
    "Magic Meadows",
    "Whispering Woods",
    "Starlight City",
    "Enigma Springs",
    "Celestial Spires"
];

// Generate 25 sample data instances with fictional names, addresses, and cities
const sampleData: Venue[] = Array.from({ length: 25 }, (_, index) => {
    return new Venue(
        index,
        fictionalNames[index],
        fictionalAddresses[index],
        fictionalCities[index],
        {
            Mon: [8, 9, 10, 12, 14, 16, 18],
            Tue: [9, 10, 11, 13, 15, 17, 19],
            Wed: [10, 11, 12, 14, 16, 18, 20],
            Thu: [11, 12, 13, 15, 17, 19, 21],
            Fri: [12, 13, 14, 16, 18, 20, 22],
            Sat: [13, 14, 15, 17, 19, 21, 23],
            Sun: [14, 15, 16, 18, 20, 22, 24],
        }
    );
});

    return (
        <div className="row g-3">
                {
                    sampleData.map(venue=>  <SportsTile venue={venue} key={venue.venueId} />)
                }
        </div>)
}
