# MyDope Off

**Application web de réduction des risques liés aux substances psychoactives.**
Francophone, hors-ligne, sans compte. Tout reste sur l'appareil.

🔗 [podarcis-cloud.github.io/lucide-](https://podarcis-cloud.github.io/lucide-)

## Pourquoi

Le marché des drogues évolue plus vite que les lois, et beaucoup de gens consomment sans savoir ce qu'ils prennent ni ce qui se passe quand on mélange. MyDope Off part d'un principe simple : **interdire ou ignorer ne réduit pas les dommages, informer si.** L'app ne juge pas, n'encourage pas l'usage, et ne remplace pas un soignant — elle donne à la personne les moyens de comprendre, mesurer et, si elle le décide, couper la boucle.

## Fonctions

- **270+ fiches substances** : effets, doses indicatives, durée, addiction, alias.
- **Vérificateur d'interactions** : analyse chaque paire, avec déduction du risque par mécanisme.
- **Suivi conso** : journal, calendrier 30 jours, coûts, objectifs (données locales).
- **Détection** par type de test (salive, urine, sang).
- **Exercices anti-craving**, page RDR + contrôles routiers, guide et lexique.

## Installer (PWA)

- **Android / ordinateur** : menu du navigateur → « Installer l'application ».
- **iPhone** : ouvrir dans **Safari** → Partager → « Sur l'écran d'accueil ».

## Technique

Site statique sans build : HTML / CSS / JS natif, service worker (hors-ligne), `localStorage`. Hébergé sur GitHub Pages. Le cache est versionné dans `sw.js` — incrémenter `CACHE` à chaque mise à jour.

## Avertissement

Outil d'information et de réduction des risques. Ne promeut pas l'usage, ne remplace pas un avis médical ou juridique. Urgences : 15 / 112.
