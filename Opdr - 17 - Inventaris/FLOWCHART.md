# Flowchart inventarissysteem

```text
Start applicatie
↓
Laad producten uit localStorage
↓
Toon productoverzicht
↓
Gebruiker kiest actie
├─ Product toevoegen
│  ↓
│  Formulier invullen
│  ↓
│  Product opslaan in store
│  ↓
│  Terug naar overzicht
├─ Product bewerken
│  ↓
│  Product zoeken via id
│  ↓
│  Formulier aanpassen
│  ↓
│  Product bijwerken in store
│  ↓
│  Terug naar overzicht
├─ Product verwijderen
│  ↓
│  Product verwijderen uit store
│  ↓
│  Overzicht wordt opnieuw getoond
└─ Bestellijst bekijken
   ↓
   Controleer: voorraad < minimale voorraad
   ↓
   Toon producten die besteld moeten worden
```
