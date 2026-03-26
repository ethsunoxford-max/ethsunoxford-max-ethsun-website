# ETHSUN Institute — Site Web

> **L'Université des Entreprises Performantes**
> Site institutionnel de formation executive — Abidjan & Oxford

---

## Stack technique

- **Framework** : Next.js 15 (App Router, TypeScript)
- **Styling** : Tailwind CSS 4 + shadcn/ui
- **i18n** : next-intl (FR par défaut + EN)
- **Animations** : Framer Motion
- **Icônes** : Lucide React
- **Fonts** : Playfair Display (titres serif) + DM Sans (corps sans-serif)
- **SEO** : Sitemap dynamique, robots.txt, JSON-LD structured data

---

## Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Copier les variables d'environnement
cp .env.example .env.local

# 3. Lancer en développement
npm run dev

# 4. Ouvrir http://localhost:3000
```

---

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx                          # Layout racine (metadata globale)
│   ├── sitemap.ts                          # Sitemap XML dynamique
│   └── [locale]/                           # Routes FR/EN
│       ├── layout.tsx                      # Layout avec nav, footer, i18n
│       ├── page.tsx                        # Accueil (hero, stats, programmes, événements, témoignages)
│       ├── loading.tsx                     # État de chargement brandé
│       ├── not-found.tsx                   # Page 404
│       ├── programmes/
│       │   ├── page.tsx                    # Catalogue (recherche, filtres, grille)
│       │   └── [slug]/page.tsx             # Fiche programme (2 colonnes, sidebar sticky)
│       ├── evenements/
│       │   ├── page.tsx                    # Listing événements
│       │   ├── universite-tourisme/        # Landing Université du Tourisme
│       │   └── universite-immobilier/      # Landing UIMMO
│       ├── e-learning/page.tsx             # Portail digital learning
│       ├── international/page.tsx          # Présence internationale, Oxford
│       ├── entreprises/page.tsx            # B2B, formation sur mesure
│       ├── a-propos/page.tsx               # Mission, fondateur, campus, valeurs
│       ├── intervenants/page.tsx           # Répertoire des formateurs
│       ├── alumni/page.tsx                 # Réseau alumni, galerie
│       ├── blog/
│       │   ├── page.tsx                    # Blog listing avec filtres
│       │   └── [slug]/page.tsx             # Article détaillé
│       └── contact/page.tsx                # Formulaire + campus + WhatsApp
├── components/
│   ├── layout/                             # Navbar, Footer, WhatsAppButton
│   ├── sections/                           # Composants réutilisables
│   │   ├── HeroSection.tsx                 # Hero gradient + Kente
│   │   ├── StatsBar.tsx                    # 4 chiffres clés
│   │   ├── SectionHeader.tsx               # Eyebrow gold + titre Playfair
│   │   ├── ProgrammeCard.tsx               # Carte programme
│   │   ├── EventCard.tsx                   # Carte événement (calendrier)
│   │   ├── TestimonialCard.tsx             # Témoignage avec bordure gold
│   │   ├── CTABlock.tsx                    # Bloc CTA dark
│   │   └── PartnerBar.tsx                  # Logos partenaires
│   ├── seo/StructuredData.tsx              # JSON-LD Schema.org
│   └── ui/                                 # Composants shadcn/ui
├── data/mock.ts                            # Données statiques (22 programmes, 8 formateurs, etc.)
├── i18n/                                   # Configuration next-intl
├── messages/                               # Traductions FR + EN
└── middleware.ts                            # Redirect locale
```

---

## Pages (16 routes)

| Route | Description |
|-------|------------|
| `/` | Accueil — 7 sections (hero, stats, programmes, événements, témoignages, partenaires, CTA) |
| `/programmes` | Catalogue — recherche, filtres domaine/format, 22 programmes |
| `/programmes/[slug]` | Fiche programme — objectifs, modules accordéon, sidebar sticky prix/CTA |
| `/evenements` | Listing événements |
| `/evenements/universite-tourisme` | Landing 1ère Université Africaine du Tourisme |
| `/evenements/universite-immobilier` | Landing 6ème UIMMO |
| `/e-learning` | Portail Neuroklax — features, parcours en 5 étapes |
| `/international` | Oxford seal, présence 5 pays, programmes internationaux |
| `/entreprises` | B2B — 4 étapes, 6 secteurs, avantages |
| `/a-propos` | Mission/vision, fondateur, écosystème, campus, valeurs |
| `/intervenants` | 8 formateurs avec expertises |
| `/alumni` | Stats, témoignages, galerie, réseau + mentorat |
| `/blog` | 5 articles avec filtres catégories |
| `/blog/[slug]` | Article complet |
| `/contact` | Formulaire + campus info + WhatsApp + Calendly |
| `/sitemap.xml` | Sitemap SEO dynamique |

---

## Design system

### Couleurs
- **Navy** `#1B2A4A` — marque principale
- **Navy dark** `#0A1628` — héros, blocs sombres
- **Blue** `#1A5FA8` — liens, éléments interactifs
- **Gold** `#C8A44E` — accents, CTAs, prestige
- **CI Flag** — barre orange/blanc/vert en bas du footer

### Typographie
- **Titres** : Playfair Display (serif, 600-700)
- **Corps** : DM Sans (sans-serif, 400-500-700)

### Motif Kente
Pattern diagonal CSS-only à 6% d'opacité gold, utilisé sur hero et blocs CTA.

---

## Prochaines étapes

### Phase 2 — CMS & Backend
1. Connecter **Sanity.io** (schémas déjà spécifiés dans PROJECT.md)
2. Remplacer les données mock par des requêtes GROQ
3. Ajouter **NextAuth.js** (Google SSO + email)
4. Intégrer **Stripe** + **CinetPay** pour les paiements

### Phase 3 — Fonctionnalités
5. Dashboard étudiant (inscriptions, certificats)
6. Formulaire contact fonctionnel (Brevo API)
7. Google Maps embed sur page contact
8. Google Analytics 4 + Vercel Analytics

### Phase 4 — Déploiement
9. Déployer sur **Vercel** avec domaine `ethsun-institute.org`
10. Configurer les redirections 301 depuis l'ancien WordPress
11. Tests Lighthouse (objectif > 90)
12. Optimisation images (next/image WebP)

---

## Commandes

```bash
npm run dev       # Développement (localhost:3000)
npm run build     # Build production
npm run start     # Serveur production
npm run lint      # Vérification ESLint
```

---

## Déploiement Vercel

```bash
# Via CLI
npx vercel

# Ou connecter le repo GitHub à Vercel
# Build command: npm run build
# Output directory: .next
# Framework preset: Next.js
```

Variables d'environnement à configurer dans Vercel Dashboard → Settings → Environment Variables.

---

**ETHSUN Executive Education Oxford** — *Per Doctrinam Excelsior*
