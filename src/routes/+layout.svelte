<header>
    <nav>
        <a href="/Home">Home</a>
        <a href="/Products">Products</a>
        <a href="/Settings">Settings</a>
        <a href="/About">About</a>
    </nav>
</header>
<slot></slot>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
        color: black;
        padding: 5px;
    }
    nav{
        margin-bottom: 5px;
    }
</style>