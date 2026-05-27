// app.jsx — Tweaks panel hookup.
// Only one tweak: light/dark theme. Wires into the data-theme attribute on <html>
// and persists via __edit_mode_set_keys + localStorage.

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Sync theme to <html data-theme> + localStorage
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', t.theme);
    try { localStorage.setItem('jp.theme', t.theme); } catch (e) {}
  }, [t.theme]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Appearance" />
      <TweakRadio
        label="Theme"
        value={t.theme}
        options={['light', 'dark']}
        onChange={(v) => setTweak('theme', v)}
      />
      <div style={{
        marginTop: 4,
        fontSize: 10.5,
        lineHeight: 1.45,
        color: 'rgba(41,38,27,.55)',
      }}>
        Toggles between editorial light + dark modes. Persists across reloads.
      </div>
    </TweaksPanel>
  );
}

// Mount into a host node so it doesn't interfere with the page
const __twkMount = document.createElement('div');
__twkMount.id = 'tweaks-root';
document.body.appendChild(__twkMount);
ReactDOM.createRoot(__twkMount).render(<App />);
