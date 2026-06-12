import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { guestGuard } from './core/guards/guest.guard';
import { organizerGuard } from './core/guards/organizer.guard';

// Pages
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },

    // Auth routes (guest only)
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [guestGuard]
    },
    {
        path: 'auth/login',
        component: LoginComponent,
        canActivate: [guestGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [guestGuard]
    },
    {
        path: 'auth/register',
        component: RegisterComponent,
        canActivate: [guestGuard]
    },

    // Protected routes (auth required)
    {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
        // canActivate: [authGuard]
    },

    // Organizer routes
    {
        path: 'events',
        loadComponent: () => import('./pages/events/events.component').then(m => m.EventsComponent),
        canActivate: [authGuard]
    },
    {
        path: 'events/create',
        loadComponent: () => import('./pages/event-create/event-create.component').then(m => m.EventCreateComponent),
        canActivate: [authGuard, organizerGuard]
    },
    {
        path: 'events/:id',
        loadComponent: () => import('./pages/event-detail/event-detail.component').then(m => m.EventDetailComponent),
        canActivate: [authGuard]
    },
    {
        path: 'events/:id/edit',
        loadComponent: () => import('./pages/event-edit/event-edit.component').then(m => m.EventEditComponent),
        canActivate: [authGuard, organizerGuard]
    },

    // Booking routes
    {
        path: 'checkout',
        loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent),
        canActivate: [authGuard]
    },
    {
        path: 'wallet',
        loadComponent: () => import('./pages/wallet/wallet.component').then(m => m.WalletComponent),
        canActivate: [authGuard]
    },
    {
        path: 'tickets/:id',
        loadComponent: () => import('./pages/ticket-detail/ticket-detail.component').then(m => m.TicketDetailComponent),
        canActivate: [authGuard]
    },

    // Scanner routes (organizer only)
    {
        path: 'scan',
        loadComponent: () => import('./pages/scan-ticket/scan-ticket.component').then(m => m.ScanTicketComponent),
        canActivate: [authGuard, organizerGuard]
    },
    {
        path: 'verify',
        loadComponent: () => import('./pages/verify-ticket/verify-ticket.component').then(m => m.VerifyTicketComponent),
        canActivate: [authGuard, organizerGuard]
    },

    // Profile
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent),
        canActivate: [authGuard]
    },

    // Fallback
    { path: '**', redirectTo: '' }
];
