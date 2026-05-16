# Real Estate Platform - README

A modern, full-featured real estate marketplace platform built with JavaScript. Connect buyers, sellers, and agents in a seamless property trading experience.

## ✨ Features

- **Property Listings**: Browse and search extensive property catalog
- **Advanced Search Filters**: Filter by location, price, property type, amenities
- **User Accounts**: Secure authentication for buyers, sellers, and agents
- **Property Management**: Create, edit, and manage property listings
- **Favorites & Saved Searches**: Save properties and searches for later
- **Agent Directory**: Find and contact licensed real estate professionals
- **Property Valuation**: Get estimated property values
- **Image Gallery**: Upload and showcase multiple property images
- **Reviews & Ratings**: Community-driven feedback system
- **Responsive Design**: Fully responsive on desktop, tablet, and mobile

## 🚀 Tech Stack

- **Frontend**: React.js, HTML5, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB/PostgreSQL
- **Authentication**: JWT with bcrypt
- **API**: RESTful architecture
- **Deployment**: Docker-ready

## 📋 Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0 or yarn >= 3.0.0
- MongoDB or PostgreSQL
- Git

## 🛠️ Installation

### Clone the Repository
```bash
git clone https://github.com/unclescar3-hub/real-estate-platform.git
cd real-estate-platform
```

### Install Dependencies
```bash
npm install
```

### Environment Configuration
Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

Edit `.env` with your local settings.

### Run Development Server
```bash
npm run dev
```

The application will start at `http://localhost:3000`

## 📁 Project Structure

```
real-estate-platform/
├── src/
│   ├── components/          # Reusable React components
│   ├── pages/               # Page components
│   ├── services/            # API services
│   ├── utils/               # Utility functions
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React context
│   ├── styles/              # Global and component styles
│   └── App.js               # Main app component
├── backend/
│   ├── routes/              # API routes
│   ├── controllers/         # Request handlers
│   ├── models/              # Database schemas
│   ├── middleware/          # Express middleware
│   ├── config/              # Configuration files
│   └── server.js            # Server entry point
├── public/                  # Static assets
├── tests/                   # Test suites
├── .env.example             # Environment template
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies
├── README.md                # This file
└── ROADMAP.md               # Development roadmap
```

## 🚴 Available Scripts

```bash
# Development
npm run dev           # Start development server with hot reload

# Production
npm run build         # Build for production
npm start             # Start production server

# Testing
npm test              # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Generate coverage report

# Code Quality
npm run lint          # Run ESLint
npm run lint:fix      # Fix linting issues
npm run format        # Format code with Prettier
npm run format:check  # Check formatting

# Docker
npm run docker:build  # Build Docker image
npm run docker:run    # Run Docker container
```

## 🔐 Authentication

The platform uses JWT (JSON Web Tokens) for secure authentication:

- User registration and login
- Role-based access control (Buyer, Seller, Agent)
- Secure password hashing with bcrypt
- Token refresh mechanism
- Protected API routes

## 📚 API Documentation

API endpoints organized by resource:

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refresh` - Refresh token

### Properties
- `GET /api/properties` - List all properties
- `GET /api/properties/:id` - Get property details
- `POST /api/properties` - Create new property
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property

### Users
- `GET /api/users/:id` - Get user profile
- `PUT /api/users/:id` - Update user profile
- `GET /api/users/:id/listings` - Get user's listings

### Search & Filters
- `GET /api/search?query=...` - Search properties
- `GET /api/filters/locations` - Get available locations

Full API documentation available at `/api/docs` when running locally.

## 🧪 Testing

```bash
# Unit tests
npm test

# Integration tests
npm run test:integration

# End-to-end tests
npm run test:e2e

# Coverage report
npm run test:coverage
```

## 🚢 Deployment

### Docker
```bash
# Build Docker image
docker build -t real-estate-platform .

# Run container
docker run -p 3000:3000 --env-file .env real-estate-platform
```

### Docker Compose
```bash
# Start all services
docker-compose up

# Access services:
# App: http://localhost:3000
# MongoDB: http://localhost:27017
# Mongo Express: http://localhost:8081
# Redis: http://localhost:6379
```

## 📝 Code Style & Standards

This project follows:
- **ESLint**: JavaScript linting
- **Prettier**: Code formatting
- **Conventional Commits**: Commit message format
- **BEM**: CSS naming convention

Run before committing:
```bash
npm run lint:fix
npm run format
npm test
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'feat: add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 👥 Authors

- **Uncle Scar** - Initial development - [@unclescar3-hub](https://github.com/unclescar3-hub)

## 🆘 Support & Issues

Found a bug or have a feature request?

1. Check [existing issues](https://github.com/unclescar3-hub/real-estate-platform/issues)
2. [Create a new issue](https://github.com/unclescar3-hub/real-estate-platform/issues/new) with detailed description
3. Include steps to reproduce for bugs

## 📞 Contact

- Email: unclescar3@gmail.com
- GitHub: [@unclescar3-hub](https://github.com/unclescar3-hub)
- Website: [your-website.com]

## 📊 Project Status

- ✅ Initial setup
- 🚧 Core features in development
- 📋 Full feature set planned

See [ROADMAP.md](./ROADMAP.md) for development timeline.

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by industry-leading real estate platforms
- Built with passion for the real estate community

---

**Last Updated**: 2026-05-16
