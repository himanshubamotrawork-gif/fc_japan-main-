import { createFileRoute } from "@tanstack/react-router";
import { Star, Flame, ChevronsDown, Apple, Play, X } from "lucide-react";
import { useState } from "react";
import appIcon from "@/assets/app-icon.png";
import gameThumb from "@/assets/game-thumb.jpg";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "遊ぶだけで現金を獲得 | Freecash" },
      { name: "description", content: "ゲームをプレイし、ミッションをこなし、アプリを試すだけで本物の現金を獲得。いつでも出金OK — 最低出金額なし。" },
      { property: "og:title", content: "遊ぶだけで現金を獲得 | Freecash" },
      { property: "og:description", content: "ゲームをプレイし、ミッションをこなし、アプリを試すだけで本物の現金を獲得。いつでも出金OK — 最低出金額なし。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Stars() {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
      ))}
    </div>
  );
}

function BrowserBanner({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center p-6">
      <div className="max-w-sm w-full text-center space-y-6">
        <h2 className="text-4xl font-black leading-tight">ブラウザで開いてください</h2>
        <p className="text-muted-foreground text-sm">続行するには、このページを<br />ブラウザで開いてください。</p>
        <div className="flex flex-col items-center gap-1 py-4 text-primary">
          <ChevronsDown className="w-6 h-6 chev-1" />
          <ChevronsDown className="w-6 h-6 chev-2 -mt-3" />
          <ChevronsDown className="w-6 h-6 chev-3 -mt-3" />
        </div>
        <button onClick={onClose} className="w-full bg-[oklch(0.55_0.22_25)] hover:brightness-110 transition text-white font-semibold py-4 rounded-xl">
          今すぐ開く
        </button>
      </div>
    </div>
  );
}

const CTA_URL = "https://taprkr.com/r/eyJ0IjoiZnJlZWNhc2gtY3BpIiwidGlkIjoiYmYyMGI1YTdkNjUyYmRiZTU1OGMiLCJ0cyI6MTc4NTI3NTQ4ODQ5NX0";

function Index() {
  const [showBanner, setShowBanner] = useState(true);
  const [hint, setHint] = useState(true);

  return (
    <>
      <BrowserBanner open={showBanner} onClose={() => setShowBanner(false)} />
      <main className="min-h-screen w-full flex flex-col items-center pb-40">
        {/* Top ticker */}
        <div className="w-full text-center py-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="text-[10px] bg-muted px-1.5 py-0.5 rounded font-semibold text-foreground/80">JP</span>
            <span className="text-foreground/80 font-medium">Yuki T.</span> さんが
            <span className="text-primary font-semibold">2,800円</span> 獲得 — 即時入金
          </span>
        </div>

        <div className="w-full max-w-md px-5 space-y-5">
          {/* Hero card */}
          <section className="card-panel px-6 py-10 flex flex-col items-center text-center">
            <div className="mb-6">
              <img src={appIcon} alt="Freecash" width={96} height={96} className="w-24 h-24 rounded-3xl" style={{ boxShadow: "var(--shadow-glow)" }} />
            </div>
            <div className="inline-flex items-center gap-2 border border-border rounded-full px-3 py-1 text-xs mb-6">
              <Stars />
              <span className="font-semibold">4.7</span>
              <span className="text-muted-foreground">· App Store</span>
              <span className="text-muted-foreground">(5万件以上のレビュー)</span>
            </div>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight">
              遊ぶだけで<br />
              <span className="text-primary glow-text">現金を獲得</span>
            </h1>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              ゲームをプレイし、ミッションをこなし、アプリを試すだけで本物の現金を獲得。いつでも出金OK — 最低出金額なし。
            </p>
            <div className="mt-6 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 rounded-full px-4 py-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-primary pulse-dot" />
              <span><span className="font-semibold text-foreground">1,843人</span>が今この瞬間に獲得中</span>
            </div>
          </section>

          {/* Offer card */}
          <section className="card-panel p-5">
            <div className="flex items-center gap-4">
              <img src={gameThumb} alt="ガーデンスケイプ" width={64} height={64} className="w-16 h-16 rounded-2xl object-cover" loading="lazy" />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg">ガーデンスケイプ</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Stars />
                  <span className="text-xs font-semibold">4.8</span>
                  <span className="text-xs text-muted-foreground">· 高評価</span>
                </div>
                <div className="inline-flex items-center gap-1.5 mt-2 border border-primary/30 bg-primary/5 rounded-full px-2.5 py-1 text-xs">
                  <Flame className="w-3 h-3 text-[oklch(0.75_0.18_50)]" />
                  <span className="font-medium">本日のベストオファー</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-border">
              <p className="text-xs text-muted-foreground mb-4">ご利用の流れ</p>
              <ol className="space-y-3">
                {[
                  "Freecash に登録して、すべてのオファー一覧をアンロック",
                  "ゲームをプレイしてミッションを達成",
                  "PayPal・Visa・仮想通貨で出金",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-6">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Stats */}
          <section className="card-panel px-4 py-6 grid grid-cols-3 gap-2 text-center">
            {[
              { v: "70億円+", l: "支払い総額" },
              { v: "4.7★", l: "アプリ評価" },
              { v: "0円", l: "登録費用" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-black">{s.v}</div>
                <div className="text-[11px] text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </section>

          <p className="text-[11px] text-muted-foreground text-center leading-5 px-2">
            提供状況・報酬・参加資格はユーザー、地域、達成したミッションにより異なります。結果は保証されず、各自の利用状況によって変わります。獲得額はオファーごとに異なります。
          </p>

          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground underline underline-offset-4">
            <a href="#">プライバシーポリシー</a>
            <a href="#">利用規約</a>
          </div>
        </div>

        {/* Quick hint bottom sheet */}
        {hint && (
          <div className="fixed left-0 right-0 bottom-0 z-40 bg-primary text-accent-foreground px-5 pt-4 pb-6 rounded-t-3xl shadow-2xl">
            <div className="max-w-md mx-auto">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wide opacity-80">クイックヒント</p>
                  <h4 className="mt-1 text-lg font-black leading-snug">始める前にプロフィールを完成させましょう</h4>
                  <p className="mt-2 text-sm opacity-90 leading-relaxed">
                    これにより Freecash の最も条件の良いゲームオファーがアンロックされます。このステップは飛ばさないでください。
                  </p>
                </div>
                <button onClick={() => setHint(false)} aria-label="閉じる" className="p-1 -mr-1 opacity-70 hover:opacity-100">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="mt-4 w-full block text-center bg-background/15 hover:bg-background/25 transition rounded-xl py-3.5 font-bold text-sm">
                わかりました →
              </a>
            </div>
          </div>
        )}

        {/* Footer app stores (hidden when hint visible) */}
        {!hint && (
          <div className="fixed left-0 right-0 bottom-0 z-30 bg-background/95 backdrop-blur border-t border-border py-4">
            <div className="max-w-md mx-auto px-5">
              <p className="text-center text-xs text-muted-foreground mb-3">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mr-1.5 align-middle" />
                iOS・Android で今すぐ利用可能
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-muted border border-border rounded-xl py-3">
                  <Apple className="w-5 h-5" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] text-muted-foreground">ダウンロード</div>
                    <div className="text-sm font-bold">App Store</div>
                  </div>
                </a>
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-primary text-accent-foreground rounded-xl py-3">
                  <Play className="w-5 h-5 fill-current" />
                  <div className="text-left leading-tight">
                    <div className="text-[10px] opacity-80">ダウンロード</div>
                    <div className="text-sm font-bold">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
