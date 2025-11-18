import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Game {
  id: number;
  name: string;
  players: string;
  category: string;
}

interface ChatMessage {
  id: number;
  user: string;
  message: string;
  time: string;
}

interface ChatGroup {
  id: number;
  name: string;
  members: number;
  game: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [chatSearch, setChatSearch] = useState('');
  const [messageText, setMessageText] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<number | null>(1);

  const games: Game[] = [
    { id: 1, name: 'Каркассон', players: '2-5', category: 'Стратегия' },
    { id: 2, name: 'Манчкин', players: '3-6', category: 'Приключения' },
    { id: 3, name: 'Билет на поезд', players: '2-5', category: 'Семейная' },
    { id: 4, name: 'Codenames', players: '4-8', category: 'Командная' },
    { id: 5, name: 'Колонизаторы', players: '3-4', category: 'Стратегия' },
    { id: 6, name: 'Dixit', players: '3-6', category: 'Творческая' },
    { id: 7, name: 'Уно', players: '2-10', category: 'Карточная' },
    { id: 8, name: 'Имаджинариум', players: '4-7', category: 'Ассоциации' },
  ];

  const chatGroups: ChatGroup[] = [
    { id: 1, name: 'Любители Каркассона', members: 4, game: 'Каркассон' },
    { id: 2, name: 'Вечер Манчкина', members: 6, game: 'Манчкин' },
    { id: 3, name: 'Стратеги', members: 3, game: 'Колонизаторы' },
  ];

  const messages: ChatMessage[] = [
    { id: 1, user: 'Алексей', message: 'Кто готов в Каркассон?', time: '14:23' },
    { id: 2, user: 'Мария', message: 'Я в деле! Во сколько начинаем?', time: '14:25' },
    { id: 3, user: 'Дмитрий', message: 'Подключусь в 19:00', time: '14:30' },
    { id: 4, user: 'Елена', message: 'Можно мне тоже?', time: '14:35' },
  ];

  const filteredGroups = chatGroups.filter(group =>
    group.name.toLowerCase().includes(chatSearch.toLowerCase()) ||
    group.game.toLowerCase().includes(chatSearch.toLowerCase())
  );

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Добро пожаловать в EpicGames</h1>
              <p className="text-muted-foreground text-lg">
                Платформа для игры в настольные игры онлайн
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {games.slice(0, 4).map((game) => (
                <Card
                  key={game.id}
                  className="p-6 hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105 animate-fade-in bg-card/50 backdrop-blur"
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                      <Icon name="Dice5" size={40} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-center">{game.name}</h3>
                    <div className="flex gap-2 flex-wrap justify-center">
                      <Badge variant="secondary" className="text-xs">
                        <Icon name="Users" size={12} className="mr-1" />
                        {game.players}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {game.category}
                      </Badge>
                    </div>
                    <Button className="w-full" size="sm">
                      Играть
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'games':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Библиотека игр</h1>
              <p className="text-muted-foreground">
                Выберите игру и найдите компанию для партии
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {games.map((game, index) => (
                <Card
                  key={game.id}
                  className="p-6 hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105 bg-card/50 backdrop-blur"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center">
                      <Icon name="Dice5" size={40} className="text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-center">{game.name}</h3>
                    <div className="flex gap-2 flex-wrap justify-center">
                      <Badge variant="secondary" className="text-xs">
                        <Icon name="Users" size={12} className="mr-1" />
                        {game.players}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {game.category}
                      </Badge>
                    </div>
                    <Button className="w-full" size="sm">
                      Играть
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        );

      case 'store':
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold">Магазин</h1>
              <p className="text-muted-foreground">
                Премиум функции и дополнения
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-gradient-to-br from-primary/20 to-accent hover:scale-105 transition-all">
                <div className="space-y-4">
                  <Icon name="Crown" size={40} className="text-primary" />
                  <h3 className="text-2xl font-bold">Premium</h3>
                  <p className="text-muted-foreground">
                    Доступ ко всем играм и функциям
                  </p>
                  <div className="text-3xl font-bold">499₽/мес</div>
                  <Button className="w-full">Купить</Button>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary to-accent hover:scale-105 transition-all">
                <div className="space-y-4">
                  <Icon name="Sparkles" size={40} className="text-primary" />
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">
                    Расширенные возможности чата
                  </p>
                  <div className="text-3xl font-bold">299₽/мес</div>
                  <Button className="w-full">Купить</Button>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent to-secondary hover:scale-105 transition-all">
                <div className="space-y-4">
                  <Icon name="Zap" size={40} className="text-primary" />
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">
                    Базовый набор игр
                  </p>
                  <div className="text-3xl font-bold">99₽/мес</div>
                  <Button className="w-full">Купить</Button>
                </div>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/30 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={24} className="text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold">EpicGames</span>
              </div>

              <nav className="hidden md:flex space-x-1">
                <Button
                  variant={activeSection === 'home' ? 'default' : 'ghost'}
                  onClick={() => setActiveSection('home')}
                  className="font-medium"
                >
                  <Icon name="Home" size={18} className="mr-2" />
                  Главная
                </Button>
                <Button
                  variant={activeSection === 'games' ? 'default' : 'ghost'}
                  onClick={() => setActiveSection('games')}
                  className="font-medium"
                >
                  <Icon name="Dice5" size={18} className="mr-2" />
                  Игры
                </Button>
                <Button
                  variant={activeSection === 'store' ? 'default' : 'ghost'}
                  onClick={() => setActiveSection('store')}
                  className="font-medium"
                >
                  <Icon name="ShoppingBag" size={18} className="mr-2" />
                  Магазин
                </Button>
              </nav>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Settings" size={20} />
              </Button>
              <Avatar className="cursor-pointer hover:ring-2 ring-primary transition-all">
                <AvatarFallback className="bg-primary text-primary-foreground font-bold">
                  ИП
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <main className="flex-1 container mx-auto px-6 py-8">
          {renderContent()}
        </main>

        <aside className="w-80 border-l border-border bg-card/30 backdrop-blur">
          <div className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Чат</h2>
                <Button size="sm" variant="outline">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать
                </Button>
              </div>

              <div className="relative">
                <Icon
                  name="Search"
                  size={18}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                />
                <Input
                  placeholder="Поиск групп..."
                  value={chatSearch}
                  onChange={(e) => setChatSearch(e.target.value)}
                  className="pl-10"
                />
              </div>

              <ScrollArea className="h-48">
                <div className="space-y-2">
                  {filteredGroups.map((group) => (
                    <Card
                      key={group.id}
                      className={`p-3 cursor-pointer transition-all hover:border-primary ${
                        selectedGroup === group.id ? 'border-primary bg-primary/10' : ''
                      }`}
                      onClick={() => setSelectedGroup(group.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="font-semibold text-sm">{group.name}</div>
                          <div className="text-xs text-muted-foreground">{group.game}</div>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          <Icon name="Users" size={10} className="mr-1" />
                          {group.members}
                        </Badge>
                      </div>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </div>

            {selectedGroup && (
              <div className="space-y-4">
                <h3 className="font-bold">Сообщения</h3>
                <ScrollArea className="h-64 border border-border rounded-lg p-4 bg-background/50">
                  <div className="space-y-4">
                    {messages.map((msg) => (
                      <div key={msg.id} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-sm">{msg.user}</span>
                          <span className="text-xs text-muted-foreground">{msg.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{msg.message}</p>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                <div className="flex gap-2">
                  <Input
                    placeholder="Написать сообщение..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && messageText.trim()) {
                        setMessageText('');
                      }
                    }}
                  />
                  <Button size="icon">
                    <Icon name="Send" size={18} />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Index;
