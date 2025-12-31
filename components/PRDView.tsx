import React from 'react';
import { 
  FileText, Target, List, ShieldAlert, PieChart, Users, Zap, Database, 
  ArrowLeftRight, RefreshCcw, MonitorPlay, Layers, LayoutGrid, MousePointer2, 
  Info, Sparkles, CheckCircle2, Share2, ShieldCheck, Wallet, Landmark, 
  Settings2, AlertCircle, Power, Calendar, TrendingUp, Bell, HardDrive
} from 'lucide-react';

const PRDView: React.FC = () => {
  const sections = [
    { id: 'overview', title: '1. 產品背景與目標', icon: <Target size={18} /> },
    { id: 'users', title: '2. 目標用戶群體', icon: <Users size={18} /> },
    { id: 'functional', title: '3. 核心功能規格', icon: <List size={18} /> },
    { id: 'safety', title: '4. 風控機制 (80% 規則)', icon: <ShieldAlert size={18} /> },
    { id: 'portfolio', title: '5. 投資組合結構', icon: <PieChart size={18} /> },
    { id: 'operations', title: '6. 股務作業規範', icon: <Database size={18} /> },
    { id: 'ux', title: '7. UI/UX 設計規範', icon: <Zap size={18} /> },
    { id: 'scenarios', title: '8. 本金保護機制', icon: <ShieldCheck size={18} /> }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-start px-4">
      {/* Side Navigation */}
      <aside className="hidden lg:block w-72 sticky top-24 shrink-0">
        <div className="bg-white rounded-[24px] shadow-sm border border-slate-200 p-5">
          <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-6 px-2">目錄導覽</h3>
          <nav className="space-y-1">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-xl transition-all text-left active:scale-[0.97]"
              >
                <span className="shrink-0">{section.icon}</span>
                <span className="truncate">{section.title}</span>
              </button>
            ))}
          </nav>
        </div>
        <div className="mt-6 p-6 bg-indigo-600 rounded-[24px] text-white shadow-xl shadow-indigo-100 relative overflow-hidden group">
           <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-125 transition-transform duration-500">
             <Settings2 size={80} />
           </div>
           <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Document Status</p>
           <h4 className="text-lg font-black mb-3">v1.9 Full Specification</h4>
           <p className="text-xs text-indigo-100 leading-relaxed font-medium">
             本文件由 PM Jerry 補全所有細節，作為 2026 Q2 開發與測試依據。
           </p>
        </div>
      </aside>

      {/* Main PRD Content */}
      <div className="flex-1 bg-white shadow-sm rounded-[32px] border border-slate-200 overflow-hidden mb-12">
        <div className="bg-slate-900 p-10 text-white relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center gap-3 mb-4 opacity-60">
            <FileText size={20} />
            <span className="text-xs font-black tracking-[0.2em] uppercase">Product Requirement Document</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight leading-tight">配息製造機<br /><span className="text-indigo-400">產品需求規格書 v1.9</span></h1>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">OWNER</span>
              <span className="text-sm font-bold">Jerry (Product Wizard)</span>
            </div>
            <div className="w-px h-8 bg-slate-700"></div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest">LAST UPDATED</span>
              <span className="text-sm font-bold">2025 / 12 / 31</span>
            </div>
          </div>
        </div>

        <div className="p-8 lg:p-14 space-y-20">
          {/* Section 1: Overview */}
          <section id="overview" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl">01</div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">產品背景與目標</h2>
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed font-medium">
              <p>
                隨著台灣進入超高齡社會，「穩健領錢」的需求已超越「博取高回報」。然而，目前的配息基金常面臨「配息率不固定」或「淨值下跌時仍強行領錢導致血本無歸」的痛點。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <TrendingUp size={16} className="text-indigo-500" /> 核心目標
                  </h4>
                  <p className="text-xs">透過 3 檔基金的自選組合，建立具備抗壓性的投資架構，並透過「自動提領算法」實現穩定的月現金流。</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-indigo-500" /> 市場差異化
                  </h4>
                  <p className="text-xs">首創「淨值保護傘」，在市場波動時給予投資人最理性的煞車機制，避免情緒化操作。</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Users */}
          <section id="users" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl">02</div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">目標用戶群體</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-slate-100 rounded-[24px] shadow-sm">
                <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-4"><Users size={20} /></div>
                <h4 className="font-black text-slate-800 mb-2">準退休族群 (55-65歲)</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">手邊有 500 萬以上閒置資金，尋求取代月薪的穩定現金來源，對本金保護意識極強。</p>
              </div>
              <div className="p-6 bg-white border border-slate-100 rounded-[24px] shadow-sm">
                <div className="w-10 h-10 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center mb-4"><Zap size={20} /></div>
                <h4 className="font-black text-slate-800 mb-2">FIRE 數位游牧族 (30-45歲)</h4>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">習慣數位化管理，精確計算 4% 提領率，偏好可隨時線上微調比例的自動化工具。</p>
              </div>
            </div>
          </section>

          {/* Section 3: Functional Specs */}
          <section id="functional" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl">03</div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">核心功能規格</h2>
            </div>
            <div className="space-y-6">
              <div className="overflow-hidden border border-slate-200 rounded-[24px]">
                <table className="w-full text-sm text-left">
                  <thead className="bg-slate-50 text-slate-400 font-black uppercase tracking-widest text-[10px]">
                    <tr>
                      <th className="px-8 py-5">功能模組</th>
                      <th className="px-8 py-5">詳細規則與技術邊界</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-500 font-medium">
                    <tr>
                      <td className="px-8 py-6 font-black text-slate-800">申購門檻</td>
                      <td className="px-8 py-6">最低 NT$ 200,000，且組合必須選足 3 檔基金，權重加總需精確等於 100%。</td>
                    </tr>
                    <tr>
                      <td className="px-8 py-6 font-black text-slate-800">贖回比例設定</td>
                      <td className="px-8 py-6 font-bold text-slate-700">1% ~ 10% 整數調整。T日執行等比例贖回（依各標的權重比例扣除）。</td>
                    </tr>
                    <tr>
                      <td className="px-8 py-6 font-black text-slate-800">指定執行日</td>
                      <td className="px-8 py-6">支援每月 1-31 日。若遇非營業日，系統自動順延至次一營業日執行。</td>
                    </tr>
                    <tr>
                      <td className="px-8 py-6 font-black text-slate-800">歷史明細紀錄</td>
                      <td className="px-8 py-6">贖回紀錄永久保留至資料庫，包含每筆贖回時的淨值、領回金額及是否受風控暫停之標記。</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Section 4: Safety Mechanism */}
          <section id="safety" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center font-black text-xl">04</div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">風控機制 (80% 規則)</h2>
            </div>
            <div className="p-8 bg-red-50/50 border border-red-100 rounded-[32px] shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                 <ShieldAlert className="text-red-500 shrink-0 mt-1" size={24} />
                 <div>
                    <h4 className="font-black text-slate-800 mb-2">本金保護機制</h4>
                    <p className="text-sm text-slate-600 leading-relaxed font-medium">
                      當日系統監測到「當前計畫淨值」低於「原始申購總本金」的 80% 時，次一個執行日的自動贖回委託將 <strong>自動進入暫停狀態</strong>。
                    </p>
                 </div>
              </div>
              <div className="bg-white p-5 rounded-2xl border border-red-100">
                <h5 className="text-xs font-black text-slate-400 mb-3 uppercase tracking-widest">復歸流程 (Re-activation)</h5>
                <ol className="text-xs text-slate-600 space-y-2 list-decimal ml-4">
                  <li>系統發送「資產水位過低」警示通知。</li>
                  <li>當淨值回到 85% 以上，系統將通知用戶可手動解除鎖定。</li>
                  <li>基於安全理由，<strong>系統不會自動恢復贖回</strong>，必須由用戶親自在 App 端點擊「恢復自動贖回」。</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Section 5: Portfolio */}
          <section id="portfolio" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl">05</div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">投資組合結構</h2>
            </div>
            <div className="space-y-6">
              <p className="text-slate-600 font-medium italic">本產品限制固定配置3檔基金，依投資人指定的贖回比例，給予相對應的最佳配置比例。</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                   <div className="text-indigo-600 font-black mb-1">股票%</div>
                   <div className="text-[10px] text-slate-400 font-bold uppercase">資產增值引擎</div>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                   <div className="text-emerald-600 font-black mb-1">債券%</div>
                   <div className="text-[10px] text-slate-400 font-bold uppercase">穩定收息核心</div>
                 </div>
                 <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                   <div className="text-amber-600 font-black mb-1">貴金屬%</div>
                   <div className="text-[10px] text-slate-400 font-bold uppercase">抗通膨避險</div>
                 </div>
              </div>
            </div>
          </section>

          {/* Section 6: Operations */}
          <section id="operations" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl">06</div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">股務作業規範</h2>
            </div>
            <div className="space-y-6">
               <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 shrink-0">
                    <Database size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-slate-800">後端批次處理邏輯 (Batch Engine)</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      每日13:00之後執行計畫指定贖回日期，撈取「指定贖回（T）」的所有清單。系統會實時抓取各基金之最新淨值 (NAV)，計算賣出投資組合等比例單位數，並產出委託單傳送至中台股務系統。
                    </p>
                  </div>
               </div>
               <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-500 shrink-0">
                    <Bell size={24} />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-slate-800">通知機制</h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      T+N 日 (入帳日)：款項撥付本人帳戶後，發送交易確認單。
                    </p>
                  </div>
               </div>
            </div>
          </section>

          {/* Section 7: UX */}
          <section id="ux" className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-xl">07</div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">UI/UX 設計規範</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                 <div className="text-xs font-black text-slate-400 uppercase tracking-widest">色彩語義</div>
                 <div className="flex gap-2">
                    <div className="w-8 h-8 bg-indigo-600 rounded-lg shadow-lg"></div>
                    <div className="w-8 h-8 bg-emerald-500 rounded-lg"></div>
                    <div className="w-8 h-8 bg-red-500 rounded-lg shadow-lg shadow-red-100"></div>
                 </div>
                 <p className="text-[10px] text-slate-500 font-bold">Indigo 為核心品牌色；Emerald 代表運行正常；Red 代表風控暫停狀態。</p>
              </div>
              <div className="space-y-2">
                 <div className="text-xs font-black text-slate-400 uppercase tracking-widest">微互動特效</div>
                 <p className="text-[10px] text-slate-500 font-bold leading-relaxed">當「保護機制」觸發時，開關按鈕與警告區塊需具備 1.5s 週期之呼吸燈動畫 (Pulse Effect)，引導用戶關注。</p>
              </div>
              <div className="space-y-2">
                 <div className="text-xs font-black text-slate-400 uppercase tracking-widest">數據呈現</div>
                 <p className="text-[10px] text-slate-500 font-bold leading-relaxed">圖表採用 Recharts 繪製，強調「現金流累積曲線」。所有金額欄位必須進行千分位 (LocaleString) 格式化處理。</p>
              </div>
            </div>
          </section>

          {/* Section 8: Main Protection Mechanism */}
          <section id="scenarios" className="scroll-mt-24 pb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black text-xl">08</div>
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">本金保護機制</h2>
            </div>
            <div className="space-y-4">
              <div className="p-6 border-2 border-slate-100 rounded-3xl">
                <h4 className="font-black text-slate-800 mb-2 flex items-center gap-2">
                  <ShieldCheck size={18} className="text-indigo-600" />
                  機制演示：市場大跌導致風控觸發
                </h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed italic">
                  用戶開啟 App 看到標題文字與按鈕轉為「醒目紅色」，系統跳出通知：「當日系統監測到市場波動已使組合淨值降至本金 78%，系統已自動執行『本金保護機制』暫停贖回。我們建議您暫時停止提領，直到市場回穩以保護剩餘單位數。」
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-slate-50 p-10 border-t border-slate-200 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
             <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Product Wizard Verified</span>
          </div>
          <p className="text-xs text-slate-400 font-bold tracking-tight">© 2026 配息製造機產品規劃展示 - 版權所有 / Confidential Document</p>
        </div>
      </div>
    </div>
  );
};

export default PRDView;