import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/home';
import ArticlePage from '@/pages/article';
import ArticleYoutubeSubsPage from '@/pages/article-youtube-subs';
import ArticlePaidMusicPage from '@/pages/article-paid-music';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/article" component={ArticlePage} />
      <Route path="/article-youtube-subscribers" component={ArticleYoutubeSubsPage} />
      <Route path="/get-paid-to-listen-to-music" component={ArticlePaidMusicPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    const vignette = document.createElement('script');
    vignette.dataset.zone = '11682010';
    vignette.src = 'https://n6wxm.com/vignette.min.js';
    document.body.appendChild(vignette);

    return () => {
      vignette.remove();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
