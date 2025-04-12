# Angular Pagination App

This Angular application fetches user data from the DummyJSON API and displays it in a paginated table format. The application is designed to show 5 records per page and supports pagination up to 5 pages.

## Features

- Fetches user data from [https://dummyjson.com/users](https://dummyjson.com/users)
- Displays user data in a table format
- Implements pagination with 5 records per page
- Supports navigation through multiple pages (up to 5 pages)

## Project Structure

```
angular-pagination-app
├── src
│   ├── app
│   │   ├── components
│   │   │   ├── user-table
│   │   │   │   ├── user-table.component.ts
│   │   │   │   ├── user-table.component.html
│   │   │   │   └── user-table.component.css
│   │   ├── services
│   │   │   └── user.service.ts
│   │   ├── app.module.ts
│   │   └── app.component.ts
│   ├── assets
│   └── environments
│       ├── environment.prod.ts
│       └── environment.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd angular-pagination-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To run the application in development mode, use the following command:

```
ng serve
```

Open your browser and navigate to `http://localhost:4200` to view the application.

## Usage

Once the application is running, you will see a table displaying user data. You can navigate through the pages using the pagination controls at the bottom of the table.

## License

This project is licensed under the MIT License.