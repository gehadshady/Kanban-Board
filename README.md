# Kanban Board – Complete Project Documentation

## 📌 Overview

This project is a fully‑functional **Kanban Board Application** built using **React (TypeScript)**, designed to help users manage boards, columns, and tasks with clean UI and smooth interaction. The project follows modern frontend architecture principles and focuses heavily on reusability, state organization, and polished user experience.

The app includes a complete workflow for creating and managing boards, adding columns, creating tasks, and editing or deleting them — all inside a responsive and accessible UI.

---

## 🎯 Main Features

### 🟦 **Boards Management**

- Create new boards
- Edit board name and its columns
- Delete boards
- Switch between boards using Side Menu

### 🟩 **Columns Management**

- Add new columns to a board
- Real‑time updates with React Context
- Supports dynamic rendering and consistent IDs

### 🟨 **Tasks Management**

- Add tasks inside each column
- Edit task title & description
- Delete tasks
- Fully immutable update logic using `.map()` patterns to avoid reference issues

### 🟪 **UI / UX Features**

- Beautiful layout using **TailwindCSS**
- Accessible actions using **Radix UI Primitives** (Dropdowns, Dialogs)
- Custom reusable components: Button, TextField, Dropdown, Dialog...
- Side Menu + Workspace responsive structure
- Clean animations and focus handling

---

## 🛠️ Technologies Used

### **Core**

- **React 18** + **TypeScript**
- **Vite** (Dev server & build tool)

### **UI Libraries**

- **TailwindCSS** – styling system
- **Radix UI** (Dropdown, Dialog)
- **clsx** for conditional merging of classes

### **State Management**

- **React Context (DataContext)**
  - Stores global boards
  - Manages selected board
  - Provides update helpers for tasks, columns & boards

### **Utilities**

- **ESLint + Prettier** for formatting & code quality
- **data.json** for initial data structure

---

## 📂 Project Structure

```
src/
 ├─ components/
 │   ├─ AddNewBoardForm.tsx
 │   ├─ Button.tsx
 │   ├─ Card.tsx
 │   ├─ Column.tsx
 │   ├─ DialogPrimitive.tsx
 │   ├─ DropDownMenuPrimitive.tsx
 │   ├─ Header.tsx
 │   ├─ SideMenu.tsx
 │   ├─ TextField.tsx
 │   └─ WorkSpace.tsx
 │
 ├─ DataContext.tsx      # Core state management
 ├─ data.json            # Initial data
 ├─ types.tsx            # Board / Column / Task types
 ├─ App.tsx
 ├─ main.tsx
 └─ index.css
```

---

## 🧠 Key Technical Highlights

### ✔ **Perfect Immutability Handling**

All update functions use:

- `.map()` for cloning nested arrays
- No mutation of original objects
- Updated references only where needed → ensures proper re‑render

### ✔ **Reusable UI Primitives**

You created reusable building blocks:

- `<Button/>`
- `<TextField/>`
- `<DialogPrimitive/>`
- `<DropDownMenuPrimitive/>`

These make future scaling very easy.

### ✔ **Centralized Data Flow**

`DataContext` stores the entire app state:

- Boards
- Selected board index
- Updaters for tasks, columns, boards

This guarantees consistent behavior across all components.

### ✔ **Folder Organization**

Very clean, scalable structure — similar to real production apps.

---

## 🚀 Future Enhancements

- Drag & Drop between columns
- Task status labels
- Search & filter
- Subtasks support
- Dark / Light Theme
- Backend API + Database

---

## 🧩 Installation & Setup

Follow these steps to run the project locally:

### 1️⃣ **Clone the Repository**

```
git clone <repository-url>
```

### 2️⃣ **Navigate to the Project Folder**

```
cd KANBAN-BOARD
```

### 3️⃣ **Install Dependencies**

Using npm:

```
npm install
```

### 4️⃣ **Start the Development Server**

```
npm run dev
```

The app will start on a local development server (usually `http://localhost:5173`).

### 5️⃣ **Build for Production (Optional)**

```
npm run build
```

This generates the production-ready `/dist` folder.

---

## 📘 Usage Examples

Below are practical examples demonstrating how to use the core features of the Kanban Board application.

### ▶️ **Create a New Board**

1. Open the left sidebar.
2. Click **"Create New Board"**.
3. Enter the board name.
4. Add one or more columns.
5. Click **Save**.

### ▶️ **Add a New Column**

1. Select a board.
2. Scroll to the end of the board columns.
3. Click **"+ Add New Column"**.
4. Enter the column name.
5. Save.

### ▶️ **Create a New Task**

1. Choose a board.
2. Select the target column.
3. Click **"+ Add New Task"**.
4. Add title and description.
5. Click **"Create Task"**.

### ▶️ **Edit a Task**

1. Click on a task card.
2. Update title or description.
3. Click **Save Changes**.

### ▶️ **Delete a Task**

1. Open the task modal.
2. Click the menu (three dots).
3. Select **Delete Task**.
4. Confirm deletion.

### ▶️ **Edit a Board**

1. Open the board.
2. Click the header menu (three dots).
3. Select **Edit Board**.
4. Update name or columns.
5. Save.

### ▶️ **Delete a Board**

1. Open the board.
2. Click the header three‑dots menu.
3. Choose **Delete Board**.
4. Confirm.

---

## 💛 Author

Built with consistency, clarity, and beautiful attention to detail by **Gehad Shady**.
