# Luxury Nail Studio Website

A premium, glassmorphism-styled website for a high-end nail studio. Built with Django, HTML5, CSS3, and JavaScript.

## 🎨 Design & Color Theory

The design philosophy revolves around **"Pink Paradise"** & **"Glass Elegance"**.

### Color Palette
-   **Primary Pink (`#ec4899`):** Represents love, kindness, and femininity. Used for accents, buttons, and highlights.
-   **Dark Pink (`#db2777`):** Adds depth and sophistication. Used for gradients and hover states.
-   **Light Pink (`#fbcfe8`):** Soft and calming background accents.
-   **Glass (`rgba(255, 255, 255, 0.1)`):** Creates a modern, translucent effect that mimics the clarity of polished nails and glass jars.
-   **Black (`#000000`):** The canvas. A deep, dark background allows the pinks to pop and gives the site a luxurious, nighttime vibe.

### Typography
-   **Headings:** *Playfair Display* - A serif font that exudes elegance, luxury, and editorial fashion.
-   **Body:** *Poppins* - A geometric sans-serif that ensures readability and modern minimalism.

### Key Visuals
-   **Floating Cards:** All glass cards have a subtle floating animation to create a "weightless" and dreamy feel.
-   **Custom Cursor:** An SVG nail polish bottle cursor adds a unique, thematic touch to the user interaction.

---

## 🚀 How to Run Locally

### Prerequisites
-   Python 3.8+
-   Git

### Steps

1.  **Clone the Repository**
    ```bash
    git clone <repository-url>
    cd luxury-nail-studio
    ```

2.  **Create a Virtual Environment**
    ```bash
    # Windows
    python -m venv venv
    venv\Scripts\activate

    # Mac/Linux
    python3 -m venv venv
    source venv/bin/activate
    ```

3.  **Install Dependencies**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Run Migrations**
    ```bash
    python manage.py migrate
    ```

5.  **Start the Server**
    ```bash
    python manage.py runserver
    ```

6.  **View the Website**
    Open your browser and navigate to: `http://127.0.0.1:8000/`

---

## 📂 Project Structure

-   `config/`: Main Django project settings.
-   `core/`: The application logic containing views and URLs.
-   `templates/`: HTML files (`base.html`, `home.html`, etc.).
-   `static/`:
    -   `css/`: Custom styles (`style.css`).
    -   `js/`: Animations and cursor logic (`script.js`).
    -   `images/`: Assets (gallery, services, cursor).

---

## ✨ Features

-   **Home:** Hero section, "How We Work", Testimonials.
-   **Our Work:** Portfolio gallery with 50/50 alternating layout.
-   **Services:** Pricing list in glass morphism cards.
-   **About:** Origin story, "History of Nails" timeline.
-   **Contact:** Functional-looking contact form and location info.
-   **Responsive:** Fully optimized for mobile and desktop devices.

