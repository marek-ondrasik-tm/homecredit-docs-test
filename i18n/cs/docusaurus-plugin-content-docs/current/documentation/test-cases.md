Testovací scénáře:
1. **Kalkulačka v detailu zboží**
  * **API**
    * nesmí použít Tipař v CZ
  * **Widget kalkulačka** se otevře ve stránce e-shopu, klient nikam neodchází. Při kliknutí na tlačítko "Vybrat splátky" si e-shop uloží hodnoty klientem preferovaných splátek, viz. popis na www.gitHub.com/homecreditcz. 
    * nesmí použít Tipař v CZ
  * **Standalone kalkulačka** - jde pouze o vložení odkazu do detailu produktu, kalkulačka se otevře, a po nastavení preferované varianty splátek a stisknutí tlačítka "Vybrat splátky" se pouze zavře - vybrané hodnoty se nevrací.
    * pouze pro partnery v CZ - primárně vytvořeno pro Tipaře

---

2. **CreateApplication**
> na Train prostředí neodcházejí emaily ani SMS

* Chcete-li simulovat různé stavy smluv, použijte funkci [*changeState* z technické dokumentace](https://csoneclicknewfuture.docs.apiary.io/#reference/testing-&-integration/change-application-state-integration-usage-only/change-application-state-integration-usage), popis najdete v levém sloupci pod **_Testing & Integration_**. Využívá se pro kontrolu fungování notifikací
* A) Průchod flow zákazníka **při zamítnutí** v MyLoan (HC front-end): 
  * Stačí vybrat *Exponovaná osoba - Ano* => smlouva bude vždy zamítnuta
* B) Průchod flow zákazníka **při schválení** v MyLoan (HC front-end) s návratem zpět na e-shop:
  * Do příjmení je nutné dát "*Trener*"
  * Po přesměrování do MyLoan (HC front-end) zadejte rodné číslo ve správném formátu, např. *451112 345*
  * Po schválení podepište smlouvu pomocí OTP "*123456*"
