export const courses = [
  {
    id: 1,
    title: 'Modern Webfejlesztés',
    teacher: 'Dr. Kód Elek',
    description: 'Ismerkedj meg a React és a modern frontend eszközök világával.',
  },
  {
    id: 2,
    title: 'Adatbázis-kezelés',
    teacher: 'Szerver Szilárd',
    description: 'A SQL alapjaitól a komplex lekérdezésekig.',
  },
  {
    id: 3,
    title: 'Mesterséges Intelligencia Alapjai',
    teacher: 'Neumann Anna',
    description: 'Bevezetés a gépi tanulás és a neurális hálók világába.',
  },
];

export const assignments = {
    // A kulcs a kurzus ID-ja
    1: [ 
        { id: 101, title: 'Első React komponens', deadline: '2025-11-10' },
        { id: 102, title: 'Routing beállítása', deadline: '2025-11-17' }
    ],
    2: [
        { id: 201, title: 'Adatbázis-terv készítése', deadline: '2025-11-12' },
    ],
    3: [], // Ebben a kurzusban még nincs feladat
}