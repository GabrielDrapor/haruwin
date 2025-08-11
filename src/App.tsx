import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [recordsTab, setRecordsTab] = useState('training')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-8 animate-fade-in">
            
            {/* Team Introduction */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg leading-relaxed text-gray-700 mb-4 text-center max-w-4xl mx-auto">
                2021年夏天，几个零基础的女孩儿开始学习踢足球。从三两人开始，朋友带朋友，变成十几人，每周踢球看球聚餐，报名业余比赛，设计球衣和队徽，一支足球队这样成型了。
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center max-w-4xl mx-auto">
                过去的四年中，Haruwin女子足球队一起踢了500次球，我们熟悉夏季的星空，春季的海棠，秋季午后的阳光，冬季北京的雪和风。Covid期间，Haruwin在街头、河边、一切可能的场地踢球，足球改变了我们对这座城市时间与空间的感知，足球也成了我们的伙伴，只要站在绿茵场上，就很容易收获友谊和尊重，这是跨越性别、年龄和种族的语言，是足球的魅力。
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">关注我们</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="mb-4">
                    <img src="/wechat_logo.png" alt="微信" className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <img src="/wechat_qrcode.jpeg" alt="微信二维码" className="w-40 h-40 mx-auto rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300" />
                  </div>
                </div>
                <div className="text-center group">
                  <div className="mb-4">
                    <img src="/weibo_logo.png" alt="微博" className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <img src="/weibo_qrcode.jpeg" alt="微博二维码" className="w-40 h-40 mx-auto rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300" />
                  </div>
                </div>
                <div className="text-center group">
                  <div className="mb-4">
                    <img src="/jike_logo.png" alt="即刻" className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <img src="/jike_qrcode.jpeg" alt="即刻二维码" className="w-40 h-40 mx-auto rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'players':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">队员信息</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              
              {/* Player Card - Zhang Yaqi (Captain) */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="flex flex-col sm:flex-row items-center p-6 space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/player_avatar.png" 
                      alt="跑" 
                      className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg ring-4 ring-green-100"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">跑</h3>
                      <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mt-1 sm:mt-0">队长</span>
                    </div>
                    <p className="text-green-600 font-semibold mb-1">🛡️ 后卫 | 2号</p>
                    <p className="text-gray-600 mb-2"><span className="font-medium">喜爱球星:</span> Sam Kerr</p>
                    <p className="text-gray-500 italic">"团结就是力量，我们一起战斗！"</p>
                  </div>
                </div>
              </div>

              {/* Player Card - Li Xiaoyu */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="flex flex-col sm:flex-row items-center p-6 space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/player_avatar.png" 
                      alt="花花" 
                      className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg ring-4 ring-blue-100"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">花花</h3>
                    <p className="text-blue-600 font-semibold mb-1">🥅 守门员 | 1号</p>
                    <p className="text-gray-600 mb-2"><span className="font-medium">喜爱球星:</span> Lucy Bronze</p>
                    <p className="text-gray-500 italic">"守护球门，就是守护胜利！"</p>
                  </div>
                </div>
              </div>

              {/* Player Card - Lin Waner */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="flex flex-col sm:flex-row items-center p-6 space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/player_avatar.png" 
                      alt="Mary" 
                      className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg ring-4 ring-red-100"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Mary</h3>
                    <p className="text-red-600 font-semibold mb-1">🎯 前锋 | 9号</p>
                    <p className="text-gray-600 mb-2"><span className="font-medium">喜爱球星:</span> Aitana Bonmati</p>
                    <p className="text-gray-500 italic">"进球是艺术，我用脚写诗！"</p>
                  </div>
                </div>
              </div>

              {/* Player Card - Zhao Min */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="flex flex-col sm:flex-row items-center p-6 space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/player_avatar.png" 
                      alt="lulu" 
                      className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg ring-4 ring-purple-100"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">lulu</h3>
                    <p className="text-purple-600 font-semibold mb-1">⚽ 中场 | 6号</p>
                    <p className="text-gray-600 mb-2"><span className="font-medium">喜爱球星:</span> Vivianne Miedema</p>
                    <p className="text-gray-500 italic">"中场是球队的心脏，节奏由我掌控！"</p>
                  </div>
                </div>
              </div>

              {/* Player Card - Wang Meiling */}
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="flex flex-col sm:flex-row items-center p-6 space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="flex-shrink-0">
                    <img 
                      src="/player_avatar.png" 
                      alt="Cathy" 
                      className="w-24 h-24 sm:w-20 sm:h-20 rounded-full object-cover shadow-lg ring-4 ring-green-100"
                    />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Cathy</h3>
                    <p className="text-green-600 font-semibold mb-1">🛡️ 后卫 | 3号</p>
                    <p className="text-gray-600 mb-2"><span className="font-medium">喜爱球星:</span> Sam Kerr</p>
                    <p className="text-gray-500 italic">"稳固防线，永不言败！"</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )
      case 'records':
        return (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">训练与比赛记录</h2>
            
            <div className="flex justify-center mb-8">
              <div className="flex space-x-4 bg-gray-100 p-2 rounded-full">
                <button 
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    recordsTab === 'training'
                      ? 'bg-green-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-green-500 hover:bg-white'
                  }`}
                  onClick={() => setRecordsTab('training')}
                >
                  最近训练
                </button>
                <button 
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    recordsTab === 'matches'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'text-gray-600 hover:text-orange-500 hover:bg-white'
                  }`}
                  onClick={() => setRecordsTab('matches')}
                >
                  比赛记录
                </button>
              </div>
            </div>
            
            <div className="space-y-6">
              {recordsTab === 'training' && (
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 md:w-48 flex-shrink-0">
                        <div className="text-white text-center">
                          <div className="text-2xl font-bold">12</div>
                          <div className="text-sm opacity-90">8月</div>
                        </div>
                      </div>
                      <div className="p-6 flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">20-22 @零秒</h4>
                        <p className="text-gray-600">时间：2025-08-12</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 md:w-48 flex-shrink-0">
                        <div className="text-white text-center">
                          <div className="text-2xl font-bold">10</div>
                          <div className="text-sm opacity-90">8月</div>
                        </div>
                      </div>
                      <div className="p-6 flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">18-20 @东枫D1/D2</h4>
                        <p className="text-gray-600">时间：2025-08-10</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 md:w-48 flex-shrink-0">
                        <div className="text-white text-center">
                          <div className="text-2xl font-bold">07</div>
                          <div className="text-sm opacity-90">8月</div>
                        </div>
                      </div>
                      <div className="p-6 flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-2">20-22 @东枫#6</h4>
                        <p className="text-gray-600">时间：2025-08-07</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {recordsTab === 'matches' && (
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-l-4 border-orange-400">
                  <div className="flex flex-col md:flex-row">
                    <div className="bg-gradient-to-br from-orange-500 to-red-500 p-6 md:w-48 flex-shrink-0">
                      <div className="text-white text-center">
                        <div className="text-2xl font-bold">06</div>
                        <div className="text-sm opacity-90">8月</div>
                      </div>
                    </div>
                    <div className="p-6 flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                        🏆 20-22 @不被定义 vs Liberis
                      </h4>
                      <p className="text-gray-600">时间：2025-08-06</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      case 'activities':
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">活动报名</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">即将举行的活动</h3>
              
              {/* Weekend Match Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border-l-4 border-red-500">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏆</span>
                      <h4 className="text-xl font-bold text-gray-800">周末友谊赛</h4>
                    </div>
                    <span className="px-3 py-1 bg-red-100 text-red-600 text-xs rounded-full font-medium">即将开始</span>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center text-gray-600">
                      <span className="w-4 text-center mr-3">🕐</span>
                      <span className="text-sm"><strong>时间：</strong>2024年1月20日 下午2:00</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="w-4 text-center mr-3">📍</span>
                      <span className="text-sm"><strong>地点：</strong>市体育中心足球场</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="w-4 text-center mr-3">⚔️</span>
                      <span className="text-sm"><strong>对手：</strong>飞鹰女足</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200">
                    我要报名
                  </button>
                </div>
              </div>
              
              {/* Weekly Training Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden border-l-4 border-blue-500">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💪</span>
                      <h4 className="text-xl font-bold text-gray-800">每周训练</h4>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium">长期活动</span>
                  </div>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex items-center text-gray-600">
                      <span className="w-4 text-center mr-3">🕐</span>
                      <span className="text-sm"><strong>时间：</strong>每周三、周六 晚上7:00-9:00</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="w-4 text-center mr-3">📍</span>
                      <span className="text-sm"><strong>地点：</strong>大学城足球场</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <span className="w-4 text-center mr-3">🎯</span>
                      <span className="text-sm"><strong>内容：</strong>技术训练 + 体能训练</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors duration-200">
                    加入训练
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      case 'posts':
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">队员动态</h2>
            
            <div className="space-y-4">
              
              {/* Post 1 - 跑 (Captain) */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src="/player_avatar.png" 
                      alt="跑" 
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-green-200"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800 flex items-center">
                        跑
                        <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">队长</span>
                      </h4>
                      <p className="text-xs text-gray-500">2小时前</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    今天的训练太棒了！🔥 大家的配合越来越默契，看到花花的那几个精彩扑救真的太激动了！下周的比赛我们一定能拿下！💪
                  </p>
                  
                  <img 
                    src="/haruwin_logo.jpg" 
                    alt="训练照片" 
                    className="w-full h-48 object-cover rounded-xl mb-3"
                  />
                  
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <span>❤️</span>
                        <span className="text-sm">12</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <span>💬</span>
                        <span className="text-sm">5</span>
                      </button>
                    </div>
                    <span className="text-xs">⚽ 训练</span>
                  </div>
                </div>
              </div>

              {/* Post 2 - Mary */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src="/player_avatar.png" 
                      alt="Mary" 
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-red-200"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">Mary</h4>
                      <p className="text-xs text-gray-500">5小时前</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    刚看了Aitana Bonmati的进球集锦，她的脚法真的太细腻了😍 希望能学到她那种在禁区内的冷静和技巧！学习女足偶像ing~
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <span>❤️</span>
                        <span className="text-sm">8</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <span>💬</span>
                        <span className="text-sm">3</span>
                      </button>
                    </div>
                    <span className="text-xs">⭐ 偶像</span>
                  </div>
                </div>
              </div>

              {/* Post 3 - 花花 */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src="/player_avatar.png" 
                      alt="花花" 
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-200"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">花花</h4>
                      <p className="text-xs text-gray-500">1天前</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    新买了一副守门员手套！Lucy Bronze真的是我的榜样，虽然她是后卫，但她的全面性让我很admire 🧤 期待明天的训练！
                  </p>
                  
                  <div className="bg-blue-50 p-3 rounded-xl mb-3">
                    <p className="text-blue-800 text-sm">🥅 守门员装备已更新</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <span>❤️</span>
                        <span className="text-sm">15</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <span>💬</span>
                        <span className="text-sm">7</span>
                      </button>
                    </div>
                    <span className="text-xs">🛍️ 装备</span>
                  </div>
                </div>
              </div>

              {/* Post 4 - lulu */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src="/player_avatar.png" 
                      alt="lulu" 
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-purple-200"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">lulu</h4>
                      <p className="text-xs text-gray-500">2天前</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    周末和朋友一起看了女足比赛，Vivianne Miedema的跑位真的太聪明了！🧠 作为中场，我要学习她那种前插的时机感觉
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <span>❤️</span>
                        <span className="text-sm">10</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <span>💬</span>
                        <span className="text-sm">4</span>
                      </button>
                    </div>
                    <span className="text-xs">📺 观赛</span>
                  </div>
                </div>
              </div>

              {/* Post 5 - Cathy */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src="/player_avatar.png" 
                      alt="Cathy" 
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-green-200"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">Cathy</h4>
                      <p className="text-xs text-gray-500">3天前</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-3 leading-relaxed">
                    昨天重温了Sam Kerr的世界杯进球！那个头球真的太经典了⚽ 虽然我是后卫，但学习她的拼搏精神对我们整个防线都有帮助💪
                  </p>
                  
                  <img 
                    src="/haruwin_logo.jpg" 
                    alt="足球场地" 
                    className="w-full h-40 object-cover rounded-xl mb-3"
                  />
                  
                  <div className="flex items-center justify-between text-gray-500">
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 hover:text-red-500 transition-colors">
                        <span>❤️</span>
                        <span className="text-sm">9</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                        <span>💬</span>
                        <span className="text-sm">2</span>
                      </button>
                    </div>
                    <span className="text-xs">🏆 经典回顾</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        )
      default:
        return <div>页面不存在</div>
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8">
          {/* Logo and Title Row */}
          <div className="flex items-center justify-center mb-6 sm:mb-8">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <img 
                src="/haruwin_logo.jpg" 
                alt="春胜女足" 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-3 ring-white/30 shadow-lg" 
              />
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">Haruwin女子足球队</h1>
            </div>
          </div>
          
          {/* Navigation Row */}
          <nav className="grid grid-cols-3 sm:flex sm:flex-wrap gap-1 sm:gap-2 justify-center">
            <button 
              className={`px-2 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95 ${
                activeTab === 'home' 
                  ? 'bg-white text-green-700 shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
              onClick={() => setActiveTab('home')}
            >
              主页
            </button>
            <button 
              className={`px-2 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95 ${
                activeTab === 'players' 
                  ? 'bg-white text-green-700 shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
              onClick={() => setActiveTab('players')}
            >
              队员
            </button>
            <button 
              className={`px-2 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95 ${
                activeTab === 'records' 
                  ? 'bg-white text-green-700 shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
              onClick={() => setActiveTab('records')}
            >
              训练
            </button>
            <button 
              className={`px-2 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95 ${
                activeTab === 'activities' 
                  ? 'bg-white text-green-700 shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
              onClick={() => setActiveTab('activities')}
            >
              活动
            </button>
            <button 
              className={`px-2 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95 ${
                activeTab === 'posts' 
                  ? 'bg-white text-green-700 shadow-lg' 
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
              }`}
              onClick={() => setActiveTab('posts')}
            >
              动态
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <img src="/haruwin_logo.jpg" alt="春胜女足" className="w-8 h-8 rounded-full object-cover" />
            <span className="text-lg font-semibold">Haruwin女子足球队</span>
          </div>
          <p className="text-gray-300">&copy; 2024 Haruwin女子足球队</p>
        </div>
      </footer>
    </div>
  )
}

export default App
