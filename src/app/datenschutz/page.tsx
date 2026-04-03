import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung | Haus360Plus",
};

export default function Datenschutz() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <h1 className="font-[family-name:var(--font-dm-serif)] text-3xl tracking-tight text-foreground sm:text-4xl">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 space-y-10 text-foreground leading-relaxed">
        {/* 1 */}
        <section>
          <h2 className="text-xl font-bold">
            1. Datenschutz auf einen Blick
          </h2>
          <h3 className="mt-4 font-semibold">Allgemeine Hinweise</h3>
          <p className="mt-2 text-muted-foreground">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="mt-4 font-semibold">
            Datenerfassung auf dieser Website
          </h3>
          <p className="mt-2 font-medium">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </p>
          <p className="mt-1 text-muted-foreground">
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
            „Hinweis zur verantwortlichen Stelle" in dieser Datenschutzerklärung
            entnehmen.
          </p>

          <p className="mt-4 font-medium">Wie erfassen wir Ihre Daten?</p>
          <p className="mt-1 text-muted-foreground">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
            in ein Kontaktformular eingeben. Andere Daten werden automatisch
            oder nach Ihrer Einwilligung beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
            Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
            Website betreten.
          </p>

          <p className="mt-4 font-medium">Wofür nutzen wir Ihre Daten?</p>
          <p className="mt-1 text-muted-foreground">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden.
          </p>

          <p className="mt-4 font-medium">
            Welche Rechte haben Sie bezüglich Ihrer Daten?
          </p>
          <p className="mt-1 text-muted-foreground">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
            Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
            Datenverarbeitung erteilt haben, können Sie diese Einwilligung
            jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
            unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="text-xl font-bold">2. Hosting</h2>
          <p className="mt-2 text-muted-foreground">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>
          <h3 className="mt-4 font-semibold">Externes Hosting</h3>
          <p className="mt-2 text-muted-foreground">
            Diese Website wird extern gehostet. Die personenbezogenen Daten, die
            auf dieser Website erfasst werden, werden auf den Servern des
            Hosters gespeichert. Hierbei kann es sich v.&nbsp;a. um
            IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
            Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
            Daten, die über eine Website generiert werden, handeln.
          </p>
          <p className="mt-2 text-muted-foreground">
            Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung
            gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
            lit. b DSGVO) und im Interesse einer sicheren, schnellen und
            effizienten Bereitstellung unseres Online-Angebots durch einen
            professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="text-xl font-bold">
            3. Allgemeine Hinweise und Pflichtinformationen
          </h2>

          <h3 className="mt-4 font-semibold">Datenschutz</h3>
          <p className="mt-2 text-muted-foreground">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend den gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="mt-2 text-muted-foreground">
            Wir weisen darauf hin, dass die Datenübertragung im Internet
            (z.&nbsp;B. bei der Kommunikation per E-Mail) Sicherheitslücken
            aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff
            durch Dritte ist nicht möglich.
          </p>

          <h3 className="mt-4 font-semibold">
            Hinweis zur verantwortlichen Stelle
          </h3>
          <p className="mt-2 text-muted-foreground">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <div className="mt-2 text-muted-foreground">
            <p>Viktorija Duric</p>
            <p>Haus360Plus Viktorija Duric</p>
            <p>Remscheider Straße 134a</p>
            <p>42899 Remscheid</p>
            <p className="mt-2">Telefon: 02191 - 4376329</p>
            <p>E-Mail: info@haus360plus.de</p>
          </div>
          <p className="mt-2 text-muted-foreground">
            Verantwortliche Stelle ist die natürliche oder juristische Person,
            die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z.&nbsp;B. Namen,
            E-Mail-Adressen o.&nbsp;Ä.) entscheidet.
          </p>

          <h3 className="mt-4 font-semibold">Speicherdauer</h3>
          <p className="mt-2 text-muted-foreground">
            Soweit innerhalb dieser Datenschutzerklärung keine speziellere
            Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
            bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
            ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
            zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
            wir keine anderen rechtlich zulässigen Gründe für die Speicherung
            Ihrer personenbezogenen Daten haben; in letzterem Fall erfolgt die
            Löschung nach Fortfall dieser Gründe.
          </p>

          <h3 className="mt-4 font-semibold">
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </h3>
          <p className="mt-2 text-muted-foreground">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
            erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="mt-4 font-semibold">
            Beschwerderecht bei der zuständigen Aufsichtsbehörde
          </h3>
          <p className="mt-2 text-muted-foreground">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehörde zu, insbesondere in dem
            Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
            oder des Orts des mutmaßlichen Verstoßes.
          </p>

          <h3 className="mt-4 font-semibold">
            Recht auf Datenübertragbarkeit
          </h3>
          <p className="mt-2 text-muted-foreground">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
            Einwilligung oder in Erfüllung eines Vertrags automatisiert
            verarbeiten, an sich oder an einen Dritten in einem gängigen,
            maschinenlesbaren Format aushändigen zu lassen.
          </p>

          <h3 className="mt-4 font-semibold">
            Auskunft, Löschung und Berichtigung
          </h3>
          <p className="mt-2 text-muted-foreground">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung und ggf. ein Recht auf
            Berichtigung oder Löschung dieser Daten.
          </p>

          <h3 className="mt-4 font-semibold">
            Recht auf Einschränkung der Verarbeitung
          </h3>
          <p className="mt-2 text-muted-foreground">
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Das Recht auf Einschränkung
            der Verarbeitung besteht in folgenden Fällen: Wenn Sie die
            Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
            bestreiten, wenn die Verarbeitung unrechtmäßig ist, wenn wir die
            Daten nicht mehr benötigen Sie diese jedoch zur Ausübung,
            Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen,
            oder wenn Sie Widerspruch gegen die Verarbeitung eingelegt haben.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="text-xl font-bold">
            4. Datenerfassung auf dieser Website
          </h2>

          <h3 className="mt-4 font-semibold">Kontaktformular</h3>
          <p className="mt-2 text-muted-foreground">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
            Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
            angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
            nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="mt-2 text-muted-foreground">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
            Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
            Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
            Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
            Verarbeitung auf unserem berechtigten Interesse an der effektiven
            Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
            DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO),
            sofern diese abgefragt wurde.
          </p>
          <p className="mt-2 text-muted-foreground">
            Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
            uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
            Speicherung widerrufen oder der Zweck für die Datenspeicherung
            entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
            Aufbewahrungsfristen – bleiben unberührt.
          </p>

          <h3 className="mt-4 font-semibold">
            Anfrage per E-Mail oder Telefon
          </h3>
          <p className="mt-2 text-muted-foreground">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage
            inklusive aller daraus hervorgehenden personenbezogenen Daten (Name,
            Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
            gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
            Einwilligung weiter.
          </p>
        </section>
      </div>

      <p className="mt-10 text-sm text-muted-foreground">
        Quelle:{" "}
        <a
          href="https://www.e-recht24.de"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary-600 underline hover:text-primary-700"
        >
          eRecht24
        </a>
      </p>

      <div className="mt-12">
        <Link
          href="/"
          className="text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          &larr; Zurück zur Startseite
        </Link>
      </div>
    </main>
  );
}
