export default function Home() {
  return (
    <main>
      <h1>@alexandremace/ui</h1>
      <p>
        Le registry shadcn d&apos;
        <a href="https://alexandremace.fr">Alexandre Macé</a> : un thème et des
        composants partagés entre projets, sur base React Aria.
      </p>
      <pre>
        <code>npx shadcn@latest add @alexandremace/theme</code>
      </pre>
      <ul className="items">
        <li>
          <a href="/r/theme.json">theme</a>
        </li>
        <li>
          <a href="/r/button.json">button</a>
        </li>
      </ul>
      <p className="muted" style={{ marginTop: "2.5rem" }}>
        Cette page est stylée avec les tokens du thème : fond sable, cartes,
        bleu, radius.
      </p>
    </main>
  );
}
