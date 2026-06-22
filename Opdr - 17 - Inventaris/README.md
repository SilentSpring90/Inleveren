# Hoofdstuk Vue - Opdracht 17: Inventaris systeem

Deze versie is bewust eenvoudig gehouden, zodat hij past bij de opdracht en niet te uitgebreid wordt.

## Userstories

- INV-9805 Benodigde tools voor applicatieontwikkeling
- INV-9806 Centrale data opslag voor Inventory
- INV-9807 Overzicht van beschikbare producten
- INV-9808 Producten toevoegen aan inventaris
- INV-9809 Producten aanpassen in inventaris
- INV-9810 Overzicht van producten die besteld moeten worden
- INV-9811 Het maken van een flowchart

## Tools

- Vue 3
- Vite
- Vue Router
- Custom store met `ref` en `computed`
- localStorage voor eenvoudige centrale opslag

## Starten

```powershell
npm install
npm run dev
```

## Uitleg

De centrale data staat in:

```text
src/domains/inventory/store.js
```

De bestellijst wordt automatisch gemaakt met:

```js
product.stock < product.minStock
```

Als de voorraad lager is dan de minimale voorraad, komt het product op de bestellijst.
