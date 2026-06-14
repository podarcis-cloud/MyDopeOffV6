/* ============================================================
   MyDope Off — TRADUCTION DES FICHES SUBSTANCES
   Fichier INDÉPENDANT. Ne dépend d'aucun autre code du site.
   Reste valable même si le reste du site est transformé.
   ------------------------------------------------------------
   FORMAT
   window.LUCIDE_FICHES_I18N = {
     en: { "NomFrançaisDeLaFiche": { effets:[...], dosage:{faible,modere,fort},
                                     duree:"...", tripReport:"...", description:"..." }, ... },
     es: { ... },
     de: { ... }
   };
   - La clé est EXACTEMENT le nom français de la fiche (1er argument de addSub).
   - Tous les champs sont optionnels : un champ absent retombe sur le français.
   - Une fiche absente d'une langue s'affiche entièrement en français.
   - addiction (niveau) et catégories sont traduits ailleurs (étiquettes UI).

   BRANCHEMENT (déjà prévu dans psychochecker.html, à activer une seule fois) :
     <script src="fiches-i18n.js"></script>
   puis un helper tr(nom, champ, valeurFR) qui lit ce dictionnaire
   selon LUCIDE.lang() et retombe sur la valeur française si absente.
   ============================================================ */
window.LUCIDE_FICHES_I18N = {
  en: {
    "Alcool": {
      effets:["Sedation","Disinhibition","Mild euphoria","Anxiety relief"],
      dosage:{faible:"1–2 drinks",modere:"3–5 drinks",fort:"≥6 drinks — severe intoxication"},
      duree:"Onset 10–30 min | Peak 1–2 h | Total 3–8 h",
      tripReport:"Alcohol, 4 drinks: pleasant disinhibition. Beyond that: loss of control, blackouts.",
      description:"Ethanol: potentiates every CNS depressant. Lethal synergy with opioids/benzos/GHB."
    },
    "Diazépam": {
      effets:["Anxiety relief","Muscle relaxation","Sedation","Anticonvulsant"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"20–40 mg"},
      duree:"Onset 15–45 min | Peak 1–2 h | Total 6–12 h",
      tripReport:"Diazepam 10 mg: deep anxiety relief. Physical dependence within 4 weeks.",
      description:"Valium: the reference benzodiazepine. Lethal interactions with alcohol/opioids."
    },
    "Alprazolam": {
      effets:["Anxiety relief","Sedation","Disinhibition","Amnesia"],
      dosage:{faible:"0.25–0.5 mg",modere:"0.5–1 mg",fort:"1.5–2 mg — blackout"},
      duree:"Onset 15–40 min | Peak 1–2 h | Total 3–6 h",
      tripReport:"Alprazolam 1 mg: anxiety gone in 20 min. 2 h of actions with no memory.",
      description:"Xanax: 1 mg potency = 10 mg Valium. Fast dependence. Alcohol = possible cardiac arrest."
    },
    "MDMA": {
      effets:["Euphoria","Empathy","Stimulation","Emotional connection"],
      dosage:{faible:"75–100 mg",modere:"100–125 mg",fort:"150–200 mg"},
      duree:"Onset 30–60 min | Peak 1.5–3 h | Total 4–6 h",
      tripReport:"MDMA 110 mg: universal love, transcendent music. 2-day comedown. Max once / 3 months.",
      description:"3,4-MDMA. Lethal hyperthermia, hyponatremia. Neurotoxic. MAOI/tramadol = death."
    },
    "Cocaïne": {
      effets:["Euphoria","Intense stimulation","Increased confidence","Vasoconstriction"],
      dosage:{faible:"20–40 mg (nasal)",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Onset 5–15 min | Peak 20–40 min | Total 1–2 h",
      tripReport:"Cocaine 50 mg: short euphoric rush. Cocaine + alcohol = cardiotoxic cocaethylene.",
      description:"DAT/NET/SERT inhibitor. Cardiotoxic. Alcohol → toxic cocaethylene. Fast dependence."
    },
    "GHB": {
      effets:["Euphoria","Sedation","Disinhibition","Amnesia"],
      dosage:{faible:"0.5–1 g",modere:"1–2 g",fort:"≥2.5 g — easy overdose"},
      duree:"Onset 15–30 min | Peak 45–90 min | Total 2–4 h",
      tripReport:"GHB 1.5 g: party euphoria. 0.5 g too much = coma.",
      description:"GABA-B agonist. Narrow therapeutic index. Never with alcohol."
    },
    "Kétamine": {
      effets:["Dissociation","Analgesia","Euphoria","Hallucinations"],
      dosage:{faible:"25–50 mg (nasal)",modere:"75–150 mg",fort:"200–400 mg — k-hole"},
      duree:"Onset 5–15 min | Peak 20–40 min | Total 1–2 h",
      tripReport:"Ketamine 100 mg: full dissociation. K-hole at 300 mg: out-of-body experience.",
      description:"NMDA antagonist. Ketamine bladder syndrome with repeated use. Alcohol mix = apnea risk."
    },
    "Cannabis": {
      effets:["Euphoria","Relaxation","Altered perception","Increased appetite"],
      dosage:{faible:"1–3 mg THC",modere:"5–15 mg THC",fort:"20–50 mg THC"},
      duree:"Onset 15–45 min (oral) / 5–15 min (smoked) | Total 2–6 h",
      tripReport:"Cannabis ~15 mg THC: euphoria and laughter, heightened music. Paranoia possible from 20 mg.",
      description:"CB1/CB2 agonist. Documented cannabis psychosis. Hyperemesis syndrome with chronic use."
    },
    "LSD": {
      effets:["Hallucinations","Euphoria","Introspection","Universal connection"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–400 µg"},
      duree:"Onset 30–90 min | Peak 3–5 h | Total 8–12 h",
      tripReport:"LSD 120 µg: gorgeous visuals, total musical connection. Lithium = lethal seizures.",
      description:"5-HT2A agonist. Lithium → seizures. Set & setting essential."
    },
    "Héroïne": {
      effets:["Intense euphoria","Analgesia","Sedation","Warmth"],
      dosage:{faible:"varies — tolerance-dependent",modere:"dose impossible to standardise",fort:"respiratory depression"},
      duree:"Onset 1–5 min (IV) | Total 3–5 h",
      tripReport:"Heroin: opioid 'rush' then drowsiness. Street purity unknown → overdose. Often cut with fentanyl.",
      description:"Mu agonist. Respiratory depression = main cause of death. Test, naloxone, never alone."
    },
    "Morphine": {
      effets:["Analgesia","Euphoria","Sedation","Anxiety relief"],
      dosage:{faible:"10–20 mg (oral)",modere:"30–60 mg",fort:"100 mg+ (without tolerance: dangerous)"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"Morphine: the reference opioid. Euphoria and analgesia, dose-dependent respiratory depression.",
      description:"Mu agonist. Respiratory depression worsened by alcohol/benzos. Tolerance and dependence."
    },
    "Fentanyl": {
      effets:["Powerful analgesia","Intense euphoria","Sedation","Respiratory depression"],
      dosage:{faible:"micrograms (not home-measurable)",modere:"unpredictable dose",fort:"respiratory arrest"},
      duree:"Onset 1–5 min | Total 1–2 h",
      tripReport:"Fentanyl: ~50× stronger than heroin. Invisible amounts kill. Massively present in the street supply.",
      description:"Very potent mu agonist. Tiny dose-to-overdose margin. Test strips, naloxone, never alone."
    },
    "Méthadone": {
      effets:["Analgesia","Stabilisation","Mild sedation"],
      dosage:{faible:"medical use only",modere:"prescribed substitution dose",fort:"respiratory depression"},
      duree:"Onset 30 min–1 h | Total 24–36 h",
      tripReport:"Methadone: opioid substitution treatment. Very long-acting → accumulation and overdose risk if misused.",
      description:"Long-acting mu agonist. Accumulates (long half-life). QT prolongation. Dangerous with benzos/alcohol."
    },
    "Tramadol": {
      effets:["Analgesia","Mild euphoria","Nausea"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"Tramadol 100 mg: painkiller with mild euphoria. Seizures at high dose.",
      description:"SNRI + opioid agonist. Serotonin syndrome with MDMA/MAOI. Documented seizures."
    },
    "Codéine": {
      effets:["Analgesia","Cough suppression","Mild euphoria"],
      dosage:{faible:"15–30 mg",modere:"60–120 mg",fort:"200+ mg"},
      duree:"Onset 30–45 min | Total 4–6 h",
      tripReport:"Codeine 60 mg: gentle analgesia and mild euphoria. Alcohol strongly potentiates.",
      description:"Morphine prodrug. CYP2D6 variability. Alcohol → respiratory depression."
    },
    "Psilocybine": {
      effets:["Hallucinations","Euphoria","Ego dissolution","Introspection"],
      dosage:{faible:"1–2 g mushrooms",modere:"2–3.5 g",fort:"5+ g"},
      duree:"Onset 20–60 min | Peak 2–4 h | Total 4–6 h",
      tripReport:"Psilocybin 2 g: visuals and emotional connection. 5 g: full mystical experience.",
      description:"5-HT2A agonist. Lithium → seizures. Set & setting critical."
    },
    "Amphétamine": {
      effets:["Stimulation","Euphoria","Focus","Appetite suppression"],
      dosage:{faible:"5–10 mg",modere:"15–30 mg",fort:"40 mg+"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"Amphetamine ('speed') 20 mg: energy and focus. Comedown, insomnia, compulsive redosing.",
      description:"Dopamine/noradrenaline releaser. Cardiac strain, dependence. Crash on the way down."
    },
    "Méthamphetamine": {
      effets:["Intense stimulation","Strong euphoria","Hypervigilance","Appetite suppression"],
      dosage:{faible:"5–10 mg",modere:"10–25 mg",fort:"30 mg+"},
      duree:"Onset varies by route | Total 8–12 h",
      tripReport:"Methamphetamine: stronger and far longer than amphetamine. Severe dependence, days-long binges, psychosis.",
      description:"Powerful dopamine releaser, neurotoxic. Hyperthermia, psychosis, dental damage. High abuse liability."
    },
    "Caféine": {
      effets:["Wakefulness","Mild stimulation","Focus"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300–400 mg+"},
      duree:"Onset 15–45 min | Total 3–6 h",
      tripReport:"Caffeine 100 mg (a coffee): mild boost. Beyond 400 mg: jitters, palpitations, anxiety.",
      description:"Adenosine antagonist. Tolerance and withdrawal (headaches). Caution with the heart at high dose."
    },
    "Nicotine": {
      effets:["Mild stimulation","Relaxation","Focus"],
      dosage:{faible:"1–2 mg",modere:"a few cigarettes",fort:"chronic use"},
      duree:"Onset seconds (smoked) | Total 30 min–2 h",
      tripReport:"Nicotine: brief stimulation then relaxation. One of the most addictive substances there is.",
      description:"Nicotinic agonist. Extremely addictive. Cardiovascular and cancer risk via smoking."
    },
    "Naloxone": {
      effets:["Opioid antagonism","Overdose reversal"],
      dosage:{faible:"0.4–0.8 mg (nasal/IM)",modere:"0.8–1.6 mg",fort:"2 mg+"},
      duree:"Onset 2–5 min | Total 30–90 min",
      tripReport:"Naloxone: if someone is overdosing, THIS is what saves lives. Always carry it.",
      description:"Full mu antagonist. Reverses any opioid overdose. Short duration = redosing sometimes needed."
    },
    "Klonopin": {
      effets:["Anxiety relief", "Anticonvulsant", "Sedation", "Amnesia"],
      dosage:{faible:"0.5–1 mg",modere:"1–2 mg",fort:"3–4 mg"},
      duree:"Onset 20–60 min | Total 6–12 h",
      tripReport:"Klonopin 2 mg: deep anxiety relief, mild sedation. Very hard withdrawal.",
      description:"Clonazepam: long-acting benzo. Severe physical dependence. Withdrawal = seizures."
    },
    "Lorazépam": {
      effets:["Anxiety relief", "Sedation", "Amnesia", "Muscle relaxation"],
      dosage:{faible:"0.5–1 mg",modere:"1–2 mg",fort:"2.5–4 mg"},
      duree:"Onset 15–30 min | Total 6–8 h",
      tripReport:"Lorazepam 2 mg: deep sedation, partial amnesia. Alcohol = respiratory arrest.",
      description:"Ativan: potent benzo, intermediate half-life. Physical dependence. Never with alcohol."
    },
    "Zolpidem": {
      effets:["Sedation", "Hypnosis", "Amnesia", "Sleepwalking"],
      dosage:{faible:"5 mg",modere:"10 mg",fort:"15–20 mg"},
      duree:"Onset 15–30 min | Total 6–8 h",
      tripReport:"Zolpidem 10 mg: fast onset of sleep. Sleepwalking sometimes. Alcohol = total amnesia.",
      description:"GABA-A agonist. Documented sleepwalking. Alcohol severely potentiates."
    },
    "Pregabaline": {
      effets:["Anxiety relief", "Euphoria", "Sedation", "Well-being"],
      dosage:{faible:"75–150 mg",modere:"150–300 mg",fort:"450–600 mg"},
      duree:"Onset 30–90 min | Total 6–8 h",
      tripReport:"Pregabalin 150 mg: sedation and mild euphoria. Linked to many opioid deaths.",
      description:"GABA analogue. Opioid combination = documented death. Underestimated physical dependence."
    },
    "Gabapentine": {
      effets:["Sedation", "Anxiety relief", "Mild euphoria"],
      dosage:{faible:"100–300 mg",modere:"600–900 mg",fort:"1200–1800 mg"},
      duree:"Onset 60–90 min | Total 5–7 h",
      tripReport:"Gabapentin 900 mg: sedation and calm. Linked to deaths in opioid combinations.",
      description:"Gabapentinoid. Documented deaths in opioid combination. Growing misuse."
    },
    "Quétiapine": {
      effets:["Sedation", "Anxiety relief", "Antipsychotic"],
      dosage:{faible:"25–50 mg",modere:"100–200 mg",fort:"400–800 mg"},
      duree:"Onset 30–60 min | Total 6–12 h",
      tripReport:"Quetiapine 50 mg: powerful sleep aid. Diverted from prescription.",
      description:"D2/5-HT2A antagonist. Neuroleptic malignant syndrome. Alcohol = severe hypotension."
    },
    "Phénibut": {
      effets:["Anxiety relief", "Euphoria", "Sociability", "Sedation"],
      dosage:{faible:"250–500 mg",modere:"500–1000 mg",fort:"1500–2000 mg"},
      duree:"Onset 2–4 h | Total 5–8 h",
      tripReport:"Phenibut 750 mg: anxiety erased, sociability boosted. Brutal withdrawal after 3 uses.",
      description:"GABA-B agonist + weak D2. Fast physical dependence. Intense withdrawal. GHB/alcohol = coma."
    },
    "Clonazolam": {
      effets:["Extreme sedation", "Deep amnesia", "Anxiety relief"],
      dosage:{faible:"0.25–0.5 mg",modere:"0.5–1 mg",fort:"1–2 mg (death possible)"},
      duree:"Onset 20–60 min | Total 8–18 h",
      tripReport:"Clonazolam 0.5 mg: hours of amnesia. 1 mg + alcohol: can be lethal.",
      description:"Ultra-potent designer benzo. Accumulation = death. Never with alcohol. Withdrawal = seizures."
    },
    "Flubromazolam": {
      effets:["Extreme sedation", "Total amnesia", "Hypnosis"],
      dosage:{faible:"0.1–0.25 mg",modere:"0.25–0.5 mg",fort:"0.5 mg+ (dangerous)"},
      duree:"Onset 20–60 min | Total 12–20 h",
      tripReport:"Flubromazolam 0.25 mg: the most potent designer benzo. Total amnesia. Death possible.",
      description:"Most potent benzo known. Alcohol = death. Insidious accumulation. Withdrawal = seizures."
    },
    "1,4-Butanediol": {
      effets:["Euphoria", "Sedation", "Disinhibition"],
      dosage:{faible:"0.5–0.8 ml/kg",modere:"0.8–1.2 ml/kg",fort:"1.5 ml/kg+ (easy coma)"},
      duree:"Onset 20–40 min | Total 2–4 h",
      tripReport:"Resembles GHB but liquid dosing makes overdose very easy.",
      description:"GHB prodrug. Very narrow therapeutic index. Alcohol mix = respiratory coma."
    },
    "GBL": {
      effets:["Euphoria", "Sedation", "Disinhibition"],
      dosage:{faible:"0.5–0.8 ml",modere:"0.8–1.3 ml",fort:"1.5 ml+"},
      duree:"Onset 5–20 min | Peak 30–60 min | Total 1.5–3 h",
      tripReport:"GBL 1 ml: ultra-fast onset, disorientation in 5 min. Lethal margin of error.",
      description:"GHB prodrug. Faster metabolism. Never with alcohol."
    },
    "Carisoprodol": {
      effets:["Muscle relaxation", "Sedation", "Anxiety relief"],
      dosage:{faible:"250 mg",modere:"350–500 mg",fort:"700–1000 mg"},
      duree:"Onset 20–40 min | Total 4–6 h",
      tripReport:"Carisoprodol 350 mg: fast dependence reminiscent of benzos.",
      description:"Metabolised to meprobamate. Potentially fatal with alcohol."
    },
    "Etizolam": {
      effets:["Anxiety relief", "Sedation", "Possible amnesia"],
      dosage:{faible:"0.5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Onset 20–40 min | Total 6–10 h",
      tripReport:"Etizolam 1 mg: dependence after 2 weeks.",
      description:"Same mechanism as benzos. Seizure-inducing withdrawal."
    },
    "Flubromazépam": {
      effets:["Sedation", "Anxiety relief", "Amnesia"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–20 mg"},
      duree:"Onset 30–60 min | Total 24–48 h",
      tripReport:"Flubromazepam 8 mg: effect persists 2 days. Fast dependence.",
      description:"Half-life >100 h. Accumulation. Seizure-inducing withdrawal."
    },
    "Deschloroetizolam": {
      effets:["Anxiety relief", "Sedation", "Amnesia"],
      dosage:{faible:"0.5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Onset 20–40 min | Total 6–12 h",
      tripReport:"Deschloroetizolam 1 mg: fast tolerance, hard withdrawal.",
      description:"Lethal alcohol/opioid interactions."
    },
    "Metizolam": {
      effets:["Anxiety relief", "Sedation", "Amnesia"],
      dosage:{faible:"0.5–1 mg",modere:"1–2 mg",fort:"2–4 mg"},
      duree:"Onset 20–40 min | Total 8–12 h",
      tripReport:"Metizolam 1 mg: subtle but real dependence.",
      description:"Potentially seizure-inducing withdrawal."
    },
    "Pyrazolam": {
      effets:["Anxiety relief", "Mild sedation"],
      dosage:{faible:"0.5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Onset 20–40 min | Total 8–14 h",
      tripReport:"Pyrazolam 1 mg: pure anxiolytic. Subtle dependence.",
      description:"Long half-life benzo."
    },
    "O-DSMT": {
      effets:["Analgesia", "Euphoria", "Sedation", "Respiratory depression"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"O-DSMT 25 mg: potent opioid. Marked respiratory depression. Lethal alcohol potentiation.",
      description:"O-desmethyltramadol: active metabolite of tramadol, strong mu agonist. Never with alcohol."
    },
    "Buprenorphine": {
      effets:["Analgesia", "Craving reduction", "Mild sedation"],
      dosage:{faible:"0.4–2 mg",modere:"2–8 mg",fort:"16–32 mg"},
      duree:"Onset 30–60 min | Total 24–72 h",
      tripReport:"Buprenorphine 8 mg: opioid substitution treatment. Physical dependence present but stable.",
      description:"Partial mu agonist + kappa antagonist. Analgesic ceiling. Used in OST. Benzos = death."
    },
    "Naltrexone": {
      effets:["Blocks opioid effects", "Reduces alcohol craving"],
      dosage:{faible:"25 mg",modere:"50 mg",fort:"100–150 mg"},
      duree:"Onset 60–90 min | Total 24–72 h",
      tripReport:"Naltrexone 50 mg/day: fully blocks opioids. Used for OST and alcoholism.",
      description:"Full mu antagonist. Hepatotoxic at high dose. Never with active opioids."
    },
    "Acétylfentanyl": {
      effets:["Analgesia", "Respiratory depression"],
      dosage:{faible:"0.1–0.2 mg",modere:"0.2–0.4 mg",fort:"0.5 mg+"},
      duree:"Onset 5–15 min | Total 1–3 h",
      tripReport:"Acetylfentanyl: overdose at the slightest imprecision.",
      description:"~5× morphine. Naloxone may be insufficient."
    },
    "Hydrocodone": {
      effets:["Analgesia", "Euphoria", "Constipation"],
      dosage:{faible:"5–10 mg",modere:"15–20 mg",fort:"30–40 mg"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"Hydrocodone 15 mg: warm euphoria. Fast dependence.",
      description:"Vicodin: ~1.5× codeine. Overdose with alcohol."
    },
    "Hydromorphone": {
      effets:["Powerful analgesia", "Intense euphoria", "Respiratory depression"],
      dosage:{faible:"1–2 mg",modere:"2–4 mg",fort:"6–8 mg"},
      duree:"Onset 15–30 min | Total 3–5 h",
      tripReport:"Hydromorphone 3 mg: a hospital opioid. Never outside prescription.",
      description:"Dilaudid: ~8× morphine. Extremely fast dependence."
    },
    "Oxymorphone": {
      effets:["Analgesia", "Intense euphoria", "Respiratory depression"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–20 mg"},
      duree:"Onset 15–30 min | Total 4–6 h",
      tripReport:"Oxymorphone 5 mg: ~10× morphine. Extremely addictive.",
      description:"Never mix with alcohol/benzos."
    },
    "Dextropropoxyphène": {
      effets:["Mild analgesia", "Weak euphoria", "Sedation"],
      dosage:{faible:"65 mg",modere:"130–200 mg",fort:"300 mg+"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"Withdrawn from the market over fatal arrhythmias. Do not use.",
      description:"Major cardiotoxicity. Metabolite blocks cardiac sodium channels."
    },
    "Sufentanil": {
      effets:["Analgesia", "Respiratory depression", "Deep sedation"],
      dosage:{faible:"2–5 µg",modere:"10–25 µg",fort:"50 µg+"},
      duree:"Onset 1–3 min | Total 20–45 min",
      tripReport:"Sufentanil: 5–10× more potent than fentanyl. Hospital use only.",
      description:"500–1000× morphine. Naloxone insufficient."
    },
    "Péthidine": {
      effets:["Analgesia", "Euphoria", "Sedation"],
      dosage:{faible:"25–50 mg",modere:"50–100 mg",fort:"150–200 mg"},
      duree:"Onset 10–15 min (IM) | Total 2–4 h",
      tripReport:"Pethidine 75 mg: euphoric and fast. Fast dependence.",
      description:"Meperidine. Normeperidine metabolite → seizures. MAOI fatal."
    },
    "Tapentadol": {
      effets:["Analgesia", "Moderate euphoria", "Sedation"],
      dosage:{faible:"50 mg",modere:"100–150 mg",fort:"200–250 mg"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"Tapentadol 100 mg: opioid-SNRI, powerful painkiller.",
      description:"Mu agonist + NA reuptake inhibitor. MAOIs contraindicated."
    },
    "Isotonitazène": {
      effets:["Powerful analgesia", "Deep sedation", "Respiratory depression", "Euphoria"],
      dosage:{faible:"micrograms (not home-measurable)",modere:"unpredictable dose",fort:"respiratory arrest"},
      duree:"Onset 1–10 min | Total 1–4 h",
      tripReport:"Isotonitazene ('iso'): synthetic opioid stronger than fentanyl. Often found in powders or fake pills. Naloxone works but several doses may be needed.",
      description:"Very potent mu agonist (nitazene family). Tiny dose-to-overdose margin. Always test (strips), never use alone, carry naloxone."
    },
    "Métonitazène": {
      effets:["Analgesia", "Extreme sedation", "Respiratory depression"],
      dosage:{faible:"micrograms (not measurable)",modere:"unpredictable dose",fort:"respiratory arrest"},
      duree:"Onset 1–10 min | Total 1–4 h",
      tripReport:"Metonitazene: a nitazene close in potency to fentanyl, involved in many deaths. Found in mixes (heroin, fake meds).",
      description:"Mu agonist (nitazene). Major respiratory depression. Naloxone sometimes in repeated doses. Test, never be alone."
    },
    "Protonitazène": {
      effets:["Powerful analgesia", "Deep sedation", "Respiratory depression"],
      dosage:{faible:"micrograms (not measurable)",modere:"unpredictable dose",fort:"respiratory arrest"},
      duree:"Onset 1–10 min | Total 1–4 h",
      tripReport:"Protonitazene: estimated about 4× more potent than fentanyl. Found in deaths across Europe, North America and Australia.",
      description:"Very potent mu agonist (nitazene). Extreme overdose risk. Naloxone, nitazene strips, presence of a third party essential."
    },
    "Carfentanil": {
      effets:["Massive analgesia", "Immediate respiratory depression", "Loss of consciousness"],
      dosage:{faible:"micrograms (not measurable, lethal)",modere:"unpredictable dose",fort:"near-immediate respiratory arrest"},
      duree:"Onset <1–5 min | Total 0.5–2 h",
      tripReport:"Carfentanil: ~100× more potent than fentanyl (veterinary use for large animals). An amount invisible to the eye can kill. Found in street powders.",
      description:"Extremely potent mu agonist. Ultra-fast overdose. Multiple naloxone doses often needed. Never use alone, test, rescue doses ready."
    },
    "Oxycodone": {
      effets:["Analgesia", "Euphoria", "Sedation", "Anxiety relief"],
      dosage:{faible:"5–10 mg",modere:"15–30 mg",fort:"40 mg+ (without tolerance: dangerous)"},
      duree:"Onset 20–40 min | Total 4–6 h",
      tripReport:"Oxycodone (OxyContin) ~15 mg: classic opioid euphoria. Fake pills very often cut with fentanyl: never assume the contents.",
      description:"Mu agonist. Dose-dependent respiratory depression, worsened by alcohol/benzos. Fast tolerance and dependence. Naloxone for overdose."
    },
    "Krokodil (désomorphine)": {
      effets:["Analgesia", "Brief opioid euphoria", "Sedation"],
      dosage:{faible:"not quantifiable (homemade)",modere:"unpredictable dose",fort:"overdose / necrosis"},
      duree:"Onset 2–5 min | Total 1.5–2 h",
      tripReport:"Krokodil ('crocodile', 'zombie drug'): desomorphine made at home from codeine and caustic products (petrol, red phosphorus, acid). Short but very strong opioid effect. Toxic residues cause tissue necrosis (greenish scaly skin, gangrene, amputations). Greatly shortened life expectancy with regular use.",
      description:"Desomorphine: mu agonist ~8–10× stronger than morphine, short duration → frequent reinjection. The main danger comes mostly from the caustic impurities of homemade synthesis (necrosis, infections, abscesses, bone damage). Classic opioid respiratory depression on top."
    },
    "Opium": {
      effets:["Analgesia", "Euphoria", "Sedation", "Dreaminess"],
      dosage:{faible:"depends on morphine content (highly variable)",modere:"unpredictable dose",fort:"respiratory depression"},
      duree:"Onset 15–45 min | Total 4–6 h",
      tripReport:"Opium (poppy latex): classic opioid euphoria, smoked or eaten. Highly variable morphine content → unpredictable dosing. Dependence and respiratory depression like all opioids.",
      description:"Morphine + codeine + thebaine (opioid agonists). Respiratory depression, dependence. Major danger with alcohol/benzos. Naloxone for overdose."
    },
    "Tianeptine": {
      effets:["Euphoria", "Anxiety relief", "Sedation", "Analgesia"],
      dosage:{faible:"12.5–25 mg",modere:"25–50 mg",fort:"100–250 mg"},
      duree:"Onset 30–60 min | Total 3–4 h",
      tripReport:"Tianeptine 50 mg: an antidepressant turned street opioid. Ultra-fast dependence.",
      description:"Atypical mu agonist. Explosive dependence. Alcohol = respiratory risk."
    },
    "Kratom": {
      effets:["Analgesia", "Mild euphoria", "Low-dose stimulation", "High-dose sedation"],
      dosage:{faible:"2–5 g",modere:"5–10 g",fort:"15–25 g"},
      duree:"Onset 15–30 min | Total 3–6 h",
      tripReport:"Kratom 5 g: gentle opioid effect. 15 g: strong sedation. Physical dependence within a few weeks.",
      description:"Partial opioid agonist + alpha-2 agonist. Withdrawal comparable to heroin. Hepatotoxic."
    },
    "Psilocine": {
      effets:["Hallucinations", "Euphoria", "Ego dissolution"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"30–40 mg"},
      duree:"Onset 15–45 min | Total 4–6 h",
      tripReport:"Psilocin 20 mg: faster trip than psilocybin. Comparable visuals.",
      description:"4-HO-DMT: active metabolite of psilocybin. Identical profile."
    },
    "DMT": {
      effets:["Intense hallucinations", "Entities", "Break-through", "Euphoria"],
      dosage:{faible:"10–15 mg (smoked)",modere:"20–40 mg",fort:"50–70 mg"},
      duree:"Onset 30 s (smoked) | Total 10–20 min",
      tripReport:"DMT 40 mg smoked: encounter with entities. Total dissociation for 15 min. The most intense experience possible.",
      description:"N,N-DMT. Potent 5-HT2A agonist. Endogenous. Never with MAOI except an ayahuasca protocol."
    },
    "2C-B": {
      effets:["Euphoria", "Hallucinations", "Stimulation", "Empathy"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"30–40 mg"},
      duree:"Onset 45–75 min | Total 4–6 h",
      tripReport:"2C-B 18 mg: the most balanced psychedelic. Entactogen + visual. Popular at festivals.",
      description:"5-HT2A + 5-HT2C agonist. Possible tachycardia. Never with lithium."
    },
    "Mescaline": {
      effets:["Colourful hallucinations", "Euphoria", "Connection to nature", "Introspection"],
      dosage:{faible:"100–200 mg",modere:"200–400 mg",fort:"400–600 mg"},
      duree:"Onset 60–120 min | Total 10–14 h",
      tripReport:"Mescaline 300 mg: dazzling colours, connection to nature. Long, deep trip.",
      description:"5-HT2A agonist. Very long duration. Tachycardia. Nausea at onset is common."
    },
    "Ayahuasca": {
      effets:["Intense visions", "Purge", "Introspection", "Hallucinations"],
      dosage:{faible:"100–150 ml",modere:"150–200 ml",fort:"200+ ml"},
      duree:"Onset 20–60 min | Peak 2–4 h | Total 4–6 h",
      tripReport:"Ayahuasca: deep inner journey, possible purge. MAOI = lethal interactions with many substances.",
      description:"Contains MAOI (harmala). LETHAL interactions: tramadol, MDMA, cocaine, amphetamines, antidepressants."
    },
    "Ibogaïne": {
      effets:["Dreamlike visions", "Deep revelations", "Stimulation", "Nausea"],
      dosage:{faible:"5–10 mg/kg",modere:"10–20 mg/kg",fort:"20+ mg/kg"},
      duree:"Onset 1–2 h | Total 12–36 h",
      tripReport:"Ibogaine: a 36 h journey, reliving one's whole life. Cardiac arrest possible without medical supervision.",
      description:"Multimodal reuptake inhibitor. Long QT = death. Never use without a prior cardiac workup."
    },
    "1P-LSD": {
      effets:["Hallucinations", "Introspection", "Time distortion", "Empathy"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–400 µg"},
      duree:"Onset 45–90 min | Total 8–12 h",
      tripReport:"1P-LSD 125 µg: splendid visuals, deep musical connection.",
      description:"Legal LSD prodrug in some countries. Identical profile to LSD."
    },
    "1cP-LSD": {
      effets:["Hallucinations", "Euphoria", "Time distortion"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–300 µg"},
      duree:"Onset 60–90 min | Total 8–14 h",
      tripReport:"1cP-LSD 100 µg: slightly milder than LSD, gradual come-up.",
      description:"Cyclopropanoyl LSD analogue. Avoid lithium, antipsychotics."
    },
    "DOM": {
      effets:["Intense hallucinations", "Extreme duration", "Stimulation"],
      dosage:{faible:"1–3 mg",modere:"3–6 mg",fort:"8–14 mg"},
      duree:"Onset 60–180 min | Total 16–24 h",
      tripReport:"DOM 4 mg: a 20-hour trip. Very slow come-up = redosing trap.",
      description:"2,5-dimethoxy-4-methylamphetamine. Hypertensive risk."
    },
    "2C-C": {
      effets:["Mild hallucinations", "Sedation", "Euphoria"],
      dosage:{faible:"15–25 mg",modere:"25–40 mg",fort:"50–80 mg"},
      duree:"Onset 45–90 min | Total 4–6 h",
      tripReport:"2C-C 30 mg: one of the gentlest 2Cs, sedating and visual.",
      description:"2C-C: 5-HT2A agonist. Short duration. Sedating effects."
    },
    "2C-D": {
      effets:["Mental stimulation", "Light hallucinations", "Creativity"],
      dosage:{faible:"10–20 mg",modere:"20–30 mg",fort:"40–60 mg"},
      duree:"Onset 45–75 min | Total 4–6 h",
      tripReport:"2C-D 25 mg: a nootropic-psychedelic effect, mental clarity.",
      description:"The most nootropic of the 2Cs according to Shulgin."
    },
    "2C-E": {
      effets:["Intense hallucinations", "Stimulation", "Empathy"],
      dosage:{faible:"5–10 mg",modere:"10–15 mg",fort:"20–30 mg"},
      duree:"Onset 60–120 min | Total 8–12 h",
      tripReport:"2C-E 15 mg: long, anxious come-up but a very deep peak.",
      description:"Nicknamed 'The Aquarust'. Treacherous slow onset. Bad-trip risk."
    },
    "2C-I": {
      effets:["Euphoria", "Hallucinations", "Stimulation"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–35 mg"},
      duree:"Onset 45–75 min | Total 6–8 h",
      tripReport:"2C-I 15 mg: euphoric and visual, a feeling of invincibility.",
      description:"Strong 5-HT2A agonist. Possible tachycardia."
    },
    "2C-P": {
      effets:["Very intense hallucinations", "Very long duration", "Stimulation"],
      dosage:{faible:"3–6 mg",modere:"6–12 mg",fort:"15–25 mg"},
      duree:"Onset 90–180 min | Total 10–16 h",
      tripReport:"2C-P 8 mg: a 14-hour trip. Never without prior experience.",
      description:"One of the most potent psychedelics of the 2C family. Overdose possible."
    },
    "2C-T-2": {
      effets:["Hallucinations", "Empathy", "Introspection"],
      dosage:{faible:"5–10 mg",modere:"10–15 mg",fort:"20–30 mg"},
      duree:"Onset 60–120 min | Total 6–10 h",
      tripReport:"2C-T-2 12 mg: deep experience. Lethal interaction with lithium.",
      description:"Documented MAOI interactions (deaths). Never mix with MAOI."
    },
    "2C-T-7": {
      effets:["Intense hallucinations", "Empathy", "Nausea"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–35 mg"},
      duree:"Onset 60–120 min | Total 8–15 h",
      tripReport:"2C-T-7 15 mg: 3 hours of vomiting then magnificent effects. Never with MAOI.",
      description:"Involved in several MAOI-combination deaths. Possible hepatotoxicity."
    },
    "4-AcO-DMT": {
      effets:["Hallucinations", "Euphoria", "Emotional connection"],
      dosage:{faible:"10–15 mg",modere:"20–30 mg",fort:"40–60 mg"},
      duree:"Onset 20–45 min | Total 4–6 h",
      tripReport:"4-AcO-DMT 25 mg: like mushrooms but cleaner.",
      description:"Psilocin prodrug. Profile close to psilocybin."
    },
    "4-AcO-MET": {
      effets:["Hallucinations", "Creativity", "Euphoria"],
      dosage:{faible:"10–20 mg",modere:"20–30 mg",fort:"35–55 mg"},
      duree:"Onset 30–60 min | Total 5–8 h",
      tripReport:"4-AcO-MET 25 mg: very crisp colourful visuals, musical euphoria.",
      description:"5-HT2A agonist. Mild physical stimulation."
    },
    "4-AcO-DET": {
      effets:["Hallucinations", "Euphoria", "Creativity"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"30–50 mg"},
      duree:"Onset 30–60 min | Total 5–8 h",
      tripReport:"4-AcO-DET 20 mg: a shorter, more visual psilocybin.",
      description:"5-HT2A agonist. Less nausea than raw psilocybin."
    },
    "5-MeO-DiPT": {
      effets:["Hallucinations", "Physical stimulation", "Sexual effects"],
      dosage:{faible:"3–6 mg",modere:"6–12 mg",fort:"15–25 mg"},
      duree:"Onset 20–45 min | Total 4–6 h",
      tripReport:"5-MeO-DiPT 8 mg (Foxy): hallucinations and marked sexual stimulation.",
      description:"5-HT2A agonist. Neurotoxicity with repeated use."
    },
    "5-MeO-MiPT": {
      effets:["Mild hallucinations", "Empathy", "Stimulation"],
      dosage:{faible:"3–5 mg",modere:"5–10 mg",fort:"12–20 mg"},
      duree:"Onset 20–45 min | Total 4–6 h",
      tripReport:"5-MeO-MiPT 7 mg (Moxy): mildly empathogenic, bodily lightness.",
      description:"5-HT agonist. Short duration."
    },
    "Dextrométhorphane": {
      effets:["Dissociation", "Euphoria", "Hallucinations", "Mild stimulation"],
      dosage:{faible:"200–400 mg",modere:"400–600 mg",fort:"600–1000 mg"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"DXM 400 mg: mild dissociation. 600 mg: sigma plateau, hallucinations. MAOI = death.",
      description:"σ1 agonist + NMDA antagonist + weak SSRI. Serotonin syndrome with MDMA/MAOI."
    },
    "Deschlorokétamine": {
      effets:["Dissociation", "Euphoria", "Sedation"],
      dosage:{faible:"30–50 mg",modere:"75–125 mg",fort:"150–200 mg"},
      duree:"Onset 20–40 min | Total 3–6 h",
      tripReport:"Deschloroketamine 80 mg: clean dissociation. Longer-lasting than ketamine.",
      description:"NMDA antagonist. Cystitis risk with repeated use."
    },
    "Diphenidine": {
      effets:["Dissociation", "Anaesthesia", "Hallucinations"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Onset 30–60 min | Total 6–10 h",
      tripReport:"Diphenidine 60 mg: dissociation similar to ketamine but longer.",
      description:"Non-PCP NMDA antagonist. Long duration. Fast tolerance."
    },
    "3-HO-PCE": {
      effets:["Dissociation", "Analgesia", "Euphoria"],
      dosage:{faible:"5–10 mg",modere:"15–25 mg",fort:"30–50 mg"},
      duree:"Onset 20–40 min | Total 4–8 h",
      tripReport:"3-HO-PCE 15 mg: deep dissociation with opioid euphoria. Highly addictive.",
      description:"Double risk: dissociative + opioid dependence."
    },
    "3-HO-PCP": {
      effets:["Dissociation", "Strong analgesia", "Intense euphoria"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–25 mg"},
      duree:"Onset 15–30 min | Total 4–8 h",
      tripReport:"3-HO-PCP 7 mg: dependence after 2 weeks.",
      description:"Strong opioid activity. Potentially cardiotoxic."
    },
    "3-MeO-PCE": {
      effets:["Dissociation", "Euphoria", "Possible mania"],
      dosage:{faible:"3–7 mg",modere:"8–15 mg",fort:"20–30 mg"},
      duree:"Onset 30–60 min | Total 4–8 h",
      tripReport:"3-MeO-PCE 10 mg: grandiosity and confusion. Psychosis at high dose.",
      description:"Risk of pharmacological mania."
    },
    "3-MeO-PCP": {
      effets:["Dissociation", "Manic euphoria", "Potential psychosis"],
      dosage:{faible:"3–8 mg",modere:"10–15 mg",fort:"20–35 mg"},
      duree:"Onset 30–90 min | Total 6–12 h",
      tripReport:"3-MeO-PCP 10 mg: grandiosity, then confusion. Documented manic psychosis.",
      description:"NMDA antagonist + partial dopaminergic. Very dangerous alone."
    },
    "O-PCE": {
      effets:["Dissociation", "Euphoria", "Analgesia"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–75 mg"},
      duree:"Onset 30–60 min | Total 4–8 h",
      tripReport:"O-PCE 30 mg: clean dissociation, less k-hole than ketamine.",
      description:"NMDA antagonist. Cystitis risk. Don't mix with alcohol."
    },
    "PCE": {
      effets:["Dissociation", "Euphoria", "Anaesthesia"],
      dosage:{faible:"5–10 mg",modere:"15–25 mg",fort:"30–50 mg"},
      duree:"Onset 15–30 min | Total 4–8 h",
      tripReport:"PCE 20 mg: similar to PCP but slightly different.",
      description:"NMDA antagonist. Psychosis risk."
    },
    "PCP": {
      effets:["Strong dissociation", "Anaesthesia", "Agitation", "Potential psychosis"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–25 mg"},
      duree:"Onset 5–20 min | Total 4–8 h",
      tripReport:"PCP 7 mg: total disconnection, multiplied physical strength. Aggression possible.",
      description:"NMDA antagonist + dopaminergic. Rhabdomyolysis possible."
    },
    "Méthoxétamine": {
      effets:["Dissociation", "Euphoria", "Anaesthesia", "Hallucinations"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–90 mg"},
      duree:"Onset 30–90 min (oral) | Total 5–7 h",
      tripReport:"MXE (methoxetamine) ~30 mg: dissociation close to ketamine but far longer and stronger. Easy overdose, prolonged 'M-hole', cardiovascular risk (hypertension).",
      description:"NMDA antagonist + serotonergic activity. Deceptive long duration → dangerous redose. Urinary toxicity with repeated use. Documented fatal cases."
    },
    "2-FDCK": {
      effets:["Dissociation", "Analgesia", "Mild euphoria"],
      dosage:{faible:"25–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Onset 10–25 min | Total 2–4 h",
      tripReport:"2-FDCK 60 mg: deep dissociation, clearer than ketamine.",
      description:"Fluorinated ketamine analogue. Possible cystitis. Don't mix with alcohol/benzos."
    },
    "3-MeO-PCMo": {
      effets:["Mild dissociation", "Sedation"],
      dosage:{faible:"30–60 mg",modere:"60–120 mg",fort:"120 mg+"},
      duree:"Onset 30–60 min | Total 3–5 h",
      tripReport:"3-MeO-PCMo: an RC dissociative of the PCP family, weaker and more sedating. Limited data.",
      description:"NMDA antagonist (morpholine). Less potent than 3-MeO-PCP. Scarce toxicology data."
    },
    "Méthoxphénidine": {
      effets:["Dissociation", "Hallucinations", "Stimulation"],
      dosage:{faible:"40–60 mg",modere:"60–100 mg",fort:"100 mg+"},
      duree:"Onset 30–90 min | Total 4–8 h",
      tripReport:"MXP (methoxphenidine): a diphenidine-type dissociative, long, with a risk of hypertension and agitation/psychosis at high doses. Deceptive slow come-up.",
      description:"NMDA antagonist (diarylethylamine). Slow come-up → dangerous redose. Hypertension, long duration."
    },
    "Nitreux": {
      effets:["Brief euphoria", "Mild dissociation", "Giggles"],
      dosage:{faible:"1 charger",modere:"2–3 chargers",fort:"many repeated (B12 deficiency)"},
      duree:"Onset a few seconds | Total 2–5 min",
      tripReport:"Nitrous (balloons): 2 minutes of euphoria. Repeated use = serious B12 deficiency.",
      description:"Nitrous oxide. B12 deficiency → severe neuropathy."
    },
    "Delta-9 THC": {
      effets:["Euphoria", "Relaxation", "Altered perception", "Appetite stimulation"],
      dosage:{faible:"2–5 mg",modere:"5–15 mg",fort:"20–50 mg"},
      duree:"Onset 15–45 min (oral) | Peak 1–3 h | Total 4–6 h",
      tripReport:"THC 15 mg: euphoria and laughter, heightened music. Anxiety and paranoia possible from 20 mg.",
      description:"Δ9-tetrahydrocannabinol: CB1/CB2 agonist. Documented cannabinoid psychosis."
    },
    "CBD": {
      effets:["Anxiety relief", "Anti-inflammatory", "Relaxation"],
      dosage:{faible:"10–25 mg",modere:"25–75 mg",fort:"100–300 mg"},
      duree:"Onset 20–45 min | Total 4–8 h",
      tripReport:"CBD 50 mg: mild relaxation, no high. Can moderate THC's anxiety-inducing effects.",
      description:"Negative CB1 modulator. Antagonises some THC effects. Very low toxicity."
    },
    "THCP": {
      effets:["Intense euphoria", "Sedation", "Cognitive alteration"],
      dosage:{faible:"1–2 mg",modere:"2–5 mg",fort:"7–10 mg"},
      duree:"Onset 10–30 min | Total 4–8 h",
      tripReport:"THCP 3 mg: 30× more potent than THC. For non-habituated users: extreme disorienting effects.",
      description:"Tetrahydrocannabiphorol. CB1 affinity 33× > THC. Limited safety data."
    },
    "THCV": {
      effets:["Mild stimulation", "Anxiety relief", "Appetite reduction"],
      dosage:{faible:"2–5 mg",modere:"5–15 mg",fort:"20–30 mg"},
      duree:"Onset 5–15 min (smoked) | Total 2–4 h",
      tripReport:"THCV 10 mg: clear and stimulating, less sedating than THC. Reduces appetite.",
      description:"CB1 antagonist at low dose, CB1/CB2 agonist at high dose."
    },
    "HHC": {
      effets:["Euphoria", "Relaxation", "Mild cognitive alteration"],
      dosage:{faible:"3–6 mg",modere:"8–15 mg",fort:"20–35 mg"},
      duree:"Onset 15–30 min | Total 3–5 h",
      tripReport:"HHC 10 mg: similar to THC but 'clearer'. Good euphoria.",
      description:"Hexahydrocannabinol: hydrogenated THC, moderate CB1 agonist."
    },
    "HHC-P": {
      effets:["Strong euphoria", "Sedation", "Relaxation"],
      dosage:{faible:"2–3 mg",modere:"3–7 mg",fort:"8–15 mg"},
      duree:"Onset 10–25 min | Total 3–6 h",
      tripReport:"HHC-P 5 mg: clearly more potent than HHC. Comparable to THCP in intensity.",
      description:"Hexahydrocannabiphorol: strong CB1 agonist."
    },
    "Delta-8 THC": {
      effets:["Mild euphoria", "Relaxation", "Anxiety relief"],
      dosage:{faible:"5–10 mg",modere:"10–25 mg",fort:"40–60 mg"},
      duree:"Onset 15–45 min | Total 3–6 h",
      tripReport:"Delta-8 THC 15 mg: a milder THC effect, less anxiety-inducing. Possible chemical contaminants.",
      description:"Isomer of delta-9. The manufacturing process can leave dangerous residues."
    },
    "Delta-10 THC": {
      effets:["Mild euphoria", "Gentle stimulation", "Clarity"],
      dosage:{faible:"5–10 mg",modere:"10–25 mg",fort:"30–50 mg"},
      duree:"Onset 15–45 min | Total 3–5 h",
      tripReport:"Delta-10 (often sold as 'D10'): more stimulating and 'clear' than delta-9, less anxiety-inducing, weaker in intensity.",
      description:"THC isomer obtained by chemical conversion of CBD. The process can leave residues (acids, metal catalysts). Lower CB1 affinity than delta-9."
    },
    "CBC": {
      effets:["Anti-inflammatory", "Mild relaxation", "Entourage effect"],
      dosage:{faible:"10–25 mg",modere:"25–50 mg",fort:"50–100 mg"},
      duree:"Onset 20–45 min | Total 4–6 h",
      tripReport:"CBC alone: no high. Mostly sold in flower as a legal alternative; the felt effect often comes from terpenes and the entourage effect rather than CBC itself.",
      description:"Cannabichromene: a natural, non-psychoactive cannabinoid. Acts mainly on TRPV1/TRPA1 receptors. Low CB1 affinity. Studied for inflammation. Legal."
    },
    "CBN": {
      effets:["Mild sedation", "Relaxation", "Drowsiness"],
      dosage:{faible:"2.5–5 mg",modere:"5–15 mg",fort:"15–30 mg"},
      duree:"Onset 30–60 min | Total 4–8 h",
      tripReport:"CBN 10 mg: mostly sedating, often used for sleep. Very weakly psychoactive.",
      description:"Cannabinol: a THC degradation product. Weak CB1 agonist. Low toxicity. Legal depending on formulation."
    },
    "CBG": {
      effets:["Focus", "Anti-inflammatory", "Mild relaxation"],
      dosage:{faible:"10–25 mg",modere:"25–50 mg",fort:"50–100 mg"},
      duree:"Onset 20–45 min | Total 4–6 h",
      tripReport:"CBG 30 mg: non-intoxicating, a subtle effect sometimes described as clarifying. Well tolerated.",
      description:"Cannabigerol: the biosynthetic precursor of the other cannabinoids. Non-psychoactive. Studied (inflammation, antibacterial). Low toxicity."
    },
    "HHCH": {
      effets:["Powerful euphoria", "Sedation", "Marked cognitive alteration"],
      dosage:{faible:"1–3 mg",modere:"3–7 mg",fort:"8–15 mg"},
      duree:"Onset 15–35 min | Total 4–8 h",
      tripReport:"HHCH ~5 mg: 10–15× more potent than THC, longer effects. Disorientation common in non-habituated users.",
      description:"Hexahydrocannabihexol: hydrogenated version of THCH. Strong CB1 agonist. Almost no scientific record. Banned in France since 2024."
    },
    "HHC-O": {
      effets:["Intense euphoria", "Sedation", "Deep relaxation"],
      dosage:{faible:"2–4 mg",modere:"4–8 mg",fort:"10–18 mg"},
      duree:"Onset 20–45 min | Total 4–7 h",
      tripReport:"HHC-O 5 mg: HHC acetate, slower come-up but stronger than HHC. Uncertain pyrolysis when vaped.",
      description:"HHC-O-acetate: acetylated ester of HHC. Inhaled acetates raise a pulmonary toxicity concern (cf. vitamin E acetate). Banned in France."
    },
    "HHCP": {
      effets:["Very strong euphoria", "Heavy sedation", "Intense cognitive alteration"],
      dosage:{faible:"1–2 mg",modere:"2–5 mg",fort:"6–10 mg"},
      duree:"Onset 15–30 min | Total 5–9 h",
      tripReport:"HHCP 3 mg: among the most potent neo-cannabinoids sold, close to THCP. Very long effects.",
      description:"Hexahydrocannabiphorol: heptyl chain, very high CB1 affinity. Almost no safety data. Banned in France."
    },
    "THCB": {
      effets:["Euphoria", "Relaxation", "Altered perception"],
      dosage:{faible:"2–5 mg",modere:"5–12 mg",fort:"15–25 mg"},
      duree:"Onset 15–40 min | Total 3–6 h",
      tripReport:"THCB ~8 mg: close to THC, slightly faster. Butyl chain.",
      description:"Tetrahydrocannabutol: a butyl-chain THC analogue, present in trace amounts in cannabis. CB1 agonist. Banned in France since 2024."
    },
    "THCH": {
      effets:["Strong euphoria", "Sedation", "Cognitive alteration"],
      dosage:{faible:"1–3 mg",modere:"3–8 mg",fort:"10–18 mg"},
      duree:"Onset 15–35 min | Total 4–7 h",
      tripReport:"THCH ~5 mg: clearly more potent than THC (estimated ~10×). Long, sedating effects.",
      description:"Tetrahydrocannabihexol: hexyl chain, strong CB1 affinity. Very little human data. Banned in France."
    },
    "THCJD": {
      effets:["Powerful euphoria", "Relaxation", "Altered perception"],
      dosage:{faible:"2–4 mg",modere:"4–9 mg",fort:"10–18 mg"},
      duree:"Onset 15–40 min | Total 4–7 h",
      tripReport:"THCJD ~5 mg: presented as very potent (octyl chain), real data scarce.",
      description:"Tetrahydrocannabioctol: a long-alkyl-chain THC analogue. Poorly characterised pharmacological profile. Banned in France."
    },
    "H4CBD": {
      effets:["Anxiety relief", "Anti-inflammatory", "Relaxation"],
      dosage:{faible:"10–25 mg",modere:"25–60 mg",fort:"75–150 mg"},
      duree:"Onset 20–45 min | Total 4–8 h",
      tripReport:"H4CBD 40 mg: close to CBD, sometimes described as a bit more relaxing. No high.",
      description:"Hydrogenated CBD (tetrahydrocannabidiol). Non-psychoactive, increased affinity for some receptors. Limited data. Banned in France since 2024."
    },
    "H2CBD": {
      effets:["Mild anxiety relief", "Relaxation"],
      dosage:{faible:"15–30 mg",modere:"30–70 mg",fort:"80–150 mg"},
      duree:"Onset 20–45 min | Total 4–7 h",
      tripReport:"H2CBD 40 mg: a partially hydrogenated CBD analogue, non-psychoactive. Very little track record.",
      description:"Dihydrocannabidiol: does not convert to THC. Presumed non-psychoactive. Banned in France since 2024."
    },
    "CBDP": {
      effets:["Relaxation", "Mild anxiety relief"],
      dosage:{faible:"10–30 mg",modere:"30–60 mg",fort:"60–100 mg"},
      duree:"Onset 20–40 min | Total 4–6 h",
      tripReport:"CBDP 30 mg: a phorol analogue of CBD. Very limited data.",
      description:"Cannabidiphorol: a CBD analogue. Presumed non-psychoactive profile."
    },
    "10-OH-HHC": {
      effets:["Euphoria", "Relaxation", "Mild sedation"],
      dosage:{faible:"3–5 mg",modere:"5–12 mg",fort:"15–25 mg"},
      duree:"Onset 15–30 min | Total 3–5 h",
      tripReport:"10-OH-HHC: a slightly different profile from HHC, similar effects.",
      description:"Hydroxylated metabolite of HHC. Limited data."
    },
    "Cannabis CBD": {
      effets:["Anxiety relief", "Anti-inflammatory", "Relaxation"],
      dosage:{faible:"10–25 mg",modere:"25–75 mg",fort:"100–300 mg"},
      duree:"Onset 20–45 min | Total 4–8 h",
      tripReport:"CBD 50 mg: mild relaxation, no high. Can moderate THC's anxiety-inducing effects.",
      description:"Negative CB1 modulator. Antagonises some THC effects. Very low toxicity."
    },
    "MDPV": {
      effets:["Powerful euphoria", "Intense stimulation", "Psychosis"],
      dosage:{faible:"3–5 mg",modere:"5–10 mg",fort:"15–25 mg"},
      duree:"Onset 10–20 min | Total 3–5 h",
      tripReport:"MDPV 8 mg: 48 h redosing, psychosis.",
      description:"One of the most addictive known. Documented deaths."
    },
    "Méphédrone": {
      effets:["Euphoria", "Empathy", "Stimulation", "Increased libido"],
      dosage:{faible:"75–150 mg",modere:"150–200 mg",fort:"250–400 mg"},
      duree:"Onset 15–45 min | Total 2–4 h",
      tripReport:"Mephedrone 150 mg: MDMA-like but shorter. Compulsive redosing. Intense craving.",
      description:"4-MMC. DA/5-HT releaser. Cardiotoxic. Ultra-fast dependence. MDMA = hyperthermia."
    },
    "3-MMC": {
      effets:["Euphoria", "Empathy", "Stimulation", "Increased libido"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Onset 20–45 min | Total 3–5 h",
      tripReport:"3-MMC 150 mg: redosing inevitable, hard comedown.",
      description:"Mephedrone substitute. Cardiotoxicity, hyperthermia."
    },
    "2-MMC": {
      effets:["Euphoria", "Stimulation", "Moderate empathy"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Onset 20–40 min | Total 3–5 h",
      tripReport:"2-MMC 150 mg: compulsive redosing, hard comedown.",
      description:"Monoaminergic releaser. Fast dependence, cardiotoxicity."
    },
    "4-CMC": {
      effets:["Stimulation", "Euphoria", "Sociability"],
      dosage:{faible:"20–50 mg",modere:"50–120 mg",fort:"150 mg+"},
      duree:"Onset 20–45 min | Total 2–4 h",
      tripReport:"4-CMC (clephedrone): a cathinone between stimulation and empathy, weaker than mephedrone. Frequent redosing.",
      description:"Monoamine releaser/reuptake inhibitor. Possible nephrotoxicity. Cardiovascular risks."
    },
    "3-CMC": {
      effets:["Stimulation", "Euphoria", "Sociability"],
      dosage:{faible:"30–70 mg",modere:"70–150 mg",fort:"150 mg+"},
      duree:"Onset 20–45 min | Total 2–4 h",
      tripReport:"3-CMC (clophedrone): a stimulant cathinone close to 3-MMC, common after bans. Frequent redosing, hard comedown.",
      description:"Dopamine-noradrenaline inhibitor/releaser. Cardiac strain, dependence. Fast tolerance."
    },
    "Méthylone": {
      effets:["Empathy", "Euphoria", "Stimulation"],
      dosage:{faible:"100–150 mg",modere:"150–250 mg",fort:"250–350 mg"},
      duree:"Onset 30–60 min | Total 3–5 h",
      tripReport:"Methylone (bk-MDMA): an empathogen close to MDMA but shorter, more stimulating and less 'deep'. Frequent redosing, hyperthermia. Often sold as MDMA.",
      description:"Dopamine/noradrenaline > serotonin releaser (cathinone). Hyperthermia, cardiac strain. Moderate hydration, breaks."
    },
    "Eutylone": {
      effets:["Stimulation", "Euphoria", "Moderate empathy", "Insomnia"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"200 mg+"},
      duree:"Onset 30–60 min | Total 3–5 h",
      tripReport:"Eutylone (bk-EBDB): a very common cathinone, often sold as MDMA or 'molly'. More stimulating than empathogenic, marked insomnia, compulsive redosing. A cause of disappointing/anxious experiences mistaken for MDMA.",
      description:"Monoamine reuptake inhibitor. Prolonged insomnia, anxiety, cardiac strain. Test beforehand (often confused with MDMA)."
    },
    "Pentedrone": {
      effets:["Stimulation", "Euphoria", "Insomnia"],
      dosage:{faible:"30–60 mg",modere:"60–100 mg",fort:"130–200 mg"},
      duree:"Onset 15–30 min | Total 2–4 h",
      tripReport:"Pentedrone 80 mg: a 6 h redosing session with vasoconstriction.",
      description:"DAT/NET inhibitor. Very high abuse potential."
    },
    "Pentylone": {
      effets:["Stimulation", "Euphoria", "Redosing"],
      dosage:{faible:"30–60 mg",modere:"60–120 mg",fort:"120 mg+"},
      duree:"Onset 30–60 min | Total 3–6 h",
      tripReport:"Pentylone: a stimulant cathinone, often an adulterant of 'MDMA'/'molly'. Insomnia, anxiety, compulsive redosing.",
      description:"Monoamine reuptake inhibitor. Cardiac strain, insomnia. Frequently present in mixes."
    },
    "Alpha-PVP": {
      effets:["Powerful stimulation", "Euphoria", "Hypervigilance", "Compulsive redosing"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25 mg+"},
      duree:"Onset 10–30 min | Total 2–4 h",
      tripReport:"Alpha-PVP ('flakka') ~15 mg insufflated: a brutal cocaine/meth-type come-up. Compulsive redosing, agitation, paranoia, hyperthermia at high doses.",
      description:"DAT/NET inhibitor, weak serotonergic effect. Strong abuse liability. Publicised cases of agitated delirium. Fast tolerance."
    },
    "Alpha-PHP": {
      effets:["Intense stimulation", "Euphoria", "Compulsive redosing", "Insomnia"],
      dosage:{faible:"3–5 mg",modere:"5–15 mg",fort:"20 mg+"},
      duree:"Onset 10–30 min | Total 2–4 h (insufflated)",
      tripReport:"Alpha-PHP: successor to alpha-PVP (flakka), effects close to smoked meth but short, which drives compulsive redosing. Psychosis and delusions at high dose or in a binge.",
      description:"Dopamine/noradrenaline reuptake inhibitor (pyrrolidinophenone). Strong behavioural addiction, hyperthermia, cardiovascular risk. Limited toxicology data."
    },
    "NEP": {
      effets:["Stimulation", "Mild euphoria", "Focus"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50 mg+"},
      duree:"Onset 20–45 min | Total 3–5 h",
      tripReport:"NEP (N-ethyl-pentedrone): a stimulant cathinone close to pentedrone, often sold as a legal alternative. Frequent redosing, insomnia.",
      description:"Dopamine/noradrenaline reuptake inhibitor. Medium-duration stimulant. Cardiovascular and dependence risks."
    },
    "Hexen": {
      effets:["Stimulation", "Euphoria", "Sociability", "Redosing"],
      dosage:{faible:"5–15 mg",modere:"15–35 mg",fort:"40 mg+"},
      duree:"Onset 15–40 min | Total 2–4 h",
      tripReport:"Hexen (N-ethyl-hexedrone): a short-acting stimulant cathinone, close to MDPV in intensity. Compulsive redosing, hard comedown.",
      description:"DAT/NET inhibitor. Potent, brief stimulant. Hyperthermia and tachycardia at high doses. Behavioural dependence."
    },
    "4-FA": {
      effets:["Euphoria", "Stimulation", "Mild empathy"],
      dosage:{faible:"50–100 mg",modere:"100–150 mg",fort:"150–250 mg"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"4-FA (4-fluoroamphetamine): between amphetamine and MDMA, social euphoria. Cardiovascular risks (blood-pressure spikes, reported stroke/cerebral haemorrhage cases). Avoid redosing.",
      description:"Dopamine-noradrenaline releaser/inhibitor + serotonin. Reported cerebral haemorrhage risk. Do not combine with stimulants/MAOI."
    },
    "2-FA": {
      effets:["Stimulation", "Focus", "Mild euphoria"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Onset 30–60 min | Total 6–10 h",
      tripReport:"2-FA 30 mg: like a very strong coffee but more focused.",
      description:"2-Fluoroamphetamine. Cardiac risk. Insomnia."
    },
    "3-FA": {
      effets:["Stimulation", "Mild empathy", "Focus"],
      dosage:{faible:"15–25 mg",modere:"30–50 mg",fort:"70–100 mg"},
      duree:"Onset 30–60 min | Total 6–10 h",
      tripReport:"3-FA 40 mg: between amphetamine and MDMA, gentle empathy.",
      description:"Balanced monoaminergic releaser."
    },
    "4-FMA": {
      effets:["Stimulation", "Mild euphoria"],
      dosage:{faible:"40–80 mg",modere:"80–150 mg",fort:"150 mg+"},
      duree:"Onset 30–60 min | Total 3–5 h",
      tripReport:"4-FMA: a fluorinated amphetamine stimulant, more 'speed' than 4-FA. Limited data, cardiovascular risks.",
      description:"Dopamine/noradrenaline releaser. Cardiac caution, no stimulant combinations."
    },
    "Salvia divinorum": {
      effets:["Intense dissociation", "Reality distortions", "Merging with objects", "Loss of the body"],
      dosage:{faible:"dried leaves 0.25–0.5 g",modere:"5× extract: 0.1–0.2 g",fort:"pure salvinorin A: 200–500 µg (very potent)"},
      duree:"Onset <1 min (smoked) / 10 min (sublingual) | Total 5–20 min (smoked) / up to 2 h (sublingual)",
      tripReport:"Smoked salvia: an extremely fast, intense and unpredictable trip (uncontrollable laughter, merging with surroundings, total loss of bearings), thankfully brief. Always with a sober sitter, as motor control is lost.",
      description:"Salvinorin A: selective kappa-opioid agonist (≠ serotonergic psychedelics). The most potent known natural psychoactive. No notable toxicity or addiction, but frequent physical accidents (falls). Rare prolonged psychoses."
    },
    "Kava": {
      effets:["Relaxation", "Anxiety relief", "Sociability", "Oral numbness"],
      dosage:{faible:"1 spoon (~70 g root as a drink)",modere:"traditional social dose",fort:"several bowls (sedation, nausea)"},
      duree:"Onset 20–30 min | Total 2–4 h",
      tripReport:"Kava (Pacific drink): relaxation close to mild alcohol or a benzo, without losing clarity, with a numbing tongue. Enjoyed socially. Possible hepatotoxicity with heavy use or with alcohol.",
      description:"Kavalactones: GABA modulation. Anxiolytic sedative. Liver risk (especially extracts, alcohol, fragile liver). Potentiates alcohol and benzodiazepines."
    },
    "Khat": {
      effets:["Stimulation", "Mild euphoria", "Talkativeness", "Appetite suppression"],
      dosage:{faible:"a few fresh leaves",modere:"1 chewed bunch (~100–200 g)",fort:"prolonged use over several hours"},
      duree:"Onset 15–45 min | Total 3–6 h (prolonged chewing)",
      tripReport:"Khat: fresh leaves chewed for hours (Horn of Africa, Arabian Peninsula). Mild amphetamine-type stimulation, social euphoria. Insomnia, dental problems and dependence with daily use.",
      description:"Cathinone + cathine (natural amphetamines). Dopamine/noradrenaline release. Must be consumed fresh (cathinone degrades). Cardiovascular risks, psychological dependence."
    },
    "Kanna": {
      effets:["Mood elevation", "Anxiety relief", "Mild euphoria", "Sociability"],
      dosage:{faible:"50–100 mg",modere:"100–250 mg",fort:"250–500 mg+"},
      duree:"Onset 15–45 min | Total 1–3 h",
      tripReport:"Kanna (South Africa): chewed, snorted or as powder. A mild anxiolytic and slightly euphoric effect, sometimes empathogenic at higher dose. Combined with SSRIs: caution (theoretical serotonin syndrome).",
      description:"Mesembrine: serotonin reuptake inhibitor + PDE4 inhibitor. Mild effect. Avoid with SSRI/MAOI antidepressants."
    },
    "Lotus bleu": {
      effets:["Relaxation", "Mild euphoria", "Dreaminess", "Gentle sedation"],
      dosage:{faible:"tea 2–5 g",modere:"5–10 g (infusion/wine)",fort:"concentrated extracts"},
      duree:"Onset 20–45 min | Total 1–3 h",
      tripReport:"Blue lotus (Nymphaea caerulea): infused, smoked or steeped in wine. A gentle, slightly dreamlike relaxation, used in ancient Egypt. Subtle, sometimes disappointing effects.",
      description:"Aporphine + nuciferine (dopaminergic modulation). Mild relaxing effect. Low toxicity at usual doses."
    },
    "Bétel": {
      effets:["Stimulation", "Well-being", "Warmth", "Red salivation"],
      dosage:{faible:"1 quid",modere:"regular use through the day",fort:"chronic use"},
      duree:"Onset 5–15 min | Total 1–3 h",
      tripReport:"Areca/betel nut: chewed in Southeast Asia, a mild stimulant and euphoriant. Stains the mouth red. Chronic use: strong addiction and oral-pharyngeal cancers.",
      description:"Arecoline: cholinergic agonist. Stimulant. Proven carcinogen (oral cavity) with chronic use. Marked dependence."
    },
    "Muscade": {
      effets:["Sedation", "At high dose: delirium, hallucinations", "Dry mouth", "Nausea"],
      dosage:{faible:"non-psychoactive (spice)",modere:"5–10 g (10–20 g powder)",fort:"20 g+ (unpleasant delirium, dangerous)"},
      duree:"Onset 3–6 h (very slow) | Total 12–48 h",
      tripReport:"Nutmeg at high dose: a long anticholinergic delirium, often very unpleasant (nausea, dry mouth, tachycardia, confusion, a 2-day hangover). Rarely repeated.",
      description:"Myristicin + elemicin (anticholinergic and weakly psychedelic effects). Deceptive very slow onset. Marked discomfort, risk at high dose."
    },
    "Absinthe / Armoise": {
      effets:["Intoxication", "Effect described as 'clear'", "Relaxation"],
      dosage:{faible:"a measured glass of absinthe",modere:"social use",fort:"heavy drinking"},
      duree:"Onset like alcohol | Total like alcohol",
      tripReport:"Absinthe: the effect comes above all from the alcohol (often 50–70%). The thujone from wormwood is present at too low a dose for the mythical 'hallucinogenic' effects. The risks are those of strong alcohol.",
      description:"Thujone (wormwood/Artemisia): GABA antagonist at high dose (convulsant), but modern amounts are low. The real danger remains the alcohol."
    },
    "Éphédra": {
      effets:["Stimulation", "Energy", "Appetite suppression", "Bronchodilation"],
      dosage:{faible:"ephedrine 8–15 mg",modere:"15–30 mg",fort:"50 mg+ (cardiac risk)"},
      duree:"Onset 30–60 min | Total 3–6 h",
      tripReport:"Ephedra (ma huang): a stimulant and appetite suppressant, formerly in 'fat-burner' products. Serious cardiovascular risks (hypertension, arrhythmias, stroke), especially with caffeine.",
      description:"Ephedrine/pseudoephedrine: adrenergic agonists. Hypertension, tachycardia. Dangerous for the heart, interactions with stimulants and MAOI."
    },
    "Wachuma (San Pedro)": {
      effets:["Visual hallucinations", "Introspection", "Empathy", "Nausea (come-up)"],
      dosage:{faible:"~15–25 cm of fresh cactus",modere:"25–50 cm (≈ mescaline 200–400 mg)",fort:"long cactus / extract"},
      duree:"Onset 1–2 h | Total 8–14 h",
      tripReport:"San Pedro/Wachuma: a mescaline cactus, a long, gentle psychedelic trip, often described as warm and 'earthy'. Strong nausea on the come-up. Setting and a sitter recommended.",
      description:"Mescaline (phenethylamine, 5-HT2A agonist). Like peyote but more accessible. MAOI/SSRI interactions. Cardiovascular precautions."
    },
    "Peyotl": {
      effets:["Hallucinations", "Deep introspection", "Empathy", "Nausea"],
      dosage:{faible:"3–4 fresh buttons",modere:"5–8 buttons (≈ mescaline 200–400 mg)",fort:"10+ buttons"},
      duree:"Onset 1–2 h | Total 8–12 h",
      tripReport:"Peyote: a small sacred cactus (North America), a long mescaline trip. Very bitter, frequent nausea. A threatened plant, sacred to several peoples: use respectfully.",
      description:"Mescaline. 5-HT2A agonist. MAOI/SSRI interactions, cardiac precautions. Protected species, very slow growth."
    },
    "Champignons Amanita muscaria": {
      effets:["Dreamlike sedation", "Distortions", "Micro-sleeps", "Delirium"],
      dosage:{faible:"1 g dried (caution)",modere:"5–10 g dried",fort:"10 g+ (delirium, nausea)"},
      duree:"Onset 30–120 min | Total 4–10 h",
      tripReport:"Fly agaric: a dreamy/sedating effect, very different from psilocybe mushrooms (it is not a psychedelic). Nausea, confusion, micro-sleeps. Must be decarboxylated; ibotenic acid is neurotoxic.",
      description:"Muscimol (GABA-A agonist) + ibotenic acid (neurotoxic, converted to muscimol). Not to be confused with the deadly amanitas. Highly variable dosing."
    },
    "Belladone": {
      effets:["Delirium", "Hallucinations", "Mydriasis", "Tachycardia"],
      dosage:{faible:"any dose is risky",modere:"narrow therapeutic/toxic margin",fort:"coma, death possible"},
      duree:"Onset 1–2 h | Total 12–48 h",
      tripReport:"Belladonna: a very dangerous anticholinergic deliriant (like Datura). Unpleasant delirium, fever, blurred vision, risk of coma and death. Tiny margin between effective and lethal dose.",
      description:"Atropine, scopolamine, hyoscyamine: anticholinergics. Severe cardiac and neurological toxicity. To be treated as a poison."
    },
    "Jusquiame": {
      effets:["Delirium", "Hallucinations", "Sedation", "Mydriasis"],
      dosage:{faible:"any dose is risky",modere:"narrow toxic margin",fort:"coma, death possible"},
      duree:"Onset 1–2 h | Total 8–24 h",
      tripReport:"Henbane: another deliriant nightshade (Datura/belladonna family). Dangerous and unpleasant anticholinergic effects. Life-threatening. To be avoided.",
      description:"Scopolamine, hyoscyamine, atropine. Toxic deliriant. No reliable safety margin."
    },
    "Datura": {
      effets:["Total delirium", "Real hallucinations", "Hyperthermia", "Amnesia"],
      dosage:{faible:"unknown",modere:"unknown",fort:"1 flower = death possible"},
      duree:"Onset 30–120 min | Total 12–48 h",
      tripReport:"Datura: impossible to dose. Not a pretty trip — real delirium, dangerous acts. Systematic hospitalisations.",
      description:"Scopolamine/atropine. No pleasant trip. Near-systematic hospitalisation. Death common."
    },
    "Yopo / Anadenanthera": {
      effets:["Intense hallucinations", "Visions", "Nausea", "Brief effect"],
      dosage:{faible:"a pinch of insufflated powder",modere:"ritual dose (snuffed)",fort:"high insufflated dose"},
      duree:"Onset 1–5 min | Total 30–90 min",
      tripReport:"Yopo: an insufflated seed powder (Amazon/Orinoco), rich in bufotenin/DMT. A brutal, physical come-up (strong pressure, nausea), intense and short visions. Ritual use with preparation.",
      description:"Bufotenin + DMT + 5-MeO-DMT (5-HT2A agonists). Marked cardiovascular effects. Often combined with MAO inhibitors: risky interactions."
    },
    "Crapaud du Colorado (5-MeO-DMT)": {
      effets:["Ego dissolution", "Mystical experience", "Very intense and brief effect"],
      dosage:{faible:"2–5 mg vaporised",modere:"5–15 mg",fort:"20 mg+"},
      duree:"Onset <1 min | Total 15–40 min",
      tripReport:"Bufo alvarius venom / 5-MeO-DMT: one of the most intense psychedelics, total ego dissolution within seconds. Very short but overwhelming. Risks: accidents, distress, lethal MAOI interactions.",
      description:"5-MeO-DMT (5-HT1A/2A agonist). Different from classic DMT. A sitter is essential. Lethal combined with MAOIs. Soft surfaces, never alone."
    },
    "5-MeO-DMT (synthétique)": {
      effets:["Ego dissolution", "Mystical experience", "Brief and intense effect"],
      dosage:{faible:"2–5 mg vaporised",modere:"5–12 mg",fort:"15 mg+"},
      duree:"Onset <1 min | Total 15–40 min",
      tripReport:"5-MeO-DMT: one of the most powerful psychedelics, total ego dissolution within seconds. Very short but overwhelming. Lethal with an MAOI. A sitter and a soft surface are essential.",
      description:"5-HT1A/2A agonist. Different from the visual DMT. Potentially fatal MAOI interaction. Distress/blackout common."
    },
    "LSA": {
      effets:["Hallucinations", "Sedation", "Introspection", "Nausea"],
      dosage:{faible:"25–75 µg",modere:"75–150 µg",fort:"200–400 µg"},
      duree:"Onset 30–90 min | Total 8–12 h",
      tripReport:"LSA 100 µg: a sedating trip. Significant nausea.",
      description:"Found in Morning Glory seeds. Less potent than LSD."
    },
    "Muscimol": {
      effets:["Dreamlike sedation", "Distortions", "Deep relaxation", "Mild delirium"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"10–15 mg+"},
      duree:"Onset 30–120 min | Total 4–10 h",
      tripReport:"Muscimol (fly agaric) ~5 mg: a dreamy state, heaviness, sometimes nausea. At high dose: confusion, micro-sleeps, delirium. Very variable between people.",
      description:"Potent GABA-A agonist (≠ cannabinoid). The active principle of Amanita muscaria, sold as gummies. The associated ibotenic acid is neurotoxic and converted to muscimol by decarboxylation. Frequent nausea; caution about the real dosing of products."
    },
    "Modafinil": {
      effets:["Wakefulness", "Focus", "Reduced drowsiness"],
      dosage:{faible:"50–100 mg",modere:"200 mg",fort:"400 mg"},
      duree:"Onset 45–90 min | Total 12–15 h",
      tripReport:"Modafinil 200 mg: 12 h of pure focus.",
      description:"Eugeroic. Rare hepatotoxicity. Reduced birth-control efficacy."
    },
    "Adrafinil": {
      effets:["Wakefulness", "Focus", "Reduced fatigue"],
      dosage:{faible:"150–300 mg",modere:"300–600 mg",fort:"600–900 mg"},
      duree:"Onset 60–90 min | Total 8–12 h",
      tripReport:"Adrafinil 300 mg: increased alertness. No euphoria.",
      description:"Modafinil prodrug. Hepatotoxic with regular use."
    },
    "Armodafinil": {
      effets:["Prolonged wakefulness", "Focus", "Reduced drowsiness"],
      dosage:{faible:"50–100 mg",modere:"150 mg",fort:"200–300 mg"},
      duree:"Onset 45–90 min | Total 10–15 h",
      tripReport:"Armodafinil 150 mg: 14 h of work without fatigue. No euphoria.",
      description:"R-enantiomer of modafinil. Long-term liver risk."
    },
    "Méthylphénidate": {
      effets:["Stimulation", "Focus", "Appetite reduction", "Mild euphoria"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"60–100 mg"},
      duree:"Onset 20–40 min | Total 3–5 h",
      tripReport:"Methylphenidate 30 mg: laser focus. Dependence if used recreationally.",
      description:"Ritalin: DAT/NET inhibitor. Cardiotoxic. MAOIs contraindicated."
    },
    "Ethylphénidate": {
      effets:["Stimulation", "Euphoria", "Focus", "Insomnia"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Onset 20–40 min | Total 4–8 h",
      tripReport:"Ethylphenidate 30 mg: intense cocaine-like euphoria but longer.",
      description:"DAT inhibitor. Cocaine-like profile. Insufflation = serious vascular risk."
    },
    "Piracétam": {
      effets:["Memory enhancement", "Verbal fluency", "Neuroprotection"],
      dosage:{faible:"1600–2400 mg",modere:"2400–4800 mg",fort:"6400–9600 mg"},
      duree:"Onset 1–2 h | Total 5–8 h",
      tripReport:"Piracetam 4800 mg: mental improvement after 1 week. Take with choline.",
      description:"Pioneer racetam. Take with choline."
    },
    "Aniracétam": {
      effets:["Memory enhancement", "Reduced anxiety", "Mild stimulation"],
      dosage:{faible:"400–750 mg",modere:"750–1500 mg",fort:"2000–3000 mg"},
      duree:"Onset 30–60 min | Total 3–5 h",
      tripReport:"Aniracetam 750 mg: reduced social anxiety, mental clarity.",
      description:"AMPA and cholinergic modulator. Fat-soluble."
    },
    "Oxiracétam": {
      effets:["Mild stimulation", "Memory enhancement", "Mental clarity"],
      dosage:{faible:"400–800 mg",modere:"800–1600 mg",fort:"2000–3000 mg"},
      duree:"Onset 30–60 min | Total 6–8 h",
      tripReport:"Oxiracetam 1200 mg: mild stimulation, improved verbal fluency.",
      description:"Mildly stimulating racetam."
    },
    "Phénylpiracétam": {
      effets:["Mild stimulation", "Focus", "Athletic enhancement"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Onset 30–60 min | Total 5–8 h",
      tripReport:"Phenylpiracetam 150 mg: better focus and physical endurance.",
      description:"Banned in competition (WADA). Fast tolerance."
    },
    "Noopept": {
      effets:["Memory enhancement", "Neuroprotection", "Mild anxiety relief"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"30–40 mg"},
      duree:"Onset 20–30 min | Total 3–5 h",
      tripReport:"Noopept 10 mg: mild improvement in memorisation.",
      description:"Piracetam analogue 1000× more potent. Stimulates NGF and BDNF."
    },
    "5-HTP": {
      effets:["Mood improvement", "Reduced anxiety", "Sleep aid"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300–500 mg"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"5-HTP 200 mg: mood improvement. Useful post-MDMA (D+3).",
      description:"Never combine with MAOIs or SSRIs. Serotonin syndrome."
    },
    "Mélatonine": {
      effets:["Sleep induction", "Circadian rhythm regulation"],
      dosage:{faible:"0.5–1 mg",modere:"2–5 mg",fort:"10–20 mg"},
      duree:"Onset 20–40 min | Total 4–8 h",
      tripReport:"Melatonin 1 mg: eased onset of sleep. More is not better.",
      description:"Physiological hormone. Low risk."
    },
    "Diphenhydramine": {
      effets:["Sedation", "At high dose: delirium, hallucinations"],
      dosage:{faible:"25–50 mg",modere:"100–200 mg (sedative)",fort:"300 mg+ (dangerous delirium)"},
      duree:"Onset 30–60 min | Total 4–8 h",
      tripReport:"Diphenhydramine (Benadryl): sedative at a normal dose; at high dose, a very unpleasant and dangerous anticholinergic delirium (tachycardia, hyperthermia, seizures). Not a sought-after 'trip'.",
      description:"H1 antagonist + central anticholinergic. Overdose: delirium, urinary retention, arrhythmias, seizures. Potentiates depressants."
    },
    "Prométhazine": {
      effets:["Sedation", "Drowsiness", "Opioid potentiation"],
      dosage:{faible:"12.5–25 mg",modere:"25–50 mg",fort:"75 mg+"},
      duree:"Onset 20–60 min | Total 4–8 h",
      tripReport:"Promethazine: a sedating antihistamine, a component of 'lean' (codeine-promethazine syrup). Reinforces the sedation and respiratory depression of opioids.",
      description:"H1 antagonist + anticholinergic. Dangerous combined with opioids (lean). Risk of long QT and respiratory depression."
    },
    "Hydroxyzine": {
      effets:["Sedation", "Anxiety relief", "Drowsiness"],
      dosage:{faible:"25 mg",modere:"50–100 mg",fort:"150 mg+"},
      duree:"Onset 30–60 min | Total 4–8 h",
      tripReport:"Hydroxyzine (Atarax): a sedating antihistamine used for anxiety and itching. Little euphoria. Risk of QT prolongation at high dose.",
      description:"H1 antagonist + anxiolytic effect. Potentiates other depressants. Overdose: sedation, tachycardia, arrhythmias."
    },
    "Paracétamol": {
      effets:["Analgesia", "Antipyretic"],
      dosage:{faible:"500 mg",modere:"1000 mg",fort:"4000 mg/day (hepatotoxic)"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"Paracetamol 1000 mg: effective but hepatotoxic in overdose or with alcohol.",
      description:"Hepatic metabolism. Alcohol → severe hepatotoxicity. Overdose = fatal liver failure."
    },
    "Ibuprofène": {
      effets:["Analgesia", "Anti-inflammatory", "Antipyretic"],
      dosage:{faible:"200–400 mg",modere:"400–600 mg",fort:"800–1200 mg"},
      duree:"Onset 30–60 min | Total 6–8 h",
      tripReport:"Ibuprofen 400 mg: an effective painkiller. Gastric ulcer with chronic use.",
      description:"NSAID: COX inhibitor. Ulcers, nephrotoxicity. Not advised with anticoagulants."
    },
    "25I-NBOMe": {
      effets:["Powerful hallucinations", "Agitation", "Hyperthermia"],
      dosage:{faible:"200–400 µg",modere:"500–800 µg",fort:"1 mg+"},
      duree:"Onset 20–60 min | Total 5–10 h",
      tripReport:"25I-NBOMe 600 µg: hospitalised for tachycardia. This substance kills.",
      description:"Extremely potent NBOMe. Many deaths: seizures, arrhythmias."
    },
    "25C-NBOMe": {
      effets:["Intense hallucinations", "Vasoconstriction", "Agitation"],
      dosage:{faible:"200–400 µg",modere:"400–700 µg",fort:"1 mg+"},
      duree:"Onset 20–60 min | Total 6–8 h",
      tripReport:"25C-NBOMe 500 µg: seizures reported at high dose.",
      description:"Synthetic NBOMe. Severe cardiovascular effects."
    },
    "25B-NBOMe": {
      effets:["Hallucinations", "Tachycardia", "Vasoconstriction"],
      dosage:{faible:"200–400 µg",modere:"400–700 µg",fort:"1–1.5 mg"},
      duree:"Onset 20–60 min | Total 5–8 h",
      tripReport:"25B-NBOMe 500 µg: muscle cramps and a racing heart.",
      description:"NBOMe: documented deaths. Never inject. Tachycardia → fatal arrhythmia."
    },
    "DOB": {
      effets:["Hallucinations", "Stimulation", "Very long effects", "Vasoconstriction"],
      dosage:{faible:"1–2 mg",modere:"2–3 mg",fort:"3–5 mg"},
      duree:"Onset 1.5–3 h | Total 12–24 h",
      tripReport:"DOB: an extremely potent psychedelic (active at the milligram) and very long. Marked vasoconstriction (risk to the extremities). Often sold on blotter in place of LSD → overdose if taken as LSD.",
      description:"Partial 5-HT2A agonist, long half-life. Severe vasoconstriction possible (ischaemia). Dose by mg, never as a presumed-LSD blotter."
    },
    "DOC": {
      effets:["Hallucinations", "Strong stimulation", "Very long effects"],
      dosage:{faible:"1–3 mg",modere:"3–5 mg",fort:"5–8 mg"},
      duree:"Onset 1.5–3 h | Total 12–20 h",
      tripReport:"DOC: a chlorinated DOB analogue, a very long stimulating psychedelic. Often on blotter. Marked vasoconstriction and cardiac stimulation.",
      description:"5-HT2A agonist, long half-life. Cardiovascular and vasoconstrictor risks. Precise mg dosing."
    },
    "DOI": {
      effets:["Hallucinations", "Stimulation", "Very long effects"],
      dosage:{faible:"1–3 mg",modere:"3–5 mg",fort:"5–7 mg"},
      duree:"Onset 1.5–3 h | Total 12–30 h",
      tripReport:"DOI: an iodinated DOx, very long and potent. Used mostly in research (5-HT2A ligand), sometimes sold on blotter.",
      description:"Potent 5-HT2A agonist. Extremely long effects, vasoconstriction. Dose by mg."
    },
    "AMT": {
      effets:["Hallucinations", "Stimulation", "Empathy", "Very long effects", "Nausea"],
      dosage:{faible:"15–25 mg",modere:"25–40 mg",fort:"40–60 mg"},
      duree:"Onset 2–4 h | Total 12–24 h",
      tripReport:"AMT (alpha-methyltryptamine): an extremely long psychedelic-stimulant. Very slow come-up (redosing risk), nausea. It is also a weak MAOI → dangerous food/drug interactions.",
      description:"Monoamine releaser + 5-HT2A agonist + MAOI activity. Risky interactions (tyramine, SSRIs, other serotonergics). Exhausting duration."
    },
    "4-HO-MET": {
      effets:["Colourful hallucinations", "Euphoria", "Laughter"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"25–40 mg"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"4-HO-MET (metocin): a psychedelic close to psilocin, often described as joyful and colourful, shorter. Easy to handle, but still a potent psychedelic.",
      description:"5-HT2A agonist. Psilocin analogue. Classic psychedelic precautions (psychiatric history, lithium)."
    },
    "4-HO-MiPT": {
      effets:["Hallucinations", "Bodily euphoria", "Empathy"],
      dosage:{faible:"10–20 mg",modere:"20–30 mg",fort:"30–45 mg"},
      duree:"Onset 20–45 min | Total 4–6 h",
      tripReport:"4-HO-MiPT (miprocin): a euphoric, very tactile/bodily tryptamine, marked visuals. Liked for its warmth. Still a serious psychedelic.",
      description:"5-HT2A agonist. Psilocin analogue. Classic precautions."
    },
    "DPT": {
      effets:["Intense hallucinations", "Spiritual depth", "Confusion"],
      dosage:{faible:"20–50 mg",modere:"75–125 mg",fort:"150–250 mg"},
      duree:"Onset 5–20 min (inhaled) | Total 3–5 h",
      tripReport:"DPT 80 mg smoked: similar to DMT but more terrifying.",
      description:"Potent 5-HT2A agonist. MAOI potentiates → unpredictable duration."
    },
    "DiPT": {
      effets:["Auditory distortion", "Mild hallucinations", "Introspection"],
      dosage:{faible:"10–20 mg",modere:"25–40 mg",fort:"50–80 mg"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"DiPT 30 mg: a unique distortion of pitch.",
      description:"5-HT2A agonist. Auditory effects only."
    },
    "MET": {
      effets:["Hallucinations", "Euphoria", "Mild stimulation"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Onset 45–75 min | Total 4–7 h",
      tripReport:"MET 30 mg: a short, colourful trip.",
      description:"5-HT2A agonist."
    },
    "MiPT": {
      effets:["Mild hallucinations", "Empathy", "Mild stimulation"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–40 mg"},
      duree:"Onset 30–60 min | Total 5–7 h",
      tripReport:"MiPT 15 mg: close to psilocybin but more empathic.",
      description:"5-HT2A/1A agonist."
    },
    "ETH-LAD": {
      effets:["Hallucinations", "Euphoria", "Mild stimulation"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–300 µg"},
      duree:"Onset 45–90 min | Total 8–12 h",
      tripReport:"ETH-LAD 120 µg: more sensual than LSD, colourful visuals.",
      description:"Ethyl analogue of LSD. Lithium forbidden."
    },
    "PRO-LAD": {
      effets:["Hallucinations", "Euphoria", "Mild stimulation"],
      dosage:{faible:"50–100 µg",modere:"150–200 µg",fort:"250–400 µg"},
      duree:"Onset 45–90 min | Total 8–12 h",
      tripReport:"PRO-LAD 175 µg: similar to LSD, slightly stimulating.",
      description:"5-HT2A agonist. Same precautions as LSD."
    },
    "Mescaline (sulfate/HCl)": {
      effets:["Colourful hallucinations", "Empathy", "Introspection", "Nausea"],
      dosage:{faible:"100–200 mg",modere:"200–400 mg",fort:"400–700 mg"},
      duree:"Onset 1–2 h | Total 8–12 h",
      tripReport:"Pure mescaline (extracted or synthetic powder): a warm, visual classic psychedelic, with a nauseous come-up. 'Softer' and more bodily than LSD. MAOI/SSRI interactions.",
      description:"5-HT2A agonist. Physiologically well tolerated but cardiac precautions. High doses by weight (a low-potency substance per mg)."
    },
    "Escaline": {
      effets:["Hallucinations", "Empathy", "Euphoria"],
      dosage:{faible:"15–25 mg",modere:"30–50 mg",fort:"60–100 mg"},
      duree:"Onset 60–120 min | Total 8–14 h",
      tripReport:"Escaline 40 mg: close to mescaline but shorter.",
      description:"Ethoxy-mescaline. MAOI interactions."
    },
    "Proscaline": {
      effets:["Hallucinations", "Empathy", "Euphoria"],
      dosage:{faible:"20–30 mg",modere:"40–60 mg",fort:"70–100 mg"},
      duree:"Onset 60–90 min | Total 8–12 h",
      tripReport:"Proscaline 50 mg: similar to mescaline, slightly less intense.",
      description:"Propoxy-mescaline. 5-HT2A agonist."
    },
    "Méthallylescaline": {
      effets:["Hallucinations", "Empathy", "Very long duration"],
      dosage:{faible:"40–60 mg",modere:"60–100 mg",fort:"120–160 mg"},
      duree:"Onset 60–120 min | Total 12–18 h",
      tripReport:"Methallylescaline 80 mg: a surprising 16 h trip.",
      description:"Record duration among the phenethylamines."
    },
    "Allylescaline": {
      effets:["Hallucinations", "Empathy", "Mild euphoria"],
      dosage:{faible:"15–25 mg",modere:"30–45 mg",fort:"50–80 mg"},
      duree:"Onset 60–120 min | Total 8–14 h",
      tripReport:"Allylescaline 35 mg: similar to mescaline but shorter.",
      description:"5-HT2A agonist. Limited safety data."
    },
    "PMA": {
      effets:["Hyperthermia", "Tachycardia", "Weak euphoria"],
      dosage:{faible:"unknown",modere:"unknown",fort:"50–100 mg (lethal)"},
      duree:"Onset 2–3 h | Total 8–12 h",
      tripReport:"PMA sold as MDMA. Delayed onset → redosing → death. Many festival deaths.",
      description:"Para-methoxyamphetamine. 5-HT releaser without DA → lethal hyperthermia. Deceptive onset."
    },
    "Clonidine": {
      effets:["Sedation", "Anxiety relief", "Craving reduction", "Hypotension"],
      dosage:{faible:"0.1 mg",modere:"0.2–0.3 mg",fort:"0.4–0.6 mg"},
      duree:"Onset 30–60 min | Total 6–8 h",
      tripReport:"Clonidine 0.2 mg: helps with opioid withdrawal. Alcohol = severe hypotension.",
      description:"Alpha-2 agonist. Used in opioid/alcohol withdrawal. Alcohol = fainting."
    },
    "2-FEA": {
      effets:["Empathy", "Mild euphoria", "Stimulation"],
      dosage:{faible:"50–80 mg",modere:"80–120 mg",fort:"150–200 mg"},
      duree:"Onset 30–60 min | Total 5–8 h",
      tripReport:"2-FEA 100 mg: a gentle entactogen, presumed less neurotoxic.",
      description:"Synthetic entactogen, moderate serotonin releaser. Serotonergic risk."
    },
    "2-FMA": {
      effets:["Focus", "Stimulation", "Wakefulness"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–40 mg"},
      duree:"Onset 30–60 min | Total 8–12 h",
      tripReport:"2-FMA 15 mg: an effective study stimulant. Causes insomnia if taken late.",
      description:"Long stimulant, a productivity nootropic. Cardiovascular risk."
    },
    "25B-NBOH": {
      effets:["Visual hallucinations", "Euphoria", "Tachycardia"],
      dosage:{faible:"250–500 µg",modere:"500–750 µg",fort:"1–1.5 mg"},
      duree:"Onset 30–60 min | Total 5–8 h",
      tripReport:"25B-NBOH 700 µg: intense visuals. Marked vasoconstriction.",
      description:"Very potent 5-HT2A agonist. Documented seizures."
    },
    "2M2B": {
      effets:["Sedation", "Disinhibition", "Alcohol-like euphoria", "Amnesia"],
      dosage:{faible:"0.5–1 ml",modere:"1–2 ml",fort:"2–3 ml"},
      duree:"Onset 15–30 min | Total 2–4 h",
      tripReport:"2M2B 1.5 ml: very fast blackout, a ridiculous safety margin.",
      description:"Tertiary alcohol. Coma at low dose. Fatal synergy with benzos/opioids."
    },
    "3-FEA": {
      effets:["Empathy", "Euphoria", "Stimulation"],
      dosage:{faible:"60–100 mg",modere:"100–150 mg",fort:"180–250 mg"},
      duree:"Onset 30–60 min | Total 5–8 h",
      tripReport:"3-FEA 120 mg: more empathogenic than stimulating.",
      description:"Entactogen, strong serotonin releaser. Serotonergic risk."
    },
    "3-FMA": {
      effets:["Stimulation", "Focus", "Wakefulness"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–40 mg"},
      duree:"Onset 30–60 min | Total 8–14 h",
      tripReport:"3-FMA 15 mg: a clean stimulant, very effective for productivity.",
      description:"Dominant dopaminergic/noradrenergic profile."
    },
    "3-FPM": {
      effets:["Stimulation", "Focus", "Mild euphoria"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Onset 20–45 min | Total 6–10 h",
      tripReport:"3-FPM 60 mg: similar to Ritalin but more euphoric.",
      description:"Monoamine reuptake inhibitor. Unknown neurotoxicity."
    },
    "3-MEC": {
      effets:["Stimulation", "Euphoria", "Sociability"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–350 mg"},
      duree:"Onset 20–40 min | Total 3–5 h",
      tripReport:"3-MEC 150 mg: an intense rush, compulsive redosing.",
      description:"Cathinone. Cardiotoxicity, psychosis."
    },
    "6-APB": {
      effets:["Euphoria", "Empathy", "Stimulation"],
      dosage:{faible:"60–80 mg",modere:"80–120 mg",fort:"150–200 mg"},
      duree:"Onset 45–90 min | Total 6–10 h",
      tripReport:"6-APB 100 mg: close to MDMA but more psychedelic.",
      description:"Benzofuran analogue of MDMA. Serotonergic risk."
    },
    "Butylone": {
      effets:["Euphoria", "Empathy", "Stimulation"],
      dosage:{faible:"50–100 mg",modere:"100–175 mg",fort:"200–300 mg"},
      duree:"Onset 20–45 min | Total 4–6 h",
      tripReport:"Butylone 120 mg: a short entactogen, fast come-up.",
      description:"Monoamine releaser. Frequent redosing → toxicity."
    },
    "Desoxypipradrol": {
      effets:["Intense stimulation", "Euphoria", "Prolonged insomnia"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"10–15 mg"},
      duree:"Onset 30–60 min | Total 16–24 h",
      tripReport:"Desoxypipradrol 7 mg: 20 h with no sleep. Psychosis after 3 days.",
      description:"2-DPMP. Extremely long duration, stimulant psychosis."
    },
    "EPT": {
      effets:["Hallucinations", "Empathy", "Mild euphoria"],
      dosage:{faible:"10–20 mg",modere:"25–40 mg",fort:"50–75 mg"},
      duree:"Onset 30–60 min | Total 5–7 h",
      tripReport:"EPT 30 mg: a gentle, empathic trip.",
      description:"5-HT2A agonist. Little safety data."
    },
    "ETH-CAT": {
      effets:["Stimulation", "Mild euphoria", "Insomnia"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–350 mg"},
      duree:"Onset 20–40 min | Total 4–6 h",
      tripReport:"ETH-CAT 150 mg: frequent redosing, rising blood pressure.",
      description:"Monoamine releaser."
    },
    "Ethylone": {
      effets:["Euphoria", "Empathy", "Stimulation"],
      dosage:{faible:"100–150 mg",modere:"150–225 mg",fort:"250–350 mg"},
      duree:"Onset 30–60 min | Total 3–5 h",
      tripReport:"Ethylone 180 mg: MDMA light, notable crash.",
      description:"Moderate monoamine releaser."
    },
    "Hexédrone": {
      effets:["Stimulation", "Euphoria", "Vasoconstriction"],
      dosage:{faible:"30–60 mg",modere:"60–100 mg",fort:"120–200 mg"},
      duree:"Onset 15–30 min | Total 2–4 h",
      tripReport:"Hexedrone 80 mg: a short rush, intense craving.",
      description:"DAT/NET inhibitor. Compulsive use."
    },
    "Isopropylphénidate": {
      effets:["Stimulation", "Focus", "Mild euphoria"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Onset 20–40 min | Total 4–8 h",
      tripReport:"Isopropylphenidate 25 mg: less euphoric than methylphenidate.",
      description:"DAT/NET inhibitor. A slightly shorter Ritalin profile."
    },
    "LSM-775": {
      effets:["Mild hallucinations", "Euphoria", "Introspection"],
      dosage:{faible:"75–150 µg",modere:"200–350 µg",fort:"400–600 µg"},
      duree:"Onset 60–90 min | Total 6–8 h",
      tripReport:"LSM-775 250 µg: softer and shorter than LSD.",
      description:"Lysergol methyl ester. 5-HT2A agonist."
    },
    "LSZ": {
      effets:["Hallucinations", "Mild stimulation", "Euphoria"],
      dosage:{faible:"50–100 µg",modere:"100–200 µg",fort:"250–400 µg"},
      duree:"Onset 60–90 min | Total 8–10 h",
      tripReport:"LSZ 150 µg: LSD-like with mild bodily sedation.",
      description:"Potent LSD analogue. Similar profile."
    },
    "Lisdexamfétamine": {
      effets:["Stimulation", "Focus", "Appetite reduction"],
      dosage:{faible:"20–30 mg",modere:"50–70 mg",fort:"90–120 mg"},
      duree:"Onset 60–90 min | Total 10–14 h",
      tripReport:"Lisdexamfetamine 50 mg: a long-acting stimulant, effective for ADHD.",
      description:"Vyvanse: d-amphetamine prodrug. MAOIs contraindicated."
    },
    "MCPP": {
      effets:["Anxiety", "Mild stimulation", "Nausea"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Onset 30–60 min | Total 5–7 h",
      tripReport:"MCPP 60 mg: anxiety and nausea. Not very recreational.",
      description:"A contaminant found in cut ecstasy."
    },
    "MDA": {
      effets:["Euphoria", "Empathy", "Mild hallucinations"],
      dosage:{faible:"60–80 mg",modere:"80–120 mg",fort:"150–200 mg"},
      duree:"Onset 45–90 min | Total 6–10 h",
      tripReport:"MDA 100 mg: more hallucinatory than MDMA.",
      description:"Precursor of MDMA. More neurotoxic. Avoid MAOIs."
    },
    "MDAI": {
      effets:["Empathy", "Mild euphoria", "Socialisation"],
      dosage:{faible:"100–150 mg",modere:"150–250 mg",fort:"300–400 mg"},
      duree:"Onset 30–60 min | Total 5–8 h",
      tripReport:"MDAI 200 mg: gentle empathy without stimulation.",
      description:"Selective serotonin releaser. Not very addictive on its own."
    },
    "MDEA": {
      effets:["Euphoria", "Empathy", "Moderate stimulation"],
      dosage:{faible:"80–100 mg",modere:"120–160 mg",fort:"200–250 mg"},
      duree:"Onset 45–90 min | Total 4–6 h",
      tripReport:"MDEA 130 mg: similar to MDMA but less intense.",
      description:"Monoamine releaser. Slightly reduced duration."
    },
    "MDPHP": {
      effets:["Intense euphoria", "Stimulation", "Compulsion"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Onset 10–20 min | Total 2–4 h",
      tripReport:"MDPHP 50 mg: a strong, very short rush. Compulsive redosing.",
      description:"Potent DAT inhibitor. Extremely addictive."
    },
    "Mexedrone": {
      effets:["Mild euphoria", "Stimulation", "Weak empathy"],
      dosage:{faible:"100–150 mg",modere:"200–300 mg",fort:"400–500 mg"},
      duree:"Onset 30–60 min | Total 3–5 h",
      tripReport:"Mexedrone 200 mg: often combined. Interaction risk.",
      description:"Limited safety data."
    },
    "Pentobarbital": {
      effets:["Deep sedation", "Coma", "Respiratory depression"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300 mg+"},
      duree:"Onset 15–30 min | Total 4–8 h",
      tripReport:"Pentobarbital: used in euthanasia. No reasonable recreational use.",
      description:"Ultra-narrow therapeutic index. Alcohol mix = death."
    },
    "Phénobarbital": {
      effets:["Sedation", "Anticonvulsant", "Anxiety relief"],
      dosage:{faible:"15–30 mg",modere:"30–60 mg",fort:"100–200 mg"},
      duree:"Onset 20–60 min | Total 8–12 h",
      tripReport:"Phenobarbital 60 mg: deep sedation.",
      description:"Respiratory depression. Many CYP450 interactions."
    },
    "Pramiracétam": {
      effets:["Memory enhancement", "Focus", "Mental clarity"],
      dosage:{faible:"200–400 mg",modere:"400–800 mg",fort:"1200 mg"},
      duree:"Onset 30–60 min | Total 6–8 h",
      tripReport:"Pramiracetam 600 mg: better information retention.",
      description:"High-potency fat-soluble racetam."
    },
    "Prolintane": {
      effets:["Stimulation", "Focus", "Reduced fatigue"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"30–50 mg"},
      duree:"Onset 30–60 min | Total 6–10 h",
      tripReport:"Prolintane 15 mg: a clean stimulant without major euphoria.",
      description:"DA/NA reuptake inhibitor."
    },
    "Secobarbital": {
      effets:["Sedation", "Euphoria", "Respiratory depression"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300 mg+"},
      duree:"Onset 10–20 min | Total 3–6 h",
      tripReport:"Secobarbital 150 mg: a near-zero safety margin.",
      description:"Respiratory depression. Potentially fatal."
    },
    "TMA-2": {
      effets:["Hallucinations", "Euphoria", "Long duration"],
      dosage:{faible:"10–20 mg",modere:"25–40 mg",fort:"50–80 mg"},
      duree:"Onset 60–120 min | Total 12–16 h",
      tripReport:"TMA-2 30 mg: similar to mescaline, a surprising duration.",
      description:"Psychedelic amphetamine. MAOI interactions."
    },
    "TMA-6": {
      effets:["Hallucinations", "Empathy", "Long duration"],
      dosage:{faible:"5–15 mg",modere:"20–35 mg",fort:"40–60 mg"},
      duree:"Onset 60–120 min | Total 12–18 h",
      tripReport:"TMA-6 25 mg: more potent than TMA-2, pronounced nausea.",
      description:"Isomer of TMA-2. MAOI interactions."
    },
    "Theacrine": {
      effets:["Wakefulness", "Focus", "Mild euphoria"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300–400 mg"},
      duree:"Onset 45–90 min | Total 5–8 h",
      tripReport:"Theacrine 150 mg: caffeine-like but with less crash.",
      description:"Slower tolerance build-up."
    },
    "3C-E": {
      effets:["Hallucinations", "Empathy", "Stimulation"],
      dosage:{faible:"10–15 mg",modere:"20–30 mg",fort:"35–60 mg"},
      duree:"Onset 60–120 min | Total 8–12 h",
      tripReport:"3C-E 25 mg: similar to mescaline but more stimulating.",
      description:"Documented MAOI interactions."
    },
    "5-APB": {
      effets:["Empathy", "Euphoria", "Stimulation"],
      dosage:{faible:"50–80 mg",modere:"80–120 mg",fort:"120–160 mg"},
      duree:"Onset 45–90 min | Total 5–8 h",
      tripReport:"5-APB: a benzofuran close to MDA/6-APB, mixing empathy + stimulation, longer-lasting than MDMA. Cardiac strain (5-HT2B agonist → theoretical valvular risk). No redosing.",
      description:"Serotonin/dopamine releaser, 5-HT2B agonist (cardiac risk). Hyperthermia possible. Avoid MAOIs."
    },
    "6-APDB": {
      effets:["Empathy", "Emotional warmth", "Gentle stimulation"],
      dosage:{faible:"40–70 mg",modere:"70–110 mg",fort:"110–150 mg"},
      duree:"Onset 45–90 min | Total 4–6 h",
      tripReport:"6-APDB: an entactogen close to MDA, gentler and more empathic, less stimulating. Same precautions as the benzofurans (5-HT2B).",
      description:"Serotonin releaser. 5-HT2B agonist (cardiac caution). Hyperthermia, no MAOIs."
    },
    "AB-CHMINACA": {
      effets:["Extreme sedation", "Paranoia", "Psychosis"],
      dosage:{faible:"0.5–1 mg",modere:"1–2 mg",fort:"3 mg+"},
      duree:"Onset 5–15 min | Total 2–5 h",
      tripReport:"AB-CHMINACA 1 mg: paralysed for 2 h, heart at 180. A terrifying substance.",
      description:"3rd-generation noid, ultra-potent. Many deaths."
    },
    "JWH-018": {
      effets:["Intense euphoria", "Sedation", "Tachycardia", "Paranoia"],
      dosage:{faible:"0.5–1 mg",modere:"1–3 mg",fort:"4–6 mg"},
      duree:"Onset 5–15 min | Total 2–4 h",
      tripReport:"JWH-018 2 mg: a cannabis high but stronger and shorter. Tachycardia at 3 mg.",
      description:"Naphthylindole cannabinoid. Full CB1 agonist. Documented deaths."
    },
    "JWH-073": {
      effets:["Sedation", "Euphoria", "Tachycardia"],
      dosage:{faible:"0.5–1.5 mg",modere:"1.5–3 mg",fort:"4–6 mg"},
      duree:"Onset 5–15 min | Total 2–4 h",
      tripReport:"JWH-073 2 mg: slightly less potent than JWH-018.",
      description:"Butyl-naphthylindole, full CB1 agonist."
    },
    "AM-2201": {
      effets:["Sedation", "Euphoria", "Tachycardia", "Possible psychosis"],
      dosage:{faible:"0.5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Onset 5–15 min | Total 2–4 h",
      tripReport:"AM-2201 1.5 mg: potent and sedating. Seizures reported at 3 mg.",
      description:"Fluoropentyl cannabinoid. Full CB1 agonist."
    },
    "AB-FUBINACA": {
      effets:["Sedation", "Paranoia", "Hallucinations"],
      dosage:{faible:"0.3–0.7 mg",modere:"0.7–1.5 mg",fort:"2–3 mg"},
      duree:"Onset 5–15 min | Total 2–4 h",
      tripReport:"AB-FUBINACA 1 mg: involved in a series of mass comas (New York 2016).",
      description:"Fluorobenzyl indazole carboxamide. Full CB1 agonist."
    },
    "5F-ADB": {
      effets:["Extreme sedation", "Psychosis", "Severe tachycardia"],
      dosage:{faible:"0.1–0.5 mg",modere:"0.5–1 mg",fort:"1.5 mg+"},
      duree:"Onset 5–10 min | Total 1–3 h",
      tripReport:"5F-ADB: a 3rd-generation noid. Documented deaths at a tiny dose. Extremely dangerous.",
      description:"5-fluoro indazole carboxamide. Full-power full CB1 agonist. A wave of deaths in Europe 2016-2019."
    },
    "ADB-BUTINACA": {
      effets:["Total sedation", "Possible cardiac arrest", "Psychosis"],
      dosage:{faible:"0.1–0.3 mg",modere:"0.3–0.7 mg",fort:"1 mg+ (dangerous)"},
      duree:"Onset 2–10 min | Total 1–3 h",
      tripReport:"ADB-BUTINACA: a noid found in recent fatal overdoses. One of the most dangerous currently.",
      description:"Ultra-potent CB1 agonist. Responsible for many ER visits and hospitalisations 2020-2024."
    },
    "MDMB-4en-PINACA": {
      effets:["Total sedation", "Seizures", "Psychosis", "Possible cardiac arrest"],
      dosage:{faible:"0.1–0.25 mg",modere:"0.25–0.6 mg",fort:"1 mg+ (potentially lethal)"},
      duree:"Onset 2–10 min | Total 1–4 h",
      tripReport:"MDMB-4en-PINACA: one of the noids most often found in deaths and impaired driving (2019-2024). The margin between active and lethal dose is tiny.",
      description:"Ultra-potent full CB1 agonist (~2.5 nM). Often sprayed unevenly on plant matter: unpredictable overdose. Schedule I (US), banned in the EU."
    },
    "ADB-4en-PINACA": {
      effets:["Extreme sedation", "Tachycardia", "Paranoia", "Loss of consciousness"],
      dosage:{faible:"0.1–0.3 mg",modere:"0.3–0.7 mg",fort:"1 mg+ (dangerous)"},
      duree:"Onset 2–10 min | Total 1–3 h",
      tripReport:"ADB-4en-PINACA: a 3rd-generation noid that appeared in 2021, very potent, present in prison seizures (soaked papers).",
      description:"High-affinity full CB1 agonist. Blind dosing is impossible for the user. Temporary Schedule I (US)."
    },
    "4F-MDMB-BICA": {
      effets:["Deep sedation", "Vomiting", "Seizures", "Respiratory distress"],
      dosage:{faible:"0.1–0.3 mg",modere:"0.3–0.8 mg",fort:"1 mg+ (dangerous)"},
      duree:"Onset 2–10 min | Total 1–3 h",
      tripReport:"4F-MDMB-BICA: involved in mass poisonings. Like all noids, uneven distribution on the herb = roulette.",
      description:"Full CB1 agonist. Active metabolites. No reliable safety margin. Classified as a narcotic."
    },
    "CUMYL-PEGACLONE": {
      effets:["Sedation", "Bradycardia", "Confusion", "Loss of consciousness"],
      dosage:{faible:"0.2–0.5 mg",modere:"0.5–1.5 mg",fort:"2 mg+"},
      duree:"Onset 5–15 min | Total 2–5 h",
      tripReport:"CUMYL-PEGACLONE: a gamma-carboline-type noid, found in several deaths in Europe (notably Germany).",
      description:"CB1 agonist with an original structure (not a classic indazole/indole). Detected in fatal cases. Classified as a narcotic."
    },
    "Propofol": {
      effets:["Rapid sedation", "Loss of consciousness", "Amnesia", "Brief euphoria"],
      dosage:{faible:"not recreational",modere:"anaesthetic dose, hospital only",fort:"apnoea / respiratory arrest"},
      duree:"Onset 15–45 s (IV) | Total 5–10 min",
      tripReport:"Propofol: an ultra-fast IV anaesthetic. No safe recreational use: the margin between sedation and respiratory arrest is tiny, and there is no antidote. Several deaths of healthcare workers who diverted the drug.",
      description:"Potent GABA-A agonist. No analgesic effect. Dose-dependent respiratory depression with no safety plateau. Lethal outside anaesthetic monitoring with resuscitation equipment."
    },
    "Alpha-PHiP": {
      effets:["Stimulation", "Euphoria", "Compulsive redosing"],
      dosage:{faible:"5–10 mg",modere:"15–25 mg",fort:"30 mg+"},
      duree:"Onset 10–30 min | Total 2–4 h",
      tripReport:"Alpha-PHiP: a recent alpha-PVP analogue, profile close to cocaine when insufflated but longer-lasting. Very limited human data.",
      description:"Monoamine reuptake inhibitor (pyrrolidinophenone). Cardiovascular and psychiatric risks comparable to other pyrrolidine cathinones."
    },
    "Xylazine": {
      effets:["Prolonged sedation", "Bradycardia", "Hypotension", "Analgesia"],
      dosage:{faible:"undosed adulterant",modere:"present in heroin/fentanyl",fort:"deep sedation + wounds"},
      duree:"Onset 5–15 min | Total 2–8 h+",
      tripReport:"Xylazine ('tranq'): a veterinary sedative added to fentanyl/heroin to extend the effect. Naloxone does not reverse its sedation. Causes necrotic wounds in people who inject.",
      description:"Alpha-2 agonist (not an opioid). No antidote. Prolongs sedation and the respiratory risk combined with opioids. Wound care essential."
    },
    "Médétomidine": {
      effets:["Very deep sedation", "Severe bradycardia", "Hypotension"],
      dosage:{faible:"undosed adulterant",modere:"present in fentanyl",fort:"extreme sedation + severe withdrawal"},
      duree:"Onset 5–20 min | Total several hours",
      tripReport:"Medetomidine: a veterinary tranquilliser replacing xylazine as a fentanyl adulterant. More potent, longer sedation, severe autonomic withdrawal (hypertension, tachycardia) resistant to usual treatments.",
      description:"Potent alpha-2 agonist. Not reversed by naloxone. Detected in a majority of street-opioid samples in some US cities in late 2024."
    },
    "Graines de liseron (LSA)": {
      effets:["Mild hallucinations", "Dreaminess", "Nausea", "Vasoconstriction"],
      dosage:{faible:"3–5 seeds (Hawaiian baby woodrose)",modere:"5–8 HBWR seeds / 100–200 ipomoea seeds",fort:"8+ HBWR seeds"},
      duree:"Onset 1–2 h | Total 6–10 h",
      tripReport:"Morning glory/HBWR seeds: a natural source of LSA, close to a mild and bodily LSD, but with marked nausea and vasoconstriction. The effect is often sedating and physically uncomfortable.",
      description:"LSA (ergine), related to LSD but more bodily/sedating. Vasoconstriction (avoid with circulatory problems). Seed coatings are sometimes toxic."
    },
    "Sels de bain (cathinones)": {
      effets:["Intense stimulation", "Euphoria", "Agitation", "Paranoia", "Psychosis"],
      dosage:{faible:"varies by molecule",modere:"real content unknown",fort:"agitated delirium, hyperthermia"},
      duree:"Onset 10–30 min | Total 2–6 h (variable)",
      tripReport:"'Bath salts': a catch-all trade name for synthetic cathinones (MDPV, alpha-PVP/flakka, mephedrone, hexen…) sold labelled 'not for human consumption'. Powerful stimulant effects, compulsive redosing, media-covered episodes of agitated delirium and psychosis ('zombie drug'). You never know which molecule or dose you're taking.",
      description:"The substituted-cathinone family (dopamine-noradrenaline inhibitors/releasers). Unpredictable composition and potency. Risks: hyperthermia, rhabdomyolysis, cardiac failure, psychosis, strong addiction. See the MDPV, Alpha-PVP, Mephedrone, Hexen and NEP entries for detail."
    },
    "Tusi (cocaïne rose)": {
      effets:["Stimulation", "Euphoria", "Unpredictable effects depending on the mix"],
      dosage:{faible:"unknown dose (variable composition)",modere:"real content unknown",fort:"interaction risk"},
      duree:"Onset variable | Total variable",
      tripReport:"Tusi / tucibi / 2C / pink cocaine: BEWARE, this is almost never 2C-B. It is a pink marketing mix (often ketamine + MDMA + caffeine, sometimes cocaine, meth, opioids…), coloured and scented. The composition changes with every batch: you never know what you're taking or the interactions. The name comes from the Spanish pronunciation of '2C-B', but the molecule is usually absent.",
      description:"A composite product, not a single molecule. Risks = the unpredictable sum of the components (ketamine + MDMA = cardiac strain; possible presence of opioids or potent stimulants). Get it tested, start very low."
    },
    "2C-H": {
      effets:["Nearly inactive", "Precursor"],
      dosage:{faible:"little/not active",modere:"barely active",fort:"barely active"},
      duree:"Onset variable | Total short",
      tripReport:"2C-H: a phenethylamine almost inactive in itself, mostly known as a synthesis precursor for other 2Cs. Rarely taken for its effects.",
      description:"Weak 5-HT2A agonist, quickly metabolised by MAO. Mainly a chemical intermediate."
    },
    "2C-T-4": {
      effets:["Hallucinations", "Introspection", "Slow come-up"],
      dosage:{faible:"8–12 mg",modere:"12–20 mg",fort:"20–30 mg"},
      duree:"Onset 1.5–3 h | Total 8–12 h",
      tripReport:"2C-T-4: a sulphur analogue of 2C-B, very slow come-up (risk of premature redosing), long and introspective effects.",
      description:"5-HT2A agonist. Dangerous MAOI interaction. Deceptive slow onset."
    },
    "4-AcO-MiPT": {
      effets:["Hallucinations", "Euphoria", "Empathy"],
      dosage:{faible:"12–20 mg",modere:"20–35 mg",fort:"35–50 mg"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"4-AcO-MiPT: the acetylated ester of 4-HO-MiPT (the equivalent of 4-AcO-DMT vs psilocin). Warm, visual effects.",
      description:"Prodrug converted to 4-HO-MiPT. 5-HT2A agonist. Psychedelic precautions."
    },
    "4-AcO-DiPT": {
      effets:["Hallucinations", "Euphoria", "Distortions"],
      dosage:{faible:"15–25 mg",modere:"25–40 mg",fort:"40–60 mg"},
      duree:"Onset 30–60 min | Total 4–6 h",
      tripReport:"4-AcO-DiPT: the ester of 4-HO-DiPT, a tryptamine psychedelic with marked visuals, medium duration.",
      description:"Prodrug. 5-HT2A agonist. Classic psychedelic precautions."
    },
    "Bufoténine": {
      effets:["Visions", "Intense physical effects", "Pressure/nausea"],
      dosage:{faible:"variable (route-dependent)",modere:"unpredictable dose",fort:"marked cardiovascular effects"},
      duree:"Onset fast | Total short",
      tripReport:"Bufotenin: a tryptamine present in certain toads and seeds (yopo). Heavy physical effects (blood pressure, a sense of oppression) sometimes more than visual. Narrow margin.",
      description:"Serotonergic agonist with marked cardiovascular effects. Present in yopo/Anadenanthera. Caution."
    },
    "Kétamine S (eskétamine)": {
      effets:["Dissociation", "Analgesia", "Euphoria"],
      dosage:{faible:"15–30 mg",modere:"30–60 mg",fort:"60–100 mg"},
      duree:"Onset 5–15 min | Total 45–90 min",
      tripReport:"Esketamine (the S-enantiomer of ketamine): ~2× more potent than racemic ketamine for the same weight → adjust the dose. A medical version (Spravato) for depression.",
      description:"NMDA antagonist. More potent than standard ketamine. Cystitis with repeated use, accidents while dissociated."
    },
    "Bromazolam": {
      effets:["Anxiety relief", "Sedation", "Amnesia"],
      dosage:{faible:"0.25–0.5 mg",modere:"0.5–1 mg",fort:"1 mg+"},
      duree:"Onset 20–40 min | Total 8–12 h",
      tripReport:"Bromazolam: a designer benzo that has become very common on the street (fake Xanax, mixed with opioids). Combined with fentanyl/nitazenes: major respiratory depression that naloxone does not reverse.",
      description:"GABA-A agonist. Strong amnesia, tolerance, dangerous withdrawal (seizures). Lethal with opioids/alcohol."
    },
    "Flualprazolam": {
      effets:["Anxiety relief", "Deep sedation", "Amnesia"],
      dosage:{faible:"0.25–0.5 mg",modere:"0.5–1 mg",fort:"1 mg+"},
      duree:"Onset 20–40 min | Total 10–16 h",
      tripReport:"Flualprazolam: a potent RC benzo, found in fake tablets and in deaths combined with opioids. A long, strong effect.",
      description:"Potent GABA-A agonist. Respiratory depression with opioids/alcohol. Seizure-risk withdrawal."
    },
    "Clonazépam": {
      effets:["Anxiety relief", "Sedation", "Anticonvulsant", "Amnesia"],
      dosage:{faible:"0.25–0.5 mg",modere:"0.5–1 mg",fort:"2 mg+"},
      duree:"Onset 30–60 min | Total 6–12 h",
      tripReport:"Clonazepam (Rivotril/Klonopin): a widely prescribed long benzo. Fast tolerance and dependence, dangerous withdrawal (seizures). Lethal combined with opioids/alcohol.",
      description:"Long-acting GABA-A agonist. See also Klonopin. Withdrawal must be medically supervised."
    },
    "Bromazépam": {
      effets:["Anxiety relief", "Sedation", "Muscle relaxation"],
      dosage:{faible:"3 mg",modere:"6 mg",fort:"12 mg+"},
      duree:"Onset 30–60 min | Total 8–12 h",
      tripReport:"Bromazepam (Lexomil): a common anxiolytic benzo. Dependence, amnesia, risky withdrawal. Dangerous with alcohol and opioids.",
      description:"GABA-A agonist. Tolerance/dependence. Never stop abruptly."
    },
    "Triazolam": {
      effets:["Hypnotic sedation", "Amnesia", "Falling asleep"],
      dosage:{faible:"0.125 mg",modere:"0.25 mg",fort:"0.5 mg+"},
      duree:"Onset 15–30 min | Total 4–6 h",
      tripReport:"Triazolam (Halcion): a short-acting hypnotic benzo, strong amnesia. Marked disinhibition and anterograde amnesia. Fast dependence.",
      description:"Short-acting GABA-A agonist. Amnesia, automatic behaviours. Dangerous with depressants."
    },
    "Témazépam": {
      effets:["Sedation", "Falling asleep", "Anxiety relief"],
      dosage:{faible:"10 mg",modere:"20 mg",fort:"30–40 mg+"},
      duree:"Onset 30–60 min | Total 6–8 h",
      tripReport:"Temazepam: a hypnotic benzo. Diverted, sometimes injected (very dangerous: embolisms). Dependence, risky withdrawal.",
      description:"GABA-A agonist. Injection = serious vascular risk. Dangerous with opioids/alcohol."
    },
    "Nitrazépam": {
      effets:["Sedation", "Falling asleep", "Relaxation"],
      dosage:{faible:"2.5–5 mg",modere:"5–10 mg",fort:"10 mg+"},
      duree:"Onset 30–60 min | Total 8–12 h",
      tripReport:"Nitrazepam (Mogadon): a long hypnotic benzo. Residual drowsiness, dependence, risky withdrawal.",
      description:"Long-acting GABA-A agonist. Accumulation in older people. Dangerous with depressants."
    },
    "Zopiclone": {
      effets:["Falling asleep", "Sedation", "Metallic taste"],
      dosage:{faible:"3.75 mg",modere:"7.5 mg",fort:"15 mg+"},
      duree:"Onset 20–40 min | Total 6–8 h",
      tripReport:"Zopiclone (Imovane): a benzo-like hypnotic. Typical bitter taste. Amnesia, automatic behaviours (driving/eating while asleep), dependence. Dangerous with alcohol/opioids.",
      description:"GABA-A modulator (Z-drug). Tolerance, dependence, withdrawal. Don't mix with depressants."
    },
    "Zaleplon": {
      effets:["Fast onset of sleep", "Brief sedation"],
      dosage:{faible:"5 mg",modere:"10 mg",fort:"20 mg+"},
      duree:"Onset 15–30 min | Total 2–4 h",
      tripReport:"Zaleplon (Sonata): a very short Z-drug hypnotic, used for falling asleep. Amnesia, possible dependence. Dangerous with alcohol.",
      description:"Short-acting GABA-A modulator. Risk of automatic behaviours. Avoid depressants."
    },
    "Méthaqualone": {
      effets:["Sedation", "Euphoria", "Muscle relaxation", "Disinhibition"],
      dosage:{faible:"75–150 mg",modere:"150–300 mg",fort:"300 mg+"},
      duree:"Onset 30–60 min | Total 4–8 h",
      tripReport:"Methaqualone (Quaalude, 'mandrax'): a 1970s sedative-hypnotic, euphoric and disinhibiting. Narrow margin, respiratory depression, dependence. Often smoked (mandrax) in South Africa/India.",
      description:"GABA-A modulator. Overdose: coma, respiratory depression, seizures. Dangerous with alcohol/opioids."
    },
    "Chloral hydrate": {
      effets:["Sedation", "Falling asleep"],
      dosage:{faible:"250 mg",modere:"500–1000 mg",fort:"1500 mg+"},
      duree:"Onset 30–60 min | Total 4–8 h",
      tripReport:"Chloral hydrate: an old sedative ('Mickey Finn'). Narrow margin, gastric irritant, arrhythmias, respiratory depression. Dangerous with alcohol (historic synergy).",
      description:"Prodrug of trichloroethanol (GABA). Cardiotoxic at high dose. Very dangerous with alcohol."
    },
    "Méprobamate": {
      effets:["Anxiety relief", "Sedation", "Muscle relaxation"],
      dosage:{faible:"200–400 mg",modere:"400–800 mg",fort:"1200 mg+"},
      duree:"Onset 30–60 min | Total 6–10 h",
      tripReport:"Meprobamate: an old anxiolytic (a metabolite of carisoprodol). Severe overdose (coma, hypotension, respiratory depression), dependence. Dangerous with alcohol.",
      description:"GABA modulator. Narrow therapeutic margin. Risky withdrawal. Avoid alcohol/depressants."
    }

  },
  es: {
    "Alcool": {
      effets:["Sedación","Desinhibición","Euforia leve","Ansiólisis"],
      dosage:{faible:"1–2 copas",modere:"3–5 copas",fort:"≥6 copas — embriaguez severa"},
      duree:"Inicio 10–30 min | Pico 1–2 h | Total 3–8 h",
      tripReport:"Alcohol, 4 copas: desinhibición agradable. Más allá: pérdida de control, amnesia.",
      description:"Etanol: potencia todo depresor del SNC. Sinergia mortal con opioides/benzos/GHB."
    },
    "Diazépam": {
      effets:["Ansiólisis","Relajación muscular","Sedación","Anticonvulsivo"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"20–40 mg"},
      duree:"Inicio 15–45 min | Pico 1–2 h | Total 6–12 h",
      tripReport:"Diazepam 10 mg: ansiólisis profunda. Dependencia física en 4 semanas.",
      description:"Valium: la benzodiazepina de referencia. Interacciones mortales con alcohol/opioides."
    },
    "Alprazolam": {
      effets:["Ansiólisis","Sedación","Desinhibición","Amnesia"],
      dosage:{faible:"0,25–0,5 mg",modere:"0,5–1 mg",fort:"1,5–2 mg — laguna"},
      duree:"Inicio 15–40 min | Pico 1–2 h | Total 3–6 h",
      tripReport:"Alprazolam 1 mg: ansiedad fuera en 20 min. 2 h de actos sin recuerdo.",
      description:"Xanax: potencia 1 mg = 10 mg de Valium. Dependencia rápida. Alcohol = posible parada cardiaca."
    },
    "MDMA": {
      effets:["Euforia","Empatía","Estimulación","Conexión emocional"],
      dosage:{faible:"75–100 mg",modere:"100–125 mg",fort:"150–200 mg"},
      duree:"Inicio 30–60 min | Pico 1,5–3 h | Total 4–6 h",
      tripReport:"MDMA 110 mg: amor universal, música trascendente. Bajón de 2 días. Máx. 1 vez / 3 meses.",
      description:"3,4-MDMA. Hipertermia mortal, hiponatremia. Neurotóxico. IMAO/tramadol = muerte."
    },
    "Cocaïne": {
      effets:["Euforia","Estimulación intensa","Mayor confianza","Vasoconstricción"],
      dosage:{faible:"20–40 mg (nasal)",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Inicio 5–15 min | Pico 20–40 min | Total 1–2 h",
      tripReport:"Cocaína 50 mg: subidón eufórico breve. Cocaína + alcohol = cocaetileno cardiotóxico.",
      description:"Inhibidor DAT/NET/SERT. Cardiotóxica. Alcohol → cocaetileno tóxico. Dependencia rápida."
    },
    "GHB": {
      effets:["Euforia","Sedación","Desinhibición","Amnesia"],
      dosage:{faible:"0,5–1 g",modere:"1–2 g",fort:"≥2,5 g — sobredosis fácil"},
      duree:"Inicio 15–30 min | Pico 45–90 min | Total 2–4 h",
      tripReport:"GHB 1,5 g: euforia festiva. 0,5 g de más = coma.",
      description:"Agonista GABA-B. Índice terapéutico estrecho. Nunca con alcohol."
    },
    "Kétamine": {
      effets:["Disociación","Analgesia","Euforia","Alucinaciones"],
      dosage:{faible:"25–50 mg (nasal)",modere:"75–150 mg",fort:"200–400 mg — k-hole"},
      duree:"Inicio 5–15 min | Pico 20–40 min | Total 1–2 h",
      tripReport:"Ketamina 100 mg: disociación total. K-hole a 300 mg: experiencia extracorporal.",
      description:"Antagonista NMDA. Cistitis ketamínica con uso repetido. Mezcla con alcohol = riesgo de apnea."
    },
    "Cannabis": {
      effets:["Euforia","Relajación","Alteración sensorial","Aumento del apetito"],
      dosage:{faible:"1–3 mg THC",modere:"5–15 mg THC",fort:"20–50 mg THC"},
      duree:"Inicio 15–45 min (oral) / 5–15 min (fumado) | Total 2–6 h",
      tripReport:"Cannabis ~15 mg THC: euforia y risas, música magnificada. Paranoia posible desde 20 mg.",
      description:"Agonista CB1/CB2. Psicosis cannábica documentada. Síndrome de hiperémesis con uso crónico."
    },
    "LSD": {
      effets:["Alucinaciones","Euforia","Introspección","Conexión universal"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–400 µg"},
      duree:"Inicio 30–90 min | Pico 3–5 h | Total 8–12 h",
      tripReport:"LSD 120 µg: visuales espléndidos, conexión musical total. Litio = convulsiones mortales.",
      description:"Agonista 5-HT2A. Litio → convulsiones. Set & setting esenciales."
    },
    "Héroïne": {
      effets:["Euforia intensa","Analgesia","Sedación","Calor"],
      dosage:{faible:"variable — según tolerancia",modere:"dosis imposible de estandarizar",fort:"depresión respiratoria"},
      duree:"Inicio 1–5 min (IV) | Total 3–5 h",
      tripReport:"Heroína: 'subidón' opioide y luego somnolencia. Pureza callejera desconocida → sobredosis. A menudo cortada con fentanilo.",
      description:"Agonista mu. La depresión respiratoria es la principal causa de muerte. Testa, naloxona, nunca solo·a."
    },
    "Morphine": {
      effets:["Analgesia","Euforia","Sedación","Ansiólisis"],
      dosage:{faible:"10–20 mg (oral)",modere:"30–60 mg",fort:"100 mg+ (sin tolerancia: peligroso)"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"Morfina: el opioide de referencia. Euforia y analgesia, depresión respiratoria según dosis.",
      description:"Agonista mu. Depresión respiratoria agravada por alcohol/benzos. Tolerancia y dependencia."
    },
    "Fentanyl": {
      effets:["Analgesia potente","Euforia intensa","Sedación","Depresión respiratoria"],
      dosage:{faible:"microgramos (no medible en casa)",modere:"dosis imprevisible",fort:"parada respiratoria"},
      duree:"Inicio 1–5 min | Total 1–2 h",
      tripReport:"Fentanilo: ~50× más fuerte que la heroína. Cantidades invisibles matan. Muy presente en el mercado callejero.",
      description:"Agonista mu muy potente. Margen dosis/sobredosis mínimo. Tiras reactivas, naloxona, nunca solo·a."
    },
    "Méthadone": {
      effets:["Analgesia","Estabilización","Sedación leve"],
      dosage:{faible:"solo uso médico",modere:"dosis de sustitución prescrita",fort:"depresión respiratoria"},
      duree:"Inicio 30 min–1 h | Total 24–36 h",
      tripReport:"Metadona: tratamiento de sustitución opioide. Muy larga → riesgo de acumulación y sobredosis si se abusa.",
      description:"Agonista mu de acción prolongada. Se acumula (vida media larga). Prolongación QT. Peligrosa con benzos/alcohol."
    },
    "Tramadol": {
      effets:["Analgesia","Euforia leve","Náuseas"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"Tramadol 100 mg: analgésico con euforia leve. Convulsiones a dosis alta.",
      description:"IRSN + agonista opioide. Síndrome serotoninérgico con MDMA/IMAO. Convulsiones documentadas."
    },
    "Codéine": {
      effets:["Analgesia","Antitusivo","Euforia leve"],
      dosage:{faible:"15–30 mg",modere:"60–120 mg",fort:"200+ mg"},
      duree:"Inicio 30–45 min | Total 4–6 h",
      tripReport:"Codeína 60 mg: analgesia suave y euforia leve. El alcohol potencia mucho.",
      description:"Profármaco de la morfina. Variabilidad CYP2D6. Alcohol → depresión respiratoria."
    },
    "Psilocybine": {
      effets:["Alucinaciones","Euforia","Disolución del ego","Introspección"],
      dosage:{faible:"1–2 g de setas",modere:"2–3,5 g",fort:"5+ g"},
      duree:"Inicio 20–60 min | Pico 2–4 h | Total 4–6 h",
      tripReport:"Psilocibina 2 g: visuales y conexión emocional. 5 g: experiencia mística total.",
      description:"Agonista 5-HT2A. Litio → convulsiones. Set & setting críticos."
    },
    "Amphétamine": {
      effets:["Estimulación","Euforia","Concentración","Supresión del apetito"],
      dosage:{faible:"5–10 mg",modere:"15–30 mg",fort:"40 mg+"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"Anfetamina ('speed') 20 mg: energía y concentración. Bajón, insomnio, redose compulsivo.",
      description:"Liberadora de dopamina/noradrenalina. Sobrecarga cardiaca, dependencia. Bajón en la retirada."
    },
    "Méthamphetamine": {
      effets:["Estimulación intensa","Euforia fuerte","Hipervigilancia","Supresión del apetito"],
      dosage:{faible:"5–10 mg",modere:"10–25 mg",fort:"30 mg+"},
      duree:"Inicio según vía | Total 8–12 h",
      tripReport:"Metanfetamina: más fuerte y mucho más larga que la anfetamina. Dependencia severa, atracones de días, psicosis.",
      description:"Potente liberadora de dopamina, neurotóxica. Hipertermia, psicosis, daño dental. Alto potencial de abuso."
    },
    "Caféine": {
      effets:["Vigilia","Estimulación leve","Concentración"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300–400 mg+"},
      duree:"Inicio 15–45 min | Total 3–6 h",
      tripReport:"Cafeína 100 mg (un café): impulso suave. Más allá de 400 mg: nerviosismo, palpitaciones, ansiedad.",
      description:"Antagonista de la adenosina. Tolerancia y abstinencia (dolores de cabeza). Cuidado con el corazón a dosis alta."
    },
    "Nicotine": {
      effets:["Estimulación leve","Relajación","Concentración"],
      dosage:{faible:"1–2 mg",modere:"unos cigarrillos",fort:"uso crónico"},
      duree:"Inicio en segundos (fumado) | Total 30 min–2 h",
      tripReport:"Nicotina: estimulación breve y luego relajación. Una de las sustancias más adictivas que existen.",
      description:"Agonista nicotínico. Muy adictiva. Riesgo cardiovascular y de cáncer al fumar."
    },
    "Naloxone": {
      effets:["Antagonismo opioide","Reversión de sobredosis"],
      dosage:{faible:"0,4–0,8 mg (nasal/IM)",modere:"0,8–1,6 mg",fort:"2 mg+"},
      duree:"Inicio 2–5 min | Total 30–90 min",
      tripReport:"Naloxona: si alguien sufre una sobredosis, ESTO es lo que salva vidas. Llévala siempre.",
      description:"Antagonista mu completo. Revierte cualquier sobredosis opioide. Duración corta = a veces hay que repetir."
    },
    "Klonopin": {
      effets:["Ansiólisis", "Anticonvulsivo", "Sedación", "Amnesia"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3–4 mg"},
      duree:"Inicio 20–60 min | Total 6–12 h",
      tripReport:"Klonopin 2 mg: ansiólisis profunda, sedación leve. Abstinencia muy difícil.",
      description:"Clonazepam: benzo de acción larga. Dependencia física severa. Abstinencia = convulsiones."
    },
    "Lorazépam": {
      effets:["Ansiólisis", "Sedación", "Amnesia", "Relajación muscular"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"2,5–4 mg"},
      duree:"Inicio 15–30 min | Total 6–8 h",
      tripReport:"Lorazepam 2 mg: sedación profunda, amnesia parcial. Alcohol = parada respiratoria.",
      description:"Ativan: benzo potente, vida media intermedia. Dependencia física. Nunca con alcohol."
    },
    "Zolpidem": {
      effets:["Sedación", "Hipnosis", "Amnesia", "Sonambulismo"],
      dosage:{faible:"5 mg",modere:"10 mg",fort:"15–20 mg"},
      duree:"Inicio 15–30 min | Total 6–8 h",
      tripReport:"Zolpidem 10 mg: dormirse rápido. A veces sonambulismo. Alcohol = amnesia total.",
      description:"Agonista GABA-A. Sonambulismo documentado. El alcohol potencia gravemente."
    },
    "Pregabaline": {
      effets:["Ansiólisis", "Euforia", "Sedación", "Bienestar"],
      dosage:{faible:"75–150 mg",modere:"150–300 mg",fort:"450–600 mg"},
      duree:"Inicio 30–90 min | Total 6–8 h",
      tripReport:"Pregabalina 150 mg: sedación y euforia leve. Asociada a muchas muertes por opioides.",
      description:"Análogo del GABA. Combinación con opioides = muerte documentada. Dependencia física subestimada."
    },
    "Gabapentine": {
      effets:["Sedación", "Ansiólisis", "Euforia leve"],
      dosage:{faible:"100–300 mg",modere:"600–900 mg",fort:"1200–1800 mg"},
      duree:"Inicio 60–90 min | Total 5–7 h",
      tripReport:"Gabapentina 900 mg: sedación y calma. Asociada a muertes en combinación con opioides.",
      description:"Gabapentinoide. Muertes documentadas en combinación con opioides. Abuso creciente."
    },
    "Quétiapine": {
      effets:["Sedación", "Ansiólisis", "Antipsicótico"],
      dosage:{faible:"25–50 mg",modere:"100–200 mg",fort:"400–800 mg"},
      duree:"Inicio 30–60 min | Total 6–12 h",
      tripReport:"Quetiapina 50 mg: somnífero potente. Desviada de la prescripción.",
      description:"Antagonista D2/5-HT2A. Síndrome neuroléptico maligno. Alcohol = hipotensión severa."
    },
    "Phénibut": {
      effets:["Ansiólisis", "Euforia", "Sociabilidad", "Sedación"],
      dosage:{faible:"250–500 mg",modere:"500–1000 mg",fort:"1500–2000 mg"},
      duree:"Inicio 2–4 h | Total 5–8 h",
      tripReport:"Fenibut 750 mg: ansiedad borrada, sociabilidad disparada. Abstinencia brutal tras 3 tomas.",
      description:"Agonista GABA-B + D2 débil. Dependencia física rápida. Abstinencia intensa. GHB/alcohol = coma."
    },
    "Clonazolam": {
      effets:["Sedación extrema", "Amnesia profunda", "Ansiólisis"],
      dosage:{faible:"0,25–0,5 mg",modere:"0,5–1 mg",fort:"1–2 mg (muerte posible)"},
      duree:"Inicio 20–60 min | Total 8–18 h",
      tripReport:"Clonazolam 0,5 mg: varias horas de amnesia. 1 mg + alcohol: puede ser mortal.",
      description:"Benzo de diseño ultrapotente. Acumulación = muerte. Nunca con alcohol. Abstinencia = convulsiones."
    },
    "Flubromazolam": {
      effets:["Sedación extrema", "Amnesia total", "Hipnosis"],
      dosage:{faible:"0,1–0,25 mg",modere:"0,25–0,5 mg",fort:"0,5 mg+ (peligroso)"},
      duree:"Inicio 20–60 min | Total 12–20 h",
      tripReport:"Flubromazolam 0,25 mg: la benzo de diseño más potente. Amnesia total. Muerte posible.",
      description:"La benzo más potente conocida. Alcohol = muerte. Acumulación insidiosa. Abstinencia = convulsiones."
    },
    "1,4-Butanediol": {
      effets:["Euforia", "Sedación", "Desinhibición"],
      dosage:{faible:"0,5–0,8 ml/kg",modere:"0,8–1,2 ml/kg",fort:"1,5 ml/kg+ (coma fácil)"},
      duree:"Inicio 20–40 min | Total 2–4 h",
      tripReport:"Se parece al GHB, pero la dosificación líquida hace la sobredosis muy fácil.",
      description:"Profármaco del GHB. Índice terapéutico muy estrecho. Mezcla con alcohol = coma respiratorio."
    },
    "GBL": {
      effets:["Euforia", "Sedación", "Desinhibición"],
      dosage:{faible:"0,5–0,8 ml",modere:"0,8–1,3 ml",fort:"1,5 ml+"},
      duree:"Inicio 5–20 min | Pico 30–60 min | Total 1,5–3 h",
      tripReport:"GBL 1 ml: inicio ultrarrápido, desorientación en 5 min. Margen de error mortal.",
      description:"Profármaco del GHB. Metabolismo más rápido. Nunca con alcohol."
    },
    "Carisoprodol": {
      effets:["Relajación muscular", "Sedación", "Ansiólisis"],
      dosage:{faible:"250 mg",modere:"350–500 mg",fort:"700–1000 mg"},
      duree:"Inicio 20–40 min | Total 4–6 h",
      tripReport:"Carisoprodol 350 mg: dependencia rápida que recuerda a las benzos.",
      description:"Se metaboliza a meprobamato. Potencialmente mortal con alcohol."
    },
    "Etizolam": {
      effets:["Ansiólisis", "Sedación", "Posible amnesia"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Inicio 20–40 min | Total 6–10 h",
      tripReport:"Etizolam 1 mg: dependencia tras 2 semanas.",
      description:"Mismo mecanismo que las benzos. Abstinencia que induce convulsiones."
    },
    "Flubromazépam": {
      effets:["Sedación", "Ansiólisis", "Amnesia"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–20 mg"},
      duree:"Inicio 30–60 min | Total 24–48 h",
      tripReport:"Flubromazepam 8 mg: efecto que dura 2 días. Dependencia rápida.",
      description:"Vida media >100 h. Acumulación. Abstinencia que induce convulsiones."
    },
    "Deschloroetizolam": {
      effets:["Ansiólisis", "Sedación", "Amnesia"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Inicio 20–40 min | Total 6–12 h",
      tripReport:"Deschloroetizolam 1 mg: tolerancia rápida, abstinencia difícil.",
      description:"Interacciones mortales con alcohol/opioides."
    },
    "Metizolam": {
      effets:["Ansiólisis", "Sedación", "Amnesia"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"2–4 mg"},
      duree:"Inicio 20–40 min | Total 8–12 h",
      tripReport:"Metizolam 1 mg: dependencia sutil pero real.",
      description:"Abstinencia potencialmente convulsiva."
    },
    "Pyrazolam": {
      effets:["Ansiólisis", "Sedación leve"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Inicio 20–40 min | Total 8–14 h",
      tripReport:"Pyrazolam 1 mg: ansiolítico puro. Dependencia sutil.",
      description:"Benzo de vida media larga."
    },
    "O-DSMT": {
      effets:["Analgesia", "Euforia", "Sedación", "Depresión respiratoria"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"O-DSMT 25 mg: opioide potente. Depresión respiratoria marcada. Potenciación mortal con alcohol.",
      description:"O-desmetiltramadol: metabolito activo del tramadol, fuerte agonista mu. Nunca con alcohol."
    },
    "Buprenorphine": {
      effets:["Analgesia", "Reducción del craving", "Sedación leve"],
      dosage:{faible:"0,4–2 mg",modere:"2–8 mg",fort:"16–32 mg"},
      duree:"Inicio 30–60 min | Total 24–72 h",
      tripReport:"Buprenorfina 8 mg: tratamiento de sustitución opioide. Dependencia física presente pero estable.",
      description:"Agonista mu parcial + antagonista kappa. Techo analgésico. Usada en TSO. Benzos = muerte."
    },
    "Naltrexone": {
      effets:["Bloquea efectos opioides", "Reduce el craving de alcohol"],
      dosage:{faible:"25 mg",modere:"50 mg",fort:"100–150 mg"},
      duree:"Inicio 60–90 min | Total 24–72 h",
      tripReport:"Naltrexona 50 mg/día: bloquea totalmente los opioides. Útil para TSO y alcoholismo.",
      description:"Antagonista mu completo. Hepatotóxica a dosis alta. Nunca con opioides activos."
    },
    "Acétylfentanyl": {
      effets:["Analgesia", "Depresión respiratoria"],
      dosage:{faible:"0,1–0,2 mg",modere:"0,2–0,4 mg",fort:"0,5 mg+"},
      duree:"Inicio 5–15 min | Total 1–3 h",
      tripReport:"Acetilfentanilo: sobredosis a la mínima imprecisión.",
      description:"~5× la morfina. La naloxona puede ser insuficiente."
    },
    "Hydrocodone": {
      effets:["Analgesia", "Euforia", "Estreñimiento"],
      dosage:{faible:"5–10 mg",modere:"15–20 mg",fort:"30–40 mg"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"Hidrocodona 15 mg: euforia cálida. Dependencia rápida.",
      description:"Vicodin: ~1,5× la codeína. Sobredosis con alcohol."
    },
    "Hydromorphone": {
      effets:["Analgesia potente", "Euforia intensa", "Depresión respiratoria"],
      dosage:{faible:"1–2 mg",modere:"2–4 mg",fort:"6–8 mg"},
      duree:"Inicio 15–30 min | Total 3–5 h",
      tripReport:"Hidromorfona 3 mg: opioide hospitalario. Nunca fuera de prescripción.",
      description:"Dilaudid: ~8× la morfina. Dependencia extremadamente rápida."
    },
    "Oxymorphone": {
      effets:["Analgesia", "Euforia intensa", "Depresión respiratoria"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–20 mg"},
      duree:"Inicio 15–30 min | Total 4–6 h",
      tripReport:"Oximorfona 5 mg: ~10× la morfina. Extremadamente adictiva.",
      description:"Nunca mezclar con alcohol/benzos."
    },
    "Dextropropoxyphène": {
      effets:["Analgesia leve", "Euforia débil", "Sedación"],
      dosage:{faible:"65 mg",modere:"130–200 mg",fort:"300 mg+"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"Retirado del mercado por arritmias fatales. No consumir.",
      description:"Cardiotoxicidad mayor. El metabolito bloquea los canales de sodio cardiacos."
    },
    "Sufentanil": {
      effets:["Analgesia", "Depresión respiratoria", "Sedación profunda"],
      dosage:{faible:"2–5 µg",modere:"10–25 µg",fort:"50 µg+"},
      duree:"Inicio 1–3 min | Total 20–45 min",
      tripReport:"Sufentanilo: 5–10× más potente que el fentanilo. Solo uso hospitalario.",
      description:"500–1000× la morfina. Naloxona insuficiente."
    },
    "Péthidine": {
      effets:["Analgesia", "Euforia", "Sedación"],
      dosage:{faible:"25–50 mg",modere:"50–100 mg",fort:"150–200 mg"},
      duree:"Inicio 10–15 min (IM) | Total 2–4 h",
      tripReport:"Petidina 75 mg: eufórica y rápida. Dependencia rápida.",
      description:"Meperidina. Metabolito normeperidina → convulsiones. IMAO fatal."
    },
    "Tapentadol": {
      effets:["Analgesia", "Euforia moderada", "Sedación"],
      dosage:{faible:"50 mg",modere:"100–150 mg",fort:"200–250 mg"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"Tapentadol 100 mg: opioide-IRSN, analgésico potente.",
      description:"Agonista mu + inhibidor de recaptación de NA. IMAO contraindicados."
    },
    "Isotonitazène": {
      effets:["Analgesia potente", "Sedación profunda", "Depresión respiratoria", "Euforia"],
      dosage:{faible:"microgramos (no medible en casa)",modere:"dosis imprevisible",fort:"parada respiratoria"},
      duree:"Inicio 1–10 min | Total 1–4 h",
      tripReport:"Isotonitaceno ('iso'): opioide sintético más potente que el fentanilo. A menudo en polvos o pastillas falsas. La naloxona actúa, pero pueden hacer falta varias dosis.",
      description:"Agonista mu muy potente (familia nitazeno). Margen dosis/sobredosis mínimo. Testa siempre (tiras), nunca solo·a, ten naloxona."
    },
    "Métonitazène": {
      effets:["Analgesia", "Sedación extrema", "Depresión respiratoria"],
      dosage:{faible:"microgramos (no medible)",modere:"dosis imprevisible",fort:"parada respiratoria"},
      duree:"Inicio 1–10 min | Total 1–4 h",
      tripReport:"Metonitaceno: nitazeno de potencia cercana al fentanilo, implicado en muchas muertes. En mezclas (heroína, medicamentos falsos).",
      description:"Agonista mu (nitazeno). Depresión respiratoria mayor. Naloxona a veces en dosis repetidas. Testa, nunca estés solo·a."
    },
    "Protonitazène": {
      effets:["Analgesia potente", "Sedación profunda", "Depresión respiratoria"],
      dosage:{faible:"microgramos (no medible)",modere:"dosis imprevisible",fort:"parada respiratoria"},
      duree:"Inicio 1–10 min | Total 1–4 h",
      tripReport:"Protonitaceno: se estima ~4× más potente que el fentanilo. Hallado en muertes en Europa, Norteamérica y Australia.",
      description:"Agonista mu muy potente (nitazeno). Riesgo de sobredosis extremo. Naloxona, tiras de nitazeno y presencia de un tercero imprescindibles."
    },
    "Carfentanil": {
      effets:["Analgesia masiva", "Depresión respiratoria inmediata", "Pérdida de conciencia"],
      dosage:{faible:"microgramos (no medible, letal)",modere:"dosis imprevisible",fort:"parada respiratoria casi inmediata"},
      duree:"Inicio <1–5 min | Total 0,5–2 h",
      tripReport:"Carfentanilo: ~100× más potente que el fentanilo (uso veterinario en grandes animales). Una cantidad invisible al ojo puede matar. Hallado en polvos callejeros.",
      description:"Agonista mu extremadamente potente. Sobredosis ultrarrápida. A menudo se necesitan varias dosis de naloxona. Nunca solo·a, testa, dosis de rescate listas."
    },
    "Oxycodone": {
      effets:["Analgesia", "Euforia", "Sedación", "Ansiólisis"],
      dosage:{faible:"5–10 mg",modere:"15–30 mg",fort:"40 mg+ (sin tolerancia: peligroso)"},
      duree:"Inicio 20–40 min | Total 4–6 h",
      tripReport:"Oxicodona (OxyContin) ~15 mg: euforia opioide clásica. Las pastillas falsas se cortan muy a menudo con fentanilo: nunca presumas el contenido.",
      description:"Agonista mu. Depresión respiratoria según dosis, agravada por alcohol/benzos. Tolerancia y dependencia rápidas. Naloxona en caso de sobredosis."
    },
    "Krokodil (désomorphine)": {
      effets:["Analgesia", "Euforia opioide breve", "Sedación"],
      dosage:{faible:"no cuantificable (casero)",modere:"dosis imprevisible",fort:"sobredosis / necrosis"},
      duree:"Inicio 2–5 min | Total 1,5–2 h",
      tripReport:"Krokodil ('cocodrilo', 'droga zombi'): desomorfina fabricada en casa con codeína y productos cáusticos (gasolina, fósforo rojo, ácido). Efecto opioide corto pero muy fuerte. Los residuos tóxicos causan necrosis de los tejidos (piel verdosa y escamada, gangrena, amputaciones). Esperanza de vida muy reducida con uso regular.",
      description:"Desomorfina: agonista mu ~8–10× más fuerte que la morfina, duración corta → reinyección frecuente. El peligro principal viene sobre todo de las impurezas cáusticas de la síntesis casera (necrosis, infecciones, abscesos, daño óseo). Más la depresión respiratoria opioide clásica."
    },
    "Opium": {
      effets:["Analgesia", "Euforia", "Sedación", "Ensoñación"],
      dosage:{faible:"según contenido de morfina (muy variable)",modere:"dosis imprevisible",fort:"depresión respiratoria"},
      duree:"Inicio 15–45 min | Total 4–6 h",
      tripReport:"Opio (látex de amapola): euforia opioide clásica, fumado o ingerido. Contenido de morfina muy variable → dosis imprevisible. Dependencia y depresión respiratoria como todos los opioides.",
      description:"Morfina + codeína + tebaína (agonistas opioides). Depresión respiratoria, dependencia. Gran peligro con alcohol/benzos. Naloxona en caso de sobredosis."
    },
    "Tianeptine": {
      effets:["Euforia", "Ansiólisis", "Sedación", "Analgesia"],
      dosage:{faible:"12,5–25 mg",modere:"25–50 mg",fort:"100–250 mg"},
      duree:"Inicio 30–60 min | Total 3–4 h",
      tripReport:"Tianeptina 50 mg: antidepresivo convertido en opioide callejero. Dependencia ultrarrápida.",
      description:"Agonista mu atípico. Dependencia explosiva. Alcohol = riesgo respiratorio."
    },
    "Kratom": {
      effets:["Analgesia", "Euforia leve", "Estimulación a dosis baja", "Sedación a dosis alta"],
      dosage:{faible:"2–5 g",modere:"5–10 g",fort:"15–25 g"},
      duree:"Inicio 15–30 min | Total 3–6 h",
      tripReport:"Kratom 5 g: efecto opioide suave. 15 g: sedación fuerte. Dependencia física en pocas semanas.",
      description:"Agonista opioide parcial + agonista alfa-2. Abstinencia comparable a la heroína. Hepatotóxico."
    },
    "Psilocine": {
      effets:["Alucinaciones", "Euforia", "Disolución del ego"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"30–40 mg"},
      duree:"Inicio 15–45 min | Total 4–6 h",
      tripReport:"Psilocina 20 mg: viaje más rápido que la psilocibina. Visuales comparables.",
      description:"4-HO-DMT: metabolito activo de la psilocibina. Perfil idéntico."
    },
    "DMT": {
      effets:["Alucinaciones intensas", "Entidades", "Break-through", "Euforia"],
      dosage:{faible:"10–15 mg (fumado)",modere:"20–40 mg",fort:"50–70 mg"},
      duree:"Inicio 30 s (fumado) | Total 10–20 min",
      tripReport:"DMT 40 mg fumado: encuentro con entidades. Disociación total 15 min. La experiencia más intensa posible.",
      description:"N,N-DMT. Agonista 5-HT2A potente. Endógeno. Nunca con IMAO salvo protocolo de ayahuasca."
    },
    "2C-B": {
      effets:["Euforia", "Alucinaciones", "Estimulación", "Empatía"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"30–40 mg"},
      duree:"Inicio 45–75 min | Total 4–6 h",
      tripReport:"2C-B 18 mg: el psicodélico más equilibrado. Entactógeno + visual. Popular en festivales.",
      description:"Agonista 5-HT2A + 5-HT2C. Posible taquicardia. Nunca con litio."
    },
    "Mescaline": {
      effets:["Alucinaciones coloridas", "Euforia", "Conexión con la naturaleza", "Introspección"],
      dosage:{faible:"100–200 mg",modere:"200–400 mg",fort:"400–600 mg"},
      duree:"Inicio 60–120 min | Total 10–14 h",
      tripReport:"Mescalina 300 mg: colores deslumbrantes, conexión con la naturaleza. Viaje largo y profundo.",
      description:"Agonista 5-HT2A. Duración muy larga. Taquicardia. Náuseas al inicio frecuentes."
    },
    "Ayahuasca": {
      effets:["Visiones intensas", "Purga", "Introspección", "Alucinaciones"],
      dosage:{faible:"100–150 ml",modere:"150–200 ml",fort:"200+ ml"},
      duree:"Inicio 20–60 min | Pico 2–4 h | Total 4–6 h",
      tripReport:"Ayahuasca: viaje interior profundo, posible purga. IMAO = interacciones mortales con muchas sustancias.",
      description:"Contiene IMAO (harmala). Interacciones MORTALES: tramadol, MDMA, cocaína, anfetaminas, antidepresivos."
    },
    "Ibogaïne": {
      effets:["Visiones oníricas", "Revelaciones profundas", "Estimulación", "Náuseas"],
      dosage:{faible:"5–10 mg/kg",modere:"10–20 mg/kg",fort:"20+ mg/kg"},
      duree:"Inicio 1–2 h | Total 12–36 h",
      tripReport:"Ibogaína: un viaje de 36 h, revives toda tu vida. Parada cardiaca posible sin supervisión médica.",
      description:"Inhibidor de recaptación multimodal. QT largo = muerte. Nunca usar sin un estudio cardiaco previo."
    },
    "1P-LSD": {
      effets:["Alucinaciones", "Introspección", "Distorsión del tiempo", "Empatía"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–400 µg"},
      duree:"Inicio 45–90 min | Total 8–12 h",
      tripReport:"1P-LSD 125 µg: visuales espléndidos, conexión musical profunda.",
      description:"Profármaco legal del LSD en algunos países. Perfil idéntico al LSD."
    },
    "1cP-LSD": {
      effets:["Alucinaciones", "Euforia", "Distorsión temporal"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–300 µg"},
      duree:"Inicio 60–90 min | Total 8–14 h",
      tripReport:"1cP-LSD 100 µg: algo más suave que el LSD, subida gradual.",
      description:"Análogo ciclopropanoílo del LSD. Evitar litio, antipsicóticos."
    },
    "DOM": {
      effets:["Alucinaciones intensas", "Duración extrema", "Estimulación"],
      dosage:{faible:"1–3 mg",modere:"3–6 mg",fort:"8–14 mg"},
      duree:"Inicio 60–180 min | Total 16–24 h",
      tripReport:"DOM 4 mg: viaje de 20 horas. Subida muy lenta = trampa de redose.",
      description:"2,5-dimetoxi-4-metilanfetamina. Riesgo hipertensivo."
    },
    "2C-C": {
      effets:["Alucinaciones leves", "Sedación", "Euforia"],
      dosage:{faible:"15–25 mg",modere:"25–40 mg",fort:"50–80 mg"},
      duree:"Inicio 45–90 min | Total 4–6 h",
      tripReport:"2C-C 30 mg: uno de los 2C más suaves, sedante y visual.",
      description:"2C-C: agonista 5-HT2A. Duración corta. Efectos sedantes."
    },
    "2C-D": {
      effets:["Estimulación mental", "Alucinaciones ligeras", "Creatividad"],
      dosage:{faible:"10–20 mg",modere:"20–30 mg",fort:"40–60 mg"},
      duree:"Inicio 45–75 min | Total 4–6 h",
      tripReport:"2C-D 25 mg: efecto nootrópico-psicodélico, claridad mental.",
      description:"El más nootrópico de los 2C según Shulgin."
    },
    "2C-E": {
      effets:["Alucinaciones intensas", "Estimulación", "Empatía"],
      dosage:{faible:"5–10 mg",modere:"10–15 mg",fort:"20–30 mg"},
      duree:"Inicio 60–120 min | Total 8–12 h",
      tripReport:"2C-E 15 mg: subida larga y angustiosa pero pico muy profundo.",
      description:"Apodado 'The Aquarust'. Inicio lento traicionero. Riesgo de mal viaje."
    },
    "2C-I": {
      effets:["Euforia", "Alucinaciones", "Estimulación"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–35 mg"},
      duree:"Inicio 45–75 min | Total 6–8 h",
      tripReport:"2C-I 15 mg: eufórico y visual, sensación de invencibilidad.",
      description:"Agonista 5-HT2A fuerte. Posible taquicardia."
    },
    "2C-P": {
      effets:["Alucinaciones muy intensas", "Duración muy larga", "Estimulación"],
      dosage:{faible:"3–6 mg",modere:"6–12 mg",fort:"15–25 mg"},
      duree:"Inicio 90–180 min | Total 10–16 h",
      tripReport:"2C-P 8 mg: viaje de 14 horas. Nunca sin experiencia previa.",
      description:"Uno de los psicodélicos más potentes de la familia 2C. Sobredosis posible."
    },
    "2C-T-2": {
      effets:["Alucinaciones", "Empatía", "Introspección"],
      dosage:{faible:"5–10 mg",modere:"10–15 mg",fort:"20–30 mg"},
      duree:"Inicio 60–120 min | Total 6–10 h",
      tripReport:"2C-T-2 12 mg: experiencia profunda. Interacción mortal con litio.",
      description:"Interacciones con IMAO documentadas (muertes). Nunca mezclar con IMAO."
    },
    "2C-T-7": {
      effets:["Alucinaciones intensas", "Empatía", "Náuseas"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–35 mg"},
      duree:"Inicio 60–120 min | Total 8–15 h",
      tripReport:"2C-T-7 15 mg: 3 horas vomitando y luego efectos magníficos. Nunca con IMAO.",
      description:"Implicado en varias muertes por combinación con IMAO. Posible hepatotoxicidad."
    },
    "4-AcO-DMT": {
      effets:["Alucinaciones", "Euforia", "Conexión emocional"],
      dosage:{faible:"10–15 mg",modere:"20–30 mg",fort:"40–60 mg"},
      duree:"Inicio 20–45 min | Total 4–6 h",
      tripReport:"4-AcO-DMT 25 mg: como las setas pero más limpio.",
      description:"Profármaco de la psilocina. Perfil cercano a la psilocibina."
    },
    "4-AcO-MET": {
      effets:["Alucinaciones", "Creatividad", "Euforia"],
      dosage:{faible:"10–20 mg",modere:"20–30 mg",fort:"35–55 mg"},
      duree:"Inicio 30–60 min | Total 5–8 h",
      tripReport:"4-AcO-MET 25 mg: visuales coloridos muy nítidos, euforia musical.",
      description:"Agonista 5-HT2A. Estimulación física leve."
    },
    "4-AcO-DET": {
      effets:["Alucinaciones", "Euforia", "Creatividad"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"30–50 mg"},
      duree:"Inicio 30–60 min | Total 5–8 h",
      tripReport:"4-AcO-DET 20 mg: una psilocibina más corta y visual.",
      description:"Agonista 5-HT2A. Menos náuseas que la psilocibina cruda."
    },
    "5-MeO-DiPT": {
      effets:["Alucinaciones", "Estimulación física", "Efectos sexuales"],
      dosage:{faible:"3–6 mg",modere:"6–12 mg",fort:"15–25 mg"},
      duree:"Inicio 20–45 min | Total 4–6 h",
      tripReport:"5-MeO-DiPT 8 mg (Foxy): alucinaciones y estimulación sexual marcada.",
      description:"Agonista 5-HT2A. Neurotoxicidad con uso repetido."
    },
    "5-MeO-MiPT": {
      effets:["Alucinaciones leves", "Empatía", "Estimulación"],
      dosage:{faible:"3–5 mg",modere:"5–10 mg",fort:"12–20 mg"},
      duree:"Inicio 20–45 min | Total 4–6 h",
      tripReport:"5-MeO-MiPT 7 mg (Moxy): ligeramente empatógeno, ligereza corporal.",
      description:"Agonista 5-HT. Duración corta."
    },
    "Dextrométhorphane": {
      effets:["Disociación", "Euforia", "Alucinaciones", "Estimulación leve"],
      dosage:{faible:"200–400 mg",modere:"400–600 mg",fort:"600–1000 mg"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"DXM 400 mg: disociación leve. 600 mg: meseta sigma, alucinaciones. IMAO = muerte.",
      description:"Agonista σ1 + antagonista NMDA + ISRS débil. Síndrome serotoninérgico con MDMA/IMAO."
    },
    "Deschlorokétamine": {
      effets:["Disociación", "Euforia", "Sedación"],
      dosage:{faible:"30–50 mg",modere:"75–125 mg",fort:"150–200 mg"},
      duree:"Inicio 20–40 min | Total 3–6 h",
      tripReport:"Descloroketamina 80 mg: disociación limpia. Más duradera que la ketamina.",
      description:"Antagonista NMDA. Riesgo de cistitis con uso repetido."
    },
    "Diphenidine": {
      effets:["Disociación", "Anestesia", "Alucinaciones"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Inicio 30–60 min | Total 6–10 h",
      tripReport:"Difenidina 60 mg: disociación similar a la ketamina pero más larga.",
      description:"Antagonista NMDA no-PCP. Duración larga. Tolerancia rápida."
    },
    "3-HO-PCE": {
      effets:["Disociación", "Analgesia", "Euforia"],
      dosage:{faible:"5–10 mg",modere:"15–25 mg",fort:"30–50 mg"},
      duree:"Inicio 20–40 min | Total 4–8 h",
      tripReport:"3-HO-PCE 15 mg: disociación profunda con euforia opioide. Muy adictivo.",
      description:"Doble riesgo: dependencia disociativa + opioide."
    },
    "3-HO-PCP": {
      effets:["Disociación", "Analgesia fuerte", "Euforia intensa"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–25 mg"},
      duree:"Inicio 15–30 min | Total 4–8 h",
      tripReport:"3-HO-PCP 7 mg: dependencia tras 2 semanas.",
      description:"Fuerte actividad opioide. Potencialmente cardiotóxico."
    },
    "3-MeO-PCE": {
      effets:["Disociación", "Euforia", "Posible manía"],
      dosage:{faible:"3–7 mg",modere:"8–15 mg",fort:"20–30 mg"},
      duree:"Inicio 30–60 min | Total 4–8 h",
      tripReport:"3-MeO-PCE 10 mg: grandiosidad y confusión. Psicosis a dosis alta.",
      description:"Riesgo de manía farmacológica."
    },
    "3-MeO-PCP": {
      effets:["Disociación", "Euforia maníaca", "Psicosis potencial"],
      dosage:{faible:"3–8 mg",modere:"10–15 mg",fort:"20–35 mg"},
      duree:"Inicio 30–90 min | Total 6–12 h",
      tripReport:"3-MeO-PCP 10 mg: grandiosidad, luego confusión. Psicosis maníaca documentada.",
      description:"Antagonista NMDA + dopaminérgico parcial. Muy peligroso solo."
    },
    "O-PCE": {
      effets:["Disociación", "Euforia", "Analgesia"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–75 mg"},
      duree:"Inicio 30–60 min | Total 4–8 h",
      tripReport:"O-PCE 30 mg: disociación limpia, menos k-hole que la ketamina.",
      description:"Antagonista NMDA. Riesgo de cistitis. No mezclar con alcohol."
    },
    "PCE": {
      effets:["Disociación", "Euforia", "Anestesia"],
      dosage:{faible:"5–10 mg",modere:"15–25 mg",fort:"30–50 mg"},
      duree:"Inicio 15–30 min | Total 4–8 h",
      tripReport:"PCE 20 mg: similar al PCP pero ligeramente distinto.",
      description:"Antagonista NMDA. Riesgo de psicosis."
    },
    "PCP": {
      effets:["Disociación fuerte", "Anestesia", "Agitación", "Psicosis potencial"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–25 mg"},
      duree:"Inicio 5–20 min | Total 4–8 h",
      tripReport:"PCP 7 mg: desconexión total, fuerza física multiplicada. Agresividad posible.",
      description:"Antagonista NMDA + dopaminérgico. Rabdomiólisis posible."
    },
    "Méthoxétamine": {
      effets:["Disociación", "Euforia", "Anestesia", "Alucinaciones"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–90 mg"},
      duree:"Inicio 30–90 min (oral) | Total 5–7 h",
      tripReport:"MXE (metoxetamina) ~30 mg: disociación cercana a la ketamina pero mucho más larga y potente. Sobredosis fácil, 'M-hole' prolongado, riesgo cardiovascular (hipertensión).",
      description:"Antagonista NMDA + actividad serotoninérgica. Duración larga engañosa → redose peligroso. Toxicidad urinaria con uso repetido. Casos mortales documentados."
    },
    "2-FDCK": {
      effets:["Disociación", "Analgesia", "Euforia leve"],
      dosage:{faible:"25–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Inicio 10–25 min | Total 2–4 h",
      tripReport:"2-FDCK 60 mg: disociación profunda, más clara que la ketamina.",
      description:"Análogo fluorado de la ketamina. Posible cistitis. No mezclar con alcohol/benzos."
    },
    "3-MeO-PCMo": {
      effets:["Disociación leve", "Sedación"],
      dosage:{faible:"30–60 mg",modere:"60–120 mg",fort:"120 mg+"},
      duree:"Inicio 30–60 min | Total 3–5 h",
      tripReport:"3-MeO-PCMo: disociativo RC de la familia PCP, más débil y más sedante. Datos limitados.",
      description:"Antagonista NMDA (morfolina). Menos potente que el 3-MeO-PCP. Datos toxicológicos escasos."
    },
    "Méthoxphénidine": {
      effets:["Disociación", "Alucinaciones", "Estimulación"],
      dosage:{faible:"40–60 mg",modere:"60–100 mg",fort:"100 mg+"},
      duree:"Inicio 30–90 min | Total 4–8 h",
      tripReport:"MXP (metoxfenidina): disociativo tipo difenidina, largo, con riesgo de hipertensión y agitación/psicosis a dosis altas. Subida lenta engañosa.",
      description:"Antagonista NMDA (diariletilamina). Subida lenta → redose peligroso. Hipertensión, duración larga."
    },
    "Nitreux": {
      effets:["Euforia breve", "Disociación leve", "Risas"],
      dosage:{faible:"1 cartucho",modere:"2–3 cartuchos",fort:"muchos repetidos (carencia de B12)"},
      duree:"Inicio en segundos | Total 2–5 min",
      tripReport:"Óxido nitroso (globos): 2 minutos de euforia. Uso repetido = carencia grave de B12.",
      description:"Óxido nitroso. Carencia de B12 → neuropatía grave."
    },
    "Delta-9 THC": {
      effets:["Euforia", "Relajación", "Alteración sensorial", "Estimulación del apetito"],
      dosage:{faible:"2–5 mg",modere:"5–15 mg",fort:"20–50 mg"},
      duree:"Inicio 15–45 min (oral) | Pico 1–3 h | Total 4–6 h",
      tripReport:"THC 15 mg: euforia y risas, música magnificada. Ansiedad y paranoia posibles desde 20 mg.",
      description:"Δ9-tetrahidrocannabinol: agonista CB1/CB2. Psicosis cannabinoide documentada."
    },
    "CBD": {
      effets:["Ansiólisis", "Antiinflamatorio", "Relajación"],
      dosage:{faible:"10–25 mg",modere:"25–75 mg",fort:"100–300 mg"},
      duree:"Inicio 20–45 min | Total 4–8 h",
      tripReport:"CBD 50 mg: relajación leve, sin high. Puede moderar los efectos ansiógenos del THC.",
      description:"Modulador CB1 negativo. Antagoniza algunos efectos del THC. Toxicidad muy baja."
    },
    "THCP": {
      effets:["Euforia intensa", "Sedación", "Alteración cognitiva"],
      dosage:{faible:"1–2 mg",modere:"2–5 mg",fort:"7–10 mg"},
      duree:"Inicio 10–30 min | Total 4–8 h",
      tripReport:"THCP 3 mg: 30× más potente que el THC. En usuarios no habituados: efectos desorientadores extremos.",
      description:"Tetrahidrocannabiforol. Afinidad CB1 33× > THC. Datos de seguridad limitados."
    },
    "THCV": {
      effets:["Estimulación leve", "Ansiólisis", "Reducción del apetito"],
      dosage:{faible:"2–5 mg",modere:"5–15 mg",fort:"20–30 mg"},
      duree:"Inicio 5–15 min (fumado) | Total 2–4 h",
      tripReport:"THCV 10 mg: claro y estimulante, menos sedante que el THC. Reduce el apetito.",
      description:"Antagonista CB1 a dosis baja, agonista CB1/CB2 a dosis alta."
    },
    "HHC": {
      effets:["Euforia", "Relajación", "Alteración cognitiva leve"],
      dosage:{faible:"3–6 mg",modere:"8–15 mg",fort:"20–35 mg"},
      duree:"Inicio 15–30 min | Total 3–5 h",
      tripReport:"HHC 10 mg: similar al THC pero más 'claro'. Buena euforia.",
      description:"Hexahidrocannabinol: THC hidrogenado, agonista CB1 moderado."
    },
    "HHC-P": {
      effets:["Euforia fuerte", "Sedación", "Relajación"],
      dosage:{faible:"2–3 mg",modere:"3–7 mg",fort:"8–15 mg"},
      duree:"Inicio 10–25 min | Total 3–6 h",
      tripReport:"HHC-P 5 mg: claramente más potente que el HHC. Comparable al THCP en intensidad.",
      description:"Hexahidrocannabiforol: agonista CB1 fuerte."
    },
    "Delta-8 THC": {
      effets:["Euforia leve", "Relajación", "Ansiólisis"],
      dosage:{faible:"5–10 mg",modere:"10–25 mg",fort:"40–60 mg"},
      duree:"Inicio 15–45 min | Total 3–6 h",
      tripReport:"Delta-8 THC 15 mg: efecto THC más suave, menos ansiógeno. Posibles contaminantes químicos.",
      description:"Isómero del delta-9. El proceso de fabricación puede dejar residuos peligrosos."
    },
    "Delta-10 THC": {
      effets:["Euforia leve", "Estimulación suave", "Claridad"],
      dosage:{faible:"5–10 mg",modere:"10–25 mg",fort:"30–50 mg"},
      duree:"Inicio 15–45 min | Total 3–5 h",
      tripReport:"Delta-10 (a menudo vendido como 'D10'): más estimulante y 'claro' que el delta-9, menos ansiógeno, menor en intensidad.",
      description:"Isómero del THC obtenido por conversión química del CBD. El proceso puede dejar residuos (ácidos, catalizadores metálicos). Menor afinidad CB1 que el delta-9."
    },
    "CBC": {
      effets:["Antiinflamatorio", "Relajación leve", "Efecto séquito"],
      dosage:{faible:"10–25 mg",modere:"25–50 mg",fort:"50–100 mg"},
      duree:"Inicio 20–45 min | Total 4–6 h",
      tripReport:"CBC solo: sin high. Sobre todo vendido en flores como alternativa legal; el efecto sentido suele venir de los terpenos y del efecto séquito más que del propio CBC.",
      description:"Cannabicromeno: cannabinoide natural no psicoactivo. Actúa sobre todo en los receptores TRPV1/TRPA1. Baja afinidad CB1. Estudiado para la inflamación. Legal."
    },
    "CBN": {
      effets:["Sedación leve", "Relajación", "Somnolencia"],
      dosage:{faible:"2,5–5 mg",modere:"5–15 mg",fort:"15–30 mg"},
      duree:"Inicio 30–60 min | Total 4–8 h",
      tripReport:"CBN 10 mg: sobre todo sedante, usado a menudo para dormir. Muy débilmente psicoactivo.",
      description:"Cannabinol: producto de degradación del THC. Agonista CB1 débil. Toxicidad baja. Legal según la formulación."
    },
    "CBG": {
      effets:["Concentración", "Antiinflamatorio", "Relajación leve"],
      dosage:{faible:"10–25 mg",modere:"25–50 mg",fort:"50–100 mg"},
      duree:"Inicio 20–45 min | Total 4–6 h",
      tripReport:"CBG 30 mg: no coloca, efecto sutil a veces descrito como clarificante. Buena tolerancia.",
      description:"Cannabigerol: precursor biosintético de los demás cannabinoides. No psicoactivo. Estudiado (inflamación, antibacteriano). Toxicidad baja."
    },
    "HHCH": {
      effets:["Euforia potente", "Sedación", "Alteración cognitiva marcada"],
      dosage:{faible:"1–3 mg",modere:"3–7 mg",fort:"8–15 mg"},
      duree:"Inicio 15–35 min | Total 4–8 h",
      tripReport:"HHCH ~5 mg: 10–15× más potente que el THC, efectos más largos. Desorientación frecuente en no habituados.",
      description:"Hexahidrocannabihexol: versión hidrogenada del THCH. Agonista CB1 fuerte. Apenas hay datos científicos. Prohibido en Francia desde 2024."
    },
    "HHC-O": {
      effets:["Euforia intensa", "Sedación", "Relajación profunda"],
      dosage:{faible:"2–4 mg",modere:"4–8 mg",fort:"10–18 mg"},
      duree:"Inicio 20–45 min | Total 4–7 h",
      tripReport:"HHC-O 5 mg: acetato de HHC, subida más lenta pero más fuerte que el HHC. Pirólisis incierta al vapear.",
      description:"HHC-O-acetato: éster acetilado del HHC. Los acetatos inhalados plantean una cuestión de toxicidad pulmonar (cf. acetato de vitamina E). Prohibido en Francia."
    },
    "HHCP": {
      effets:["Euforia muy fuerte", "Sedación pesada", "Alteración cognitiva intensa"],
      dosage:{faible:"1–2 mg",modere:"2–5 mg",fort:"6–10 mg"},
      duree:"Inicio 15–30 min | Total 5–9 h",
      tripReport:"HHCP 3 mg: entre los neocannabinoides más potentes vendidos, cercano al THCP. Efectos muy largos.",
      description:"Hexahidrocannabiforol: cadena heptilo, afinidad CB1 muy alta. Datos de seguridad casi inexistentes. Prohibido en Francia."
    },
    "THCB": {
      effets:["Euforia", "Relajación", "Alteración sensorial"],
      dosage:{faible:"2–5 mg",modere:"5–12 mg",fort:"15–25 mg"},
      duree:"Inicio 15–40 min | Total 3–6 h",
      tripReport:"THCB ~8 mg: cercano al THC, algo más rápido. Cadena butilo.",
      description:"Tetrahidrocannabutol: análogo del THC de cadena butilo, presente en trazas en el cannabis. Agonista CB1. Prohibido en Francia desde 2024."
    },
    "THCH": {
      effets:["Euforia fuerte", "Sedación", "Alteración cognitiva"],
      dosage:{faible:"1–3 mg",modere:"3–8 mg",fort:"10–18 mg"},
      duree:"Inicio 15–35 min | Total 4–7 h",
      tripReport:"THCH ~5 mg: claramente más potente que el THC (estimado ~10×). Efectos largos y sedantes.",
      description:"Tetrahidrocannabihexol: cadena hexilo, fuerte afinidad CB1. Muy pocos datos humanos. Prohibido en Francia."
    },
    "THCJD": {
      effets:["Euforia potente", "Relajación", "Alteración sensorial"],
      dosage:{faible:"2–4 mg",modere:"4–9 mg",fort:"10–18 mg"},
      duree:"Inicio 15–40 min | Total 4–7 h",
      tripReport:"THCJD ~5 mg: presentado como muy potente (cadena octilo), datos reales escasos.",
      description:"Tetrahidrocannabioctol: análogo del THC de cadena alquilo larga. Perfil farmacológico mal caracterizado. Prohibido en Francia."
    },
    "H4CBD": {
      effets:["Ansiólisis", "Antiinflamatorio", "Relajación"],
      dosage:{faible:"10–25 mg",modere:"25–60 mg",fort:"75–150 mg"},
      duree:"Inicio 20–45 min | Total 4–8 h",
      tripReport:"H4CBD 40 mg: cercano al CBD, a veces descrito como algo más relajante. Sin high.",
      description:"CBD hidrogenado (tetrahidrocannabidiol). No psicoactivo, mayor afinidad por algunos receptores. Datos limitados. Prohibido en Francia desde 2024."
    },
    "H2CBD": {
      effets:["Ansiólisis leve", "Relajación"],
      dosage:{faible:"15–30 mg",modere:"30–70 mg",fort:"80–150 mg"},
      duree:"Inicio 20–45 min | Total 4–7 h",
      tripReport:"H2CBD 40 mg: análogo parcialmente hidrogenado del CBD, no psicoactivo. Muy poco recorrido.",
      description:"Dihidrocannabidiol: no se convierte en THC. Presuntamente no psicoactivo. Prohibido en Francia desde 2024."
    },
    "CBDP": {
      effets:["Relajación", "Ansiólisis leve"],
      dosage:{faible:"10–30 mg",modere:"30–60 mg",fort:"60–100 mg"},
      duree:"Inicio 20–40 min | Total 4–6 h",
      tripReport:"CBDP 30 mg: análogo phorol del CBD. Datos muy limitados.",
      description:"Cannabidiforol: análogo del CBD. Perfil presuntamente no psicoactivo."
    },
    "10-OH-HHC": {
      effets:["Euforia", "Relajación", "Sedación leve"],
      dosage:{faible:"3–5 mg",modere:"5–12 mg",fort:"15–25 mg"},
      duree:"Inicio 15–30 min | Total 3–5 h",
      tripReport:"10-OH-HHC: perfil algo distinto del HHC, efectos similares.",
      description:"Metabolito hidroxilado del HHC. Datos limitados."
    },
    "Cannabis CBD": {
      effets:["Ansiólisis", "Antiinflamatorio", "Relajación"],
      dosage:{faible:"10–25 mg",modere:"25–75 mg",fort:"100–300 mg"},
      duree:"Inicio 20–45 min | Total 4–8 h",
      tripReport:"CBD 50 mg: relajación leve, sin high. Puede moderar los efectos ansiógenos del THC.",
      description:"Modulador CB1 negativo. Antagoniza algunos efectos del THC. Toxicidad muy baja."
    },
    "MDPV": {
      effets:["Euforia potente", "Estimulación intensa", "Psicosis"],
      dosage:{faible:"3–5 mg",modere:"5–10 mg",fort:"15–25 mg"},
      duree:"Inicio 10–20 min | Total 3–5 h",
      tripReport:"MDPV 8 mg: redose de 48 h, psicosis.",
      description:"Uno de los más adictivos conocidos. Muertes documentadas."
    },
    "Méphédrone": {
      effets:["Euforia", "Empatía", "Estimulación", "Aumento de la libido"],
      dosage:{faible:"75–150 mg",modere:"150–200 mg",fort:"250–400 mg"},
      duree:"Inicio 15–45 min | Total 2–4 h",
      tripReport:"Mefedrona 150 mg: tipo MDMA pero más corto. Redose compulsivo. Craving intenso.",
      description:"4-MMC. Liberador de DA/5-HT. Cardiotóxica. Dependencia ultrarrápida. MDMA = hipertermia."
    },
    "3-MMC": {
      effets:["Euforia", "Empatía", "Estimulación", "Aumento de la libido"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Inicio 20–45 min | Total 3–5 h",
      tripReport:"3-MMC 150 mg: redose inevitable, bajada difícil.",
      description:"Sustituto de la mefedrona. Cardiotoxicidad, hipertermia."
    },
    "2-MMC": {
      effets:["Euforia", "Estimulación", "Empatía moderada"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Inicio 20–40 min | Total 3–5 h",
      tripReport:"2-MMC 150 mg: redose compulsivo, bajada difícil.",
      description:"Liberador monoaminérgico. Dependencia rápida, cardiotoxicidad."
    },
    "4-CMC": {
      effets:["Estimulación", "Euforia", "Sociabilidad"],
      dosage:{faible:"20–50 mg",modere:"50–120 mg",fort:"150 mg+"},
      duree:"Inicio 20–45 min | Total 2–4 h",
      tripReport:"4-CMC (clefedrona): catinona entre estimulación y empatía, más débil que la mefedrona. Redose frecuente.",
      description:"Liberador/inhibidor de recaptación de monoaminas. Posible nefrotoxicidad. Riesgos cardiovasculares."
    },
    "3-CMC": {
      effets:["Estimulación", "Euforia", "Sociabilidad"],
      dosage:{faible:"30–70 mg",modere:"70–150 mg",fort:"150 mg+"},
      duree:"Inicio 20–45 min | Total 2–4 h",
      tripReport:"3-CMC (clofedrona): catinona estimulante cercana a la 3-MMC, común tras las prohibiciones. Redose frecuente, bajada difícil.",
      description:"Inhibidor/liberador de dopamina-noradrenalina. Carga cardiaca, dependencia. Tolerancia rápida."
    },
    "Méthylone": {
      effets:["Empatía", "Euforia", "Estimulación"],
      dosage:{faible:"100–150 mg",modere:"150–250 mg",fort:"250–350 mg"},
      duree:"Inicio 30–60 min | Total 3–5 h",
      tripReport:"Metilona (bk-MDMA): empatógeno cercano a la MDMA pero más corto, más estimulante y menos 'profundo'. Redose frecuente, hipertermia. A menudo vendida como MDMA.",
      description:"Liberador de dopamina/noradrenalina > serotonina (catinona). Hipertermia, carga cardiaca. Hidratación moderada, pausas."
    },
    "Eutylone": {
      effets:["Estimulación", "Euforia", "Empatía moderada", "Insomnio"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"200 mg+"},
      duree:"Inicio 30–60 min | Total 3–5 h",
      tripReport:"Eutilona (bk-EBDB): catinona muy extendida, a menudo vendida como MDMA o 'molly'. Más estimulante que empatógena, insomnio marcado, redose compulsivo. Causa de experiencias decepcionantes/ansiosas tomadas por MDMA.",
      description:"Inhibidor de recaptación de monoaminas. Insomnio prolongado, ansiedad, carga cardiaca. Testar antes (a menudo confundida con MDMA)."
    },
    "Pentedrone": {
      effets:["Estimulación", "Euforia", "Insomnio"],
      dosage:{faible:"30–60 mg",modere:"60–100 mg",fort:"130–200 mg"},
      duree:"Inicio 15–30 min | Total 2–4 h",
      tripReport:"Pentedrona 80 mg: sesión de redose de 6 h con vasoconstricción.",
      description:"Inhibidor DAT/NET. Potencial de abuso muy alto."
    },
    "Pentylone": {
      effets:["Estimulación", "Euforia", "Redose"],
      dosage:{faible:"30–60 mg",modere:"60–120 mg",fort:"120 mg+"},
      duree:"Inicio 30–60 min | Total 3–6 h",
      tripReport:"Pentilona: catinona estimulante, a menudo adulterante de 'MDMA'/'molly'. Insomnio, ansiedad, redose compulsivo.",
      description:"Inhibidor de recaptación de monoaminas. Carga cardiaca, insomnio. Frecuente en mezclas."
    },
    "Alpha-PVP": {
      effets:["Estimulación potente", "Euforia", "Hipervigilancia", "Redose compulsivo"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25 mg+"},
      duree:"Inicio 10–30 min | Total 2–4 h",
      tripReport:"Alpha-PVP ('flakka') ~15 mg esnifado: subida brutal tipo cocaína/metanfetamina. Redose compulsivo, agitación, paranoia, hipertermia a dosis altas.",
      description:"Inhibidor DAT/NET, débil efecto serotoninérgico. Fuerte potencial de abuso. Casos mediáticos de delirio agitado. Tolerancia rápida."
    },
    "Alpha-PHP": {
      effets:["Estimulación intensa", "Euforia", "Redose compulsivo", "Insomnio"],
      dosage:{faible:"3–5 mg",modere:"5–15 mg",fort:"20 mg+"},
      duree:"Inicio 10–30 min | Total 2–4 h (esnifado)",
      tripReport:"Alpha-PHP: sucesor del alpha-PVP (flakka), efectos cercanos a la metanfetamina fumada pero cortos, lo que empuja al redose compulsivo. Psicosis y delirios a dosis alta o en atracón.",
      description:"Inhibidor de recaptación de dopamina/noradrenalina (pirrolidinofenona). Fuerte adicción conductual, hipertermia, riesgo cardiovascular. Datos toxicológicos limitados."
    },
    "NEP": {
      effets:["Estimulación", "Euforia leve", "Concentración"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50 mg+"},
      duree:"Inicio 20–45 min | Total 3–5 h",
      tripReport:"NEP (N-etil-pentedrona): catinona estimulante cercana a la pentedrona, a menudo vendida como alternativa legal. Redose frecuente, insomnio.",
      description:"Inhibidor de recaptación de dopamina/noradrenalina. Estimulante de duración media. Riesgos cardiovasculares y de dependencia."
    },
    "Hexen": {
      effets:["Estimulación", "Euforia", "Sociabilidad", "Redose"],
      dosage:{faible:"5–15 mg",modere:"15–35 mg",fort:"40 mg+"},
      duree:"Inicio 15–40 min | Total 2–4 h",
      tripReport:"Hexen (N-etil-hexedrona): catinona estimulante de corta duración, cercana al MDPV en intensidad. Redose compulsivo, bajada difícil.",
      description:"Inhibidor DAT/NET. Estimulante potente y breve. Hipertermia y taquicardia a dosis altas. Dependencia conductual."
    },
    "4-FA": {
      effets:["Euforia", "Estimulación", "Empatía leve"],
      dosage:{faible:"50–100 mg",modere:"100–150 mg",fort:"150–250 mg"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"4-FA (4-fluoroanfetamina): entre anfetamina y MDMA, euforia social. Riesgos cardiovasculares (picos de tensión, casos notificados de ictus/hemorragia cerebral). Evita el redose.",
      description:"Liberador/inhibidor de dopamina-noradrenalina + serotonina. Riesgo de hemorragia cerebral notificado. No combinar con estimulantes/IMAO."
    },
    "2-FA": {
      effets:["Estimulación", "Concentración", "Euforia leve"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Inicio 30–60 min | Total 6–10 h",
      tripReport:"2-FA 30 mg: como un café muy fuerte pero más enfocado.",
      description:"2-Fluoroanfetamina. Riesgo cardiaco. Insomnio."
    },
    "3-FA": {
      effets:["Estimulación", "Empatía leve", "Concentración"],
      dosage:{faible:"15–25 mg",modere:"30–50 mg",fort:"70–100 mg"},
      duree:"Inicio 30–60 min | Total 6–10 h",
      tripReport:"3-FA 40 mg: entre anfetamina y MDMA, empatía suave.",
      description:"Liberador monoaminérgico equilibrado."
    },
    "4-FMA": {
      effets:["Estimulación", "Euforia leve"],
      dosage:{faible:"40–80 mg",modere:"80–150 mg",fort:"150 mg+"},
      duree:"Inicio 30–60 min | Total 3–5 h",
      tripReport:"4-FMA: estimulante anfetamínico fluorado, más 'speed' que el 4-FA. Datos limitados, riesgos cardiovasculares.",
      description:"Liberador de dopamina/noradrenalina. Precaución cardiaca, sin combinaciones estimulantes."
    },
    "Salvia divinorum": {
      effets:["Disociación intensa", "Distorsiones de la realidad", "Fusión con objetos", "Pérdida del cuerpo"],
      dosage:{faible:"hojas secas 0,25–0,5 g",modere:"extracto 5×: 0,1–0,2 g",fort:"salvinorina A pura: 200–500 µg (muy potente)"},
      duree:"Inicio <1 min (fumada) / 10 min (sublingual) | Total 5–20 min (fumada) / hasta 2 h (sublingual)",
      tripReport:"Salvia fumada: viaje extremadamente rápido, intenso e imprevisible (risa incontrolable, fusión con el entorno, pérdida total de referencias), afortunadamente breve. Siempre con un sitter sobrio, pues se pierde el control motor.",
      description:"Salvinorina A: agonista kappa-opioide selectivo (≠ psicodélicos serotoninérgicos). El psicoactivo natural más potente conocido. Sin toxicidad ni adicción notables, pero accidentes físicos frecuentes (caídas). Raras psicosis prolongadas."
    },
    "Kava": {
      effets:["Relajación", "Ansiólisis", "Sociabilidad", "Entumecimiento bucal"],
      dosage:{faible:"1 cucharada (~70 g de raíz en bebida)",modere:"dosis social tradicional",fort:"varios cuencos (sedación, náuseas)"},
      duree:"Inicio 20–30 min | Total 2–4 h",
      tripReport:"Kava (bebida del Pacífico): relajación cercana a un alcohol suave o una benzo, sin perder lucidez, con la lengua entumecida. Apreciada en contexto social. Posible hepatotoxicidad con uso intensivo o con alcohol.",
      description:"Kavalactonas: modulación GABA. Sedante ansiolítico. Riesgo hepático (sobre todo extractos, alcohol, hígado frágil). Potencia el alcohol y las benzodiazepinas."
    },
    "Khat": {
      effets:["Estimulación", "Euforia leve", "Locuacidad", "Supresión del apetito"],
      dosage:{faible:"unas hojas frescas",modere:"1 manojo masticado (~100–200 g)",fort:"uso prolongado durante varias horas"},
      duree:"Inicio 15–45 min | Total 3–6 h (masticación prolongada)",
      tripReport:"Khat: hojas frescas masticadas durante horas (Cuerno de África, península arábiga). Estimulación tipo anfetamina suave, euforia social. Insomnio, problemas dentales y dependencia con uso diario.",
      description:"Catinona + catina (anfetaminas naturales). Liberación de dopamina/noradrenalina. Debe consumirse fresco (la catinona se degrada). Riesgos cardiovasculares, dependencia psíquica."
    },
    "Kanna": {
      effets:["Elevación del ánimo", "Ansiólisis", "Euforia leve", "Sociabilidad"],
      dosage:{faible:"50–100 mg",modere:"100–250 mg",fort:"250–500 mg+"},
      duree:"Inicio 15–45 min | Total 1–3 h",
      tripReport:"Kanna (Sudáfrica): masticada, esnifada o en polvo. Efecto suave ansiolítico y ligeramente eufórico, a veces empatógeno a dosis más alta. Combinada con ISRS: precaución (síndrome serotoninérgico teórico).",
      description:"Mesembrina: inhibidor de recaptación de serotonina + inhibidor PDE4. Efecto suave. Evitar con antidepresivos ISRS/IMAO."
    },
    "Lotus bleu": {
      effets:["Relajación", "Euforia leve", "Ensoñación", "Sedación suave"],
      dosage:{faible:"infusión 2–5 g",modere:"5–10 g (infusión/vino)",fort:"extractos concentrados"},
      duree:"Inicio 20–45 min | Total 1–3 h",
      tripReport:"Loto azul (Nymphaea caerulea): en infusión, fumado o macerado en vino. Relajación suave y algo onírica, usada en el antiguo Egipto. Efectos sutiles, a veces decepcionantes.",
      description:"Aporfina + nuciferina (modulación dopaminérgica). Efecto relajante leve. Baja toxicidad a dosis usuales."
    },
    "Bétel": {
      effets:["Estimulación", "Bienestar", "Calor", "Salivación roja"],
      dosage:{faible:"1 mascada",modere:"uso regular durante el día",fort:"uso crónico"},
      duree:"Inicio 5–15 min | Total 1–3 h",
      tripReport:"Nuez de areca/betel: mascada en el Sudeste Asiático, estimulante leve y euforizante. Tiñe la boca de rojo. Uso crónico: fuerte adicción y cánceres orofaríngeos.",
      description:"Arecolina: agonista colinérgico. Estimulante. Carcinógeno comprobado (cavidad oral) con uso crónico. Dependencia marcada."
    },
    "Muscade": {
      effets:["Sedación", "A dosis alta: delirio, alucinaciones", "Boca seca", "Náuseas"],
      dosage:{faible:"no psicoactiva (especia)",modere:"5–10 g (10–20 g de polvo)",fort:"20 g+ (delirio desagradable, peligroso)"},
      duree:"Inicio 3–6 h (muy lento) | Total 12–48 h",
      tripReport:"Nuez moscada a dosis alta: largo delirio anticolinérgico, a menudo muy desagradable (náuseas, boca seca, taquicardia, confusión, 'resaca' de 2 días). Rara vez se repite.",
      description:"Miristicina + elemicina (efectos anticolinérgicos y débilmente psicodélicos). Subida muy lenta engañosa. Malestar marcado, riesgo a dosis alta."
    },
    "Absinthe / Armoise": {
      effets:["Embriaguez", "Efecto descrito como 'claro'", "Relajación"],
      dosage:{faible:"una copa dosificada de absenta",modere:"uso social",fort:"alcoholización fuerte"},
      duree:"Inicio como el alcohol | Total como el alcohol",
      tripReport:"Absenta: el efecto viene sobre todo del alcohol (a menudo 50–70%). La tuyona del ajenjo está en dosis demasiado baja para los efectos 'alucinógenos' del mito. Los riesgos son los del alcohol fuerte.",
      description:"Tuyona (ajenjo/Artemisia): antagonista GABA a dosis alta (convulsivante), pero las cantidades modernas son bajas. El peligro real sigue siendo el alcohol."
    },
    "Éphédra": {
      effets:["Estimulación", "Energía", "Supresión del apetito", "Broncodilatación"],
      dosage:{faible:"efedrina 8–15 mg",modere:"15–30 mg",fort:"50 mg+ (riesgo cardiaco)"},
      duree:"Inicio 30–60 min | Total 3–6 h",
      tripReport:"Efedra (ma huang): estimulante y supresor del apetito, antes en productos 'quemagrasas'. Riesgos cardiovasculares serios (hipertensión, arritmias, ictus), sobre todo con cafeína.",
      description:"Efedrina/pseudoefedrina: agonistas adrenérgicos. Hipertensión, taquicardia. Peligrosa para el corazón, interacciones con estimulantes e IMAO."
    },
    "Wachuma (San Pedro)": {
      effets:["Alucinaciones visuales", "Introspección", "Empatía", "Náuseas (subida)"],
      dosage:{faible:"~15–25 cm de cactus fresco",modere:"25–50 cm (≈ mescalina 200–400 mg)",fort:"cactus largo / extracto"},
      duree:"Inicio 1–2 h | Total 8–14 h",
      tripReport:"San Pedro/Wachuma: cactus de mescalina, viaje psicodélico largo y suave, a menudo descrito como cálido y 'terroso'. Fuerte náusea en la subida. Se recomiendan entorno y sitter.",
      description:"Mescalina (fenetilamina, agonista 5-HT2A). Como el peyote pero más accesible. Interacciones IMAO/ISRS. Precauciones cardiovasculares."
    },
    "Peyotl": {
      effets:["Alucinaciones", "Introspección profunda", "Empatía", "Náuseas"],
      dosage:{faible:"3–4 botones frescos",modere:"5–8 botones (≈ mescalina 200–400 mg)",fort:"10+ botones"},
      duree:"Inicio 1–2 h | Total 8–12 h",
      tripReport:"Peyote: pequeño cactus sagrado (Norteamérica), viaje largo de mescalina. Muy amargo, náuseas frecuentes. Planta amenazada y sagrada para varios pueblos: uso respetuoso.",
      description:"Mescalina. Agonista 5-HT2A. Interacciones IMAO/ISRS, precauciones cardiacas. Especie protegida, crecimiento muy lento."
    },
    "Champignons Amanita muscaria": {
      effets:["Sedación onírica", "Distorsiones", "Microsueños", "Delirio"],
      dosage:{faible:"1 g seco (precaución)",modere:"5–10 g seco",fort:"10 g+ (delirio, náuseas)"},
      duree:"Inicio 30–120 min | Total 4–10 h",
      tripReport:"Amanita matamoscas: efecto onírico/sedante, muy distinto de las setas psilocibe (no es un psicodélico). Náuseas, confusión, microsueños. Debe descarboxilarse; el ácido iboténico es neurotóxico.",
      description:"Muscimol (agonista GABA-A) + ácido iboténico (neurotóxico, convertido en muscimol). No confundir con las amanitas mortales. Dosificación muy variable."
    },
    "Belladone": {
      effets:["Delirio", "Alucinaciones", "Midriasis", "Taquicardia"],
      dosage:{faible:"cualquier dosis es arriesgada",modere:"margen terapéutico/tóxico estrecho",fort:"coma, muerte posible"},
      duree:"Inicio 1–2 h | Total 12–48 h",
      tripReport:"Belladona: delirante anticolinérgico muy peligroso (como la Datura). Delirio desagradable, fiebre, visión borrosa, riesgo de coma y muerte. Margen mínimo entre dosis eficaz y mortal.",
      description:"Atropina, escopolamina, hiosciamina: anticolinérgicos. Toxicidad cardiaca y neurológica grave. A considerar como un veneno."
    },
    "Jusquiame": {
      effets:["Delirio", "Alucinaciones", "Sedación", "Midriasis"],
      dosage:{faible:"cualquier dosis es arriesgada",modere:"margen tóxico estrecho",fort:"coma, muerte posible"},
      duree:"Inicio 1–2 h | Total 8–24 h",
      tripReport:"Beleño: otra solanácea delirante (familia Datura/belladona). Efectos anticolinérgicos peligrosos y desagradables. Riesgo vital. A evitar.",
      description:"Escopolamina, hiosciamina, atropina. Delirante tóxico. Sin margen de seguridad fiable."
    },
    "Datura": {
      effets:["Delirio total", "Alucinaciones reales", "Hipertermia", "Amnesia"],
      dosage:{faible:"desconocido",modere:"desconocido",fort:"1 flor = muerte posible"},
      duree:"Inicio 30–120 min | Total 12–48 h",
      tripReport:"Datura: imposible de dosificar. No es un viaje bonito — delirio real, actos peligrosos. Hospitalizaciones sistemáticas.",
      description:"Escopolamina/atropina. Ningún viaje agradable. Hospitalización casi sistemática. Muerte frecuente."
    },
    "Yopo / Anadenanthera": {
      effets:["Alucinaciones intensas", "Visiones", "Náuseas", "Efecto breve"],
      dosage:{faible:"una pizca de polvo esnifado",modere:"dosis ritual (esnifada)",fort:"dosis alta esnifada"},
      duree:"Inicio 1–5 min | Total 30–90 min",
      tripReport:"Yopo: polvo de semillas esnifado (Amazonía/Orinoco), rico en bufotenina/DMT. Subida brutal y física (fuerte presión, náuseas), visiones intensas y cortas. Uso ritual con preparación.",
      description:"Bufotenina + DMT + 5-MeO-DMT (agonistas 5-HT2A). Efectos cardiovasculares marcados. A menudo combinado con inhibidores MAO: interacciones de riesgo."
    },
    "Crapaud du Colorado (5-MeO-DMT)": {
      effets:["Disolución del ego", "Experiencia mística", "Efecto muy intenso y breve"],
      dosage:{faible:"2–5 mg vaporizado",modere:"5–15 mg",fort:"20 mg+"},
      duree:"Inicio <1 min | Total 15–40 min",
      tripReport:"Veneno de Bufo alvarius / 5-MeO-DMT: uno de los psicodélicos más intensos, disolución total del ego en segundos. Muy corto pero abrumador. Riesgos: accidentes, angustia, interacciones IMAO mortales.",
      description:"5-MeO-DMT (agonista 5-HT1A/2A). Distinto del DMT clásico. Sitter imprescindible. Mortal combinado con IMAO. Superficies blandas, nunca solo·a."
    },
    "5-MeO-DMT (synthétique)": {
      effets:["Disolución del ego", "Experiencia mística", "Efecto breve e intenso"],
      dosage:{faible:"2–5 mg vaporizado",modere:"5–12 mg",fort:"15 mg+"},
      duree:"Inicio <1 min | Total 15–40 min",
      tripReport:"5-MeO-DMT: uno de los psicodélicos más potentes, disolución total del ego en segundos. Muy corto pero abrumador. Mortal con un IMAO. Sitter y superficie blanda imprescindibles.",
      description:"Agonista 5-HT1A/2A. Distinto del DMT visual. Interacción IMAO potencialmente mortal. Angustia/blackout frecuentes."
    },
    "LSA": {
      effets:["Alucinaciones", "Sedación", "Introspección", "Náuseas"],
      dosage:{faible:"25–75 µg",modere:"75–150 µg",fort:"200–400 µg"},
      duree:"Inicio 30–90 min | Total 8–12 h",
      tripReport:"LSA 100 µg: viaje sedante. Náuseas importantes.",
      description:"Presente en semillas de Morning Glory. Menos potente que el LSD."
    },
    "Muscimol": {
      effets:["Sedación onírica", "Distorsiones", "Relajación profunda", "Delirio leve"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"10–15 mg+"},
      duree:"Inicio 30–120 min | Total 4–10 h",
      tripReport:"Muscimol (amanita matamoscas) ~5 mg: estado de ensueño, pesadez, a veces náuseas. A dosis alta: confusión, microsueños, delirio. Muy variable según la persona.",
      description:"Agonista GABA-A potente (≠ cannabinoide). Principio activo de la Amanita muscaria, vendido en gummies. El ácido iboténico asociado es neurotóxico y se convierte en muscimol por descarboxilación. Náuseas frecuentes, precaución con la dosis real de los productos."
    },
    "Modafinil": {
      effets:["Vigilia", "Concentración", "Reducción de somnolencia"],
      dosage:{faible:"50–100 mg",modere:"200 mg",fort:"400 mg"},
      duree:"Inicio 45–90 min | Total 12–15 h",
      tripReport:"Modafinilo 200 mg: 12 h de concentración pura.",
      description:"Eugeroico. Hepatotoxicidad rara. Reduce la eficacia anticonceptiva."
    },
    "Adrafinil": {
      effets:["Vigilia", "Concentración", "Reducción de fatiga"],
      dosage:{faible:"150–300 mg",modere:"300–600 mg",fort:"600–900 mg"},
      duree:"Inicio 60–90 min | Total 8–12 h",
      tripReport:"Adrafinilo 300 mg: mayor estado de alerta. Sin euforia.",
      description:"Profármaco del modafinilo. Hepatotóxico con uso regular."
    },
    "Armodafinil": {
      effets:["Vigilia prolongada", "Concentración", "Reducción de somnolencia"],
      dosage:{faible:"50–100 mg",modere:"150 mg",fort:"200–300 mg"},
      duree:"Inicio 45–90 min | Total 10–15 h",
      tripReport:"Armodafinilo 150 mg: 14 h de trabajo sin fatiga. Sin euforia.",
      description:"Enantiómero R del modafinilo. Riesgo hepático a largo plazo."
    },
    "Méthylphénidate": {
      effets:["Estimulación", "Concentración", "Reducción del apetito", "Euforia leve"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"60–100 mg"},
      duree:"Inicio 20–40 min | Total 3–5 h",
      tripReport:"Metilfenidato 30 mg: concentración láser. Dependencia si se usa de forma recreativa.",
      description:"Ritalin: inhibidor DAT/NET. Cardiotóxico. IMAO contraindicados."
    },
    "Ethylphénidate": {
      effets:["Estimulación", "Euforia", "Concentración", "Insomnio"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Inicio 20–40 min | Total 4–8 h",
      tripReport:"Etilfenidato 30 mg: euforia intensa tipo cocaína pero más larga.",
      description:"Inhibidor DAT. Perfil tipo cocaína. Esnifado = riesgo vascular grave."
    },
    "Piracétam": {
      effets:["Mejora de memoria", "Fluidez verbal", "Neuroprotección"],
      dosage:{faible:"1600–2400 mg",modere:"2400–4800 mg",fort:"6400–9600 mg"},
      duree:"Inicio 1–2 h | Total 5–8 h",
      tripReport:"Piracetam 4800 mg: mejora mental tras 1 semana. Tomar con colina.",
      description:"Racetam pionero. Tomar con colina."
    },
    "Aniracétam": {
      effets:["Mejora de memoria", "Reducción de ansiedad", "Estimulación leve"],
      dosage:{faible:"400–750 mg",modere:"750–1500 mg",fort:"2000–3000 mg"},
      duree:"Inicio 30–60 min | Total 3–5 h",
      tripReport:"Aniracetam 750 mg: reducción de la ansiedad social, claridad mental.",
      description:"Modulador AMPA y colinérgico. Soluble en grasas."
    },
    "Oxiracétam": {
      effets:["Estimulación leve", "Mejora de memoria", "Claridad mental"],
      dosage:{faible:"400–800 mg",modere:"800–1600 mg",fort:"2000–3000 mg"},
      duree:"Inicio 30–60 min | Total 6–8 h",
      tripReport:"Oxiracetam 1200 mg: estimulación leve, mejor fluidez verbal.",
      description:"Racetam ligeramente estimulante."
    },
    "Phénylpiracétam": {
      effets:["Estimulación leve", "Concentración", "Mejora atlética"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Inicio 30–60 min | Total 5–8 h",
      tripReport:"Fenilpiracetam 150 mg: mejor concentración y resistencia física.",
      description:"Prohibido en competición (AMA). Tolerancia rápida."
    },
    "Noopept": {
      effets:["Mejora de memoria", "Neuroprotección", "Ansiólisis leve"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"30–40 mg"},
      duree:"Inicio 20–30 min | Total 3–5 h",
      tripReport:"Noopept 10 mg: leve mejora de la memorización.",
      description:"Análogo del piracetam 1000× más potente. Estimula NGF y BDNF."
    },
    "5-HTP": {
      effets:["Mejora del ánimo", "Reducción de ansiedad", "Ayuda al sueño"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300–500 mg"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"5-HTP 200 mg: mejora del ánimo. Útil post-MDMA (D+3).",
      description:"Nunca combinar con IMAO o ISRS. Síndrome serotoninérgico."
    },
    "Mélatonine": {
      effets:["Inducción del sueño", "Regulación del ritmo circadiano"],
      dosage:{faible:"0,5–1 mg",modere:"2–5 mg",fort:"10–20 mg"},
      duree:"Inicio 20–40 min | Total 4–8 h",
      tripReport:"Melatonina 1 mg: facilita el inicio del sueño. Más no es mejor.",
      description:"Hormona fisiológica. Riesgo bajo."
    },
    "Diphenhydramine": {
      effets:["Sedación", "A dosis alta: delirio, alucinaciones"],
      dosage:{faible:"25–50 mg",modere:"100–200 mg (sedante)",fort:"300 mg+ (delirio peligroso)"},
      duree:"Inicio 30–60 min | Total 4–8 h",
      tripReport:"Difenhidramina (Benadryl): sedante a dosis normal; a dosis alta, delirio anticolinérgico muy desagradable y peligroso (taquicardia, hipertermia, convulsiones). No es un 'viaje' buscado.",
      description:"Antagonista H1 + anticolinérgico central. Sobredosis: delirio, retención urinaria, arritmias, convulsiones. Potencia los depresores."
    },
    "Prométhazine": {
      effets:["Sedación", "Somnolencia", "Potenciación de opioides"],
      dosage:{faible:"12,5–25 mg",modere:"25–50 mg",fort:"75 mg+"},
      duree:"Inicio 20–60 min | Total 4–8 h",
      tripReport:"Prometazina: antihistamínico sedante, componente del 'lean' (jarabe de codeína-prometazina). Refuerza la sedación y la depresión respiratoria de los opioides.",
      description:"Antagonista H1 + anticolinérgico. Peligrosa combinada con opioides (lean). Riesgo de QT largo y depresión respiratoria."
    },
    "Hydroxyzine": {
      effets:["Sedación", "Ansiólisis", "Somnolencia"],
      dosage:{faible:"25 mg",modere:"50–100 mg",fort:"150 mg+"},
      duree:"Inicio 30–60 min | Total 4–8 h",
      tripReport:"Hidroxizina (Atarax): antihistamínico sedante usado contra la ansiedad y el picor. Poco euforizante. Riesgo de alargamiento del QT a dosis alta.",
      description:"Antagonista H1 + efecto ansiolítico. Potencia otros depresores. Sobredosis: sedación, taquicardia, arritmias."
    },
    "Paracétamol": {
      effets:["Analgesia", "Antipirético"],
      dosage:{faible:"500 mg",modere:"1000 mg",fort:"4000 mg/día (hepatotóxico)"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"Paracetamol 1000 mg: eficaz pero hepatotóxico en sobredosis o con alcohol.",
      description:"Metabolismo hepático. Alcohol → hepatotoxicidad severa. Sobredosis = insuficiencia hepática mortal."
    },
    "Ibuprofène": {
      effets:["Analgesia", "Antiinflamatorio", "Antipirético"],
      dosage:{faible:"200–400 mg",modere:"400–600 mg",fort:"800–1200 mg"},
      duree:"Inicio 30–60 min | Total 6–8 h",
      tripReport:"Ibuprofeno 400 mg: analgésico eficaz. Úlcera gástrica con uso crónico.",
      description:"AINE: inhibidor COX. Úlceras, nefrotoxicidad. Desaconsejado con anticoagulantes."
    },
    "25I-NBOMe": {
      effets:["Alucinaciones potentes", "Agitación", "Hipertermia"],
      dosage:{faible:"200–400 µg",modere:"500–800 µg",fort:"1 mg+"},
      duree:"Inicio 20–60 min | Total 5–10 h",
      tripReport:"25I-NBOMe 600 µg: hospitalizado por taquicardia. Esta sustancia mata.",
      description:"NBOMe extremadamente potente. Numerosas muertes: convulsiones, arritmias."
    },
    "25C-NBOMe": {
      effets:["Alucinaciones intensas", "Vasoconstricción", "Agitación"],
      dosage:{faible:"200–400 µg",modere:"400–700 µg",fort:"1 mg+"},
      duree:"Inicio 20–60 min | Total 6–8 h",
      tripReport:"25C-NBOMe 500 µg: convulsiones notificadas a dosis alta.",
      description:"NBOMe de síntesis. Efectos cardiovasculares severos."
    },
    "25B-NBOMe": {
      effets:["Alucinaciones", "Taquicardia", "Vasoconstricción"],
      dosage:{faible:"200–400 µg",modere:"400–700 µg",fort:"1–1,5 mg"},
      duree:"Inicio 20–60 min | Total 5–8 h",
      tripReport:"25B-NBOMe 500 µg: calambres musculares y el corazón desbocado.",
      description:"NBOMe: muertes documentadas. Nunca inyectar. Taquicardia → arritmia fatal."
    },
    "DOB": {
      effets:["Alucinaciones", "Estimulación", "Efectos muy largos", "Vasoconstricción"],
      dosage:{faible:"1–2 mg",modere:"2–3 mg",fort:"3–5 mg"},
      duree:"Inicio 1,5–3 h | Total 12–24 h",
      tripReport:"DOB: psicodélico extremadamente potente (activo al miligramo) y muy largo. Vasoconstricción marcada (riesgo para las extremidades). A menudo vendido en papel secante en lugar de LSD → sobredosis si se toma como LSD.",
      description:"Agonista 5-HT2A parcial, vida media larga. Vasoconstricción severa posible (isquemia). Dosis al mg, nunca en secante presunto LSD."
    },
    "DOC": {
      effets:["Alucinaciones", "Estimulación fuerte", "Efectos muy largos"],
      dosage:{faible:"1–3 mg",modere:"3–5 mg",fort:"5–8 mg"},
      duree:"Inicio 1,5–3 h | Total 12–20 h",
      tripReport:"DOC: análogo clorado del DOB, psicodélico estimulante muy largo. A menudo en secante. Vasoconstricción y estimulación cardiaca marcadas.",
      description:"Agonista 5-HT2A, vida media larga. Riesgos cardiovasculares y vasoconstrictores. Dosis precisa al mg."
    },
    "DOI": {
      effets:["Alucinaciones", "Estimulación", "Efectos muy largos"],
      dosage:{faible:"1–3 mg",modere:"3–5 mg",fort:"5–7 mg"},
      duree:"Inicio 1,5–3 h | Total 12–30 h",
      tripReport:"DOI: DOx yodado, muy largo y potente. Usado sobre todo en investigación (ligando 5-HT2A), a veces vendido en secante.",
      description:"Agonista 5-HT2A potente. Efectos extremadamente largos, vasoconstricción. Dosis al mg."
    },
    "AMT": {
      effets:["Alucinaciones", "Estimulación", "Empatía", "Efectos muy largos", "Náuseas"],
      dosage:{faible:"15–25 mg",modere:"25–40 mg",fort:"40–60 mg"},
      duree:"Inicio 2–4 h | Total 12–24 h",
      tripReport:"AMT (alfa-metiltriptamina): psicodélico-estimulante extremadamente largo. Subida muy lenta (riesgo de redose), náuseas. También es un IMAO débil → interacciones alimentarias/medicamentosas peligrosas.",
      description:"Liberador de monoaminas + agonista 5-HT2A + actividad IMAO. Interacciones de riesgo (tiramina, ISRS, otros serotoninérgicos). Duración agotadora."
    },
    "4-HO-MET": {
      effets:["Alucinaciones coloridas", "Euforia", "Risas"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"25–40 mg"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"4-HO-MET (metocina): psicodélico cercano a la psilocina, a menudo descrito como alegre y colorido, más corto. Manejable, pero sigue siendo un psicodélico potente.",
      description:"Agonista 5-HT2A. Análogo de la psilocina. Precauciones psicodélicas clásicas (antecedentes psiquiátricos, litio)."
    },
    "4-HO-MiPT": {
      effets:["Alucinaciones", "Euforia corporal", "Empatía"],
      dosage:{faible:"10–20 mg",modere:"20–30 mg",fort:"30–45 mg"},
      duree:"Inicio 20–45 min | Total 4–6 h",
      tripReport:"4-HO-MiPT (miprocina): triptamina eufórica y muy táctil/corporal, visuales marcados. Apreciada por su calidez. Sigue siendo un psicodélico serio.",
      description:"Agonista 5-HT2A. Análogo de la psilocina. Precauciones clásicas."
    },
    "DPT": {
      effets:["Alucinaciones intensas", "Profundidad espiritual", "Confusión"],
      dosage:{faible:"20–50 mg",modere:"75–125 mg",fort:"150–250 mg"},
      duree:"Inicio 5–20 min (inhalado) | Total 3–5 h",
      tripReport:"DPT 80 mg fumado: similar al DMT pero más aterrador.",
      description:"Agonista 5-HT2A potente. El IMAO potencia → duración imprevisible."
    },
    "DiPT": {
      effets:["Distorsión auditiva", "Alucinaciones leves", "Introspección"],
      dosage:{faible:"10–20 mg",modere:"25–40 mg",fort:"50–80 mg"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"DiPT 30 mg: distorsión única del tono de los sonidos.",
      description:"Agonista 5-HT2A. Efectos solo auditivos."
    },
    "MET": {
      effets:["Alucinaciones", "Euforia", "Estimulación leve"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Inicio 45–75 min | Total 4–7 h",
      tripReport:"MET 30 mg: viaje corto y colorido.",
      description:"Agonista 5-HT2A."
    },
    "MiPT": {
      effets:["Alucinaciones leves", "Empatía", "Estimulación leve"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–40 mg"},
      duree:"Inicio 30–60 min | Total 5–7 h",
      tripReport:"MiPT 15 mg: cercano a la psilocibina pero más empático.",
      description:"Agonista 5-HT2A/1A."
    },
    "ETH-LAD": {
      effets:["Alucinaciones", "Euforia", "Estimulación leve"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–300 µg"},
      duree:"Inicio 45–90 min | Total 8–12 h",
      tripReport:"ETH-LAD 120 µg: más sensual que el LSD, visuales coloridos.",
      description:"Análogo etilo del LSD. Litio prohibido."
    },
    "PRO-LAD": {
      effets:["Alucinaciones", "Euforia", "Estimulación leve"],
      dosage:{faible:"50–100 µg",modere:"150–200 µg",fort:"250–400 µg"},
      duree:"Inicio 45–90 min | Total 8–12 h",
      tripReport:"PRO-LAD 175 µg: similar al LSD, ligeramente estimulante.",
      description:"Agonista 5-HT2A. Mismas precauciones que el LSD."
    },
    "Mescaline (sulfate/HCl)": {
      effets:["Alucinaciones coloridas", "Empatía", "Introspección", "Náuseas"],
      dosage:{faible:"100–200 mg",modere:"200–400 mg",fort:"400–700 mg"},
      duree:"Inicio 1–2 h | Total 8–12 h",
      tripReport:"Mescalina pura (polvo extraído o sintético): psicodélico clásico cálido y visual, con subida nauseosa. Más 'suave' y corporal que el LSD. Interacciones IMAO/ISRS.",
      description:"Agonista 5-HT2A. Bien tolerada fisiológicamente pero precauciones cardiacas. Dosis altas en peso (sustancia poco potente al mg)."
    },
    "Escaline": {
      effets:["Alucinaciones", "Empatía", "Euforia"],
      dosage:{faible:"15–25 mg",modere:"30–50 mg",fort:"60–100 mg"},
      duree:"Inicio 60–120 min | Total 8–14 h",
      tripReport:"Escalina 40 mg: cercana a la mescalina pero más corta.",
      description:"Etoxi-mescalina. Interacciones IMAO."
    },
    "Proscaline": {
      effets:["Alucinaciones", "Empatía", "Euforia"],
      dosage:{faible:"20–30 mg",modere:"40–60 mg",fort:"70–100 mg"},
      duree:"Inicio 60–90 min | Total 8–12 h",
      tripReport:"Proscalina 50 mg: similar a la mescalina, algo menos intensa.",
      description:"Propoxi-mescalina. Agonista 5-HT2A."
    },
    "Méthallylescaline": {
      effets:["Alucinaciones", "Empatía", "Duración muy larga"],
      dosage:{faible:"40–60 mg",modere:"60–100 mg",fort:"120–160 mg"},
      duree:"Inicio 60–120 min | Total 12–18 h",
      tripReport:"Metalilescalina 80 mg: sorprendente viaje de 16 h.",
      description:"Duración récord entre las fenetilaminas."
    },
    "Allylescaline": {
      effets:["Alucinaciones", "Empatía", "Euforia leve"],
      dosage:{faible:"15–25 mg",modere:"30–45 mg",fort:"50–80 mg"},
      duree:"Inicio 60–120 min | Total 8–14 h",
      tripReport:"Alilescalina 35 mg: similar a la mescalina pero más corta.",
      description:"Agonista 5-HT2A. Datos de seguridad limitados."
    },
    "PMA": {
      effets:["Hipertermia", "Taquicardia", "Euforia débil"],
      dosage:{faible:"desconocido",modere:"desconocido",fort:"50–100 mg (mortal)"},
      duree:"Inicio 2–3 h | Total 8–12 h",
      tripReport:"PMA vendido como MDMA. Inicio retardado → redose → muerte. Muchas muertes en festivales.",
      description:"Para-metoxianfetamina. Liberador de 5-HT sin DA → hipertermia mortal. Inicio engañoso."
    },
    "Clonidine": {
      effets:["Sedación", "Ansiólisis", "Reducción del craving", "Hipotensión"],
      dosage:{faible:"0,1 mg",modere:"0,2–0,3 mg",fort:"0,4–0,6 mg"},
      duree:"Inicio 30–60 min | Total 6–8 h",
      tripReport:"Clonidina 0,2 mg: ayuda en la abstinencia opioide. Alcohol = hipotensión severa.",
      description:"Agonista alfa-2. Usada en abstinencia opioide/alcohólica. Alcohol = síncope."
    },
    "2-FEA": {
      effets:["Empatía", "Euforia leve", "Estimulación"],
      dosage:{faible:"50–80 mg",modere:"80–120 mg",fort:"150–200 mg"},
      duree:"Inicio 30–60 min | Total 5–8 h",
      tripReport:"2-FEA 100 mg: entactógeno suave, presuntamente menos neurotóxico.",
      description:"Entactógeno de síntesis, liberador serotoninérgico moderado. Riesgo serotoninérgico."
    },
    "2-FMA": {
      effets:["Concentración", "Estimulación", "Vigilia"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–40 mg"},
      duree:"Inicio 30–60 min | Total 8–12 h",
      tripReport:"2-FMA 15 mg: estimulante de estudio eficaz. Insomnio si se toma tarde.",
      description:"Estimulante largo, nootrópico de productividad. Riesgo cardiovascular."
    },
    "25B-NBOH": {
      effets:["Alucinaciones visuales", "Euforia", "Taquicardia"],
      dosage:{faible:"250–500 µg",modere:"500–750 µg",fort:"1–1,5 mg"},
      duree:"Inicio 30–60 min | Total 5–8 h",
      tripReport:"25B-NBOH 700 µg: visuales intensos. Vasoconstricción marcada.",
      description:"Agonista 5-HT2A muy potente. Convulsiones documentadas."
    },
    "2M2B": {
      effets:["Sedación", "Desinhibición", "Euforia tipo alcohol", "Amnesia"],
      dosage:{faible:"0,5–1 ml",modere:"1–2 ml",fort:"2–3 ml"},
      duree:"Inicio 15–30 min | Total 2–4 h",
      tripReport:"2M2B 1,5 ml: blackout muy rápido, margen de seguridad ridículo.",
      description:"Alcohol terciario. Coma a dosis baja. Sinergia fatal con benzos/opioides."
    },
    "3-FEA": {
      effets:["Empatía", "Euforia", "Estimulación"],
      dosage:{faible:"60–100 mg",modere:"100–150 mg",fort:"180–250 mg"},
      duree:"Inicio 30–60 min | Total 5–8 h",
      tripReport:"3-FEA 120 mg: más empatógeno que estimulante.",
      description:"Entactógeno, liberador serotoninérgico fuerte. Riesgo serotoninérgico."
    },
    "3-FMA": {
      effets:["Estimulación", "Concentración", "Vigilia"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–40 mg"},
      duree:"Inicio 30–60 min | Total 8–14 h",
      tripReport:"3-FMA 15 mg: estimulante limpio, muy eficaz para la productividad.",
      description:"Perfil dopaminérgico/noradrenérgico dominante."
    },
    "3-FPM": {
      effets:["Estimulación", "Concentración", "Euforia leve"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Inicio 20–45 min | Total 6–10 h",
      tripReport:"3-FPM 60 mg: similar al Ritalin pero más eufórico.",
      description:"Inhibidor de recaptación de monoaminas. Neurotoxicidad desconocida."
    },
    "3-MEC": {
      effets:["Estimulación", "Euforia", "Sociabilidad"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–350 mg"},
      duree:"Inicio 20–40 min | Total 3–5 h",
      tripReport:"3-MEC 150 mg: rush intenso, redose compulsivo.",
      description:"Catinona. Cardiotoxicidad, psicosis."
    },
    "6-APB": {
      effets:["Euforia", "Empatía", "Estimulación"],
      dosage:{faible:"60–80 mg",modere:"80–120 mg",fort:"150–200 mg"},
      duree:"Inicio 45–90 min | Total 6–10 h",
      tripReport:"6-APB 100 mg: cercano a la MDMA pero más psicodélico.",
      description:"Análogo benzofurano de la MDMA. Riesgo serotoninérgico."
    },
    "Butylone": {
      effets:["Euforia", "Empatía", "Estimulación"],
      dosage:{faible:"50–100 mg",modere:"100–175 mg",fort:"200–300 mg"},
      duree:"Inicio 20–45 min | Total 4–6 h",
      tripReport:"Butilona 120 mg: entactógeno corto, subida rápida.",
      description:"Liberador monoaminérgico. Redose frecuente → toxicidad."
    },
    "Desoxypipradrol": {
      effets:["Estimulación intensa", "Euforia", "Insomnio prolongado"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"10–15 mg"},
      duree:"Inicio 30–60 min | Total 16–24 h",
      tripReport:"Desoxipipradrol 7 mg: 20 h sin dormir. Psicosis tras 3 días.",
      description:"2-DPMP. Duración extremadamente larga, psicosis estimulante."
    },
    "EPT": {
      effets:["Alucinaciones", "Empatía", "Euforia leve"],
      dosage:{faible:"10–20 mg",modere:"25–40 mg",fort:"50–75 mg"},
      duree:"Inicio 30–60 min | Total 5–7 h",
      tripReport:"EPT 30 mg: viaje suave y empático.",
      description:"Agonista 5-HT2A. Pocos datos de seguridad."
    },
    "ETH-CAT": {
      effets:["Estimulación", "Euforia leve", "Insomnio"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–350 mg"},
      duree:"Inicio 20–40 min | Total 4–6 h",
      tripReport:"ETH-CAT 150 mg: redose frecuente, subida de tensión.",
      description:"Liberador monoaminérgico."
    },
    "Ethylone": {
      effets:["Euforia", "Empatía", "Estimulación"],
      dosage:{faible:"100–150 mg",modere:"150–225 mg",fort:"250–350 mg"},
      duree:"Inicio 30–60 min | Total 3–5 h",
      tripReport:"Etilona 180 mg: MDMA light, crash notable.",
      description:"Liberador monoaminérgico moderado."
    },
    "Hexédrone": {
      effets:["Estimulación", "Euforia", "Vasoconstricción"],
      dosage:{faible:"30–60 mg",modere:"60–100 mg",fort:"120–200 mg"},
      duree:"Inicio 15–30 min | Total 2–4 h",
      tripReport:"Hexedrona 80 mg: rush corto, craving intenso.",
      description:"Inhibidor DAT/NET. Uso compulsivo."
    },
    "Isopropylphénidate": {
      effets:["Estimulación", "Concentración", "Euforia leve"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Inicio 20–40 min | Total 4–8 h",
      tripReport:"Isopropilfenidato 25 mg: menos eufórico que el metilfenidato.",
      description:"Inhibidor DAT/NET. Perfil Ritalin algo más corto."
    },
    "LSM-775": {
      effets:["Alucinaciones leves", "Euforia", "Introspección"],
      dosage:{faible:"75–150 µg",modere:"200–350 µg",fort:"400–600 µg"},
      duree:"Inicio 60–90 min | Total 6–8 h",
      tripReport:"LSM-775 250 µg: más suave y corto que el LSD.",
      description:"Éster metílico del lisergol. Agonista 5-HT2A."
    },
    "LSZ": {
      effets:["Alucinaciones", "Estimulación leve", "Euforia"],
      dosage:{faible:"50–100 µg",modere:"100–200 µg",fort:"250–400 µg"},
      duree:"Inicio 60–90 min | Total 8–10 h",
      tripReport:"LSZ 150 µg: tipo LSD con sedación corporal leve.",
      description:"Análogo potente del LSD. Perfil similar."
    },
    "Lisdexamfétamine": {
      effets:["Estimulación", "Concentración", "Reducción del apetito"],
      dosage:{faible:"20–30 mg",modere:"50–70 mg",fort:"90–120 mg"},
      duree:"Inicio 60–90 min | Total 10–14 h",
      tripReport:"Lisdexanfetamina 50 mg: estimulante de larga duración, eficaz para el TDAH.",
      description:"Vyvanse: profármaco de d-anfetamina. IMAO contraindicados."
    },
    "MCPP": {
      effets:["Ansiedad", "Estimulación leve", "Náuseas"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Inicio 30–60 min | Total 5–7 h",
      tripReport:"MCPP 60 mg: ansiedad y náuseas. Poco recreativo.",
      description:"Contaminante hallado en éxtasis cortado."
    },
    "MDA": {
      effets:["Euforia", "Empatía", "Alucinaciones leves"],
      dosage:{faible:"60–80 mg",modere:"80–120 mg",fort:"150–200 mg"},
      duree:"Inicio 45–90 min | Total 6–10 h",
      tripReport:"MDA 100 mg: más alucinatorio que la MDMA.",
      description:"Precursor de la MDMA. Más neurotóxico. Evitar IMAO."
    },
    "MDAI": {
      effets:["Empatía", "Euforia leve", "Socialización"],
      dosage:{faible:"100–150 mg",modere:"150–250 mg",fort:"300–400 mg"},
      duree:"Inicio 30–60 min | Total 5–8 h",
      tripReport:"MDAI 200 mg: empatía suave sin estimulación.",
      description:"Liberador selectivo de serotonina. Poco adictivo solo."
    },
    "MDEA": {
      effets:["Euforia", "Empatía", "Estimulación moderada"],
      dosage:{faible:"80–100 mg",modere:"120–160 mg",fort:"200–250 mg"},
      duree:"Inicio 45–90 min | Total 4–6 h",
      tripReport:"MDEA 130 mg: similar a la MDMA pero menos intensa.",
      description:"Liberador monoaminérgico. Duración algo reducida."
    },
    "MDPHP": {
      effets:["Euforia intensa", "Estimulación", "Compulsión"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Inicio 10–20 min | Total 2–4 h",
      tripReport:"MDPHP 50 mg: rush fuerte y muy corto. Redose compulsivo.",
      description:"Inhibidor potente DAT. Extremadamente adictivo."
    },
    "Mexedrone": {
      effets:["Euforia leve", "Estimulación", "Empatía débil"],
      dosage:{faible:"100–150 mg",modere:"200–300 mg",fort:"400–500 mg"},
      duree:"Inicio 30–60 min | Total 3–5 h",
      tripReport:"Mexedrona 200 mg: a menudo combinada. Riesgo de interacción.",
      description:"Datos de seguridad limitados."
    },
    "Pentobarbital": {
      effets:["Sedación profunda", "Coma", "Depresión respiratoria"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300 mg+"},
      duree:"Inicio 15–30 min | Total 4–8 h",
      tripReport:"Pentobarbital: usado en eutanasia. Ningún uso recreativo razonable.",
      description:"Índice terapéutico ultraestrecho. Mezcla con alcohol = muerte."
    },
    "Phénobarbital": {
      effets:["Sedación", "Anticonvulsivo", "Ansiólisis"],
      dosage:{faible:"15–30 mg",modere:"30–60 mg",fort:"100–200 mg"},
      duree:"Inicio 20–60 min | Total 8–12 h",
      tripReport:"Fenobarbital 60 mg: sedación profunda.",
      description:"Depresión respiratoria. Numerosas interacciones CYP450."
    },
    "Pramiracétam": {
      effets:["Mejora de memoria", "Concentración", "Claridad mental"],
      dosage:{faible:"200–400 mg",modere:"400–800 mg",fort:"1200 mg"},
      duree:"Inicio 30–60 min | Total 6–8 h",
      tripReport:"Pramiracetam 600 mg: mejor retención de la información.",
      description:"Racetam liposoluble de alta potencia."
    },
    "Prolintane": {
      effets:["Estimulación", "Concentración", "Reducción de fatiga"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"30–50 mg"},
      duree:"Inicio 30–60 min | Total 6–10 h",
      tripReport:"Prolintano 15 mg: estimulante limpio sin euforia mayor.",
      description:"Inhibidor de recaptación DA/NA."
    },
    "Secobarbital": {
      effets:["Sedación", "Euforia", "Depresión respiratoria"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300 mg+"},
      duree:"Inicio 10–20 min | Total 3–6 h",
      tripReport:"Secobarbital 150 mg: margen de seguridad casi nulo.",
      description:"Depresión respiratoria. Potencialmente mortal."
    },
    "TMA-2": {
      effets:["Alucinaciones", "Euforia", "Duración larga"],
      dosage:{faible:"10–20 mg",modere:"25–40 mg",fort:"50–80 mg"},
      duree:"Inicio 60–120 min | Total 12–16 h",
      tripReport:"TMA-2 30 mg: similar a la mescalina, duración sorprendente.",
      description:"Anfetamina psicodélica. Interacciones IMAO."
    },
    "TMA-6": {
      effets:["Alucinaciones", "Empatía", "Duración larga"],
      dosage:{faible:"5–15 mg",modere:"20–35 mg",fort:"40–60 mg"},
      duree:"Inicio 60–120 min | Total 12–18 h",
      tripReport:"TMA-6 25 mg: más potente que el TMA-2, náuseas pronunciadas.",
      description:"Isómero del TMA-2. Interacciones IMAO."
    },
    "Theacrine": {
      effets:["Vigilia", "Concentración", "Euforia leve"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300–400 mg"},
      duree:"Inicio 45–90 min | Total 5–8 h",
      tripReport:"Teacrina 150 mg: tipo cafeína pero con menos crash.",
      description:"Tolerancia más lenta de desarrollar."
    },
    "3C-E": {
      effets:["Alucinaciones", "Empatía", "Estimulación"],
      dosage:{faible:"10–15 mg",modere:"20–30 mg",fort:"35–60 mg"},
      duree:"Inicio 60–120 min | Total 8–12 h",
      tripReport:"3C-E 25 mg: similar a la mescalina pero más estimulante.",
      description:"Interacciones IMAO documentadas."
    },
    "5-APB": {
      effets:["Empatía", "Euforia", "Estimulación"],
      dosage:{faible:"50–80 mg",modere:"80–120 mg",fort:"120–160 mg"},
      duree:"Inicio 45–90 min | Total 5–8 h",
      tripReport:"5-APB: benzofurano cercano al MDA/6-APB, mezcla empatía + estimulación, dura más que la MDMA. Carga cardiaca (agonista 5-HT2B → riesgo valvular teórico). Sin redose.",
      description:"Liberador de serotonina/dopamina, agonista 5-HT2B (riesgo cardiaco). Hipertermia posible. Evitar IMAO."
    },
    "6-APDB": {
      effets:["Empatía", "Calidez emocional", "Estimulación suave"],
      dosage:{faible:"40–70 mg",modere:"70–110 mg",fort:"110–150 mg"},
      duree:"Inicio 45–90 min | Total 4–6 h",
      tripReport:"6-APDB: entactógeno cercano al MDA, más suave y empático, menos estimulante. Mismas precauciones que los benzofuranos (5-HT2B).",
      description:"Liberador de serotonina. Agonista 5-HT2B (prudencia cardiaca). Hipertermia, sin IMAO."
    },
    "AB-CHMINACA": {
      effets:["Sedación extrema", "Paranoia", "Psicosis"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3 mg+"},
      duree:"Inicio 5–15 min | Total 2–5 h",
      tripReport:"AB-CHMINACA 1 mg: paralizado 2 h, corazón a 180. Sustancia aterradora.",
      description:"Noide de 3ª generación, ultrapotente. Numerosas muertes."
    },
    "JWH-018": {
      effets:["Euforia intensa", "Sedación", "Taquicardia", "Paranoia"],
      dosage:{faible:"0,5–1 mg",modere:"1–3 mg",fort:"4–6 mg"},
      duree:"Inicio 5–15 min | Total 2–4 h",
      tripReport:"JWH-018 2 mg: high de cannabis pero más fuerte y corto. Taquicardia a 3 mg.",
      description:"Cannabinoide naftilindol. Agonista CB1 completo. Muertes documentadas."
    },
    "JWH-073": {
      effets:["Sedación", "Euforia", "Taquicardia"],
      dosage:{faible:"0,5–1,5 mg",modere:"1,5–3 mg",fort:"4–6 mg"},
      duree:"Inicio 5–15 min | Total 2–4 h",
      tripReport:"JWH-073 2 mg: algo menos potente que el JWH-018.",
      description:"Butilnaftilindol, agonista CB1 completo."
    },
    "AM-2201": {
      effets:["Sedación", "Euforia", "Taquicardia", "Posible psicosis"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Inicio 5–15 min | Total 2–4 h",
      tripReport:"AM-2201 1,5 mg: potente y sedante. Convulsiones notificadas a 3 mg.",
      description:"Cannabinoide fluoropentilo. Agonista CB1 completo."
    },
    "AB-FUBINACA": {
      effets:["Sedación", "Paranoia", "Alucinaciones"],
      dosage:{faible:"0,3–0,7 mg",modere:"0,7–1,5 mg",fort:"2–3 mg"},
      duree:"Inicio 5–15 min | Total 2–4 h",
      tripReport:"AB-FUBINACA 1 mg: implicado en una serie de comas colectivos (Nueva York 2016).",
      description:"Carboxamida de indazol fluorobencilo. Agonista CB1 completo."
    },
    "5F-ADB": {
      effets:["Sedación extrema", "Psicosis", "Taquicardia severa"],
      dosage:{faible:"0,1–0,5 mg",modere:"0,5–1 mg",fort:"1,5 mg+"},
      duree:"Inicio 5–10 min | Total 1–3 h",
      tripReport:"5F-ADB: noide de 3ª generación. Muertes documentadas a dosis ínfima. Extremadamente peligroso.",
      description:"Carboxamida de indazol 5-fluoro. Agonista CB1 completo a plena potencia. Oleada de muertes en Europa 2016-2019."
    },
    "ADB-BUTINACA": {
      effets:["Sedación total", "Posible parada cardiaca", "Psicosis"],
      dosage:{faible:"0,1–0,3 mg",modere:"0,3–0,7 mg",fort:"1 mg+ (peligroso)"},
      duree:"Inicio 2–10 min | Total 1–3 h",
      tripReport:"ADB-BUTINACA: noide hallado en sobredosis mortales recientes. Uno de los más peligrosos actualmente.",
      description:"Agonista CB1 ultrapotente. Responsable de numerosas urgencias y hospitalizaciones 2020-2024."
    },
    "MDMB-4en-PINACA": {
      effets:["Sedación total", "Convulsiones", "Psicosis", "Posible parada cardiaca"],
      dosage:{faible:"0,1–0,25 mg",modere:"0,25–0,6 mg",fort:"1 mg+ (potencialmente mortal)"},
      duree:"Inicio 2–10 min | Total 1–4 h",
      tripReport:"MDMB-4en-PINACA: uno de los noides más hallados en muertes y conducción bajo influencia (2019-2024). El margen entre dosis activa y mortal es minúsculo.",
      description:"Agonista CB1 completo ultrapotente (~2,5 nM). A menudo pulverizado de forma desigual sobre material vegetal: sobredosis imprevisible. Lista I (EE. UU.), prohibido en la UE."
    },
    "ADB-4en-PINACA": {
      effets:["Sedación extrema", "Taquicardia", "Paranoia", "Pérdida de conciencia"],
      dosage:{faible:"0,1–0,3 mg",modere:"0,3–0,7 mg",fort:"1 mg+ (peligroso)"},
      duree:"Inicio 2–10 min | Total 1–3 h",
      tripReport:"ADB-4en-PINACA: noide de 3ª generación aparecido en 2021, muy potente, presente en incautaciones en prisiones (papeles impregnados).",
      description:"Agonista CB1 completo de alta afinidad. Dosificación a ciegas imposible para el usuario. Lista I temporal (EE. UU.)."
    },
    "4F-MDMB-BICA": {
      effets:["Sedación profunda", "Vómitos", "Convulsiones", "Distrés respiratorio"],
      dosage:{faible:"0,1–0,3 mg",modere:"0,3–0,8 mg",fort:"1 mg+ (peligroso)"},
      duree:"Inicio 2–10 min | Total 1–3 h",
      tripReport:"4F-MDMB-BICA: implicado en intoxicaciones colectivas. Como todos los noides, reparto desigual en la hierba = ruleta.",
      description:"Agonista CB1 completo. Metabolitos activos. Ningún margen de seguridad fiable. Clasificado como estupefaciente."
    },
    "CUMYL-PEGACLONE": {
      effets:["Sedación", "Bradicardia", "Confusión", "Pérdida de conciencia"],
      dosage:{faible:"0,2–0,5 mg",modere:"0,5–1,5 mg",fort:"2 mg+"},
      duree:"Inicio 5–15 min | Total 2–5 h",
      tripReport:"CUMYL-PEGACLONE: noide tipo gamma-carbolina, hallado en varias muertes en Europa (sobre todo Alemania).",
      description:"Agonista CB1 de estructura original (no un indazol/indol clásico). Detectado en casos mortales. Clasificado como estupefaciente."
    },
    "Propofol": {
      effets:["Sedación rápida", "Pérdida de conciencia", "Amnesia", "Euforia breve"],
      dosage:{faible:"no recreativo",modere:"dosis anestésica solo en hospital",fort:"apnea / parada respiratoria"},
      duree:"Inicio 15–45 s (IV) | Total 5–10 min",
      tripReport:"Propofol: anestésico IV ultrarrápido. Ningún uso recreativo seguro: el margen entre sedación y parada respiratoria es minúsculo, y no hay antídoto. Varias muertes de sanitarios que desviaron el producto.",
      description:"Agonista GABA-A potente. Sin efecto analgésico. Depresión respiratoria según dosis sin meseta de seguridad. Mortal fuera de la vigilancia anestésica con material de reanimación."
    },
    "Alpha-PHiP": {
      effets:["Estimulación", "Euforia", "Redose compulsivo"],
      dosage:{faible:"5–10 mg",modere:"15–25 mg",fort:"30 mg+"},
      duree:"Inicio 10–30 min | Total 2–4 h",
      tripReport:"Alpha-PHiP: análogo reciente del alpha-PVP, perfil cercano a la cocaína esnifado pero más duradero. Datos humanos muy limitados.",
      description:"Inhibidor de recaptación de monoaminas (pirrolidinofenona). Riesgos cardiovasculares y psiquiátricos comparables a otras catinonas pirrolidinadas."
    },
    "Xylazine": {
      effets:["Sedación prolongada", "Bradicardia", "Hipotensión", "Analgesia"],
      dosage:{faible:"adulterante no dosificado",modere:"presente en heroína/fentanilo",fort:"sedación profunda + heridas"},
      duree:"Inicio 5–15 min | Total 2–8 h+",
      tripReport:"Xilacina ('tranq'): sedante veterinario añadido al fentanilo/heroína para alargar el efecto. La naloxona no revierte su sedación. Provoca heridas necróticas en quienes se inyectan.",
      description:"Agonista alfa-2 (no opioide). Sin antídoto. Prolonga la sedación y el riesgo respiratorio combinado con opioides. Cuidado de heridas esencial."
    },
    "Médétomidine": {
      effets:["Sedación muy profunda", "Bradicardia severa", "Hipotensión"],
      dosage:{faible:"adulterante no dosificado",modere:"presente en el fentanilo",fort:"sedación extrema + abstinencia severa"},
      duree:"Inicio 5–20 min | Total varias horas",
      tripReport:"Medetomidina: tranquilizante veterinario que reemplaza a la xilacina como adulterante del fentanilo. Más potente, sedación más larga, abstinencia autonómica severa (hipertensión, taquicardia) resistente a los tratamientos habituales.",
      description:"Agonista alfa-2 potente. No revertido por la naloxona. Detectado en la mayoría de muestras de opioides callejeros en algunas ciudades de EE. UU. a finales de 2024."
    },
    "Graines de liseron (LSA)": {
      effets:["Alucinaciones leves", "Ensoñación", "Náuseas", "Vasoconstricción"],
      dosage:{faible:"3–5 semillas (Hawaiian baby woodrose)",modere:"5–8 semillas HBWR / 100–200 semillas ipomoea",fort:"8+ semillas HBWR"},
      duree:"Inicio 1–2 h | Total 6–10 h",
      tripReport:"Semillas de dondiego/HBWR: fuente natural de LSA, cercana a un LSD suave y corporal, pero con náuseas y vasoconstricción marcadas. Efecto a menudo sedante e incómodo físicamente.",
      description:"LSA (ergina), emparentada con el LSD pero más corporal/sedante. Vasoconstricción (evitar con problemas circulatorios). El recubrimiento de las semillas a veces es tóxico."
    },
    "Sels de bain (cathinones)": {
      effets:["Estimulación intensa", "Euforia", "Agitación", "Paranoia", "Psicosis"],
      dosage:{faible:"variable según la molécula",modere:"contenido real desconocido",fort:"delirio agitado, hipertermia"},
      duree:"Inicio 10–30 min | Total 2–6 h (variable)",
      tripReport:"'Sales de baño': nombre comercial cajón de sastre para catinonas de síntesis (MDPV, alpha-PVP/flakka, mefedrona, hexen…) vendidas con la etiqueta 'no apto para consumo'. Efectos estimulantes potentes, redose compulsivo, episodios mediáticos de delirio agitado y psicosis ('droga zombi'). Nunca sabes qué molécula ni qué dosis tomas.",
      description:"Familia de las catinonas sustituidas (inhibidores/liberadores de dopamina-noradrenalina). Composición y potencia imprevisibles. Riesgos: hipertermia, rabdomiólisis, fallo cardiaco, psicosis, fuerte adicción. Ver las fichas MDPV, Alpha-PVP, Mefedrona, Hexen y NEP para el detalle."
    },
    "Tusi (cocaïne rose)": {
      effets:["Estimulación", "Euforia", "Efectos imprevisibles según la mezcla"],
      dosage:{faible:"dosis desconocida (composición variable)",modere:"contenido real desconocido",fort:"riesgo de interacciones"},
      duree:"Inicio variable | Total variable",
      tripReport:"Tusi / tucibi / 2C / cocaína rosa: ATENCIÓN, casi nunca es 2C-B. Es una mezcla rosa de marketing (a menudo ketamina + MDMA + cafeína, a veces cocaína, meta, opioides…), coloreada y perfumada. La composición cambia en cada lote: nunca sabes qué tomas ni las interacciones. El nombre viene de la pronunciación española de '2C-B', pero la molécula suele estar ausente.",
      description:"Producto compuesto, no una molécula. Riesgos = suma imprevisible de los componentes (ketamina + MDMA = presión cardiaca; posible presencia de opioides o estimulantes potentes). Hazlo testar, empieza muy bajo."
    },
    "2C-H": {
      effets:["Casi inactivo", "Precursor"],
      dosage:{faible:"poco/no activo",modere:"poco activo",fort:"poco activo"},
      duree:"Inicio variable | Total corto",
      tripReport:"2C-H: fenetilamina casi inactiva en sí misma, conocida sobre todo como precursor de síntesis de otros 2C. Rara vez se consume por sus efectos.",
      description:"Agonista 5-HT2A débil, rápidamente metabolizado por las MAO. Principalmente un intermediario químico."
    },
    "2C-T-4": {
      effets:["Alucinaciones", "Introspección", "Subida lenta"],
      dosage:{faible:"8–12 mg",modere:"12–20 mg",fort:"20–30 mg"},
      duree:"Inicio 1,5–3 h | Total 8–12 h",
      tripReport:"2C-T-4: análogo azufrado del 2C-B, subida muy lenta (riesgo de redose prematuro), efectos largos e introspectivos.",
      description:"Agonista 5-HT2A. Interacción IMAO peligrosa. Inicio lento engañoso."
    },
    "4-AcO-MiPT": {
      effets:["Alucinaciones", "Euforia", "Empatía"],
      dosage:{faible:"12–20 mg",modere:"20–35 mg",fort:"35–50 mg"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"4-AcO-MiPT: éster acetilado del 4-HO-MiPT (equivalente del 4-AcO-DMT vs psilocina). Efectos cálidos y visuales.",
      description:"Profármaco convertido en 4-HO-MiPT. Agonista 5-HT2A. Precauciones psicodélicas."
    },
    "4-AcO-DiPT": {
      effets:["Alucinaciones", "Euforia", "Distorsiones"],
      dosage:{faible:"15–25 mg",modere:"25–40 mg",fort:"40–60 mg"},
      duree:"Inicio 30–60 min | Total 4–6 h",
      tripReport:"4-AcO-DiPT: éster del 4-HO-DiPT, psicodélico triptamínico con visuales marcados, duración media.",
      description:"Profármaco. Agonista 5-HT2A. Precauciones psicodélicas clásicas."
    },
    "Bufoténine": {
      effets:["Visiones", "Efectos físicos intensos", "Presión/náuseas"],
      dosage:{faible:"variable (según la vía)",modere:"dosis imprevisible",fort:"efectos cardiovasculares marcados"},
      duree:"Inicio rápido | Total corto",
      tripReport:"Bufotenina: triptamina presente en ciertos sapos y semillas (yopo). Efectos físicos pesados (presión arterial, sensación de opresión) a veces más que visuales. Margen estrecho.",
      description:"Agonista serotoninérgico con efectos cardiovasculares marcados. Presente en el yopo/Anadenanthera. Prudencia."
    },
    "Kétamine S (eskétamine)": {
      effets:["Disociación", "Analgesia", "Euforia"],
      dosage:{faible:"15–30 mg",modere:"30–60 mg",fort:"60–100 mg"},
      duree:"Inicio 5–15 min | Total 45–90 min",
      tripReport:"Esketamina (enantiómero S de la ketamina): ~2× más potente que la ketamina racémica a igual peso → ajustar la dosis. Versión médica (Spravato) para la depresión.",
      description:"Antagonista NMDA. Más potente que la ketamina estándar. Cistitis con uso repetido, accidentes en disociación."
    },
    "Bromazolam": {
      effets:["Ansiólisis", "Sedación", "Amnesia"],
      dosage:{faible:"0,25–0,5 mg",modere:"0,5–1 mg",fort:"1 mg+"},
      duree:"Inicio 20–40 min | Total 8–12 h",
      tripReport:"Bromazolam: benzo de diseño que se ha vuelto muy común en la calle (falso Xanax, mezclada con opioides). Combinada con fentanilo/nitazenos: depresión respiratoria mayor que la naloxona no revierte.",
      description:"Agonista GABA-A. Fuerte amnesia, tolerancia, abstinencia peligrosa (convulsiones). Mortal con opioides/alcohol."
    },
    "Flualprazolam": {
      effets:["Ansiólisis", "Sedación profunda", "Amnesia"],
      dosage:{faible:"0,25–0,5 mg",modere:"0,5–1 mg",fort:"1 mg+"},
      duree:"Inicio 20–40 min | Total 10–16 h",
      tripReport:"Flualprazolam: benzo RC potente, hallada en comprimidos falsos y en muertes combinada con opioides. Efecto largo y fuerte.",
      description:"Agonista GABA-A potente. Depresión respiratoria con opioides/alcohol. Abstinencia con riesgo convulsivo."
    },
    "Clonazépam": {
      effets:["Ansiólisis", "Sedación", "Anticonvulsivo", "Amnesia"],
      dosage:{faible:"0,25–0,5 mg",modere:"0,5–1 mg",fort:"2 mg+"},
      duree:"Inicio 30–60 min | Total 6–12 h",
      tripReport:"Clonazepam (Rivotril/Klonopin): benzo larga muy prescrita. Tolerancia y dependencia rápidas, abstinencia peligrosa (convulsiones). Mortal combinada con opioides/alcohol.",
      description:"Agonista GABA-A de acción prolongada. Ver también Klonopin. La abstinencia debe supervisarse médicamente."
    },
    "Bromazépam": {
      effets:["Ansiólisis", "Sedación", "Relajación muscular"],
      dosage:{faible:"3 mg",modere:"6 mg",fort:"12 mg+"},
      duree:"Inicio 30–60 min | Total 8–12 h",
      tripReport:"Bromazepam (Lexomil): benzo ansiolítica común. Dependencia, amnesia, abstinencia de riesgo. Peligroso con alcohol y opioides.",
      description:"Agonista GABA-A. Tolerancia/dependencia. Nunca dejar bruscamente."
    },
    "Triazolam": {
      effets:["Sedación hipnótica", "Amnesia", "Inducción del sueño"],
      dosage:{faible:"0,125 mg",modere:"0,25 mg",fort:"0,5 mg+"},
      duree:"Inicio 15–30 min | Total 4–6 h",
      tripReport:"Triazolam (Halcion): hipnótico benzo de corta duración, fuerte amnesia. Desinhibición y amnesia anterógrada marcadas. Dependencia rápida.",
      description:"Agonista GABA-A de corta duración. Amnesia, comportamientos automáticos. Peligroso con depresores."
    },
    "Témazépam": {
      effets:["Sedación", "Inducción del sueño", "Ansiólisis"],
      dosage:{faible:"10 mg",modere:"20 mg",fort:"30–40 mg+"},
      duree:"Inicio 30–60 min | Total 6–8 h",
      tripReport:"Temazepam: hipnótico benzo. Desviado, a veces inyectado (muy peligroso: embolias). Dependencia, abstinencia de riesgo.",
      description:"Agonista GABA-A. Inyección = riesgo vascular grave. Peligroso con opioides/alcohol."
    },
    "Nitrazépam": {
      effets:["Sedación", "Inducción del sueño", "Relajación"],
      dosage:{faible:"2,5–5 mg",modere:"5–10 mg",fort:"10 mg+"},
      duree:"Inicio 30–60 min | Total 8–12 h",
      tripReport:"Nitrazepam (Mogadon): hipnótico benzo largo. Somnolencia residual, dependencia, abstinencia de riesgo.",
      description:"Agonista GABA-A de acción prolongada. Acumulación en personas mayores. Peligroso con depresores."
    },
    "Zopiclone": {
      effets:["Inducción del sueño", "Sedación", "Sabor metálico"],
      dosage:{faible:"3,75 mg",modere:"7,5 mg",fort:"15 mg+"},
      duree:"Inicio 20–40 min | Total 6–8 h",
      tripReport:"Zopiclona (Imovane): hipnótico emparentado con las benzos. Sabor amargo típico. Amnesia, comportamientos automáticos (conducir/comer dormido), dependencia. Peligroso con alcohol/opioides.",
      description:"Modulador GABA-A (Z-drug). Tolerancia, dependencia, abstinencia. No mezclar con depresores."
    },
    "Zaleplon": {
      effets:["Inducción rápida del sueño", "Sedación breve"],
      dosage:{faible:"5 mg",modere:"10 mg",fort:"20 mg+"},
      duree:"Inicio 15–30 min | Total 2–4 h",
      tripReport:"Zaleplon (Sonata): hipnótico Z-drug muy corto, usado para conciliar el sueño. Amnesia, posible dependencia. Peligroso con alcohol.",
      description:"Modulador GABA-A de corta duración. Riesgo de comportamientos automáticos. Evitar depresores."
    },
    "Méthaqualone": {
      effets:["Sedación", "Euforia", "Relajación muscular", "Desinhibición"],
      dosage:{faible:"75–150 mg",modere:"150–300 mg",fort:"300 mg+"},
      duree:"Inicio 30–60 min | Total 4–8 h",
      tripReport:"Metacualona (Quaalude, 'mandrax'): sedante-hipnótico de los años 70, euforizante y desinhibidor. Margen estrecho, depresión respiratoria, dependencia. A menudo fumado (mandrax) en Sudáfrica/India.",
      description:"Modulador GABA-A. Sobredosis: coma, depresión respiratoria, convulsiones. Peligroso con alcohol/opioides."
    },
    "Chloral hydrate": {
      effets:["Sedación", "Inducción del sueño"],
      dosage:{faible:"250 mg",modere:"500–1000 mg",fort:"1500 mg+"},
      duree:"Inicio 30–60 min | Total 4–8 h",
      tripReport:"Hidrato de cloral: viejo sedante ('Mickey Finn'). Margen estrecho, irritante gástrico, arritmias, depresión respiratoria. Peligroso con alcohol (sinergia histórica).",
      description:"Profármaco del tricloroetanol (GABA). Cardiotóxico a dosis alta. Muy peligroso con alcohol."
    },
    "Méprobamate": {
      effets:["Ansiólisis", "Sedación", "Relajación muscular"],
      dosage:{faible:"200–400 mg",modere:"400–800 mg",fort:"1200 mg+"},
      duree:"Inicio 30–60 min | Total 6–10 h",
      tripReport:"Meprobamato: antiguo ansiolítico (metabolito del carisoprodol). Sobredosis grave (coma, hipotensión, depresión respiratoria), dependencia. Peligroso con alcohol.",
      description:"Modulador GABA. Margen terapéutico estrecho. Abstinencia de riesgo. Evitar alcohol/depresores."
    }

  },
  de: {
    "Alcool": {
      effets:["Sedierung","Enthemmung","Leichte Euphorie","Angstlösung"],
      dosage:{faible:"1–2 Gläser",modere:"3–5 Gläser",fort:"≥6 Gläser — schwerer Rausch"},
      duree:"Eintritt 10–30 Min | Peak 1–2 h | Gesamt 3–8 h",
      tripReport:"Alkohol, 4 Gläser: angenehme Enthemmung. Darüber hinaus: Kontrollverlust, Filmриsse.",
      description:"Ethanol: verstärkt jedes ZNS-Dämpfungsmittel. Tödliche Synergie mit Opioiden/Benzos/GHB."
    },
    "Diazépam": {
      effets:["Angstlösung","Muskelentspannung","Sedierung","Krampflösend"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"20–40 mg"},
      duree:"Eintritt 15–45 Min | Peak 1–2 h | Gesamt 6–12 h",
      tripReport:"Diazepam 10 mg: tiefe Angstlösung. Körperliche Abhängigkeit in 4 Wochen.",
      description:"Valium: das Referenz-Benzodiazepin. Tödliche Wechselwirkungen mit Alkohol/Opioiden."
    },
    "Alprazolam": {
      effets:["Angstlösung","Sedierung","Enthemmung","Amnesie"],
      dosage:{faible:"0,25–0,5 mg",modere:"0,5–1 mg",fort:"1,5–2 mg — Blackout"},
      duree:"Eintritt 15–40 Min | Peak 1–2 h | Gesamt 3–6 h",
      tripReport:"Alprazolam 1 mg: Angst in 20 Min weg. 2 h Handlungen ohne Erinnerung.",
      description:"Xanax: Wirkstärke 1 mg = 10 mg Valium. Schnelle Abhängigkeit. Alkohol = möglicher Herzstillstand."
    },
    "MDMA": {
      effets:["Euphorie","Empathie","Stimulation","Emotionale Verbindung"],
      dosage:{faible:"75–100 mg",modere:"100–125 mg",fort:"150–200 mg"},
      duree:"Eintritt 30–60 Min | Peak 1,5–3 h | Gesamt 4–6 h",
      tripReport:"MDMA 110 mg: universelle Liebe, transzendente Musik. 2-tägiger Nachklang. Max. 1×/3 Monate.",
      description:"3,4-MDMA. Tödliche Hyperthermie, Hyponatriämie. Neurotoxisch. MAO-Hemmer/Tramadol = Tod."
    },
    "Cocaïne": {
      effets:["Euphorie","Intensive Stimulation","Gesteigertes Selbstvertrauen","Vasokonstriktion"],
      dosage:{faible:"20–40 mg (nasal)",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Eintritt 5–15 Min | Peak 20–40 Min | Gesamt 1–2 h",
      tripReport:"Kokain 50 mg: kurzer euphorischer Rausch. Kokain + Alkohol = herztoxisches Cocaethylen.",
      description:"DAT/NET/SERT-Hemmer. Herztoxisch. Alkohol → toxisches Cocaethylen. Schnelle Abhängigkeit."
    },
    "GHB": {
      effets:["Euphorie","Sedierung","Enthemmung","Amnesie"],
      dosage:{faible:"0,5–1 g",modere:"1–2 g",fort:"≥2,5 g — leichte Überdosis"},
      duree:"Eintritt 15–30 Min | Peak 45–90 Min | Gesamt 2–4 h",
      tripReport:"GHB 1,5 g: feierliche Euphorie. 0,5 g zu viel = Koma.",
      description:"GABA-B-Agonist. Enge therapeutische Breite. Nie mit Alkohol."
    },
    "Kétamine": {
      effets:["Dissoziation","Analgesie","Euphorie","Halluzinationen"],
      dosage:{faible:"25–50 mg (nasal)",modere:"75–150 mg",fort:"200–400 mg — K-Hole"},
      duree:"Eintritt 5–15 Min | Peak 20–40 Min | Gesamt 1–2 h",
      tripReport:"Ketamin 100 mg: vollständige Dissoziation. K-Hole bei 300 mg: außerkörperliche Erfahrung.",
      description:"NMDA-Antagonist. Ketamin-Blasensyndrom bei wiederholtem Konsum. Mischung mit Alkohol = Apnoe-Risiko."
    },
    "Cannabis": {
      effets:["Euphorie","Entspannung","Veränderte Wahrnehmung","Appetitsteigerung"],
      dosage:{faible:"1–3 mg THC",modere:"5–15 mg THC",fort:"20–50 mg THC"},
      duree:"Eintritt 15–45 Min (oral) / 5–15 Min (geraucht) | Gesamt 2–6 h",
      tripReport:"Cannabis ~15 mg THC: Euphorie und Lachen, verstärkte Musik. Paranoia ab 20 mg möglich.",
      description:"CB1/CB2-Agonist. Dokumentierte Cannabis-Psychose. Hyperemesis-Syndrom bei chronischem Konsum."
    },
    "LSD": {
      effets:["Halluzinationen","Euphorie","Introspektion","Universelle Verbundenheit"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–400 µg"},
      duree:"Eintritt 30–90 Min | Peak 3–5 h | Gesamt 8–12 h",
      tripReport:"LSD 120 µg: herrliche Visuals, völlige musikalische Verbindung. Lithium = tödliche Krämpfe.",
      description:"5-HT2A-Agonist. Lithium → Krämpfe. Set & Setting essenziell."
    },
    "Héroïne": {
      effets:["Intensive Euphorie","Analgesie","Sedierung","Wärme"],
      dosage:{faible:"variabel — toleranzabhängig",modere:"Dosis nicht standardisierbar",fort:"Atemdepression"},
      duree:"Eintritt 1–5 Min (i.v.) | Gesamt 3–5 h",
      tripReport:"Heroin: opioider 'Rush', dann Schläfrigkeit. Straßenreinheit unbekannt → Überdosis. Oft mit Fentanyl gestreckt.",
      description:"Mu-Agonist. Atemdepression = Haupttodesursache. Testen, Naloxon, nie allein."
    },
    "Morphine": {
      effets:["Analgesie","Euphorie","Sedierung","Angstlösung"],
      dosage:{faible:"10–20 mg (oral)",modere:"30–60 mg",fort:"100 mg+ (ohne Toleranz: gefährlich)"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"Morphin: das Referenz-Opioid. Euphorie und Analgesie, dosisabhängige Atemdepression.",
      description:"Mu-Agonist. Atemdepression durch Alkohol/Benzos verstärkt. Toleranz und Abhängigkeit."
    },
    "Fentanyl": {
      effets:["Starke Analgesie","Intensive Euphorie","Sedierung","Atemdepression"],
      dosage:{faible:"Mikrogramm (nicht zu Hause messbar)",modere:"unvorhersehbare Dosis",fort:"Atemstillstand"},
      duree:"Eintritt 1–5 Min | Gesamt 1–2 h",
      tripReport:"Fentanyl: ~50× stärker als Heroin. Unsichtbare Mengen töten. Massiv im Straßenmarkt vorhanden.",
      description:"Sehr starker Mu-Agonist. Winziger Spielraum Dosis/Überdosis. Teststreifen, Naloxon, nie allein."
    },
    "Méthadone": {
      effets:["Analgesie","Stabilisierung","Leichte Sedierung"],
      dosage:{faible:"nur medizinisch",modere:"verschriebene Substitutionsdosis",fort:"Atemdepression"},
      duree:"Eintritt 30 Min–1 h | Gesamt 24–36 h",
      tripReport:"Methadon: Opioid-Substitutionstherapie. Sehr lang wirksam → Akkumulations- und Überdosisrisiko bei Missbrauch.",
      description:"Lang wirkender Mu-Agonist. Akkumuliert (lange Halbwertszeit). QT-Verlängerung. Gefährlich mit Benzos/Alkohol."
    },
    "Tramadol": {
      effets:["Analgesie","Leichte Euphorie","Übelkeit"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"Tramadol 100 mg: Schmerzmittel mit leichter Euphorie. Krampfanfälle bei hoher Dosis.",
      description:"SNRI + Opioid-Agonist. Serotoninsyndrom mit MDMA/MAO-Hemmer. Dokumentierte Krampfanfälle."
    },
    "Codéine": {
      effets:["Analgesie","Hustenstillend","Leichte Euphorie"],
      dosage:{faible:"15–30 mg",modere:"60–120 mg",fort:"200+ mg"},
      duree:"Eintritt 30–45 Min | Gesamt 4–6 h",
      tripReport:"Codein 60 mg: sanfte Analgesie und leichte Euphorie. Alkohol verstärkt stark.",
      description:"Morphin-Prodrug. CYP2D6-Variabilität. Alkohol → Atemdepression."
    },
    "Psilocybine": {
      effets:["Halluzinationen","Euphorie","Ego-Auflösung","Introspektion"],
      dosage:{faible:"1–2 g Pilze",modere:"2–3,5 g",fort:"5+ g"},
      duree:"Eintritt 20–60 Min | Peak 2–4 h | Gesamt 4–6 h",
      tripReport:"Psilocybin 2 g: Visuals und emotionale Verbindung. 5 g: volle mystische Erfahrung.",
      description:"5-HT2A-Agonist. Lithium → Krämpfe. Set & Setting entscheidend."
    },
    "Amphétamine": {
      effets:["Stimulation","Euphorie","Konzentration","Appetithemmung"],
      dosage:{faible:"5–10 mg",modere:"15–30 mg",fort:"40 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"Amphetamin ('Speed') 20 mg: Energie und Fokus. Nachklang, Schlaflosigkeit, zwanghaftes Nachlegen.",
      description:"Dopamin-/Noradrenalin-Freisetzer. Herzbelastung, Abhängigkeit. Crash beim Runterkommen."
    },
    "Méthamphetamine": {
      effets:["Intensive Stimulation","Starke Euphorie","Hypervigilanz","Appetithemmung"],
      dosage:{faible:"5–10 mg",modere:"10–25 mg",fort:"30 mg+"},
      duree:"Eintritt je nach Konsumform | Gesamt 8–12 h",
      tripReport:"Methamphetamin: stärker und viel länger als Amphetamin. Schwere Abhängigkeit, tagelange Binges, Psychose.",
      description:"Starker Dopamin-Freisetzer, neurotoxisch. Hyperthermie, Psychose, Zahnschäden. Hohes Suchtpotenzial."
    },
    "Caféine": {
      effets:["Wachheit","Leichte Stimulation","Konzentration"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300–400 mg+"},
      duree:"Eintritt 15–45 Min | Gesamt 3–6 h",
      tripReport:"Koffein 100 mg (ein Kaffee): sanfter Schub. Über 400 mg: Zittrigkeit, Herzklopfen, Angst.",
      description:"Adenosin-Antagonist. Toleranz und Entzug (Kopfschmerzen). Vorsicht fürs Herz bei hoher Dosis."
    },
    "Nicotine": {
      effets:["Leichte Stimulation","Entspannung","Konzentration"],
      dosage:{faible:"1–2 mg",modere:"einige Zigaretten",fort:"chronischer Konsum"},
      duree:"Eintritt in Sekunden (geraucht) | Gesamt 30 Min–2 h",
      tripReport:"Nikotin: kurze Stimulation, dann Entspannung. Eine der süchtigmachendsten Substanzen überhaupt.",
      description:"Nikotinischer Agonist. Extrem süchtig machend. Herz-Kreislauf- und Krebsrisiko durch Rauchen."
    },
    "Naloxone": {
      effets:["Opioid-Antagonismus","Umkehr der Überdosis"],
      dosage:{faible:"0,4–0,8 mg (nasal/i.m.)",modere:"0,8–1,6 mg",fort:"2 mg+"},
      duree:"Eintritt 2–5 Min | Gesamt 30–90 Min",
      tripReport:"Naloxon: wenn jemand überdosiert, rettet DIES Leben. Immer dabei haben.",
      description:"Vollständiger Mu-Antagonist. Kehrt jede Opioid-Überdosis um. Kurze Wirkdauer = manchmal Nachdosieren nötig."
    },
    "Klonopin": {
      effets:["Angstlösung", "Krampflösend", "Sedierung", "Amnesie"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3–4 mg"},
      duree:"Eintritt 20–60 Min | Gesamt 6–12 h",
      tripReport:"Klonopin 2 mg: tiefe Angstlösung, leichte Sedierung. Sehr schwerer Entzug.",
      description:"Clonazepam: lang wirkendes Benzo. Schwere körperliche Abhängigkeit. Entzug = Krämpfe."
    },
    "Lorazépam": {
      effets:["Angstlösung", "Sedierung", "Amnesie", "Muskelentspannung"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"2,5–4 mg"},
      duree:"Eintritt 15–30 Min | Gesamt 6–8 h",
      tripReport:"Lorazepam 2 mg: tiefe Sedierung, teilweise Amnesie. Alkohol = Atemstillstand.",
      description:"Ativan: starkes Benzo, mittlere Halbwertszeit. Körperliche Abhängigkeit. Nie mit Alkohol."
    },
    "Zolpidem": {
      effets:["Sedierung", "Hypnose", "Amnesie", "Schlafwandeln"],
      dosage:{faible:"5 mg",modere:"10 mg",fort:"15–20 mg"},
      duree:"Eintritt 15–30 Min | Gesamt 6–8 h",
      tripReport:"Zolpidem 10 mg: schnelles Einschlafen. Manchmal Schlafwandeln. Alkohol = totale Amnesie.",
      description:"GABA-A-Agonist. Dokumentiertes Schlafwandeln. Alkohol verstärkt stark."
    },
    "Pregabaline": {
      effets:["Angstlösung", "Euphorie", "Sedierung", "Wohlbefinden"],
      dosage:{faible:"75–150 mg",modere:"150–300 mg",fort:"450–600 mg"},
      duree:"Eintritt 30–90 Min | Gesamt 6–8 h",
      tripReport:"Pregabalin 150 mg: Sedierung und leichte Euphorie. Mit vielen Opioid-Todesfällen verbunden.",
      description:"GABA-Analogon. Opioid-Kombination = dokumentierter Tod. Unterschätzte körperliche Abhängigkeit."
    },
    "Gabapentine": {
      effets:["Sedierung", "Angstlösung", "Leichte Euphorie"],
      dosage:{faible:"100–300 mg",modere:"600–900 mg",fort:"1200–1800 mg"},
      duree:"Eintritt 60–90 Min | Gesamt 5–7 h",
      tripReport:"Gabapentin 900 mg: Sedierung und Ruhe. Mit Todesfällen in Opioid-Kombinationen verbunden.",
      description:"Gabapentinoid. Dokumentierte Todesfälle in Opioid-Kombination. Zunehmender Missbrauch."
    },
    "Quétiapine": {
      effets:["Sedierung", "Angstlösung", "Antipsychotisch"],
      dosage:{faible:"25–50 mg",modere:"100–200 mg",fort:"400–800 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 6–12 h",
      tripReport:"Quetiapin 50 mg: starkes Schlafmittel. Aus Verschreibung abgezweigt.",
      description:"D2/5-HT2A-Antagonist. Malignes neuroleptisches Syndrom. Alkohol = schwere Hypotonie."
    },
    "Phénibut": {
      effets:["Angstlösung", "Euphorie", "Geselligkeit", "Sedierung"],
      dosage:{faible:"250–500 mg",modere:"500–1000 mg",fort:"1500–2000 mg"},
      duree:"Eintritt 2–4 h | Gesamt 5–8 h",
      tripReport:"Phenibut 750 mg: Angst weg, Geselligkeit verstärkt. Brutaler Entzug nach 3 Einnahmen.",
      description:"GABA-B-Agonist + schwach D2. Schnelle körperliche Abhängigkeit. Intensiver Entzug. GHB/Alkohol = Koma."
    },
    "Clonazolam": {
      effets:["Extreme Sedierung", "Tiefe Amnesie", "Angstlösung"],
      dosage:{faible:"0,25–0,5 mg",modere:"0,5–1 mg",fort:"1–2 mg (Tod möglich)"},
      duree:"Eintritt 20–60 Min | Gesamt 8–18 h",
      tripReport:"Clonazolam 0,5 mg: stundenlange Amnesie. 1 mg + Alkohol: kann tödlich sein.",
      description:"Ultrastarkes Designer-Benzo. Akkumulation = Tod. Nie mit Alkohol. Entzug = Krämpfe."
    },
    "Flubromazolam": {
      effets:["Extreme Sedierung", "Totale Amnesie", "Hypnose"],
      dosage:{faible:"0,1–0,25 mg",modere:"0,25–0,5 mg",fort:"0,5 mg+ (gefährlich)"},
      duree:"Eintritt 20–60 Min | Gesamt 12–20 h",
      tripReport:"Flubromazolam 0,25 mg: das stärkste Designer-Benzo. Totale Amnesie. Tod möglich.",
      description:"Stärkstes bekanntes Benzo. Alkohol = Tod. Heimtückische Akkumulation. Entzug = Krämpfe."
    },
    "1,4-Butanediol": {
      effets:["Euphorie", "Sedierung", "Enthemmung"],
      dosage:{faible:"0,5–0,8 ml/kg",modere:"0,8–1,2 ml/kg",fort:"1,5 ml/kg+ (leichtes Koma)"},
      duree:"Eintritt 20–40 Min | Gesamt 2–4 h",
      tripReport:"Ähnelt GHB, aber die flüssige Dosierung macht eine Überdosis sehr leicht.",
      description:"GHB-Prodrug. Sehr enge therapeutische Breite. Alkohol-Mischung = Atemkoma."
    },
    "GBL": {
      effets:["Euphorie", "Sedierung", "Enthemmung"],
      dosage:{faible:"0,5–0,8 ml",modere:"0,8–1,3 ml",fort:"1,5 ml+"},
      duree:"Eintritt 5–20 Min | Peak 30–60 Min | Gesamt 1,5–3 h",
      tripReport:"GBL 1 ml: ultraschneller Eintritt, Desorientierung in 5 Min. Tödlicher Fehlerspielraum.",
      description:"GHB-Prodrug. Schnellerer Stoffwechsel. Nie mit Alkohol."
    },
    "Carisoprodol": {
      effets:["Muskelentspannung", "Sedierung", "Angstlösung"],
      dosage:{faible:"250 mg",modere:"350–500 mg",fort:"700–1000 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 4–6 h",
      tripReport:"Carisoprodol 350 mg: schnelle Abhängigkeit, an Benzos erinnernd.",
      description:"Wird zu Meprobamat verstoffwechselt. Potenziell tödlich mit Alkohol."
    },
    "Etizolam": {
      effets:["Angstlösung", "Sedierung", "Mögliche Amnesie"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 6–10 h",
      tripReport:"Etizolam 1 mg: Abhängigkeit nach 2 Wochen.",
      description:"Gleicher Mechanismus wie Benzos. Krampfauslösender Entzug."
    },
    "Flubromazépam": {
      effets:["Sedierung", "Angstlösung", "Amnesie"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–20 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 24–48 h",
      tripReport:"Flubromazepam 8 mg: Wirkung hält 2 Tage an. Schnelle Abhängigkeit.",
      description:"Halbwertszeit >100 h. Akkumulation. Krampfauslösender Entzug."
    },
    "Deschloroetizolam": {
      effets:["Angstlösung", "Sedierung", "Amnesie"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 6–12 h",
      tripReport:"Deschloroetizolam 1 mg: schnelle Toleranz, schwerer Entzug.",
      description:"Tödliche Wechselwirkungen mit Alkohol/Opioiden."
    },
    "Metizolam": {
      effets:["Angstlösung", "Sedierung", "Amnesie"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"2–4 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 8–12 h",
      tripReport:"Metizolam 1 mg: subtile, aber reale Abhängigkeit.",
      description:"Potenziell krampfauslösender Entzug."
    },
    "Pyrazolam": {
      effets:["Angstlösung", "Leichte Sedierung"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 8–14 h",
      tripReport:"Pyrazolam 1 mg: reines Anxiolytikum. Subtile Abhängigkeit.",
      description:"Benzo mit langer Halbwertszeit."
    },
    "O-DSMT": {
      effets:["Analgesie", "Euphorie", "Sedierung", "Atemdepression"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"O-DSMT 25 mg: starkes Opioid. Deutliche Atemdepression. Tödliche Verstärkung mit Alkohol.",
      description:"O-Desmethyltramadol: aktiver Metabolit von Tramadol, starker Mu-Agonist. Nie mit Alkohol."
    },
    "Buprenorphine": {
      effets:["Analgesie", "Verlangensminderung", "Leichte Sedierung"],
      dosage:{faible:"0,4–2 mg",modere:"2–8 mg",fort:"16–32 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 24–72 h",
      tripReport:"Buprenorphin 8 mg: Opioid-Substitutionstherapie. Körperliche Abhängigkeit vorhanden, aber stabil.",
      description:"Partieller Mu-Agonist + Kappa-Antagonist. Analgetische Obergrenze. In der OST verwendet. Benzos = Tod."
    },
    "Naltrexone": {
      effets:["Blockiert Opioidwirkung", "Senkt Alkoholverlangen"],
      dosage:{faible:"25 mg",modere:"50 mg",fort:"100–150 mg"},
      duree:"Eintritt 60–90 Min | Gesamt 24–72 h",
      tripReport:"Naltrexon 50 mg/Tag: blockiert Opioide vollständig. Für OST und Alkoholismus genutzt.",
      description:"Vollständiger Mu-Antagonist. Hepatotoxisch bei hoher Dosis. Nie mit aktiven Opioiden."
    },
    "Acétylfentanyl": {
      effets:["Analgesie", "Atemdepression"],
      dosage:{faible:"0,1–0,2 mg",modere:"0,2–0,4 mg",fort:"0,5 mg+"},
      duree:"Eintritt 5–15 Min | Gesamt 1–3 h",
      tripReport:"Acetylfentanyl: Überdosis bei der geringsten Ungenauigkeit.",
      description:"~5× Morphin. Naloxon kann unzureichend sein."
    },
    "Hydrocodone": {
      effets:["Analgesie", "Euphorie", "Verstopfung"],
      dosage:{faible:"5–10 mg",modere:"15–20 mg",fort:"30–40 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"Hydrocodon 15 mg: warme Euphorie. Schnelle Abhängigkeit.",
      description:"Vicodin: ~1,5× Codein. Überdosis mit Alkohol."
    },
    "Hydromorphone": {
      effets:["Starke Analgesie", "Intensive Euphorie", "Atemdepression"],
      dosage:{faible:"1–2 mg",modere:"2–4 mg",fort:"6–8 mg"},
      duree:"Eintritt 15–30 Min | Gesamt 3–5 h",
      tripReport:"Hydromorphon 3 mg: ein Krankenhaus-Opioid. Nie außerhalb der Verschreibung.",
      description:"Dilaudid: ~8× Morphin. Extrem schnelle Abhängigkeit."
    },
    "Oxymorphone": {
      effets:["Analgesie", "Intensive Euphorie", "Atemdepression"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–20 mg"},
      duree:"Eintritt 15–30 Min | Gesamt 4–6 h",
      tripReport:"Oxymorphon 5 mg: ~10× Morphin. Extrem suchterzeugend.",
      description:"Nie mit Alkohol/Benzos mischen."
    },
    "Dextropropoxyphène": {
      effets:["Leichte Analgesie", "Schwache Euphorie", "Sedierung"],
      dosage:{faible:"65 mg",modere:"130–200 mg",fort:"300 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"Wegen tödlicher Herzrhythmusstörungen vom Markt genommen. Nicht konsumieren.",
      description:"Schwere Kardiotoxizität. Metabolit blockiert kardiale Natriumkanäle."
    },
    "Sufentanil": {
      effets:["Analgesie", "Atemdepression", "Tiefe Sedierung"],
      dosage:{faible:"2–5 µg",modere:"10–25 µg",fort:"50 µg+"},
      duree:"Eintritt 1–3 Min | Gesamt 20–45 Min",
      tripReport:"Sufentanil: 5–10× stärker als Fentanyl. Nur Krankenhausgebrauch.",
      description:"500–1000× Morphin. Naloxon unzureichend."
    },
    "Péthidine": {
      effets:["Analgesie", "Euphorie", "Sedierung"],
      dosage:{faible:"25–50 mg",modere:"50–100 mg",fort:"150–200 mg"},
      duree:"Eintritt 10–15 Min (i.m.) | Gesamt 2–4 h",
      tripReport:"Pethidin 75 mg: euphorisch und schnell. Schnelle Abhängigkeit.",
      description:"Meperidin. Normeperidin-Metabolit → Krämpfe. MAO-Hemmer tödlich."
    },
    "Tapentadol": {
      effets:["Analgesie", "Mäßige Euphorie", "Sedierung"],
      dosage:{faible:"50 mg",modere:"100–150 mg",fort:"200–250 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"Tapentadol 100 mg: Opioid-SNRI, starkes Schmerzmittel.",
      description:"Mu-Agonist + NA-Wiederaufnahmehemmer. MAO-Hemmer kontraindiziert."
    },
    "Isotonitazène": {
      effets:["Starke Analgesie", "Tiefe Sedierung", "Atemdepression", "Euphorie"],
      dosage:{faible:"Mikrogramm (nicht zu Hause messbar)",modere:"unvorhersehbare Dosis",fort:"Atemstillstand"},
      duree:"Eintritt 1–10 Min | Gesamt 1–4 h",
      tripReport:"Isotonitazen ('iso'): synthetisches Opioid, stärker als Fentanyl. Oft in Pulvern oder gefälschten Tabletten. Naloxon wirkt, aber mehrere Dosen können nötig sein.",
      description:"Sehr starker Mu-Agonist (Nitazen-Familie). Winziger Spielraum Dosis/Überdosis. Immer testen (Streifen), nie allein, Naloxon dabei."
    },
    "Métonitazène": {
      effets:["Analgesie", "Extreme Sedierung", "Atemdepression"],
      dosage:{faible:"Mikrogramm (nicht messbar)",modere:"unvorhersehbare Dosis",fort:"Atemstillstand"},
      duree:"Eintritt 1–10 Min | Gesamt 1–4 h",
      tripReport:"Metonitazen: ein Nitazen mit fentanylnaher Stärke, an vielen Todesfällen beteiligt. In Mischungen (Heroin, gefälschte Medikamente).",
      description:"Mu-Agonist (Nitazen). Starke Atemdepression. Naloxon manchmal in wiederholten Dosen. Testen, nie allein sein."
    },
    "Protonitazène": {
      effets:["Starke Analgesie", "Tiefe Sedierung", "Atemdepression"],
      dosage:{faible:"Mikrogramm (nicht messbar)",modere:"unvorhersehbare Dosis",fort:"Atemstillstand"},
      duree:"Eintritt 1–10 Min | Gesamt 1–4 h",
      tripReport:"Protonitazen: geschätzt etwa 4× stärker als Fentanyl. In Todesfällen in Europa, Nordamerika und Australien gefunden.",
      description:"Sehr starker Mu-Agonist (Nitazen). Extremes Überdosisrisiko. Naloxon, Nitazen-Streifen und eine dritte Person unerlässlich."
    },
    "Carfentanil": {
      effets:["Massive Analgesie", "Sofortige Atemdepression", "Bewusstlosigkeit"],
      dosage:{faible:"Mikrogramm (nicht messbar, tödlich)",modere:"unvorhersehbare Dosis",fort:"fast sofortiger Atemstillstand"},
      duree:"Eintritt <1–5 Min | Gesamt 0,5–2 h",
      tripReport:"Carfentanil: ~100× stärker als Fentanyl (Veterinärgebrauch bei Großtieren). Eine fürs Auge unsichtbare Menge kann töten. In Straßenpulvern gefunden.",
      description:"Extrem starker Mu-Agonist. Ultraschnelle Überdosis. Oft mehrere Naloxon-Dosen nötig. Nie allein, testen, Notfalldosen bereit."
    },
    "Oxycodone": {
      effets:["Analgesie", "Euphorie", "Sedierung", "Angstlösung"],
      dosage:{faible:"5–10 mg",modere:"15–30 mg",fort:"40 mg+ (ohne Toleranz: gefährlich)"},
      duree:"Eintritt 20–40 Min | Gesamt 4–6 h",
      tripReport:"Oxycodon (OxyContin) ~15 mg: klassische Opioid-Euphorie. Gefälschte Tabletten sehr oft mit Fentanyl gestreckt: nie den Inhalt voraussetzen.",
      description:"Mu-Agonist. Dosisabhängige Atemdepression, durch Alkohol/Benzos verstärkt. Schnelle Toleranz und Abhängigkeit. Naloxon bei Überdosis."
    },
    "Krokodil (désomorphine)": {
      effets:["Analgesie", "Kurze Opioid-Euphorie", "Sedierung"],
      dosage:{faible:"nicht quantifizierbar (selbst gemacht)",modere:"unvorhersehbare Dosis",fort:"Überdosis / Nekrose"},
      duree:"Eintritt 2–5 Min | Gesamt 1,5–2 h",
      tripReport:"Krokodil ('Krokodil', 'Zombie-Droge'): Desomorphin, zu Hause aus Codein und ätzenden Stoffen (Benzin, roter Phosphor, Säure) hergestellt. Kurze, aber sehr starke Opioidwirkung. Giftige Rückstände verursachen Gewebsnekrose (grünlich-schuppige Haut, Gangrän, Amputationen). Stark verkürzte Lebenserwartung bei regelmäßigem Konsum.",
      description:"Desomorphin: Mu-Agonist ~8–10× stärker als Morphin, kurze Wirkdauer → häufiges Nachspritzen. Die Hauptgefahr kommt vor allem von den ätzenden Verunreinigungen der Eigensynthese (Nekrose, Infektionen, Abszesse, Knochenschäden). Dazu klassische Opioid-Atemdepression."
    },
    "Opium": {
      effets:["Analgesie", "Euphorie", "Sedierung", "Träumerei"],
      dosage:{faible:"je nach Morphingehalt (sehr variabel)",modere:"unvorhersehbare Dosis",fort:"Atemdepression"},
      duree:"Eintritt 15–45 Min | Gesamt 4–6 h",
      tripReport:"Opium (Mohnmilch): klassische Opioid-Euphorie, geraucht oder gegessen. Sehr variabler Morphingehalt → unvorhersehbare Dosierung. Abhängigkeit und Atemdepression wie bei allen Opioiden.",
      description:"Morphin + Codein + Thebain (Opioid-Agonisten). Atemdepression, Abhängigkeit. Große Gefahr mit Alkohol/Benzos. Naloxon bei Überdosis."
    },
    "Tianeptine": {
      effets:["Euphorie", "Angstlösung", "Sedierung", "Analgesie"],
      dosage:{faible:"12,5–25 mg",modere:"25–50 mg",fort:"100–250 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 3–4 h",
      tripReport:"Tianeptin 50 mg: ein zum Straßen-Opioid gewordenes Antidepressivum. Ultraschnelle Abhängigkeit.",
      description:"Atypischer Mu-Agonist. Explosive Abhängigkeit. Alkohol = Atemrisiko."
    },
    "Kratom": {
      effets:["Analgesie", "Leichte Euphorie", "Stimulation bei niedriger Dosis", "Sedierung bei hoher Dosis"],
      dosage:{faible:"2–5 g",modere:"5–10 g",fort:"15–25 g"},
      duree:"Eintritt 15–30 Min | Gesamt 3–6 h",
      tripReport:"Kratom 5 g: sanfte Opioidwirkung. 15 g: starke Sedierung. Körperliche Abhängigkeit innerhalb weniger Wochen.",
      description:"Partieller Opioid-Agonist + Alpha-2-Agonist. Entzug vergleichbar mit Heroin. Hepatotoxisch."
    },
    "Psilocine": {
      effets:["Halluzinationen", "Euphorie", "Ego-Auflösung"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"30–40 mg"},
      duree:"Eintritt 15–45 Min | Gesamt 4–6 h",
      tripReport:"Psilocin 20 mg: schnellerer Trip als Psilocybin. Vergleichbare Visuals.",
      description:"4-HO-DMT: aktiver Metabolit von Psilocybin. Identisches Profil."
    },
    "DMT": {
      effets:["Intensive Halluzinationen", "Entitäten", "Break-through", "Euphorie"],
      dosage:{faible:"10–15 mg (geraucht)",modere:"20–40 mg",fort:"50–70 mg"},
      duree:"Eintritt 30 s (geraucht) | Gesamt 10–20 Min",
      tripReport:"DMT 40 mg geraucht: Begegnung mit Entitäten. Totale Dissoziation für 15 Min. Die intensivste mögliche Erfahrung.",
      description:"N,N-DMT. Starker 5-HT2A-Agonist. Endogen. Nie mit MAO-Hemmer außer im Ayahuasca-Protokoll."
    },
    "2C-B": {
      effets:["Euphorie", "Halluzinationen", "Stimulation", "Empathie"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"30–40 mg"},
      duree:"Eintritt 45–75 Min | Gesamt 4–6 h",
      tripReport:"2C-B 18 mg: das ausgewogenste Psychedelikum. Entaktogen + visuell. Beliebt auf Festivals.",
      description:"5-HT2A- + 5-HT2C-Agonist. Mögliche Tachykardie. Nie mit Lithium."
    },
    "Mescaline": {
      effets:["Farbige Halluzinationen", "Euphorie", "Verbindung zur Natur", "Introspektion"],
      dosage:{faible:"100–200 mg",modere:"200–400 mg",fort:"400–600 mg"},
      duree:"Eintritt 60–120 Min | Gesamt 10–14 h",
      tripReport:"Meskalin 300 mg: leuchtende Farben, Verbindung zur Natur. Langer, tiefer Trip.",
      description:"5-HT2A-Agonist. Sehr lange Dauer. Tachykardie. Übelkeit zu Beginn häufig."
    },
    "Ayahuasca": {
      effets:["Intensive Visionen", "Purge", "Introspektion", "Halluzinationen"],
      dosage:{faible:"100–150 ml",modere:"150–200 ml",fort:"200+ ml"},
      duree:"Eintritt 20–60 Min | Peak 2–4 h | Gesamt 4–6 h",
      tripReport:"Ayahuasca: tiefe innere Reise, mögliche Purge. MAO-Hemmer = tödliche Wechselwirkungen mit vielen Substanzen.",
      description:"Enthält MAO-Hemmer (Harmala). TÖDLICHE Wechselwirkungen: Tramadol, MDMA, Kokain, Amphetamine, Antidepressiva."
    },
    "Ibogaïne": {
      effets:["Traumartige Visionen", "Tiefe Offenbarungen", "Stimulation", "Übelkeit"],
      dosage:{faible:"5–10 mg/kg",modere:"10–20 mg/kg",fort:"20+ mg/kg"},
      duree:"Eintritt 1–2 h | Gesamt 12–36 h",
      tripReport:"Ibogain: eine 36-h-Reise, das ganze Leben wird durchlebt. Herzstillstand ohne ärztliche Aufsicht möglich.",
      description:"Multimodaler Wiederaufnahmehemmer. Langes QT = Tod. Nie ohne vorherige Herzuntersuchung verwenden."
    },
    "1P-LSD": {
      effets:["Halluzinationen", "Introspektion", "Zeitverzerrung", "Empathie"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–400 µg"},
      duree:"Eintritt 45–90 Min | Gesamt 8–12 h",
      tripReport:"1P-LSD 125 µg: herrliche Visuals, tiefe musikalische Verbindung.",
      description:"In einigen Ländern legale LSD-Prodrug. Identisches Profil wie LSD."
    },
    "1cP-LSD": {
      effets:["Halluzinationen", "Euphorie", "Zeitverzerrung"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–300 µg"},
      duree:"Eintritt 60–90 Min | Gesamt 8–14 h",
      tripReport:"1cP-LSD 100 µg: etwas milder als LSD, allmählicher Anstieg.",
      description:"Cyclopropanoyl-LSD-Analogon. Lithium, Antipsychotika meiden."
    },
    "DOM": {
      effets:["Intensive Halluzinationen", "Extreme Dauer", "Stimulation"],
      dosage:{faible:"1–3 mg",modere:"3–6 mg",fort:"8–14 mg"},
      duree:"Eintritt 60–180 Min | Gesamt 16–24 h",
      tripReport:"DOM 4 mg: ein 20-Stunden-Trip. Sehr langsamer Anstieg = Nachlege-Falle.",
      description:"2,5-Dimethoxy-4-methylamphetamin. Hypertensives Risiko."
    },
    "2C-C": {
      effets:["Leichte Halluzinationen", "Sedierung", "Euphorie"],
      dosage:{faible:"15–25 mg",modere:"25–40 mg",fort:"50–80 mg"},
      duree:"Eintritt 45–90 Min | Gesamt 4–6 h",
      tripReport:"2C-C 30 mg: eines der sanftesten 2C, sedierend und visuell.",
      description:"2C-C: 5-HT2A-Agonist. Kurze Dauer. Sedierende Wirkung."
    },
    "2C-D": {
      effets:["Mentale Stimulation", "Leichte Halluzinationen", "Kreativität"],
      dosage:{faible:"10–20 mg",modere:"20–30 mg",fort:"40–60 mg"},
      duree:"Eintritt 45–75 Min | Gesamt 4–6 h",
      tripReport:"2C-D 25 mg: ein nootropisch-psychedelischer Effekt, geistige Klarheit.",
      description:"Laut Shulgin das nootropischste der 2C."
    },
    "2C-E": {
      effets:["Intensive Halluzinationen", "Stimulation", "Empathie"],
      dosage:{faible:"5–10 mg",modere:"10–15 mg",fort:"20–30 mg"},
      duree:"Eintritt 60–120 Min | Gesamt 8–12 h",
      tripReport:"2C-E 15 mg: langer, angstvoller Anstieg, aber sehr tiefer Peak.",
      description:"Genannt 'The Aquarust'. Tückischer langsamer Eintritt. Bad-Trip-Risiko."
    },
    "2C-I": {
      effets:["Euphorie", "Halluzinationen", "Stimulation"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–35 mg"},
      duree:"Eintritt 45–75 Min | Gesamt 6–8 h",
      tripReport:"2C-I 15 mg: euphorisch und visuell, Gefühl der Unbesiegbarkeit.",
      description:"Starker 5-HT2A-Agonist. Mögliche Tachykardie."
    },
    "2C-P": {
      effets:["Sehr intensive Halluzinationen", "Sehr lange Dauer", "Stimulation"],
      dosage:{faible:"3–6 mg",modere:"6–12 mg",fort:"15–25 mg"},
      duree:"Eintritt 90–180 Min | Gesamt 10–16 h",
      tripReport:"2C-P 8 mg: ein 14-Stunden-Trip. Nie ohne vorherige Erfahrung.",
      description:"Eines der stärksten Psychedelika der 2C-Familie. Überdosis möglich."
    },
    "2C-T-2": {
      effets:["Halluzinationen", "Empathie", "Introspektion"],
      dosage:{faible:"5–10 mg",modere:"10–15 mg",fort:"20–30 mg"},
      duree:"Eintritt 60–120 Min | Gesamt 6–10 h",
      tripReport:"2C-T-2 12 mg: tiefe Erfahrung. Tödliche Wechselwirkung mit Lithium.",
      description:"Dokumentierte MAO-Hemmer-Wechselwirkungen (Todesfälle). Nie mit MAO-Hemmer mischen."
    },
    "2C-T-7": {
      effets:["Intensive Halluzinationen", "Empathie", "Übelkeit"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–35 mg"},
      duree:"Eintritt 60–120 Min | Gesamt 8–15 h",
      tripReport:"2C-T-7 15 mg: 3 Stunden Erbrechen, dann großartige Effekte. Nie mit MAO-Hemmer.",
      description:"An mehreren Todesfällen in MAO-Hemmer-Kombination beteiligt. Mögliche Hepatotoxizität."
    },
    "4-AcO-DMT": {
      effets:["Halluzinationen", "Euphorie", "Emotionale Verbindung"],
      dosage:{faible:"10–15 mg",modere:"20–30 mg",fort:"40–60 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–6 h",
      tripReport:"4-AcO-DMT 25 mg: wie Pilze, aber sauberer.",
      description:"Psilocin-Prodrug. Profil nahe an Psilocybin."
    },
    "4-AcO-MET": {
      effets:["Halluzinationen", "Kreativität", "Euphorie"],
      dosage:{faible:"10–20 mg",modere:"20–30 mg",fort:"35–55 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 5–8 h",
      tripReport:"4-AcO-MET 25 mg: sehr klare farbige Visuals, musikalische Euphorie.",
      description:"5-HT2A-Agonist. Leichte körperliche Stimulation."
    },
    "4-AcO-DET": {
      effets:["Halluzinationen", "Euphorie", "Kreativität"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"30–50 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 5–8 h",
      tripReport:"4-AcO-DET 20 mg: ein kürzeres, visuelleres Psilocybin.",
      description:"5-HT2A-Agonist. Weniger Übelkeit als rohes Psilocybin."
    },
    "5-MeO-DiPT": {
      effets:["Halluzinationen", "Körperliche Stimulation", "Sexuelle Effekte"],
      dosage:{faible:"3–6 mg",modere:"6–12 mg",fort:"15–25 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–6 h",
      tripReport:"5-MeO-DiPT 8 mg (Foxy): Halluzinationen und ausgeprägte sexuelle Stimulation.",
      description:"5-HT2A-Agonist. Neurotoxizität bei wiederholtem Konsum."
    },
    "5-MeO-MiPT": {
      effets:["Leichte Halluzinationen", "Empathie", "Stimulation"],
      dosage:{faible:"3–5 mg",modere:"5–10 mg",fort:"12–20 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–6 h",
      tripReport:"5-MeO-MiPT 7 mg (Moxy): leicht empathogen, körperliche Leichtigkeit.",
      description:"5-HT-Agonist. Kurze Dauer."
    },
    "Dextrométhorphane": {
      effets:["Dissoziation", "Euphorie", "Halluzinationen", "Leichte Stimulation"],
      dosage:{faible:"200–400 mg",modere:"400–600 mg",fort:"600–1000 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"DXM 400 mg: leichte Dissoziation. 600 mg: Sigma-Plateau, Halluzinationen. MAO-Hemmer = Tod.",
      description:"σ1-Agonist + NMDA-Antagonist + schwacher SSRI. Serotoninsyndrom mit MDMA/MAO-Hemmer."
    },
    "Deschlorokétamine": {
      effets:["Dissoziation", "Euphorie", "Sedierung"],
      dosage:{faible:"30–50 mg",modere:"75–125 mg",fort:"150–200 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 3–6 h",
      tripReport:"Deschlorketamin 80 mg: saubere Dissoziation. Länger anhaltend als Ketamin.",
      description:"NMDA-Antagonist. Zystitis-Risiko bei wiederholtem Konsum."
    },
    "Diphenidine": {
      effets:["Dissoziation", "Anästhesie", "Halluzinationen"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 6–10 h",
      tripReport:"Diphenidin 60 mg: Dissoziation ähnlich wie Ketamin, aber länger.",
      description:"Nicht-PCP-NMDA-Antagonist. Lange Dauer. Schnelle Toleranz."
    },
    "3-HO-PCE": {
      effets:["Dissoziation", "Analgesie", "Euphorie"],
      dosage:{faible:"5–10 mg",modere:"15–25 mg",fort:"30–50 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 4–8 h",
      tripReport:"3-HO-PCE 15 mg: tiefe Dissoziation mit Opioid-Euphorie. Stark suchterzeugend.",
      description:"Doppeltes Risiko: dissoziative + Opioid-Abhängigkeit."
    },
    "3-HO-PCP": {
      effets:["Dissoziation", "Starke Analgesie", "Intensive Euphorie"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–25 mg"},
      duree:"Eintritt 15–30 Min | Gesamt 4–8 h",
      tripReport:"3-HO-PCP 7 mg: Abhängigkeit nach 2 Wochen.",
      description:"Starke Opioidaktivität. Potenziell kardiotoxisch."
    },
    "3-MeO-PCE": {
      effets:["Dissoziation", "Euphorie", "Mögliche Manie"],
      dosage:{faible:"3–7 mg",modere:"8–15 mg",fort:"20–30 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–8 h",
      tripReport:"3-MeO-PCE 10 mg: Grandiosität und Verwirrung. Psychose bei hoher Dosis.",
      description:"Risiko pharmakologischer Manie."
    },
    "3-MeO-PCP": {
      effets:["Dissoziation", "Manische Euphorie", "Mögliche Psychose"],
      dosage:{faible:"3–8 mg",modere:"10–15 mg",fort:"20–35 mg"},
      duree:"Eintritt 30–90 Min | Gesamt 6–12 h",
      tripReport:"3-MeO-PCP 10 mg: Grandiosität, dann Verwirrung. Dokumentierte manische Psychose.",
      description:"NMDA-Antagonist + partiell dopaminerg. Sehr gefährlich allein."
    },
    "O-PCE": {
      effets:["Dissoziation", "Euphorie", "Analgesie"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–75 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–8 h",
      tripReport:"O-PCE 30 mg: saubere Dissoziation, weniger K-Hole als Ketamin.",
      description:"NMDA-Antagonist. Zystitis-Risiko. Nicht mit Alkohol mischen."
    },
    "PCE": {
      effets:["Dissoziation", "Euphorie", "Anästhesie"],
      dosage:{faible:"5–10 mg",modere:"15–25 mg",fort:"30–50 mg"},
      duree:"Eintritt 15–30 Min | Gesamt 4–8 h",
      tripReport:"PCE 20 mg: ähnlich wie PCP, aber leicht anders.",
      description:"NMDA-Antagonist. Psychose-Risiko."
    },
    "PCP": {
      effets:["Starke Dissoziation", "Anästhesie", "Agitation", "Mögliche Psychose"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"15–25 mg"},
      duree:"Eintritt 5–20 Min | Gesamt 4–8 h",
      tripReport:"PCP 7 mg: totale Abkopplung, vervielfachte Körperkraft. Aggression möglich.",
      description:"NMDA-Antagonist + dopaminerg. Rhabdomyolyse möglich."
    },
    "Méthoxétamine": {
      effets:["Dissoziation", "Euphorie", "Anästhesie", "Halluzinationen"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–90 mg"},
      duree:"Eintritt 30–90 Min (oral) | Gesamt 5–7 h",
      tripReport:"MXE (Methoxetamin) ~30 mg: Dissoziation nahe Ketamin, aber viel länger und stärker. Leichte Überdosis, verlängertes 'M-Hole', kardiovaskuläres Risiko (Hypertonie).",
      description:"NMDA-Antagonist + serotonerge Aktivität. Täuschend lange Dauer → gefährliches Nachlegen. Harnwegstoxizität bei wiederholtem Konsum. Dokumentierte Todesfälle."
    },
    "2-FDCK": {
      effets:["Dissoziation", "Analgesie", "Leichte Euphorie"],
      dosage:{faible:"25–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Eintritt 10–25 Min | Gesamt 2–4 h",
      tripReport:"2-FDCK 60 mg: tiefe Dissoziation, klarer als Ketamin.",
      description:"Fluoriertes Ketamin-Analogon. Mögliche Zystitis. Nicht mit Alkohol/Benzos mischen."
    },
    "3-MeO-PCMo": {
      effets:["Leichte Dissoziation", "Sedierung"],
      dosage:{faible:"30–60 mg",modere:"60–120 mg",fort:"120 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 3–5 h",
      tripReport:"3-MeO-PCMo: ein RC-Dissoziativum der PCP-Familie, schwächer und sedierender. Begrenzte Daten.",
      description:"NMDA-Antagonist (Morpholin). Weniger potent als 3-MeO-PCP. Kaum toxikologische Daten."
    },
    "Méthoxphénidine": {
      effets:["Dissoziation", "Halluzinationen", "Stimulation"],
      dosage:{faible:"40–60 mg",modere:"60–100 mg",fort:"100 mg+"},
      duree:"Eintritt 30–90 Min | Gesamt 4–8 h",
      tripReport:"MXP (Methoxphenidin): ein Dissoziativum vom Diphenidin-Typ, lang, mit Risiko von Hypertonie und Agitation/Psychose bei hohen Dosen. Täuschend langsamer Anstieg.",
      description:"NMDA-Antagonist (Diarylethylamin). Langsamer Anstieg → gefährliches Nachlegen. Hypertonie, lange Dauer."
    },
    "Nitreux": {
      effets:["Kurze Euphorie", "Leichte Dissoziation", "Kichern"],
      dosage:{faible:"1 Kartusche",modere:"2–3 Kartuschen",fort:"viele wiederholt (B12-Mangel)"},
      duree:"Eintritt wenige Sekunden | Gesamt 2–5 Min",
      tripReport:"Lachgas (Ballons): 2 Minuten Euphorie. Wiederholter Konsum = schwerer B12-Mangel.",
      description:"Distickstoffmonoxid. B12-Mangel → schwere Neuropathie."
    },
    "Delta-9 THC": {
      effets:["Euphorie", "Entspannung", "Veränderte Wahrnehmung", "Appetitanregung"],
      dosage:{faible:"2–5 mg",modere:"5–15 mg",fort:"20–50 mg"},
      duree:"Eintritt 15–45 Min (oral) | Peak 1–3 h | Gesamt 4–6 h",
      tripReport:"THC 15 mg: Euphorie und Lachen, verstärkte Musik. Angst und Paranoia ab 20 mg möglich.",
      description:"Δ9-Tetrahydrocannabinol: CB1/CB2-Agonist. Dokumentierte Cannabinoid-Psychose."
    },
    "CBD": {
      effets:["Angstlösung", "Entzündungshemmend", "Entspannung"],
      dosage:{faible:"10–25 mg",modere:"25–75 mg",fort:"100–300 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–8 h",
      tripReport:"CBD 50 mg: leichte Entspannung, kein High. Kann die angstauslösenden Effekte von THC mildern.",
      description:"Negativer CB1-Modulator. Antagonisiert manche THC-Effekte. Sehr geringe Toxizität."
    },
    "THCP": {
      effets:["Intensive Euphorie", "Sedierung", "Kognitive Beeinträchtigung"],
      dosage:{faible:"1–2 mg",modere:"2–5 mg",fort:"7–10 mg"},
      duree:"Eintritt 10–30 Min | Gesamt 4–8 h",
      tripReport:"THCP 3 mg: 30× stärker als THC. Bei nicht gewöhnten Konsumenten: extrem desorientierende Effekte.",
      description:"Tetrahydrocannabiphorol. CB1-Affinität 33× > THC. Begrenzte Sicherheitsdaten."
    },
    "THCV": {
      effets:["Leichte Stimulation", "Angstlösung", "Appetitminderung"],
      dosage:{faible:"2–5 mg",modere:"5–15 mg",fort:"20–30 mg"},
      duree:"Eintritt 5–15 Min (geraucht) | Gesamt 2–4 h",
      tripReport:"THCV 10 mg: klar und stimulierend, weniger sedierend als THC. Mindert den Appetit.",
      description:"CB1-Antagonist bei niedriger Dosis, CB1/CB2-Agonist bei hoher Dosis."
    },
    "HHC": {
      effets:["Euphorie", "Entspannung", "Leichte kognitive Beeinträchtigung"],
      dosage:{faible:"3–6 mg",modere:"8–15 mg",fort:"20–35 mg"},
      duree:"Eintritt 15–30 Min | Gesamt 3–5 h",
      tripReport:"HHC 10 mg: ähnlich wie THC, aber 'klarer'. Gute Euphorie.",
      description:"Hexahydrocannabinol: hydriertes THC, moderater CB1-Agonist."
    },
    "HHC-P": {
      effets:["Starke Euphorie", "Sedierung", "Entspannung"],
      dosage:{faible:"2–3 mg",modere:"3–7 mg",fort:"8–15 mg"},
      duree:"Eintritt 10–25 Min | Gesamt 3–6 h",
      tripReport:"HHC-P 5 mg: deutlich stärker als HHC. In der Intensität mit THCP vergleichbar.",
      description:"Hexahydrocannabiphorol: starker CB1-Agonist."
    },
    "Delta-8 THC": {
      effets:["Leichte Euphorie", "Entspannung", "Angstlösung"],
      dosage:{faible:"5–10 mg",modere:"10–25 mg",fort:"40–60 mg"},
      duree:"Eintritt 15–45 Min | Gesamt 3–6 h",
      tripReport:"Delta-8-THC 15 mg: ein milderer THC-Effekt, weniger angstauslösend. Mögliche chemische Verunreinigungen.",
      description:"Isomer von Delta-9. Der Herstellungsprozess kann gefährliche Rückstände hinterlassen."
    },
    "Delta-10 THC": {
      effets:["Leichte Euphorie", "Sanfte Stimulation", "Klarheit"],
      dosage:{faible:"5–10 mg",modere:"10–25 mg",fort:"30–50 mg"},
      duree:"Eintritt 15–45 Min | Gesamt 3–5 h",
      tripReport:"Delta-10 (oft als 'D10' verkauft): stimulierender und 'klarer' als Delta-9, weniger angstauslösend, schwächer in der Intensität.",
      description:"THC-Isomer, durch chemische Umwandlung von CBD gewonnen. Der Prozess kann Rückstände hinterlassen (Säuren, Metallkatalysatoren). Geringere CB1-Affinität als Delta-9."
    },
    "CBC": {
      effets:["Entzündungshemmend", "Leichte Entspannung", "Entourage-Effekt"],
      dosage:{faible:"10–25 mg",modere:"25–50 mg",fort:"50–100 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–6 h",
      tripReport:"CBC allein: kein High. Meist in Blüten als legale Alternative verkauft; der gefühlte Effekt kommt oft eher von Terpenen und dem Entourage-Effekt als vom CBC selbst.",
      description:"Cannabichromen: ein natürliches, nicht psychoaktives Cannabinoid. Wirkt vor allem auf TRPV1/TRPA1-Rezeptoren. Geringe CB1-Affinität. Für Entzündung untersucht. Legal."
    },
    "CBN": {
      effets:["Leichte Sedierung", "Entspannung", "Schläfrigkeit"],
      dosage:{faible:"2,5–5 mg",modere:"5–15 mg",fort:"15–30 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–8 h",
      tripReport:"CBN 10 mg: vor allem sedierend, oft zum Schlafen genutzt. Sehr schwach psychoaktiv.",
      description:"Cannabinol: ein THC-Abbauprodukt. Schwacher CB1-Agonist. Geringe Toxizität. Je nach Formulierung legal."
    },
    "CBG": {
      effets:["Konzentration", "Entzündungshemmend", "Leichte Entspannung"],
      dosage:{faible:"10–25 mg",modere:"25–50 mg",fort:"50–100 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–6 h",
      tripReport:"CBG 30 mg: nicht berauschend, ein subtiler, manchmal als klärend beschriebener Effekt. Gut verträglich.",
      description:"Cannabigerol: die biosynthetische Vorstufe der anderen Cannabinoide. Nicht psychoaktiv. Untersucht (Entzündung, antibakteriell). Geringe Toxizität."
    },
    "HHCH": {
      effets:["Starke Euphorie", "Sedierung", "Deutliche kognitive Beeinträchtigung"],
      dosage:{faible:"1–3 mg",modere:"3–7 mg",fort:"8–15 mg"},
      duree:"Eintritt 15–35 Min | Gesamt 4–8 h",
      tripReport:"HHCH ~5 mg: 10–15× stärker als THC, längere Effekte. Desorientierung bei nicht Gewöhnten häufig.",
      description:"Hexahydrocannabihexol: hydrierte Version von THCH. Starker CB1-Agonist. Kaum wissenschaftliche Daten. In Frankreich seit 2024 verboten."
    },
    "HHC-O": {
      effets:["Intensive Euphorie", "Sedierung", "Tiefe Entspannung"],
      dosage:{faible:"2–4 mg",modere:"4–8 mg",fort:"10–18 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–7 h",
      tripReport:"HHC-O 5 mg: HHC-Acetat, langsamerer Anstieg, aber stärker als HHC. Unsichere Pyrolyse beim Vapen.",
      description:"HHC-O-Acetat: acetylierter Ester von HHC. Inhalierte Acetate werfen eine Frage der Lungentoxizität auf (vgl. Vitamin-E-Acetat). In Frankreich verboten."
    },
    "HHCP": {
      effets:["Sehr starke Euphorie", "Schwere Sedierung", "Intensive kognitive Beeinträchtigung"],
      dosage:{faible:"1–2 mg",modere:"2–5 mg",fort:"6–10 mg"},
      duree:"Eintritt 15–30 Min | Gesamt 5–9 h",
      tripReport:"HHCP 3 mg: unter den stärksten verkauften Neo-Cannabinoiden, nahe an THCP. Sehr lange Effekte.",
      description:"Hexahydrocannabiphorol: Heptylkette, sehr hohe CB1-Affinität. Kaum Sicherheitsdaten. In Frankreich verboten."
    },
    "THCB": {
      effets:["Euphorie", "Entspannung", "Veränderte Wahrnehmung"],
      dosage:{faible:"2–5 mg",modere:"5–12 mg",fort:"15–25 mg"},
      duree:"Eintritt 15–40 Min | Gesamt 3–6 h",
      tripReport:"THCB ~8 mg: nahe an THC, leicht schneller. Butylkette.",
      description:"Tetrahydrocannabutol: ein THC-Analogon mit Butylkette, in Spuren in Cannabis vorhanden. CB1-Agonist. In Frankreich seit 2024 verboten."
    },
    "THCH": {
      effets:["Starke Euphorie", "Sedierung", "Kognitive Beeinträchtigung"],
      dosage:{faible:"1–3 mg",modere:"3–8 mg",fort:"10–18 mg"},
      duree:"Eintritt 15–35 Min | Gesamt 4–7 h",
      tripReport:"THCH ~5 mg: deutlich stärker als THC (geschätzt ~10×). Lange, sedierende Effekte.",
      description:"Tetrahydrocannabihexol: Hexylkette, starke CB1-Affinität. Sehr wenige Humandaten. In Frankreich verboten."
    },
    "THCJD": {
      effets:["Starke Euphorie", "Entspannung", "Veränderte Wahrnehmung"],
      dosage:{faible:"2–4 mg",modere:"4–9 mg",fort:"10–18 mg"},
      duree:"Eintritt 15–40 Min | Gesamt 4–7 h",
      tripReport:"THCJD ~5 mg: als sehr stark angepriesen (Octylkette), reale Daten rar.",
      description:"Tetrahydrocannabioctol: ein THC-Analogon mit langer Alkylkette. Schlecht charakterisiertes pharmakologisches Profil. In Frankreich verboten."
    },
    "H4CBD": {
      effets:["Angstlösung", "Entzündungshemmend", "Entspannung"],
      dosage:{faible:"10–25 mg",modere:"25–60 mg",fort:"75–150 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–8 h",
      tripReport:"H4CBD 40 mg: nahe an CBD, manchmal als etwas entspannender beschrieben. Kein High.",
      description:"Hydriertes CBD (Tetrahydrocannabidiol). Nicht psychoaktiv, erhöhte Affinität zu manchen Rezeptoren. Begrenzte Daten. In Frankreich seit 2024 verboten."
    },
    "H2CBD": {
      effets:["Leichte Angstlösung", "Entspannung"],
      dosage:{faible:"15–30 mg",modere:"30–70 mg",fort:"80–150 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–7 h",
      tripReport:"H2CBD 40 mg: ein teilweise hydriertes CBD-Analogon, nicht psychoaktiv. Sehr wenig Erfahrung.",
      description:"Dihydrocannabidiol: wandelt sich nicht in THC um. Vermutlich nicht psychoaktiv. In Frankreich seit 2024 verboten."
    },
    "CBDP": {
      effets:["Entspannung", "Leichte Angstlösung"],
      dosage:{faible:"10–30 mg",modere:"30–60 mg",fort:"60–100 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 4–6 h",
      tripReport:"CBDP 30 mg: ein Phorol-Analogon von CBD. Sehr begrenzte Daten.",
      description:"Cannabidiphorol: ein CBD-Analogon. Vermutlich nicht psychoaktives Profil."
    },
    "10-OH-HHC": {
      effets:["Euphorie", "Entspannung", "Leichte Sedierung"],
      dosage:{faible:"3–5 mg",modere:"5–12 mg",fort:"15–25 mg"},
      duree:"Eintritt 15–30 Min | Gesamt 3–5 h",
      tripReport:"10-OH-HHC: ein leicht anderes Profil als HHC, ähnliche Effekte.",
      description:"Hydroxylierter Metabolit von HHC. Begrenzte Daten."
    },
    "Cannabis CBD": {
      effets:["Angstlösung", "Entzündungshemmend", "Entspannung"],
      dosage:{faible:"10–25 mg",modere:"25–75 mg",fort:"100–300 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–8 h",
      tripReport:"CBD 50 mg: leichte Entspannung, kein High. Kann die angstauslösenden Effekte von THC mildern.",
      description:"Negativer CB1-Modulator. Antagonisiert manche THC-Effekte. Sehr geringe Toxizität."
    },
    "MDPV": {
      effets:["Starke Euphorie", "Intensive Stimulation", "Psychose"],
      dosage:{faible:"3–5 mg",modere:"5–10 mg",fort:"15–25 mg"},
      duree:"Eintritt 10–20 Min | Gesamt 3–5 h",
      tripReport:"MDPV 8 mg: 48 h Nachlegen, Psychose.",
      description:"Eines der süchtigmachendsten bekannten. Dokumentierte Todesfälle."
    },
    "Méphédrone": {
      effets:["Euphorie", "Empathie", "Stimulation", "Gesteigerte Libido"],
      dosage:{faible:"75–150 mg",modere:"150–200 mg",fort:"250–400 mg"},
      duree:"Eintritt 15–45 Min | Gesamt 2–4 h",
      tripReport:"Mephedron 150 mg: MDMA-ähnlich, aber kürzer. Zwanghaftes Nachlegen. Intensives Verlangen.",
      description:"4-MMC. DA/5-HT-Freisetzer. Kardiotoxisch. Ultraschnelle Abhängigkeit. MDMA = Hyperthermie."
    },
    "3-MMC": {
      effets:["Euphorie", "Empathie", "Stimulation", "Gesteigerte Libido"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 3–5 h",
      tripReport:"3-MMC 150 mg: Nachlegen unvermeidlich, schweres Runterkommen.",
      description:"Mephedron-Ersatz. Kardiotoxizität, Hyperthermie."
    },
    "2-MMC": {
      effets:["Euphorie", "Stimulation", "Mäßige Empathie"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 3–5 h",
      tripReport:"2-MMC 150 mg: zwanghaftes Nachlegen, schweres Runterkommen.",
      description:"Monoaminerger Freisetzer. Schnelle Abhängigkeit, Kardiotoxizität."
    },
    "4-CMC": {
      effets:["Stimulation", "Euphorie", "Geselligkeit"],
      dosage:{faible:"20–50 mg",modere:"50–120 mg",fort:"150 mg+"},
      duree:"Eintritt 20–45 Min | Gesamt 2–4 h",
      tripReport:"4-CMC (Clephedron): ein Cathinon zwischen Stimulation und Empathie, schwächer als Mephedron. Häufiges Nachlegen.",
      description:"Monoamin-Freisetzer/Wiederaufnahmehemmer. Mögliche Nephrotoxizität. Kardiovaskuläre Risiken."
    },
    "3-CMC": {
      effets:["Stimulation", "Euphorie", "Geselligkeit"],
      dosage:{faible:"30–70 mg",modere:"70–150 mg",fort:"150 mg+"},
      duree:"Eintritt 20–45 Min | Gesamt 2–4 h",
      tripReport:"3-CMC (Clophedron): ein stimulierendes Cathinon nahe an 3-MMC, nach Verboten verbreitet. Häufiges Nachlegen, schweres Runterkommen.",
      description:"Dopamin-Noradrenalin-Hemmer/Freisetzer. Herzbelastung, Abhängigkeit. Schnelle Toleranz."
    },
    "Méthylone": {
      effets:["Empathie", "Euphorie", "Stimulation"],
      dosage:{faible:"100–150 mg",modere:"150–250 mg",fort:"250–350 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 3–5 h",
      tripReport:"Methylon (bk-MDMA): ein Empathogen nahe an MDMA, aber kürzer, stimulierender und weniger 'tief'. Häufiges Nachlegen, Hyperthermie. Oft als MDMA verkauft.",
      description:"Dopamin-/Noradrenalin- > Serotonin-Freisetzer (Cathinon). Hyperthermie, Herzbelastung. Mäßige Hydration, Pausen."
    },
    "Eutylone": {
      effets:["Stimulation", "Euphorie", "Mäßige Empathie", "Schlaflosigkeit"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"200 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 3–5 h",
      tripReport:"Eutylon (bk-EBDB): ein sehr verbreitetes Cathinon, oft als MDMA oder 'Molly' verkauft. Eher stimulierend als empathogen, ausgeprägte Schlaflosigkeit, zwanghaftes Nachlegen. Ursache enttäuschender/ängstlicher Erfahrungen, die für MDMA gehalten werden.",
      description:"Monoamin-Wiederaufnahmehemmer. Anhaltende Schlaflosigkeit, Angst, Herzbelastung. Vorher testen (oft mit MDMA verwechselt)."
    },
    "Pentedrone": {
      effets:["Stimulation", "Euphorie", "Schlaflosigkeit"],
      dosage:{faible:"30–60 mg",modere:"60–100 mg",fort:"130–200 mg"},
      duree:"Eintritt 15–30 Min | Gesamt 2–4 h",
      tripReport:"Pentedron 80 mg: eine 6-h-Nachlege-Session mit Vasokonstriktion.",
      description:"DAT/NET-Hemmer. Sehr hohes Missbrauchspotenzial."
    },
    "Pentylone": {
      effets:["Stimulation", "Euphorie", "Nachlegen"],
      dosage:{faible:"30–60 mg",modere:"60–120 mg",fort:"120 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 3–6 h",
      tripReport:"Pentylon: ein stimulierendes Cathinon, oft Streckmittel von 'MDMA'/'Molly'. Schlaflosigkeit, Angst, zwanghaftes Nachlegen.",
      description:"Monoamin-Wiederaufnahmehemmer. Herzbelastung, Schlaflosigkeit. Häufig in Mischungen vorhanden."
    },
    "Alpha-PVP": {
      effets:["Starke Stimulation", "Euphorie", "Hypervigilanz", "Zwanghaftes Nachlegen"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25 mg+"},
      duree:"Eintritt 10–30 Min | Gesamt 2–4 h",
      tripReport:"Alpha-PVP ('Flakka') ~15 mg geschnupft: ein brutaler Kokain/Meth-artiger Anstieg. Zwanghaftes Nachlegen, Agitation, Paranoia, Hyperthermie bei hohen Dosen.",
      description:"DAT/NET-Hemmer, schwacher serotonerger Effekt. Starkes Missbrauchspotenzial. Publik gewordene Fälle von agitiertem Delir. Schnelle Toleranz."
    },
    "Alpha-PHP": {
      effets:["Intensive Stimulation", "Euphorie", "Zwanghaftes Nachlegen", "Schlaflosigkeit"],
      dosage:{faible:"3–5 mg",modere:"5–15 mg",fort:"20 mg+"},
      duree:"Eintritt 10–30 Min | Gesamt 2–4 h (geschnupft)",
      tripReport:"Alpha-PHP: Nachfolger von Alpha-PVP (Flakka), Effekte nahe an gerauchtem Meth, aber kurz, was zum zwanghaften Nachlegen treibt. Psychose und Wahn bei hoher Dosis oder im Binge.",
      description:"Dopamin-/Noradrenalin-Wiederaufnahmehemmer (Pyrrolidinophenon). Starke Verhaltenssucht, Hyperthermie, kardiovaskuläres Risiko. Begrenzte toxikologische Daten."
    },
    "NEP": {
      effets:["Stimulation", "Leichte Euphorie", "Konzentration"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50 mg+"},
      duree:"Eintritt 20–45 Min | Gesamt 3–5 h",
      tripReport:"NEP (N-Ethyl-Pentedron): ein stimulierendes Cathinon nahe an Pentedron, oft als legale Alternative verkauft. Häufiges Nachlegen, Schlaflosigkeit.",
      description:"Dopamin-/Noradrenalin-Wiederaufnahmehemmer. Stimulans mittlerer Dauer. Kardiovaskuläre und Abhängigkeitsrisiken."
    },
    "Hexen": {
      effets:["Stimulation", "Euphorie", "Geselligkeit", "Nachlegen"],
      dosage:{faible:"5–15 mg",modere:"15–35 mg",fort:"40 mg+"},
      duree:"Eintritt 15–40 Min | Gesamt 2–4 h",
      tripReport:"Hexen (N-Ethyl-Hexedron): ein kurz wirkendes stimulierendes Cathinon, in der Intensität nahe an MDPV. Zwanghaftes Nachlegen, schweres Runterkommen.",
      description:"DAT/NET-Hemmer. Starkes, kurzes Stimulans. Hyperthermie und Tachykardie bei hohen Dosen. Verhaltensabhängigkeit."
    },
    "4-FA": {
      effets:["Euphorie", "Stimulation", "Leichte Empathie"],
      dosage:{faible:"50–100 mg",modere:"100–150 mg",fort:"150–250 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"4-FA (4-Fluoramphetamin): zwischen Amphetamin und MDMA, soziale Euphorie. Kardiovaskuläre Risiken (Blutdruckspitzen, gemeldete Schlaganfall-/Hirnblutungsfälle). Nachlegen vermeiden.",
      description:"Dopamin-Noradrenalin-Freisetzer/-Hemmer + Serotonin. Gemeldetes Hirnblutungsrisiko. Nicht mit Stimulanzien/MAO-Hemmer kombinieren."
    },
    "2-FA": {
      effets:["Stimulation", "Konzentration", "Leichte Euphorie"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 6–10 h",
      tripReport:"2-FA 30 mg: wie ein sehr starker Kaffee, aber fokussierter.",
      description:"2-Fluoramphetamin. Herzrisiko. Schlaflosigkeit."
    },
    "3-FA": {
      effets:["Stimulation", "Leichte Empathie", "Konzentration"],
      dosage:{faible:"15–25 mg",modere:"30–50 mg",fort:"70–100 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 6–10 h",
      tripReport:"3-FA 40 mg: zwischen Amphetamin und MDMA, sanfte Empathie.",
      description:"Ausgewogener monoaminerger Freisetzer."
    },
    "4-FMA": {
      effets:["Stimulation", "Leichte Euphorie"],
      dosage:{faible:"40–80 mg",modere:"80–150 mg",fort:"150 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 3–5 h",
      tripReport:"4-FMA: ein fluoriertes Amphetamin-Stimulans, mehr 'Speed' als 4-FA. Begrenzte Daten, kardiovaskuläre Risiken.",
      description:"Dopamin-/Noradrenalin-Freisetzer. Herz-Vorsicht, keine Stimulanzien-Kombinationen."
    },
    "Salvia divinorum": {
      effets:["Intensive Dissoziation", "Realitätsverzerrungen", "Verschmelzung mit Objekten", "Verlust des Körpers"],
      dosage:{faible:"getrocknete Blätter 0,25–0,5 g",modere:"5×-Extrakt: 0,1–0,2 g",fort:"reines Salvinorin A: 200–500 µg (sehr stark)"},
      duree:"Eintritt <1 Min (geraucht) / 10 Min (sublingual) | Gesamt 5–20 Min (geraucht) / bis zu 2 h (sublingual)",
      tripReport:"Gerauchte Salvia: ein extrem schneller, intensiver und unvorhersehbarer Trip (unkontrollierbares Lachen, Verschmelzung mit der Umgebung, totaler Verlust der Orientierung), zum Glück kurz. Immer mit nüchternem Sitter, da die motorische Kontrolle verloren geht.",
      description:"Salvinorin A: selektiver Kappa-Opioid-Agonist (≠ serotonerge Psychedelika). Das stärkste bekannte natürliche Psychoaktivum. Keine nennenswerte Toxizität oder Sucht, aber häufige körperliche Unfälle (Stürze). Seltene anhaltende Psychosen."
    },
    "Kava": {
      effets:["Entspannung", "Angstlösung", "Geselligkeit", "Taubheit im Mund"],
      dosage:{faible:"1 Löffel (~70 g Wurzel als Getränk)",modere:"traditionelle soziale Dosis",fort:"mehrere Schalen (Sedierung, Übelkeit)"},
      duree:"Eintritt 20–30 Min | Gesamt 2–4 h",
      tripReport:"Kava (Pazifik-Getränk): Entspannung nahe an leichtem Alkohol oder einem Benzo, ohne Klarheitsverlust, mit tauber Zunge. Im sozialen Kontext geschätzt. Mögliche Hepatotoxizität bei intensivem Konsum oder mit Alkohol.",
      description:"Kavalactone: GABA-Modulation. Anxiolytisches Sedativum. Leberrisiko (vor allem Extrakte, Alkohol, empfindliche Leber). Verstärkt Alkohol und Benzodiazepine."
    },
    "Khat": {
      effets:["Stimulation", "Leichte Euphorie", "Gesprächigkeit", "Appetithemmung"],
      dosage:{faible:"einige frische Blätter",modere:"1 gekautes Bündel (~100–200 g)",fort:"längerer Konsum über mehrere Stunden"},
      duree:"Eintritt 15–45 Min | Gesamt 3–6 h (langes Kauen)",
      tripReport:"Khat: frische Blätter, stundenlang gekaut (Horn von Afrika, Arabische Halbinsel). Milde amphetaminartige Stimulation, soziale Euphorie. Schlaflosigkeit, Zahnprobleme und Abhängigkeit bei täglichem Konsum.",
      description:"Cathinon + Cathin (natürliche Amphetamine). Dopamin-/Noradrenalin-Freisetzung. Muss frisch konsumiert werden (Cathinon zerfällt). Kardiovaskuläre Risiken, psychische Abhängigkeit."
    },
    "Kanna": {
      effets:["Stimmungsaufhellung", "Angstlösung", "Leichte Euphorie", "Geselligkeit"],
      dosage:{faible:"50–100 mg",modere:"100–250 mg",fort:"250–500 mg+"},
      duree:"Eintritt 15–45 Min | Gesamt 1–3 h",
      tripReport:"Kanna (Südafrika): gekaut, geschnupft oder als Pulver. Ein milder anxiolytischer und leicht euphorisierender Effekt, bei höherer Dosis manchmal empathogen. Mit SSRI kombiniert: Vorsicht (theoretisches Serotoninsyndrom).",
      description:"Mesembrin: Serotonin-Wiederaufnahmehemmer + PDE4-Hemmer. Milder Effekt. Mit SSRI/MAO-Hemmer-Antidepressiva meiden."
    },
    "Lotus bleu": {
      effets:["Entspannung", "Leichte Euphorie", "Träumerei", "Sanfte Sedierung"],
      dosage:{faible:"Tee 2–5 g",modere:"5–10 g (Aufguss/Wein)",fort:"konzentrierte Extrakte"},
      duree:"Eintritt 20–45 Min | Gesamt 1–3 h",
      tripReport:"Blauer Lotus (Nymphaea caerulea): aufgegossen, geraucht oder in Wein eingelegt. Eine sanfte, leicht traumartige Entspannung, im alten Ägypten verwendet. Subtile, manchmal enttäuschende Effekte.",
      description:"Aporphin + Nuciferin (dopaminerge Modulation). Milder entspannender Effekt. Geringe Toxizität bei üblichen Dosen."
    },
    "Bétel": {
      effets:["Stimulation", "Wohlbefinden", "Wärme", "Rote Speichelbildung"],
      dosage:{faible:"1 Bissen",modere:"regelmäßiger Konsum über den Tag",fort:"chronischer Konsum"},
      duree:"Eintritt 5–15 Min | Gesamt 1–3 h",
      tripReport:"Areca-/Betelnuss: in Südostasien gekaut, ein mildes Stimulans und Euphorikum. Färbt den Mund rot. Chronischer Konsum: starke Sucht und Mund-Rachen-Krebs.",
      description:"Arecolin: cholinerger Agonist. Stimulans. Erwiesenes Karzinogen (Mundhöhle) bei chronischem Konsum. Ausgeprägte Abhängigkeit."
    },
    "Muscade": {
      effets:["Sedierung", "Bei hoher Dosis: Delir, Halluzinationen", "Trockener Mund", "Übelkeit"],
      dosage:{faible:"nicht psychoaktiv (Gewürz)",modere:"5–10 g (10–20 g Pulver)",fort:"20 g+ (unangenehmes Delir, gefährlich)"},
      duree:"Eintritt 3–6 h (sehr langsam) | Gesamt 12–48 h",
      tripReport:"Muskatnuss bei hoher Dosis: ein langes anticholinerges Delir, oft sehr unangenehm (Übelkeit, trockener Mund, Tachykardie, Verwirrung, ein 2-tägiger Kater). Selten wiederholt.",
      description:"Myristicin + Elemicin (anticholinerge und schwach psychedelische Effekte). Täuschend sehr langsamer Eintritt. Ausgeprägtes Unwohlsein, Risiko bei hoher Dosis."
    },
    "Absinthe / Armoise": {
      effets:["Rausch", "Als 'klar' beschriebener Effekt", "Entspannung"],
      dosage:{faible:"ein dosiertes Glas Absinth",modere:"sozialer Konsum",fort:"starker Alkoholkonsum"},
      duree:"Eintritt wie Alkohol | Gesamt wie Alkohol",
      tripReport:"Absinth: der Effekt kommt vor allem vom Alkohol (oft 50–70%). Das Thujon des Wermuts ist in zu geringer Dosis für die sagenumwobenen 'halluzinogenen' Effekte vorhanden. Die Risiken sind die von starkem Alkohol.",
      description:"Thujon (Wermut/Artemisia): GABA-Antagonist bei hoher Dosis (krampfauslösend), aber moderne Mengen sind gering. Die eigentliche Gefahr bleibt der Alkohol."
    },
    "Éphédra": {
      effets:["Stimulation", "Energie", "Appetithemmung", "Bronchodilatation"],
      dosage:{faible:"Ephedrin 8–15 mg",modere:"15–30 mg",fort:"50 mg+ (Herzrisiko)"},
      duree:"Eintritt 30–60 Min | Gesamt 3–6 h",
      tripReport:"Ephedra (Ma Huang): ein Stimulans und Appetithemmer, früher in 'Fatburner'-Produkten. Ernste kardiovaskuläre Risiken (Hypertonie, Arrhythmien, Schlaganfall), besonders mit Koffein.",
      description:"Ephedrin/Pseudoephedrin: adrenerge Agonisten. Hypertonie, Tachykardie. Gefährlich fürs Herz, Wechselwirkungen mit Stimulanzien und MAO-Hemmer."
    },
    "Wachuma (San Pedro)": {
      effets:["Visuelle Halluzinationen", "Introspektion", "Empathie", "Übelkeit (Anstieg)"],
      dosage:{faible:"~15–25 cm frischer Kaktus",modere:"25–50 cm (≈ Meskalin 200–400 mg)",fort:"langer Kaktus / Extrakt"},
      duree:"Eintritt 1–2 h | Gesamt 8–14 h",
      tripReport:"San Pedro/Wachuma: ein Meskalin-Kaktus, ein langer, sanfter psychedelischer Trip, oft als warm und 'erdig' beschrieben. Starke Übelkeit beim Anstieg. Setting und Sitter empfohlen.",
      description:"Meskalin (Phenethylamin, 5-HT2A-Agonist). Wie Peyote, aber zugänglicher. MAO-Hemmer-/SSRI-Wechselwirkungen. Kardiovaskuläre Vorsichtsmaßnahmen."
    },
    "Peyotl": {
      effets:["Halluzinationen", "Tiefe Introspektion", "Empathie", "Übelkeit"],
      dosage:{faible:"3–4 frische Knöpfe",modere:"5–8 Knöpfe (≈ Meskalin 200–400 mg)",fort:"10+ Knöpfe"},
      duree:"Eintritt 1–2 h | Gesamt 8–12 h",
      tripReport:"Peyote: ein kleiner heiliger Kaktus (Nordamerika), ein langer Meskalin-Trip. Sehr bitter, häufige Übelkeit. Eine bedrohte, für mehrere Völker heilige Pflanze: respektvoll verwenden.",
      description:"Meskalin. 5-HT2A-Agonist. MAO-Hemmer-/SSRI-Wechselwirkungen, Herz-Vorsichtsmaßnahmen. Geschützte Art, sehr langsames Wachstum."
    },
    "Champignons Amanita muscaria": {
      effets:["Traumartige Sedierung", "Verzerrungen", "Mikroschlaf", "Delir"],
      dosage:{faible:"1 g getrocknet (Vorsicht)",modere:"5–10 g getrocknet",fort:"10 g+ (Delir, Übelkeit)"},
      duree:"Eintritt 30–120 Min | Gesamt 4–10 h",
      tripReport:"Fliegenpilz: ein traumhaft-sedierender Effekt, ganz anders als Psilocybe-Pilze (es ist kein Psychedelikum). Übelkeit, Verwirrung, Mikroschlaf. Muss decarboxyliert werden; Ibotensäure ist neurotoxisch.",
      description:"Muscimol (GABA-A-Agonist) + Ibotensäure (neurotoxisch, in Muscimol umgewandelt). Nicht mit den tödlichen Knollenblätterpilzen zu verwechseln. Sehr variable Dosierung."
    },
    "Belladone": {
      effets:["Delir", "Halluzinationen", "Mydriasis", "Tachykardie"],
      dosage:{faible:"jede Dosis ist riskant",modere:"enge therapeutische/toxische Spanne",fort:"Koma, Tod möglich"},
      duree:"Eintritt 1–2 h | Gesamt 12–48 h",
      tripReport:"Tollkirsche: ein sehr gefährliches anticholinerges Delirantium (wie Datura). Unangenehmes Delir, Fieber, verschwommenes Sehen, Risiko von Koma und Tod. Winzige Spanne zwischen wirksamer und tödlicher Dosis.",
      description:"Atropin, Scopolamin, Hyoscyamin: Anticholinergika. Schwere kardiale und neurologische Toxizität. Als Gift zu betrachten."
    },
    "Jusquiame": {
      effets:["Delir", "Halluzinationen", "Sedierung", "Mydriasis"],
      dosage:{faible:"jede Dosis ist riskant",modere:"enge toxische Spanne",fort:"Koma, Tod möglich"},
      duree:"Eintritt 1–2 h | Gesamt 8–24 h",
      tripReport:"Bilsenkraut: ein weiteres delirantes Nachtschattengewächs (Datura-/Tollkirschen-Familie). Gefährliche und unangenehme anticholinerge Effekte. Lebensbedrohlich. Zu vermeiden.",
      description:"Scopolamin, Hyoscyamin, Atropin. Toxisches Delirantium. Keine verlässliche Sicherheitsspanne."
    },
    "Datura": {
      effets:["Totales Delir", "Echte Halluzinationen", "Hyperthermie", "Amnesie"],
      dosage:{faible:"unbekannt",modere:"unbekannt",fort:"1 Blüte = Tod möglich"},
      duree:"Eintritt 30–120 Min | Gesamt 12–48 h",
      tripReport:"Datura: unmöglich zu dosieren. Kein schöner Trip — echtes Delir, gefährliche Handlungen. Systematische Krankenhausaufenthalte.",
      description:"Scopolamin/Atropin. Kein angenehmer Trip. Nahezu systematischer Krankenhausaufenthalt. Tod häufig."
    },
    "Yopo / Anadenanthera": {
      effets:["Intensive Halluzinationen", "Visionen", "Übelkeit", "Kurzer Effekt"],
      dosage:{faible:"eine Prise geschnupftes Pulver",modere:"rituelle Dosis (geschnupft)",fort:"hohe geschnupfte Dosis"},
      duree:"Eintritt 1–5 Min | Gesamt 30–90 Min",
      tripReport:"Yopo: ein geschnupftes Samenpulver (Amazonas/Orinoco), reich an Bufotenin/DMT. Ein brutaler, körperlicher Anstieg (starker Druck, Übelkeit), intensive und kurze Visionen. Ritueller Gebrauch mit Vorbereitung.",
      description:"Bufotenin + DMT + 5-MeO-DMT (5-HT2A-Agonisten). Ausgeprägte kardiovaskuläre Effekte. Oft mit MAO-Hemmern kombiniert: riskante Wechselwirkungen."
    },
    "Crapaud du Colorado (5-MeO-DMT)": {
      effets:["Ego-Auflösung", "Mystische Erfahrung", "Sehr intensiver und kurzer Effekt"],
      dosage:{faible:"2–5 mg verdampft",modere:"5–15 mg",fort:"20 mg+"},
      duree:"Eintritt <1 Min | Gesamt 15–40 Min",
      tripReport:"Bufo-alvarius-Gift / 5-MeO-DMT: eines der intensivsten Psychedelika, totale Ego-Auflösung in Sekunden. Sehr kurz, aber überwältigend. Risiken: Unfälle, Notlage, tödliche MAO-Hemmer-Wechselwirkungen.",
      description:"5-MeO-DMT (5-HT1A/2A-Agonist). Anders als klassisches DMT. Ein Sitter ist unerlässlich. Tödlich in Kombination mit MAO-Hemmern. Weiche Oberflächen, nie allein."
    },
    "5-MeO-DMT (synthétique)": {
      effets:["Ego-Auflösung", "Mystische Erfahrung", "Kurzer und intensiver Effekt"],
      dosage:{faible:"2–5 mg verdampft",modere:"5–12 mg",fort:"15 mg+"},
      duree:"Eintritt <1 Min | Gesamt 15–40 Min",
      tripReport:"5-MeO-DMT: eines der stärksten Psychedelika, totale Ego-Auflösung in Sekunden. Sehr kurz, aber überwältigend. Tödlich mit einem MAO-Hemmer. Sitter und weiche Oberfläche unerlässlich.",
      description:"5-HT1A/2A-Agonist. Anders als das visuelle DMT. Potenziell tödliche MAO-Hemmer-Wechselwirkung. Notlage/Blackout häufig."
    },
    "LSA": {
      effets:["Halluzinationen", "Sedierung", "Introspektion", "Übelkeit"],
      dosage:{faible:"25–75 µg",modere:"75–150 µg",fort:"200–400 µg"},
      duree:"Eintritt 30–90 Min | Gesamt 8–12 h",
      tripReport:"LSA 100 µg: ein sedierender Trip. Erhebliche Übelkeit.",
      description:"In Prunkwinden-Samen (Morning Glory) enthalten. Weniger potent als LSD."
    },
    "Muscimol": {
      effets:["Traumartige Sedierung", "Verzerrungen", "Tiefe Entspannung", "Leichtes Delir"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"10–15 mg+"},
      duree:"Eintritt 30–120 Min | Gesamt 4–10 h",
      tripReport:"Muscimol (Fliegenpilz) ~5 mg: ein traumhafter Zustand, Schwere, manchmal Übelkeit. Bei hoher Dosis: Verwirrung, Mikroschlaf, Delir. Sehr unterschiedlich von Person zu Person.",
      description:"Starker GABA-A-Agonist (≠ Cannabinoid). Der Wirkstoff von Amanita muscaria, als Gummibärchen verkauft. Die begleitende Ibotensäure ist neurotoxisch und wird durch Decarboxylierung in Muscimol umgewandelt. Häufige Übelkeit; Vorsicht bei der tatsächlichen Dosierung der Produkte."
    },
    "Modafinil": {
      effets:["Wachheit", "Konzentration", "Weniger Schläfrigkeit"],
      dosage:{faible:"50–100 mg",modere:"200 mg",fort:"400 mg"},
      duree:"Eintritt 45–90 Min | Gesamt 12–15 h",
      tripReport:"Modafinil 200 mg: 12 h reine Konzentration.",
      description:"Eugeroikum. Seltene Hepatotoxizität. Verminderte Verhütungswirkung."
    },
    "Adrafinil": {
      effets:["Wachheit", "Konzentration", "Weniger Müdigkeit"],
      dosage:{faible:"150–300 mg",modere:"300–600 mg",fort:"600–900 mg"},
      duree:"Eintritt 60–90 Min | Gesamt 8–12 h",
      tripReport:"Adrafinil 300 mg: erhöhte Wachsamkeit. Keine Euphorie.",
      description:"Modafinil-Prodrug. Hepatotoxisch bei regelmäßigem Konsum."
    },
    "Armodafinil": {
      effets:["Verlängerte Wachheit", "Konzentration", "Weniger Schläfrigkeit"],
      dosage:{faible:"50–100 mg",modere:"150 mg",fort:"200–300 mg"},
      duree:"Eintritt 45–90 Min | Gesamt 10–15 h",
      tripReport:"Armodafinil 150 mg: 14 h Arbeit ohne Müdigkeit. Keine Euphorie.",
      description:"R-Enantiomer von Modafinil. Langfristiges Leberrisiko."
    },
    "Méthylphénidate": {
      effets:["Stimulation", "Konzentration", "Appetitminderung", "Leichte Euphorie"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"60–100 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 3–5 h",
      tripReport:"Methylphenidat 30 mg: Laserfokus. Abhängigkeit bei rekreativem Konsum.",
      description:"Ritalin: DAT/NET-Hemmer. Kardiotoxisch. MAO-Hemmer kontraindiziert."
    },
    "Ethylphénidate": {
      effets:["Stimulation", "Euphorie", "Konzentration", "Schlaflosigkeit"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 4–8 h",
      tripReport:"Ethylphenidat 30 mg: intensive kokainähnliche Euphorie, aber länger.",
      description:"DAT-Hemmer. Kokainähnliches Profil. Schnupfen = schweres Gefäßrisiko."
    },
    "Piracétam": {
      effets:["Gedächtnisverbesserung", "Wortflüssigkeit", "Neuroprotektion"],
      dosage:{faible:"1600–2400 mg",modere:"2400–4800 mg",fort:"6400–9600 mg"},
      duree:"Eintritt 1–2 h | Gesamt 5–8 h",
      tripReport:"Piracetam 4800 mg: geistige Verbesserung nach 1 Woche. Mit Cholin einnehmen.",
      description:"Pionier-Racetam. Mit Cholin einnehmen."
    },
    "Aniracétam": {
      effets:["Gedächtnisverbesserung", "Weniger Angst", "Leichte Stimulation"],
      dosage:{faible:"400–750 mg",modere:"750–1500 mg",fort:"2000–3000 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 3–5 h",
      tripReport:"Aniracetam 750 mg: weniger soziale Angst, geistige Klarheit.",
      description:"AMPA- und cholinerger Modulator. Fettlöslich."
    },
    "Oxiracétam": {
      effets:["Leichte Stimulation", "Gedächtnisverbesserung", "Geistige Klarheit"],
      dosage:{faible:"400–800 mg",modere:"800–1600 mg",fort:"2000–3000 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 6–8 h",
      tripReport:"Oxiracetam 1200 mg: leichte Stimulation, bessere Wortflüssigkeit.",
      description:"Leicht stimulierendes Racetam."
    },
    "Phénylpiracétam": {
      effets:["Leichte Stimulation", "Konzentration", "Sportliche Leistungssteigerung"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–400 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 5–8 h",
      tripReport:"Phenylpiracetam 150 mg: besserer Fokus und körperliche Ausdauer.",
      description:"Im Wettkampf verboten (WADA). Schnelle Toleranz."
    },
    "Noopept": {
      effets:["Gedächtnisverbesserung", "Neuroprotektion", "Leichte Angstlösung"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"30–40 mg"},
      duree:"Eintritt 20–30 Min | Gesamt 3–5 h",
      tripReport:"Noopept 10 mg: leichte Verbesserung der Merkfähigkeit.",
      description:"Piracetam-Analogon, 1000× stärker. Stimuliert NGF und BDNF."
    },
    "5-HTP": {
      effets:["Stimmungsverbesserung", "Weniger Angst", "Schlafhilfe"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300–500 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"5-HTP 200 mg: Stimmungsverbesserung. Nützlich nach MDMA (T+3).",
      description:"Nie mit MAO-Hemmern oder SSRI kombinieren. Serotoninsyndrom."
    },
    "Mélatonine": {
      effets:["Schlafeinleitung", "Regulierung des zirkadianen Rhythmus"],
      dosage:{faible:"0,5–1 mg",modere:"2–5 mg",fort:"10–20 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 4–8 h",
      tripReport:"Melatonin 1 mg: erleichtertes Einschlafen. Mehr ist nicht besser.",
      description:"Physiologisches Hormon. Geringes Risiko."
    },
    "Diphenhydramine": {
      effets:["Sedierung", "Bei hoher Dosis: Delir, Halluzinationen"],
      dosage:{faible:"25–50 mg",modere:"100–200 mg (sedierend)",fort:"300 mg+ (gefährliches Delir)"},
      duree:"Eintritt 30–60 Min | Gesamt 4–8 h",
      tripReport:"Diphenhydramin (Benadryl): sedierend bei normaler Dosis; bei hoher Dosis ein sehr unangenehmes und gefährliches anticholinerges Delir (Tachykardie, Hyperthermie, Krämpfe). Kein erstrebenswerter 'Trip'.",
      description:"H1-Antagonist + zentrales Anticholinergikum. Überdosis: Delir, Harnverhalt, Arrhythmien, Krämpfe. Verstärkt Dämpfer."
    },
    "Prométhazine": {
      effets:["Sedierung", "Schläfrigkeit", "Opioid-Verstärkung"],
      dosage:{faible:"12,5–25 mg",modere:"25–50 mg",fort:"75 mg+"},
      duree:"Eintritt 20–60 Min | Gesamt 4–8 h",
      tripReport:"Promethazin: ein sedierendes Antihistaminikum, Bestandteil von 'Lean' (Codein-Promethazin-Sirup). Verstärkt die Sedierung und Atemdepression von Opioiden.",
      description:"H1-Antagonist + Anticholinergikum. Gefährlich kombiniert mit Opioiden (Lean). Risiko von langem QT und Atemdepression."
    },
    "Hydroxyzine": {
      effets:["Sedierung", "Angstlösung", "Schläfrigkeit"],
      dosage:{faible:"25 mg",modere:"50–100 mg",fort:"150 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 4–8 h",
      tripReport:"Hydroxyzin (Atarax): ein sedierendes Antihistaminikum gegen Angst und Juckreiz. Wenig euphorisierend. Risiko der QT-Verlängerung bei hoher Dosis.",
      description:"H1-Antagonist + anxiolytische Wirkung. Verstärkt andere Dämpfer. Überdosis: Sedierung, Tachykardie, Arrhythmien."
    },
    "Paracétamol": {
      effets:["Analgesie", "Fiebersenkend"],
      dosage:{faible:"500 mg",modere:"1000 mg",fort:"4000 mg/Tag (hepatotoxisch)"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"Paracetamol 1000 mg: wirksam, aber hepatotoxisch bei Überdosis oder mit Alkohol.",
      description:"Hepatischer Stoffwechsel. Alkohol → schwere Hepatotoxizität. Überdosis = tödliches Leberversagen."
    },
    "Ibuprofène": {
      effets:["Analgesie", "Entzündungshemmend", "Fiebersenkend"],
      dosage:{faible:"200–400 mg",modere:"400–600 mg",fort:"800–1200 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 6–8 h",
      tripReport:"Ibuprofen 400 mg: ein wirksames Schmerzmittel. Magengeschwür bei chronischem Konsum.",
      description:"NSAR: COX-Hemmer. Geschwüre, Nephrotoxizität. Nicht ratsam mit Antikoagulanzien."
    },
    "25I-NBOMe": {
      effets:["Starke Halluzinationen", "Agitation", "Hyperthermie"],
      dosage:{faible:"200–400 µg",modere:"500–800 µg",fort:"1 mg+"},
      duree:"Eintritt 20–60 Min | Gesamt 5–10 h",
      tripReport:"25I-NBOMe 600 µg: wegen Tachykardie im Krankenhaus. Diese Substanz tötet.",
      description:"Extrem starkes NBOMe. Viele Todesfälle: Krämpfe, Arrhythmien."
    },
    "25C-NBOMe": {
      effets:["Intensive Halluzinationen", "Vasokonstriktion", "Agitation"],
      dosage:{faible:"200–400 µg",modere:"400–700 µg",fort:"1 mg+"},
      duree:"Eintritt 20–60 Min | Gesamt 6–8 h",
      tripReport:"25C-NBOMe 500 µg: Krämpfe bei hoher Dosis gemeldet.",
      description:"Synthetisches NBOMe. Schwere kardiovaskuläre Effekte."
    },
    "25B-NBOMe": {
      effets:["Halluzinationen", "Tachykardie", "Vasokonstriktion"],
      dosage:{faible:"200–400 µg",modere:"400–700 µg",fort:"1–1,5 mg"},
      duree:"Eintritt 20–60 Min | Gesamt 5–8 h",
      tripReport:"25B-NBOMe 500 µg: Muskelkrämpfe und rasendes Herz.",
      description:"NBOMe: dokumentierte Todesfälle. Nie injizieren. Tachykardie → tödliche Arrhythmie."
    },
    "DOB": {
      effets:["Halluzinationen", "Stimulation", "Sehr lange Effekte", "Vasokonstriktion"],
      dosage:{faible:"1–2 mg",modere:"2–3 mg",fort:"3–5 mg"},
      duree:"Eintritt 1,5–3 h | Gesamt 12–24 h",
      tripReport:"DOB: ein extrem starkes Psychedelikum (im Milligramm aktiv) und sehr lang. Ausgeprägte Vasokonstriktion (Risiko für die Extremitäten). Oft auf Blotter statt LSD verkauft → Überdosis, wenn als LSD genommen.",
      description:"Partieller 5-HT2A-Agonist, lange Halbwertszeit. Schwere Vasokonstriktion möglich (Ischämie). Dosierung im mg, nie als vermeintlicher LSD-Blotter."
    },
    "DOC": {
      effets:["Halluzinationen", "Starke Stimulation", "Sehr lange Effekte"],
      dosage:{faible:"1–3 mg",modere:"3–5 mg",fort:"5–8 mg"},
      duree:"Eintritt 1,5–3 h | Gesamt 12–20 h",
      tripReport:"DOC: ein chloriertes DOB-Analogon, ein sehr langes stimulierendes Psychedelikum. Oft auf Blotter. Ausgeprägte Vasokonstriktion und Herzstimulation.",
      description:"5-HT2A-Agonist, lange Halbwertszeit. Kardiovaskuläre und vasokonstriktorische Risiken. Präzise mg-Dosierung."
    },
    "DOI": {
      effets:["Halluzinationen", "Stimulation", "Sehr lange Effekte"],
      dosage:{faible:"1–3 mg",modere:"3–5 mg",fort:"5–7 mg"},
      duree:"Eintritt 1,5–3 h | Gesamt 12–30 h",
      tripReport:"DOI: ein iodiertes DOx, sehr lang und stark. Vor allem in der Forschung verwendet (5-HT2A-Ligand), manchmal auf Blotter verkauft.",
      description:"Starker 5-HT2A-Agonist. Extrem lange Effekte, Vasokonstriktion. Dosierung im mg."
    },
    "AMT": {
      effets:["Halluzinationen", "Stimulation", "Empathie", "Sehr lange Effekte", "Übelkeit"],
      dosage:{faible:"15–25 mg",modere:"25–40 mg",fort:"40–60 mg"},
      duree:"Eintritt 2–4 h | Gesamt 12–24 h",
      tripReport:"AMT (Alpha-Methyltryptamin): ein extrem langes Psychedelikum-Stimulans. Sehr langsamer Anstieg (Nachlege-Risiko), Übelkeit. Es ist auch ein schwacher MAO-Hemmer → gefährliche Nahrungs-/Medikamenten-Wechselwirkungen.",
      description:"Monoamin-Freisetzer + 5-HT2A-Agonist + MAO-Hemmer-Aktivität. Riskante Wechselwirkungen (Tyramin, SSRI, andere Serotonergika). Erschöpfende Dauer."
    },
    "4-HO-MET": {
      effets:["Farbige Halluzinationen", "Euphorie", "Lachen"],
      dosage:{faible:"10–15 mg",modere:"15–25 mg",fort:"25–40 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"4-HO-MET (Metocin): ein Psychedelikum nahe an Psilocin, oft als fröhlich und farbig beschrieben, kürzer. Gut handhabbar, aber dennoch ein starkes Psychedelikum.",
      description:"5-HT2A-Agonist. Psilocin-Analogon. Klassische psychedelische Vorsichtsmaßnahmen (psychiatrische Vorgeschichte, Lithium)."
    },
    "4-HO-MiPT": {
      effets:["Halluzinationen", "Körperliche Euphorie", "Empathie"],
      dosage:{faible:"10–20 mg",modere:"20–30 mg",fort:"30–45 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–6 h",
      tripReport:"4-HO-MiPT (Miprocin): ein euphorisches, sehr taktiles/körperliches Tryptamin, ausgeprägte Visuals. Für seine Wärme geschätzt. Dennoch ein ernstzunehmendes Psychedelikum.",
      description:"5-HT2A-Agonist. Psilocin-Analogon. Klassische Vorsichtsmaßnahmen."
    },
    "DPT": {
      effets:["Intensive Halluzinationen", "Spirituelle Tiefe", "Verwirrung"],
      dosage:{faible:"20–50 mg",modere:"75–125 mg",fort:"150–250 mg"},
      duree:"Eintritt 5–20 Min (inhaliert) | Gesamt 3–5 h",
      tripReport:"DPT 80 mg geraucht: ähnlich wie DMT, aber furchteinflößender.",
      description:"Starker 5-HT2A-Agonist. MAO-Hemmer verstärkt → unvorhersehbare Dauer."
    },
    "DiPT": {
      effets:["Auditive Verzerrung", "Leichte Halluzinationen", "Introspektion"],
      dosage:{faible:"10–20 mg",modere:"25–40 mg",fort:"50–80 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"DiPT 30 mg: eine einzigartige Verzerrung der Tonhöhe.",
      description:"5-HT2A-Agonist. Nur auditive Effekte."
    },
    "MET": {
      effets:["Halluzinationen", "Euphorie", "Leichte Stimulation"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Eintritt 45–75 Min | Gesamt 4–7 h",
      tripReport:"MET 30 mg: ein kurzer, farbiger Trip.",
      description:"5-HT2A-Agonist."
    },
    "MiPT": {
      effets:["Leichte Halluzinationen", "Empathie", "Leichte Stimulation"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–40 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 5–7 h",
      tripReport:"MiPT 15 mg: nahe an Psilocybin, aber empathischer.",
      description:"5-HT2A/1A-Agonist."
    },
    "ETH-LAD": {
      effets:["Halluzinationen", "Euphorie", "Leichte Stimulation"],
      dosage:{faible:"50–75 µg",modere:"100–150 µg",fort:"200–300 µg"},
      duree:"Eintritt 45–90 Min | Gesamt 8–12 h",
      tripReport:"ETH-LAD 120 µg: sinnlicher als LSD, farbige Visuals.",
      description:"Ethyl-Analogon von LSD. Lithium verboten."
    },
    "PRO-LAD": {
      effets:["Halluzinationen", "Euphorie", "Leichte Stimulation"],
      dosage:{faible:"50–100 µg",modere:"150–200 µg",fort:"250–400 µg"},
      duree:"Eintritt 45–90 Min | Gesamt 8–12 h",
      tripReport:"PRO-LAD 175 µg: ähnlich wie LSD, leicht stimulierend.",
      description:"5-HT2A-Agonist. Gleiche Vorsichtsmaßnahmen wie LSD."
    },
    "Mescaline (sulfate/HCl)": {
      effets:["Farbige Halluzinationen", "Empathie", "Introspektion", "Übelkeit"],
      dosage:{faible:"100–200 mg",modere:"200–400 mg",fort:"400–700 mg"},
      duree:"Eintritt 1–2 h | Gesamt 8–12 h",
      tripReport:"Reines Meskalin (extrahiertes oder synthetisches Pulver): ein warmes, visuelles klassisches Psychedelikum, mit übelkeitsbehaftetem Anstieg. 'Sanfter' und körperlicher als LSD. MAO-Hemmer-/SSRI-Wechselwirkungen.",
      description:"5-HT2A-Agonist. Physiologisch gut verträglich, aber Herz-Vorsichtsmaßnahmen. Hohe Dosen nach Gewicht (eine im mg wenig potente Substanz)."
    },
    "Escaline": {
      effets:["Halluzinationen", "Empathie", "Euphorie"],
      dosage:{faible:"15–25 mg",modere:"30–50 mg",fort:"60–100 mg"},
      duree:"Eintritt 60–120 Min | Gesamt 8–14 h",
      tripReport:"Escalin 40 mg: nahe an Meskalin, aber kürzer.",
      description:"Ethoxy-Meskalin. MAO-Hemmer-Wechselwirkungen."
    },
    "Proscaline": {
      effets:["Halluzinationen", "Empathie", "Euphorie"],
      dosage:{faible:"20–30 mg",modere:"40–60 mg",fort:"70–100 mg"},
      duree:"Eintritt 60–90 Min | Gesamt 8–12 h",
      tripReport:"Proscalin 50 mg: ähnlich wie Meskalin, etwas weniger intensiv.",
      description:"Propoxy-Meskalin. 5-HT2A-Agonist."
    },
    "Méthallylescaline": {
      effets:["Halluzinationen", "Empathie", "Sehr lange Dauer"],
      dosage:{faible:"40–60 mg",modere:"60–100 mg",fort:"120–160 mg"},
      duree:"Eintritt 60–120 Min | Gesamt 12–18 h",
      tripReport:"Methallylescalin 80 mg: ein überraschender 16-h-Trip.",
      description:"Rekorddauer unter den Phenethylaminen."
    },
    "Allylescaline": {
      effets:["Halluzinationen", "Empathie", "Leichte Euphorie"],
      dosage:{faible:"15–25 mg",modere:"30–45 mg",fort:"50–80 mg"},
      duree:"Eintritt 60–120 Min | Gesamt 8–14 h",
      tripReport:"Allylescalin 35 mg: ähnlich wie Meskalin, aber kürzer.",
      description:"5-HT2A-Agonist. Begrenzte Sicherheitsdaten."
    },
    "PMA": {
      effets:["Hyperthermie", "Tachykardie", "Schwache Euphorie"],
      dosage:{faible:"unbekannt",modere:"unbekannt",fort:"50–100 mg (tödlich)"},
      duree:"Eintritt 2–3 h | Gesamt 8–12 h",
      tripReport:"PMA als MDMA verkauft. Verzögerter Eintritt → Nachlegen → Tod. Viele Festival-Todesfälle.",
      description:"Para-Methoxyamphetamin. 5-HT-Freisetzer ohne DA → tödliche Hyperthermie. Täuschender Eintritt."
    },
    "Clonidine": {
      effets:["Sedierung", "Angstlösung", "Verlangensminderung", "Hypotonie"],
      dosage:{faible:"0,1 mg",modere:"0,2–0,3 mg",fort:"0,4–0,6 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 6–8 h",
      tripReport:"Clonidin 0,2 mg: hilft beim Opioidentzug. Alkohol = schwere Hypotonie.",
      description:"Alpha-2-Agonist. Bei Opioid-/Alkoholentzug verwendet. Alkohol = Synkope."
    },
    "2-FEA": {
      effets:["Empathie", "Leichte Euphorie", "Stimulation"],
      dosage:{faible:"50–80 mg",modere:"80–120 mg",fort:"150–200 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 5–8 h",
      tripReport:"2-FEA 100 mg: ein sanftes Entaktogen, vermutlich weniger neurotoxisch.",
      description:"Synthetisches Entaktogen, moderater Serotonin-Freisetzer. Serotonerges Risiko."
    },
    "2-FMA": {
      effets:["Konzentration", "Stimulation", "Wachheit"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–40 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 8–12 h",
      tripReport:"2-FMA 15 mg: ein wirksames Lern-Stimulans. Schlaflosigkeit bei später Einnahme.",
      description:"Langes Stimulans, ein Produktivitäts-Nootropikum. Kardiovaskuläres Risiko."
    },
    "25B-NBOH": {
      effets:["Visuelle Halluzinationen", "Euphorie", "Tachykardie"],
      dosage:{faible:"250–500 µg",modere:"500–750 µg",fort:"1–1,5 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 5–8 h",
      tripReport:"25B-NBOH 700 µg: intensive Visuals. Ausgeprägte Vasokonstriktion.",
      description:"Sehr starker 5-HT2A-Agonist. Dokumentierte Krämpfe."
    },
    "2M2B": {
      effets:["Sedierung", "Enthemmung", "Alkoholähnliche Euphorie", "Amnesie"],
      dosage:{faible:"0,5–1 ml",modere:"1–2 ml",fort:"2–3 ml"},
      duree:"Eintritt 15–30 Min | Gesamt 2–4 h",
      tripReport:"2M2B 1,5 ml: sehr schneller Blackout, lächerliche Sicherheitsspanne.",
      description:"Tertiärer Alkohol. Koma bei niedriger Dosis. Tödliche Synergie mit Benzos/Opioiden."
    },
    "3-FEA": {
      effets:["Empathie", "Euphorie", "Stimulation"],
      dosage:{faible:"60–100 mg",modere:"100–150 mg",fort:"180–250 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 5–8 h",
      tripReport:"3-FEA 120 mg: eher empathogen als stimulierend.",
      description:"Entaktogen, starker Serotonin-Freisetzer. Serotonerges Risiko."
    },
    "3-FMA": {
      effets:["Stimulation", "Konzentration", "Wachheit"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"25–40 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 8–14 h",
      tripReport:"3-FMA 15 mg: ein sauberes Stimulans, sehr effektiv für Produktivität.",
      description:"Dominantes dopaminerges/noradrenerges Profil."
    },
    "3-FPM": {
      effets:["Stimulation", "Konzentration", "Leichte Euphorie"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 6–10 h",
      tripReport:"3-FPM 60 mg: ähnlich wie Ritalin, aber euphorischer.",
      description:"Monoamin-Wiederaufnahmehemmer. Unbekannte Neurotoxizität."
    },
    "3-MEC": {
      effets:["Stimulation", "Euphorie", "Geselligkeit"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–350 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 3–5 h",
      tripReport:"3-MEC 150 mg: ein intensiver Rausch, zwanghaftes Nachlegen.",
      description:"Cathinon. Kardiotoxizität, Psychose."
    },
    "6-APB": {
      effets:["Euphorie", "Empathie", "Stimulation"],
      dosage:{faible:"60–80 mg",modere:"80–120 mg",fort:"150–200 mg"},
      duree:"Eintritt 45–90 Min | Gesamt 6–10 h",
      tripReport:"6-APB 100 mg: nahe an MDMA, aber psychedelischer.",
      description:"Benzofuran-Analogon von MDMA. Serotonerges Risiko."
    },
    "Butylone": {
      effets:["Euphorie", "Empathie", "Stimulation"],
      dosage:{faible:"50–100 mg",modere:"100–175 mg",fort:"200–300 mg"},
      duree:"Eintritt 20–45 Min | Gesamt 4–6 h",
      tripReport:"Butylon 120 mg: ein kurzes Entaktogen, schneller Anstieg.",
      description:"Monoamin-Freisetzer. Häufiges Nachlegen → Toxizität."
    },
    "Desoxypipradrol": {
      effets:["Intensive Stimulation", "Euphorie", "Anhaltende Schlaflosigkeit"],
      dosage:{faible:"2–5 mg",modere:"5–10 mg",fort:"10–15 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 16–24 h",
      tripReport:"Desoxypipradrol 7 mg: 20 h ohne Schlaf. Psychose nach 3 Tagen.",
      description:"2-DPMP. Extrem lange Dauer, stimulierende Psychose."
    },
    "EPT": {
      effets:["Halluzinationen", "Empathie", "Leichte Euphorie"],
      dosage:{faible:"10–20 mg",modere:"25–40 mg",fort:"50–75 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 5–7 h",
      tripReport:"EPT 30 mg: ein sanfter, empathischer Trip.",
      description:"5-HT2A-Agonist. Wenig Sicherheitsdaten."
    },
    "ETH-CAT": {
      effets:["Stimulation", "Leichte Euphorie", "Schlaflosigkeit"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"250–350 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 4–6 h",
      tripReport:"ETH-CAT 150 mg: häufiges Nachlegen, steigender Blutdruck.",
      description:"Monoamin-Freisetzer."
    },
    "Ethylone": {
      effets:["Euphorie", "Empathie", "Stimulation"],
      dosage:{faible:"100–150 mg",modere:"150–225 mg",fort:"250–350 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 3–5 h",
      tripReport:"Ethylon 180 mg: MDMA light, deutlicher Crash.",
      description:"Moderater Monoamin-Freisetzer."
    },
    "Hexédrone": {
      effets:["Stimulation", "Euphorie", "Vasokonstriktion"],
      dosage:{faible:"30–60 mg",modere:"60–100 mg",fort:"120–200 mg"},
      duree:"Eintritt 15–30 Min | Gesamt 2–4 h",
      tripReport:"Hexedron 80 mg: ein kurzer Rausch, intensives Verlangen.",
      description:"DAT/NET-Hemmer. Zwanghafter Konsum."
    },
    "Isopropylphénidate": {
      effets:["Stimulation", "Konzentration", "Leichte Euphorie"],
      dosage:{faible:"10–20 mg",modere:"20–40 mg",fort:"50–80 mg"},
      duree:"Eintritt 20–40 Min | Gesamt 4–8 h",
      tripReport:"Isopropylphenidat 25 mg: weniger euphorisch als Methylphenidat.",
      description:"DAT/NET-Hemmer. Ein etwas kürzeres Ritalin-Profil."
    },
    "LSM-775": {
      effets:["Leichte Halluzinationen", "Euphorie", "Introspektion"],
      dosage:{faible:"75–150 µg",modere:"200–350 µg",fort:"400–600 µg"},
      duree:"Eintritt 60–90 Min | Gesamt 6–8 h",
      tripReport:"LSM-775 250 µg: sanfter und kürzer als LSD.",
      description:"Lysergol-Methylester. 5-HT2A-Agonist."
    },
    "LSZ": {
      effets:["Halluzinationen", "Leichte Stimulation", "Euphorie"],
      dosage:{faible:"50–100 µg",modere:"100–200 µg",fort:"250–400 µg"},
      duree:"Eintritt 60–90 Min | Gesamt 8–10 h",
      tripReport:"LSZ 150 µg: LSD-ähnlich mit leichter körperlicher Sedierung.",
      description:"Starkes LSD-Analogon. Ähnliches Profil."
    },
    "Lisdexamfétamine": {
      effets:["Stimulation", "Konzentration", "Appetitminderung"],
      dosage:{faible:"20–30 mg",modere:"50–70 mg",fort:"90–120 mg"},
      duree:"Eintritt 60–90 Min | Gesamt 10–14 h",
      tripReport:"Lisdexamfetamin 50 mg: ein lang wirkendes Stimulans, wirksam bei ADHS.",
      description:"Vyvanse: D-Amphetamin-Prodrug. MAO-Hemmer kontraindiziert."
    },
    "MCPP": {
      effets:["Angst", "Leichte Stimulation", "Übelkeit"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 5–7 h",
      tripReport:"MCPP 60 mg: Angst und Übelkeit. Wenig rekreativ.",
      description:"Ein Verunreinigung in gestrecktem Ecstasy."
    },
    "MDA": {
      effets:["Euphorie", "Empathie", "Leichte Halluzinationen"],
      dosage:{faible:"60–80 mg",modere:"80–120 mg",fort:"150–200 mg"},
      duree:"Eintritt 45–90 Min | Gesamt 6–10 h",
      tripReport:"MDA 100 mg: halluzinogener als MDMA.",
      description:"Vorläufer von MDMA. Neurotoxischer. MAO-Hemmer meiden."
    },
    "MDAI": {
      effets:["Empathie", "Leichte Euphorie", "Sozialisierung"],
      dosage:{faible:"100–150 mg",modere:"150–250 mg",fort:"300–400 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 5–8 h",
      tripReport:"MDAI 200 mg: sanfte Empathie ohne Stimulation.",
      description:"Selektiver Serotonin-Freisetzer. Allein wenig suchterzeugend."
    },
    "MDEA": {
      effets:["Euphorie", "Empathie", "Mäßige Stimulation"],
      dosage:{faible:"80–100 mg",modere:"120–160 mg",fort:"200–250 mg"},
      duree:"Eintritt 45–90 Min | Gesamt 4–6 h",
      tripReport:"MDEA 130 mg: ähnlich wie MDMA, aber weniger intensiv.",
      description:"Monoamin-Freisetzer. Leicht verkürzte Dauer."
    },
    "MDPHP": {
      effets:["Intensive Euphorie", "Stimulation", "Zwang"],
      dosage:{faible:"20–40 mg",modere:"50–80 mg",fort:"100–150 mg"},
      duree:"Eintritt 10–20 Min | Gesamt 2–4 h",
      tripReport:"MDPHP 50 mg: ein starker, sehr kurzer Rausch. Zwanghaftes Nachlegen.",
      description:"Starker DAT-Hemmer. Extrem suchterzeugend."
    },
    "Mexedrone": {
      effets:["Leichte Euphorie", "Stimulation", "Schwache Empathie"],
      dosage:{faible:"100–150 mg",modere:"200–300 mg",fort:"400–500 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 3–5 h",
      tripReport:"Mexedron 200 mg: oft kombiniert. Wechselwirkungsrisiko.",
      description:"Begrenzte Sicherheitsdaten."
    },
    "Pentobarbital": {
      effets:["Tiefe Sedierung", "Koma", "Atemdepression"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300 mg+"},
      duree:"Eintritt 15–30 Min | Gesamt 4–8 h",
      tripReport:"Pentobarbital: in der Sterbehilfe verwendet. Kein vernünftiger Freizeitkonsum.",
      description:"Ultraenge therapeutische Breite. Alkohol-Mischung = Tod."
    },
    "Phénobarbital": {
      effets:["Sedierung", "Krampflösend", "Angstlösung"],
      dosage:{faible:"15–30 mg",modere:"30–60 mg",fort:"100–200 mg"},
      duree:"Eintritt 20–60 Min | Gesamt 8–12 h",
      tripReport:"Phenobarbital 60 mg: tiefe Sedierung.",
      description:"Atemdepression. Viele CYP450-Wechselwirkungen."
    },
    "Pramiracétam": {
      effets:["Gedächtnisverbesserung", "Konzentration", "Geistige Klarheit"],
      dosage:{faible:"200–400 mg",modere:"400–800 mg",fort:"1200 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 6–8 h",
      tripReport:"Pramiracetam 600 mg: bessere Informationsspeicherung.",
      description:"Hochpotentes fettlösliches Racetam."
    },
    "Prolintane": {
      effets:["Stimulation", "Konzentration", "Weniger Müdigkeit"],
      dosage:{faible:"5–10 mg",modere:"10–20 mg",fort:"30–50 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 6–10 h",
      tripReport:"Prolintan 15 mg: ein sauberes Stimulans ohne große Euphorie.",
      description:"DA/NA-Wiederaufnahmehemmer."
    },
    "Secobarbital": {
      effets:["Sedierung", "Euphorie", "Atemdepression"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300 mg+"},
      duree:"Eintritt 10–20 Min | Gesamt 3–6 h",
      tripReport:"Secobarbital 150 mg: eine nahezu null Sicherheitsspanne.",
      description:"Atemdepression. Potenziell tödlich."
    },
    "TMA-2": {
      effets:["Halluzinationen", "Euphorie", "Lange Dauer"],
      dosage:{faible:"10–20 mg",modere:"25–40 mg",fort:"50–80 mg"},
      duree:"Eintritt 60–120 Min | Gesamt 12–16 h",
      tripReport:"TMA-2 30 mg: ähnlich wie Meskalin, eine überraschende Dauer.",
      description:"Psychedelisches Amphetamin. MAO-Hemmer-Wechselwirkungen."
    },
    "TMA-6": {
      effets:["Halluzinationen", "Empathie", "Lange Dauer"],
      dosage:{faible:"5–15 mg",modere:"20–35 mg",fort:"40–60 mg"},
      duree:"Eintritt 60–120 Min | Gesamt 12–18 h",
      tripReport:"TMA-6 25 mg: stärker als TMA-2, ausgeprägte Übelkeit.",
      description:"Isomer von TMA-2. MAO-Hemmer-Wechselwirkungen."
    },
    "Theacrine": {
      effets:["Wachheit", "Konzentration", "Leichte Euphorie"],
      dosage:{faible:"50–100 mg",modere:"100–200 mg",fort:"300–400 mg"},
      duree:"Eintritt 45–90 Min | Gesamt 5–8 h",
      tripReport:"Theacrin 150 mg: koffeinähnlich, aber mit weniger Crash.",
      description:"Langsamere Toleranzentwicklung."
    },
    "3C-E": {
      effets:["Halluzinationen", "Empathie", "Stimulation"],
      dosage:{faible:"10–15 mg",modere:"20–30 mg",fort:"35–60 mg"},
      duree:"Eintritt 60–120 Min | Gesamt 8–12 h",
      tripReport:"3C-E 25 mg: ähnlich wie Meskalin, aber stimulierender.",
      description:"Dokumentierte MAO-Hemmer-Wechselwirkungen."
    },
    "5-APB": {
      effets:["Empathie", "Euphorie", "Stimulation"],
      dosage:{faible:"50–80 mg",modere:"80–120 mg",fort:"120–160 mg"},
      duree:"Eintritt 45–90 Min | Gesamt 5–8 h",
      tripReport:"5-APB: ein Benzofuran nahe an MDA/6-APB, mischt Empathie + Stimulation, länger anhaltend als MDMA. Herzbelastung (5-HT2B-Agonist → theoretisches Klappenrisiko). Kein Nachlegen.",
      description:"Serotonin-/Dopamin-Freisetzer, 5-HT2B-Agonist (Herzrisiko). Hyperthermie möglich. MAO-Hemmer meiden."
    },
    "6-APDB": {
      effets:["Empathie", "Emotionale Wärme", "Sanfte Stimulation"],
      dosage:{faible:"40–70 mg",modere:"70–110 mg",fort:"110–150 mg"},
      duree:"Eintritt 45–90 Min | Gesamt 4–6 h",
      tripReport:"6-APDB: ein Entaktogen nahe an MDA, sanfter und empathischer, weniger stimulierend. Gleiche Vorsichtsmaßnahmen wie die Benzofurane (5-HT2B).",
      description:"Serotonin-Freisetzer. 5-HT2B-Agonist (Herz-Vorsicht). Hyperthermie, keine MAO-Hemmer."
    },
    "AB-CHMINACA": {
      effets:["Extreme Sedierung", "Paranoia", "Psychose"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3 mg+"},
      duree:"Eintritt 5–15 Min | Gesamt 2–5 h",
      tripReport:"AB-CHMINACA 1 mg: 2 h gelähmt, Herz bei 180. Eine furchteinflößende Substanz.",
      description:"Noid der 3. Generation, ultrastark. Viele Todesfälle."
    },
    "JWH-018": {
      effets:["Intensive Euphorie", "Sedierung", "Tachykardie", "Paranoia"],
      dosage:{faible:"0,5–1 mg",modere:"1–3 mg",fort:"4–6 mg"},
      duree:"Eintritt 5–15 Min | Gesamt 2–4 h",
      tripReport:"JWH-018 2 mg: ein Cannabis-High, aber stärker und kürzer. Tachykardie bei 3 mg.",
      description:"Naphthylindol-Cannabinoid. Voller CB1-Agonist. Dokumentierte Todesfälle."
    },
    "JWH-073": {
      effets:["Sedierung", "Euphorie", "Tachykardie"],
      dosage:{faible:"0,5–1,5 mg",modere:"1,5–3 mg",fort:"4–6 mg"},
      duree:"Eintritt 5–15 Min | Gesamt 2–4 h",
      tripReport:"JWH-073 2 mg: etwas weniger stark als JWH-018.",
      description:"Butyl-Naphthylindol, voller CB1-Agonist."
    },
    "AM-2201": {
      effets:["Sedierung", "Euphorie", "Tachykardie", "Mögliche Psychose"],
      dosage:{faible:"0,5–1 mg",modere:"1–2 mg",fort:"3–5 mg"},
      duree:"Eintritt 5–15 Min | Gesamt 2–4 h",
      tripReport:"AM-2201 1,5 mg: stark und sedierend. Krämpfe bei 3 mg gemeldet.",
      description:"Fluorpentyl-Cannabinoid. Voller CB1-Agonist."
    },
    "AB-FUBINACA": {
      effets:["Sedierung", "Paranoia", "Halluzinationen"],
      dosage:{faible:"0,3–0,7 mg",modere:"0,7–1,5 mg",fort:"2–3 mg"},
      duree:"Eintritt 5–15 Min | Gesamt 2–4 h",
      tripReport:"AB-FUBINACA 1 mg: an einer Serie von Massenkomata beteiligt (New York 2016).",
      description:"Fluorbenzyl-Indazol-Carboxamid. Voller CB1-Agonist."
    },
    "5F-ADB": {
      effets:["Extreme Sedierung", "Psychose", "Schwere Tachykardie"],
      dosage:{faible:"0,1–0,5 mg",modere:"0,5–1 mg",fort:"1,5 mg+"},
      duree:"Eintritt 5–10 Min | Gesamt 1–3 h",
      tripReport:"5F-ADB: ein Noid der 3. Generation. Dokumentierte Todesfälle bei winziger Dosis. Extrem gefährlich.",
      description:"5-Fluor-Indazol-Carboxamid. Voller CB1-Agonist mit voller Stärke. Eine Welle von Todesfällen in Europa 2016-2019."
    },
    "ADB-BUTINACA": {
      effets:["Totale Sedierung", "Möglicher Herzstillstand", "Psychose"],
      dosage:{faible:"0,1–0,3 mg",modere:"0,3–0,7 mg",fort:"1 mg+ (gefährlich)"},
      duree:"Eintritt 2–10 Min | Gesamt 1–3 h",
      tripReport:"ADB-BUTINACA: ein Noid, gefunden in jüngsten tödlichen Überdosen. Eines der derzeit gefährlichsten.",
      description:"Ultrastarker CB1-Agonist. Verantwortlich für viele Notaufnahmen und Klinikeinweisungen 2020-2024."
    },
    "MDMB-4en-PINACA": {
      effets:["Totale Sedierung", "Krämpfe", "Psychose", "Möglicher Herzstillstand"],
      dosage:{faible:"0,1–0,25 mg",modere:"0,25–0,6 mg",fort:"1 mg+ (potenziell tödlich)"},
      duree:"Eintritt 2–10 Min | Gesamt 1–4 h",
      tripReport:"MDMB-4en-PINACA: eines der am häufigsten in Todesfällen und Fahren unter Einfluss gefundenen Noids (2019-2024). Die Spanne zwischen aktiver und tödlicher Dosis ist winzig.",
      description:"Ultrastarker voller CB1-Agonist (~2,5 nM). Oft ungleichmäßig auf Pflanzenmaterial gesprüht: unvorhersehbare Überdosis. Schedule I (US), in der EU verboten."
    },
    "ADB-4en-PINACA": {
      effets:["Extreme Sedierung", "Tachykardie", "Paranoia", "Bewusstlosigkeit"],
      dosage:{faible:"0,1–0,3 mg",modere:"0,3–0,7 mg",fort:"1 mg+ (gefährlich)"},
      duree:"Eintritt 2–10 Min | Gesamt 1–3 h",
      tripReport:"ADB-4en-PINACA: ein 2021 aufgetauchter Noid der 3. Generation, sehr stark, in Gefängnis-Sicherstellungen (getränkte Papiere) vorhanden.",
      description:"Hochaffiner voller CB1-Agonist. Blinde Dosierung für den Konsumenten unmöglich. Vorübergehend Schedule I (US)."
    },
    "4F-MDMB-BICA": {
      effets:["Tiefe Sedierung", "Erbrechen", "Krämpfe", "Atemnot"],
      dosage:{faible:"0,1–0,3 mg",modere:"0,3–0,8 mg",fort:"1 mg+ (gefährlich)"},
      duree:"Eintritt 2–10 Min | Gesamt 1–3 h",
      tripReport:"4F-MDMB-BICA: an Massenvergiftungen beteiligt. Wie alle Noids, ungleiche Verteilung auf dem Kraut = Roulette.",
      description:"Voller CB1-Agonist. Aktive Metaboliten. Keine verlässliche Sicherheitsspanne. Als Betäubungsmittel eingestuft."
    },
    "CUMYL-PEGACLONE": {
      effets:["Sedierung", "Bradykardie", "Verwirrung", "Bewusstlosigkeit"],
      dosage:{faible:"0,2–0,5 mg",modere:"0,5–1,5 mg",fort:"2 mg+"},
      duree:"Eintritt 5–15 Min | Gesamt 2–5 h",
      tripReport:"CUMYL-PEGACLONE: ein Noid vom Gamma-Carbolin-Typ, in mehreren Todesfällen in Europa gefunden (besonders Deutschland).",
      description:"CB1-Agonist mit origineller Struktur (kein klassisches Indazol/Indol). In tödlichen Fällen nachgewiesen. Als Betäubungsmittel eingestuft."
    },
    "Propofol": {
      effets:["Schnelle Sedierung", "Bewusstlosigkeit", "Amnesie", "Kurze Euphorie"],
      dosage:{faible:"nicht rekreativ",modere:"Anästhesiedosis, nur im Krankenhaus",fort:"Apnoe / Atemstillstand"},
      duree:"Eintritt 15–45 s (i.v.) | Gesamt 5–10 Min",
      tripReport:"Propofol: ein ultraschnelles IV-Anästhetikum. Kein sicherer Freizeitkonsum: die Spanne zwischen Sedierung und Atemstillstand ist winzig, und es gibt kein Gegenmittel. Mehrere Todesfälle von Pflegekräften, die das Mittel abzweigten.",
      description:"Starker GABA-A-Agonist. Keine analgetische Wirkung. Dosisabhängige Atemdepression ohne Sicherheitsplateau. Tödlich außerhalb der anästhesiologischen Überwachung mit Reanimationsausrüstung."
    },
    "Alpha-PHiP": {
      effets:["Stimulation", "Euphorie", "Zwanghaftes Nachlegen"],
      dosage:{faible:"5–10 mg",modere:"15–25 mg",fort:"30 mg+"},
      duree:"Eintritt 10–30 Min | Gesamt 2–4 h",
      tripReport:"Alpha-PHiP: ein neueres Alpha-PVP-Analogon, Profil nahe an Kokain beim Schnupfen, aber länger anhaltend. Sehr begrenzte Humandaten.",
      description:"Monoamin-Wiederaufnahmehemmer (Pyrrolidinophenon). Kardiovaskuläre und psychiatrische Risiken vergleichbar mit anderen Pyrrolidin-Cathinonen."
    },
    "Xylazine": {
      effets:["Anhaltende Sedierung", "Bradykardie", "Hypotonie", "Analgesie"],
      dosage:{faible:"undosiertes Streckmittel",modere:"in Heroin/Fentanyl vorhanden",fort:"tiefe Sedierung + Wunden"},
      duree:"Eintritt 5–15 Min | Gesamt 2–8 h+",
      tripReport:"Xylazin ('Tranq'): ein veterinäres Beruhigungsmittel, das Fentanyl/Heroin zugesetzt wird, um die Wirkung zu verlängern. Naloxon hebt seine Sedierung nicht auf. Verursacht nekrotische Wunden bei injizierenden Personen.",
      description:"Alpha-2-Agonist (kein Opioid). Kein Gegenmittel. Verlängert Sedierung und das Atemrisiko in Kombination mit Opioiden. Wundversorgung unerlässlich."
    },
    "Médétomidine": {
      effets:["Sehr tiefe Sedierung", "Schwere Bradykardie", "Hypotonie"],
      dosage:{faible:"undosiertes Streckmittel",modere:"in Fentanyl vorhanden",fort:"extreme Sedierung + schwerer Entzug"},
      duree:"Eintritt 5–20 Min | Gesamt mehrere Stunden",
      tripReport:"Medetomidin: ein veterinäres Beruhigungsmittel, das Xylazin als Fentanyl-Streckmittel ersetzt. Stärker, längere Sedierung, schwerer autonomer Entzug (Hypertonie, Tachykardie), resistent gegen übliche Behandlungen.",
      description:"Starker Alpha-2-Agonist. Nicht durch Naloxon aufgehoben. Ende 2024 in der Mehrheit der Straßen-Opioid-Proben einiger US-Städte nachgewiesen."
    },
    "Graines de liseron (LSA)": {
      effets:["Leichte Halluzinationen", "Träumerei", "Übelkeit", "Vasokonstriktion"],
      dosage:{faible:"3–5 Samen (Hawaiian Baby Woodrose)",modere:"5–8 HBWR-Samen / 100–200 Ipomoea-Samen",fort:"8+ HBWR-Samen"},
      duree:"Eintritt 1–2 h | Gesamt 6–10 h",
      tripReport:"Prunkwinden-/HBWR-Samen: eine natürliche LSA-Quelle, nahe an einem milden und körperlichen LSD, aber mit ausgeprägter Übelkeit und Vasokonstriktion. Der Effekt ist oft sedierend und körperlich unangenehm.",
      description:"LSA (Ergin), mit LSD verwandt, aber körperlicher/sedierender. Vasokonstriktion (bei Kreislaufproblemen meiden). Die Samenbeschichtung ist manchmal giftig."
    },
    "Sels de bain (cathinones)": {
      effets:["Intensive Stimulation", "Euphorie", "Agitation", "Paranoia", "Psychose"],
      dosage:{faible:"je nach Molekül unterschiedlich",modere:"tatsächlicher Inhalt unbekannt",fort:"agitiertes Delir, Hyperthermie"},
      duree:"Eintritt 10–30 Min | Gesamt 2–6 h (variabel)",
      tripReport:"'Badesalze': ein Sammelbegriff-Handelsname für synthetische Cathinone (MDPV, Alpha-PVP/Flakka, Mephedron, Hexen…), verkauft mit dem Etikett 'nicht zum Verzehr'. Starke stimulierende Effekte, zwanghaftes Nachlegen, medial berichtete Episoden von agitiertem Delir und Psychose ('Zombie-Droge'). Man weiß nie, welches Molekül oder welche Dosis man nimmt.",
      description:"Die Familie der substituierten Cathinone (Dopamin-Noradrenalin-Hemmer/Freisetzer). Unvorhersehbare Zusammensetzung und Stärke. Risiken: Hyperthermie, Rhabdomyolyse, Herzversagen, Psychose, starke Sucht. Siehe die Einträge MDPV, Alpha-PVP, Mephedron, Hexen und NEP für Details."
    },
    "Tusi (cocaïne rose)": {
      effets:["Stimulation", "Euphorie", "Unvorhersehbare Effekte je nach Mischung"],
      dosage:{faible:"unbekannte Dosis (variable Zusammensetzung)",modere:"tatsächlicher Inhalt unbekannt",fort:"Wechselwirkungsrisiko"},
      duree:"Eintritt variabel | Gesamt variabel",
      tripReport:"Tusi / Tucibi / 2C / rosa Kokain: ACHTUNG, das ist fast nie 2C-B. Es ist eine rosa Marketing-Mischung (oft Ketamin + MDMA + Koffein, manchmal Kokain, Meth, Opioide…), gefärbt und parfümiert. Die Zusammensetzung ändert sich mit jeder Charge: man weiß nie, was man nimmt oder die Wechselwirkungen. Der Name kommt von der spanischen Aussprache von '2C-B', aber das Molekül fehlt meist.",
      description:"Ein Mischprodukt, kein einzelnes Molekül. Risiken = die unvorhersehbare Summe der Komponenten (Ketamin + MDMA = Herzbelastung; mögliche Anwesenheit von Opioiden oder starken Stimulanzien). Testen lassen, sehr niedrig anfangen."
    },
    "2C-H": {
      effets:["Fast inaktiv", "Vorläufer"],
      dosage:{faible:"wenig/nicht aktiv",modere:"kaum aktiv",fort:"kaum aktiv"},
      duree:"Eintritt variabel | Gesamt kurz",
      tripReport:"2C-H: ein an sich fast inaktives Phenethylamin, vor allem als Synthesevorläufer für andere 2C bekannt. Selten wegen seiner Wirkung konsumiert.",
      description:"Schwacher 5-HT2A-Agonist, schnell durch MAO abgebaut. Hauptsächlich ein chemisches Zwischenprodukt."
    },
    "2C-T-4": {
      effets:["Halluzinationen", "Introspektion", "Langsamer Anstieg"],
      dosage:{faible:"8–12 mg",modere:"12–20 mg",fort:"20–30 mg"},
      duree:"Eintritt 1,5–3 h | Gesamt 8–12 h",
      tripReport:"2C-T-4: ein Schwefel-Analogon von 2C-B, sehr langsamer Anstieg (Risiko vorzeitigen Nachlegens), lange und introspektive Effekte.",
      description:"5-HT2A-Agonist. Gefährliche MAO-Hemmer-Wechselwirkung. Täuschend langsamer Eintritt."
    },
    "4-AcO-MiPT": {
      effets:["Halluzinationen", "Euphorie", "Empathie"],
      dosage:{faible:"12–20 mg",modere:"20–35 mg",fort:"35–50 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"4-AcO-MiPT: der acetylierte Ester von 4-HO-MiPT (das Äquivalent von 4-AcO-DMT vs. Psilocin). Warme, visuelle Effekte.",
      description:"In 4-HO-MiPT umgewandelte Prodrug. 5-HT2A-Agonist. Psychedelische Vorsichtsmaßnahmen."
    },
    "4-AcO-DiPT": {
      effets:["Halluzinationen", "Euphorie", "Verzerrungen"],
      dosage:{faible:"15–25 mg",modere:"25–40 mg",fort:"40–60 mg"},
      duree:"Eintritt 30–60 Min | Gesamt 4–6 h",
      tripReport:"4-AcO-DiPT: der Ester von 4-HO-DiPT, ein Tryptamin-Psychedelikum mit ausgeprägten Visuals, mittlere Dauer.",
      description:"Prodrug. 5-HT2A-Agonist. Klassische psychedelische Vorsichtsmaßnahmen."
    },
    "Bufoténine": {
      effets:["Visionen", "Intensive körperliche Effekte", "Druck/Übelkeit"],
      dosage:{faible:"variabel (vom Weg abhängig)",modere:"unvorhersehbare Dosis",fort:"ausgeprägte kardiovaskuläre Effekte"},
      duree:"Eintritt schnell | Gesamt kurz",
      tripReport:"Bufotenin: ein Tryptamin, das in bestimmten Kröten und Samen (Yopo) vorkommt. Schwere körperliche Effekte (Blutdruck, Beklemmungsgefühl), manchmal mehr als visuelle. Enge Spanne.",
      description:"Serotonerger Agonist mit ausgeprägten kardiovaskulären Effekten. In Yopo/Anadenanthera vorhanden. Vorsicht."
    },
    "Kétamine S (eskétamine)": {
      effets:["Dissoziation", "Analgesie", "Euphorie"],
      dosage:{faible:"15–30 mg",modere:"30–60 mg",fort:"60–100 mg"},
      duree:"Eintritt 5–15 Min | Gesamt 45–90 Min",
      tripReport:"Esketamin (das S-Enantiomer von Ketamin): ~2× stärker als racemisches Ketamin bei gleichem Gewicht → Dosis anpassen. Medizinische Version (Spravato) gegen Depression.",
      description:"NMDA-Antagonist. Stärker als Standard-Ketamin. Zystitis bei wiederholtem Konsum, Unfälle in der Dissoziation."
    },
    "Bromazolam": {
      effets:["Angstlösung", "Sedierung", "Amnesie"],
      dosage:{faible:"0,25–0,5 mg",modere:"0,5–1 mg",fort:"1 mg+"},
      duree:"Eintritt 20–40 Min | Gesamt 8–12 h",
      tripReport:"Bromazolam: ein Designer-Benzo, das auf der Straße sehr verbreitet geworden ist (gefälschtes Xanax, mit Opioiden gemischt). Mit Fentanyl/Nitazenen kombiniert: starke Atemdepression, die Naloxon nicht aufhebt.",
      description:"GABA-A-Agonist. Starke Amnesie, Toleranz, gefährlicher Entzug (Krämpfe). Tödlich mit Opioiden/Alkohol."
    },
    "Flualprazolam": {
      effets:["Angstlösung", "Tiefe Sedierung", "Amnesie"],
      dosage:{faible:"0,25–0,5 mg",modere:"0,5–1 mg",fort:"1 mg+"},
      duree:"Eintritt 20–40 Min | Gesamt 10–16 h",
      tripReport:"Flualprazolam: ein starkes RC-Benzo, gefunden in gefälschten Tabletten und in Todesfällen in Kombination mit Opioiden. Lange, starke Wirkung.",
      description:"Starker GABA-A-Agonist. Atemdepression mit Opioiden/Alkohol. Krampfgefährdeter Entzug."
    },
    "Clonazépam": {
      effets:["Angstlösung", "Sedierung", "Krampflösend", "Amnesie"],
      dosage:{faible:"0,25–0,5 mg",modere:"0,5–1 mg",fort:"2 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 6–12 h",
      tripReport:"Clonazepam (Rivotril/Klonopin): ein viel verschriebenes langes Benzo. Schnelle Toleranz und Abhängigkeit, gefährlicher Entzug (Krämpfe). Tödlich kombiniert mit Opioiden/Alkohol.",
      description:"Lang wirkender GABA-A-Agonist. Siehe auch Klonopin. Entzug muss ärztlich begleitet werden."
    },
    "Bromazépam": {
      effets:["Angstlösung", "Sedierung", "Muskelentspannung"],
      dosage:{faible:"3 mg",modere:"6 mg",fort:"12 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 8–12 h",
      tripReport:"Bromazepam (Lexomil): ein gängiges anxiolytisches Benzo. Abhängigkeit, Amnesie, riskanter Entzug. Gefährlich mit Alkohol und Opioiden.",
      description:"GABA-A-Agonist. Toleranz/Abhängigkeit. Nie abrupt absetzen."
    },
    "Triazolam": {
      effets:["Hypnotische Sedierung", "Amnesie", "Einschlafen"],
      dosage:{faible:"0,125 mg",modere:"0,25 mg",fort:"0,5 mg+"},
      duree:"Eintritt 15–30 Min | Gesamt 4–6 h",
      tripReport:"Triazolam (Halcion): ein kurz wirkendes hypnotisches Benzo, starke Amnesie. Ausgeprägte Enthemmung und anterograde Amnesie. Schnelle Abhängigkeit.",
      description:"Kurz wirkender GABA-A-Agonist. Amnesie, automatische Verhaltensweisen. Gefährlich mit Dämpfern."
    },
    "Témazépam": {
      effets:["Sedierung", "Einschlafen", "Angstlösung"],
      dosage:{faible:"10 mg",modere:"20 mg",fort:"30–40 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 6–8 h",
      tripReport:"Temazepam: ein hypnotisches Benzo. Abgezweigt, manchmal injiziert (sehr gefährlich: Embolien). Abhängigkeit, riskanter Entzug.",
      description:"GABA-A-Agonist. Injektion = schweres Gefäßrisiko. Gefährlich mit Opioiden/Alkohol."
    },
    "Nitrazépam": {
      effets:["Sedierung", "Einschlafen", "Entspannung"],
      dosage:{faible:"2,5–5 mg",modere:"5–10 mg",fort:"10 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 8–12 h",
      tripReport:"Nitrazepam (Mogadon): ein langes hypnotisches Benzo. Resthschläfrigkeit, Abhängigkeit, riskanter Entzug.",
      description:"Lang wirkender GABA-A-Agonist. Akkumulation bei älteren Menschen. Gefährlich mit Dämpfern."
    },
    "Zopiclone": {
      effets:["Einschlafen", "Sedierung", "Metallischer Geschmack"],
      dosage:{faible:"3,75 mg",modere:"7,5 mg",fort:"15 mg+"},
      duree:"Eintritt 20–40 Min | Gesamt 6–8 h",
      tripReport:"Zopiclon (Imovane): ein benzoähnliches Hypnotikum. Typischer bitterer Geschmack. Amnesie, automatische Verhaltensweisen (im Schlaf fahren/essen), Abhängigkeit. Gefährlich mit Alkohol/Opioiden.",
      description:"GABA-A-Modulator (Z-Drug). Toleranz, Abhängigkeit, Entzug. Nicht mit Dämpfern mischen."
    },
    "Zaleplon": {
      effets:["Schnelles Einschlafen", "Kurze Sedierung"],
      dosage:{faible:"5 mg",modere:"10 mg",fort:"20 mg+"},
      duree:"Eintritt 15–30 Min | Gesamt 2–4 h",
      tripReport:"Zaleplon (Sonata): ein sehr kurzes Z-Drug-Hypnotikum, zum Einschlafen verwendet. Amnesie, mögliche Abhängigkeit. Gefährlich mit Alkohol.",
      description:"Kurz wirkender GABA-A-Modulator. Risiko automatischer Verhaltensweisen. Dämpfer meiden."
    },
    "Méthaqualone": {
      effets:["Sedierung", "Euphorie", "Muskelentspannung", "Enthemmung"],
      dosage:{faible:"75–150 mg",modere:"150–300 mg",fort:"300 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 4–8 h",
      tripReport:"Methaqualon (Quaalude, 'Mandrax'): ein Sedativ-Hypnotikum der 1970er, euphorisierend und enthemmend. Enge Spanne, Atemdepression, Abhängigkeit. Oft geraucht (Mandrax) in Südafrika/Indien.",
      description:"GABA-A-Modulator. Überdosis: Koma, Atemdepression, Krämpfe. Gefährlich mit Alkohol/Opioiden."
    },
    "Chloral hydrate": {
      effets:["Sedierung", "Einschlafen"],
      dosage:{faible:"250 mg",modere:"500–1000 mg",fort:"1500 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 4–8 h",
      tripReport:"Chloralhydrat: ein altes Beruhigungsmittel ('Mickey Finn'). Enge Spanne, Magenreizung, Arrhythmien, Atemdepression. Gefährlich mit Alkohol (historische Synergie).",
      description:"Prodrug von Trichlorethanol (GABA). Kardiotoxisch bei hoher Dosis. Sehr gefährlich mit Alkohol."
    },
    "Méprobamate": {
      effets:["Angstlösung", "Sedierung", "Muskelentspannung"],
      dosage:{faible:"200–400 mg",modere:"400–800 mg",fort:"1200 mg+"},
      duree:"Eintritt 30–60 Min | Gesamt 6–10 h",
      tripReport:"Meprobamat: ein altes Anxiolytikum (ein Metabolit von Carisoprodol). Schwere Überdosis (Koma, Hypotonie, Atemdepression), Abhängigkeit. Gefährlich mit Alkohol.",
      description:"GABA-Modulator. Enge therapeutische Spanne. Riskanter Entzug. Alkohol/Dämpfer meiden."
    }

  }
};
