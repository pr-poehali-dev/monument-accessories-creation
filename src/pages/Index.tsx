import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [calculatorItems, setCalculatorItems] = useState({
    wreath: 0,
    ribbon: 0,
    vase: 0,
    flowers: 0
  });

  const categories = [
    { id: 'all', name: 'Все', icon: 'Grid3x3' },
    { id: 'wreaths', name: 'Венки', icon: 'Flower2' },
    { id: 'ribbons', name: 'Ленты', icon: 'Ribbon' },
    { id: 'vases', name: 'Вазы', icon: 'Wine' },
    { id: 'flowers', name: 'Цветы', icon: 'Flower' }
  ];

  const products = [
    {
      id: 1,
      name: 'Траурный венок "Классика"',
      category: 'wreaths',
      price: 4500,
      image: 'https://cdn.poehali.dev/projects/10f69073-4925-44c0-9d60-bd6f1cc8f040/files/46606bed-9d46-47d8-8a79-322b5c7bac8d.jpg',
      description: 'Элегантный венок из живых цветов'
    },
    {
      id: 2,
      name: 'Траурная лента с надписью',
      category: 'ribbons',
      price: 800,
      image: 'https://cdn.poehali.dev/projects/10f69073-4925-44c0-9d60-bd6f1cc8f040/files/1d4ac4bc-8618-4d7a-b6fc-d14c3fe6dcc0.jpg',
      description: 'Атласная лента с индивидуальной надписью'
    },
    {
      id: 3,
      name: 'Керамическая ваза',
      category: 'vases',
      price: 2200,
      image: 'https://cdn.poehali.dev/projects/10f69073-4925-44c0-9d60-bd6f1cc8f040/files/5f0bf6de-32fd-4d02-b873-3c5659d4d1ef.jpg',
      description: 'Элегантная ваза для цветов'
    },
    {
      id: 4,
      name: 'Венок "Премиум"',
      category: 'wreaths',
      price: 7500,
      image: 'https://cdn.poehali.dev/projects/10f69073-4925-44c0-9d60-bd6f1cc8f040/files/46606bed-9d46-47d8-8a79-322b5c7bac8d.jpg',
      description: 'Роскошный венок из импортных цветов'
    },
    {
      id: 5,
      name: 'Букет траурных цветов',
      category: 'flowers',
      price: 1500,
      image: 'https://cdn.poehali.dev/projects/10f69073-4925-44c0-9d60-bd6f1cc8f040/files/5f0bf6de-32fd-4d02-b873-3c5659d4d1ef.jpg',
      description: 'Свежие траурные цветы'
    },
    {
      id: 6,
      name: 'Гранитная ваза',
      category: 'vases',
      price: 5500,
      image: 'https://cdn.poehali.dev/projects/10f69073-4925-44c0-9d60-bd6f1cc8f040/files/5f0bf6de-32fd-4d02-b873-3c5659d4d1ef.jpg',
      description: 'Долговечная ваза из натурального гранита'
    }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const prices = {
    wreath: 5000,
    ribbon: 800,
    vase: 2500,
    flowers: 1500
  };

  const calculateTotal = () => {
    return (
      calculatorItems.wreath * prices.wreath +
      calculatorItems.ribbon * prices.ribbon +
      calculatorItems.vase * prices.vase +
      calculatorItems.flowers * prices.flowers
    );
  };

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <Icon name="Flower2" size={32} className="text-accent" />
              <h1 className="text-2xl font-bold">Аксессуары для памятников</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="hover:text-accent transition-colors">Каталог</a>
              <a href="#about" className="hover:text-accent transition-colors">О компании</a>
              <a href="#services" className="hover:text-accent transition-colors">Услуги</a>
              <a href="#delivery" className="hover:text-accent transition-colors">Доставка</a>
              <a href="#contacts" className="hover:text-accent transition-colors">Контакты</a>
            </nav>
            <Button variant="outline" className="bg-accent text-accent-foreground hover:bg-accent/90 border-none">
              <Icon name="Phone" size={18} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </header>

      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Качественные аксессуары для памятников
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">Широкий выбор бронзовых изделий, а также ваз, лампад из гранита.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Каталог
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 text-lg px-8">
              <Icon name="Calculator" size={20} className="mr-2" />
              Калькулятор
            </Button>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Каталог товаров</h2>
          
          <div className="flex justify-center mb-12 flex-wrap gap-4">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className="hover-scale"
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <Card key={product.id} className="hover-scale overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <Badge className="bg-accent text-accent-foreground">{product.price} ₽</Badge>
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Калькулятор стоимости</h2>
          
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Рассчитайте стоимость комплекта</CardTitle>
              <CardDescription>Выберите необходимые аксессуары и узнайте итоговую цену</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Венки</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Input 
                      type="number" 
                      min="0"
                      value={calculatorItems.wreath}
                      onChange={(e) => setCalculatorItems({...calculatorItems, wreath: parseInt(e.target.value) || 0})}
                    />
                    <span className="text-sm text-muted-foreground whitespace-nowrap">× {prices.wreath} ₽</span>
                  </div>
                </div>
                
                <div>
                  <Label>Ленты</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Input 
                      type="number" 
                      min="0"
                      value={calculatorItems.ribbon}
                      onChange={(e) => setCalculatorItems({...calculatorItems, ribbon: parseInt(e.target.value) || 0})}
                    />
                    <span className="text-sm text-muted-foreground whitespace-nowrap">× {prices.ribbon} ₽</span>
                  </div>
                </div>
                
                <div>
                  <Label>Вазы</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Input 
                      type="number" 
                      min="0"
                      value={calculatorItems.vase}
                      onChange={(e) => setCalculatorItems({...calculatorItems, vase: parseInt(e.target.value) || 0})}
                    />
                    <span className="text-sm text-muted-foreground whitespace-nowrap">× {prices.vase} ₽</span>
                  </div>
                </div>
                
                <div>
                  <Label>Цветы</Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Input 
                      type="number" 
                      min="0"
                      value={calculatorItems.flowers}
                      onChange={(e) => setCalculatorItems({...calculatorItems, flowers: parseInt(e.target.value) || 0})}
                    />
                    <span className="text-sm text-muted-foreground whitespace-nowrap">× {prices.flowers} ₽</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <div className="flex items-center justify-between text-2xl font-bold">
                  <span>Итого:</span>
                  <span className="text-accent">{calculateTotal().toLocaleString()} ₽</span>
                </div>
              </div>
              
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Оформить заказ
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Индивидуальный заказ</h2>
          
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle>Форма заказа</CardTitle>
              <CardDescription>Заполните форму, и мы свяжемся с вами для уточнения деталей</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input id="name" required placeholder="Ваше имя" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input id="phone" required type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                
                <div>
                  <Label htmlFor="type">Тип аксессуара</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите тип" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wreath">Венок</SelectItem>
                      <SelectItem value="ribbon">Лента</SelectItem>
                      <SelectItem value="vase">Ваза</SelectItem>
                      <SelectItem value="flowers">Цветы</SelectItem>
                      <SelectItem value="custom">Индивидуальный заказ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Описание заказа</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваши пожелания..." 
                    rows={5}
                  />
                </div>
                
                <div>
                  <Label htmlFor="photo">Фото памятника (опционально)</Label>
                  <Input id="photo" type="file" accept="image/*" className="cursor-pointer" />
                  <p className="text-sm text-muted-foreground mt-2">
                    Загрузите фото памятника для более точного подбора
                  </p>
                </div>
                
                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">О компании</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-center mb-8">
                Мы специализируемся на производстве и продаже качественных аксессуаров для памятников. 
                Более 15 лет мы помогаем людям достойно почтить память своих близких.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon name="Award" size={32} className="text-accent" />
                    </div>
                    <CardTitle>Качество</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Используем только качественные материалы</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon name="Clock" size={32} className="text-accent" />
                    </div>
                    <CardTitle>Опыт</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">15 лет работы в сфере ритуальных услуг</p>
                  </CardContent>
                </Card>
                
                <Card className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                      <Icon name="Heart" size={32} className="text-accent" />
                    </div>
                    <CardTitle>Забота</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">Индивидуальный подход к каждому клиенту</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Наши услуги</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <Icon name="Package" size={32} className="text-accent mb-4" />
                <CardTitle>Готовые комплекты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Предлагаем готовые наборы аксессуаров для памятников по выгодным ценам
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Icon name="Pencil" size={32} className="text-accent mb-4" />
                <CardTitle>Индивидуальный заказ</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Изготовим аксессуары по вашим эскизам и пожеланиям
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Icon name="Truck" size={32} className="text-accent mb-4" />
                <CardTitle>Доставка и установка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Доставим и установим аксессуары на памятник
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Icon name="Wrench" size={32} className="text-accent mb-4" />
                <CardTitle>Консультация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Поможем подобрать оптимальные решения для вашего памятника
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Доставка</h2>
            
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <Icon name="MapPin" size={24} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Доставка по городу</h3>
                      <p className="text-muted-foreground">
                        Бесплатная доставка при заказе от 5000 рублей. 
                        Доставка осуществляется в течение 1-2 дней после оформления заказа.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <Icon name="Globe" size={24} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Доставка по России</h3>
                      <p className="text-muted-foreground">
                        Отправляем заказы в любой регион России транспортными компаниями. 
                        Срок доставки от 3 до 14 дней в зависимости от региона.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                        <Icon name="Store" size={24} className="text-accent" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Самовывоз</h3>
                      <p className="text-muted-foreground">
                        Вы можете забрать заказ самостоятельно из нашего офиса. 
                        Предварительно согласуйте время визита по телефону.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Контакты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Свяжитесь с нами</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={24} className="text-accent" />
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={24} className="text-accent" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">info@memorial-accessories.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="MapPin" size={24} className="text-accent" />
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={24} className="text-accent" />
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: 10:00 - 16:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Быстрая связь</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleOrderSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input id="contact-phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  
                  <div>
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea id="contact-message" placeholder="Ваш вопрос..." rows={4} />
                  </div>
                  
                  <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Icon name="Flower2" size={24} className="text-accent" />
                Аксессуары для памятников
              </h3>
              <p className="text-sm text-gray-300">
                Качественные аксессуары для достойной памяти
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#catalog" className="hover:text-accent transition-colors">Каталог</a></li>
                <li><a href="#about" className="hover:text-accent transition-colors">О компании</a></li>
                <li><a href="#services" className="hover:text-accent transition-colors">Услуги</a></li>
                <li><a href="#delivery" className="hover:text-accent transition-colors">Доставка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>+7 (495) 123-45-67</li>
                <li>info@memorial-accessories.ru</li>
                <li>г. Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Аксессуары для памятников. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;