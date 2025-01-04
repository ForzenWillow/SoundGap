<template>
  <div class="container" id="products">
    <header class="flex justify-between items-center p-6 bg-opacity-50 relative z-20">
      <div class="title text-white text-3xl font-bold">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">
          PRODUCT LIST
        </span>
      </div>

        <!-- Icon Cart  -->
      <div class="icon-cart relative" @click="isCartOpen = !isCartOpen"  >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20" class="w-8 h-8">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1"/>
        </svg>
        <span class="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 text-sm">{{ cartItemCount }}</span>
      </div>


    </header>
    <div class="px-4 xl:pl-16 mb-8">
      <select v-model="selectedCategory" class="bg-[#111a3e] text-white p-2 rounded">
        <option value="all">All Products</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
    </div>
  <div class="">
    <div class="listProduct flex overflow-x-auto p-6 space-x-4">
  <div
    v-for="product in filteredProducts"
    :key="product.id"
    class="product flex-shrink-0 w-64 border p-4 rounded-lg shadow-lg"
  >
    <img
      :src="product.image"
      alt="product image"
      class="product-image w-full h-48 object-cover rounded-lg mb-4"
    />
    <h3 class="text-lg font-semibold">{{ product.name }}</h3>
    <p class="text-gray-500">{{ product.description }}</p>
    <p class="text-primary font-bold">${{ product.price }}</p>
    <button
      @click="addToCart(product)"
      class="mt-4 px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary transition"
    >
      Add to Cart
    </button>
  </div>
</div>
  </div>
    <div class="cartTab fixed top-0 right-0 w-80 h-full bg-white shadow-lg p-6 overflow-y-auto" v-if="isCartOpen">
      <h1 class="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div class="listCart">
        <div v-for="item in cart" :key="item.id" class="cart-item flex items-center justify-between mb-4">
          <img :src="item.image" alt="product image" class="cart-item-image w-16 h-16 object-cover rounded-lg">
          <div class="flex-1 ml-4">
            <h3 class="text-lg font-semibold">{{ item.name }}</h3>
            <p class="text-black font-bold">${{ item.price }}</p>
          </div>
          <button @click="removeFromCart(item)" class="text-red-500 hover:text-red-700 transition">Remove</button>
        </div>
      </div>
      <div class="btn flex justify-between mt-6">
        <button class="close px-4 py-2 bg-gray-300 rounded-full hover:bg-gray-400 transition" @click="closeCart">CLOSE</button>
        <button class="checkOut px-4 py-2 bg-primary text-white rounded-full hover:bg-secondary transition" @click="checkOut">Check Out</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'Products',
  data() {
    return {
      cartItemCount: 0,
      isCartOpen: false,
      products: [
      { 
    id: 1, 
    name: 'Acoustic Guitar', 
    description: 'A classic acoustic guitar with a rich, warm tone.', 
    price: 149.99, 
    image: 'https://m.media-amazon.com/images/I/714kO41XjDL.jpg', 
    category: 'Instruments' 
  },
  { 
    id: 2, 
    name: 'Electric Keyboard', 
    description: 'Compact 61-key keyboard with built-in rhythms and tones.', 
    price: 199.99, 
    image: 'https://m.media-amazon.com/images/I/71FobkNjTZL.jpg', 
    category: 'Instruments' 
  },
  { 
    id: 3, 
    name: 'Drumsticks', 
    description: 'Durable wooden drumsticks for all drumming styles.', 
    price: 9.99, 
    image: 'data:image/jpeg;base64,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', 
    category: 'Accessories' 
  },
  { 
    id: 4, 
    name: 'Vinyl Record - Jazz Classics', 
    description: 'A curated collection of timeless jazz tracks on vinyl.', 
    price: 24.99, 
    image: 'data:image/jpeg;base64,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', 
    category: 'Vinyls' 
  },
  { 
    id: 5, 
    name: 'Guitar Strings Set', 
    description: 'High-quality strings for acoustic and electric guitars.', 
    price: 12.99, 
    image: 'https://m.media-amazon.com/images/I/61QSpox4vCL.jpg', 
    category: 'Accessories' 
  },
  { 
    id: 6, 
    name: 'Portable Amp', 
    description: 'Compact amplifier with adjustable sound settings.', 
    price: 89.99, 
    image: 'https://i.ebayimg.com/images/g/M2kAAOSwuF9ma6js/s-l1200.jpg', 
    category: 'Equipment' 
  },
  { 
    id: 7, 
    name: 'Vinyl Record - Rock Legends', 
    description: 'Iconic rock anthems pressed on premium vinyl.', 
    price: 29.99, 
    image: 'https://target.scene7.com/is/image/Target/GUEST_4db1c605-319f-4a3f-ab93-81a300fcf51a?wid=488&hei=488&fmt=pjpeg', 
    category: 'Vinyls' 
  },
  { 
    id: 8, 
    name: 'Ukulele', 
    description: 'A fun and portable instrument for players of all levels.', 
    price: 49.99, 
    image: 'https://r2.gear4music.com/media/68/681080/600/preview_1.jpg', 
    category: 'Instruments' 
  },
  { 
    id: 9, 
    name: 'Studio Microphone', 
    description: 'Professional microphone for recording and streaming.', 
    price: 119.99, 
    image: 'https://www.muzi.lt/62673-large_default/condenser-microphone-set-rode-nt1-signature-black.jpg', 
    category: 'Equipment' 
  },
  { 
    id: 10, 
    name: 'Noise-Canceling Headphones', 
    description: 'Experience music with crystal clarity and no distractions.', 
    price: 149.99, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7IQEipCJdWVKuFenwnk5UCEwZF0QvLSDCyw&s', 
    category: 'Accessories' 
  },
  { 
    id: 11, 
    name: 'Vinyl Record - Pop Hits', 
    description: 'Top pop tracks that defined generations, now on vinyl.', 
    price: 19.99, 
    image: 'https://i.ebayimg.com/images/g/i7AAAOSw~KVlndLF/s-l1200.png', 
    category: 'Vinyls' 
  },
  { 
    id: 12, 
    name: 'Digital Tuner', 
    description: 'Easily tune your guitar, bass, or ukulele on the go.', 
    price: 14.99, 
    image: 'https://blairbagpipes.com/wp-content/uploads/2019/09/BlairBagpipeTuner.jpg', 
    category: 'Accessories' 
  }
        
        
      ],
      cart: [],
      selectedCategory: 'all'
    };
  },
  setup() {
    const products = ref([
    { 
    id: 1, 
    name: 'Acoustic Guitar', 
    description: 'A classic acoustic guitar with a rich, warm tone.', 
    price: 149.99, 
    image: 'https://m.media-amazon.com/images/I/714kO41XjDL.jpg', 
    category: 'Instruments' 
  },
  { 
    id: 2, 
    name: 'Electric Keyboard', 
    description: 'Compact 61-key keyboard with built-in rhythms and tones.', 
    price: 199.99, 
    image: 'https://m.media-amazon.com/images/I/71FobkNjTZL.jpg', 
    category: 'Instruments' 
  },
  { 
    id: 3, 
    name: 'Drumsticks', 
    description: 'Durable wooden drumsticks for all drumming styles.', 
    price: 9.99, 
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8NDQ0NDQ8PDQ0NDQ8QDQ0NDw8NDQ8PFRUWFhYRFRUYHSggGBoxHRUVITIhJSkrLi4uFx8zODUsQyg5LisBCgoKDg0OGxAQGy0mICUtKzcvNzgrLS03Ky8tLS0tLjY3NS0tNS0rLS0vLS0tLzUtLS0tLS0tKy0rLS0vLS0tL//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEBAAMBAQEAAAAAAAAAAAAAAQQFBgcDAv/EADkQAAIBAwIEAwUGBQQDAAAAAAABAgMEEQUhEjFBYSJRsQYTQlJxI2KBocHRMmORsuEU0uPwQ9Pi/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAQDBQIB/8QAIxEBAAICAgICAgMAAAAAAAAAAAEDAhEhIhIxQUJRYRMycf/aAAwDAQACEQMRAD8A9wAAADIAAFAgAAFIAKQAAAABSFAAgAoIAKQACggAoBAKCACggAH5qVIxWZNJdz9GNf0XOO27i848z5Pp9hj6rLwRqJ5hFvia3Sz1/wC+Z8dK1SNR8HFt8LfJvyRh2186VXxKShvGcWnn64Prqtgmlc26TWMzhDk180V5+a6+s85zPbH49w3jCI65fPqW+BptL1bKjGo8prwz57dzcpm2FkZxuGWeE4TqQFIe3gBSAAUgAFIAAKBACgQFAEBQBAUgAAAAUAQFAAEAGJqNkq0dtpr+F+fZ9jT21zO3k9nw5xOm+j/R9zozA1Ky4/HBeNLdfOv3J7a5/tj7bV5x/XL002oUIxzc0d6En9rBc6M/mx0j5+XPlyytO1FwxGW8PTujHpzcHmG2dmpLMZL5ZLqjWVLmFvWjTeYUqr+zUt/dy+TPWPk/wfeXz1Pljx+VXhuPGXcQmpJOLynyaP0c5ZXkqT55i+a6G/o1VOKlF5T/AC7FtVsZx+0dlc4S+gIDVmAAAAABSACggAoIAKCACkAAoIAKCACgAAQpAABQNVqdjnNSC3+OK6913NJe2dOvTdKrHihJfRp+afR9zrzU6lZYzUgsr4orp3X7El9P2hTTbrrLkLO6qWs42l1JzjLa2ueXvUvgl5VEv6811S31neSpSyt0+a6NGNe2lOvTdOrHihL8GnzTT6PO6fQ1dtcTtZxtrluUJ7ULl7cf3J+U8f15rqlHEzjO4VzEZRp39tcRqxUov6rqn5M+pzFpcypSUovbqujR0VvcRqR4o/iuqZ0arozjU+0FtU4T+n1ABsyAAAAKBCkAAAoEBQAIAAKQACggFAAEAAAAAAABp9S0/GalNbc5QXTuv2NPdW8K1OVOolKnJbrqvJp9H1ydgabVdOxmpSW3OUF6r9iS6n7YqqbviXJ0a07OcaFw3OnJ4t7h9f5c/KXr+Rv7S5lTkpRf1XRoxK1KFWm6dSKlTmsNP/v5mqpVp2c40a8nOjN4oXD59qc/KXk+pHEzjO4VzEZRp6DbXEaseKP4rqmfU5i0unCSlF/s0dDa3Eakcrn1XVM6FN0ZxqfaC2qcP8fYAG7EAAAAAAAAAAAAAAUAQAoEAAFIAAAAAAAAABpdW01rNWku86a9V+xp6sIVabhUSnTmsSjLc7I0mraXzrUV3qQXX70e/Ykvo+2Kqm765OSp1J2U40q0nO3m8UK73cW+VOo/PyfX6899Z3bhJSi/2aMecIVIOE0p05pqUZLKaZqYylYzjTqtztZNKjWbzKm3yp1H6S68nvziiZxnayYjKOXoNpcxqxytn1XVH3OVtLpwkpQePR9mdHaXUascrZrnHyOjTd58T7c+2qcOY9PuUhTdihSFAhQAIAABQQCghQBCkAAACgAACFAAACAoAEAA02rabzq0l5ucF1+8l+hp5RjUg4TSnCaalGW8Wn0aOxNLq2mc6tJd5011+8l+hJfRvtiqpu+MnI4nYzUJtztZtKlVk8ypN8qc36S68nvz3lpduLUov6PmfFuM4uE0pwnFqUZJNST6NGokpWMkpNztJtKnUeXKi3yhN9V5S/B77uLc4ys1GUcvQbO7VWO20lzj+v0Mg5Cyu3Fpp48mdNZXaqrykua/VHQpv8+J9oLaZw5j0ygAUMAAAAAAAAAAAAAAAAAhSAUgAAAoAgAAAAAABpNY0rOatFb850117rv2NPFxnFwklKMk1KMlmLT2aaOzNJrGlZzWorxc5wXxd139SS+jfbFVTdrrk5CpCVjJbudpJpQm/FKg3yhJ9Y+Uvwfm/vca/Ozq06k0o2eI8dfEpOMnxJ8nlJYj0f8AF9XH46rqdS3nGdSHHY4jCuoxhN+JuLTi93zgljbeWeiLUo/6VKUX76wqY4ZZ4nQedlJ/Lnk+aa38ySI8eVUzGfHy9AsrtVYr5sf17oyDw6y1erbucLSdWlUtnNxp1HwR4oTkqcZW6jxSpTzF8SfxNLx4VT2PSdQjcUqc9uKdOE/C04vKTyn5bnQrz+JQZ4a5hnkBTZkgKAABABSACgAAAABAAKQAAAAAAApAABSACkAA02r6XxZq0l4v/JBfH5td/X18iqT4KlW3h7yhVoOcoU5OpKrJRco0JRgppVaT8LcZcecSgllxx7saLW9GjPiq04RlJr7SDipca3/d7dcv8cM69byhthnvUS4lWkKNKlc8FOva3FGn7yqoRcqTcWsNrL9345Jb+Hia5DS7qvp1WlShxV7OpJRpNOMqlKXibzy/XOG95N5lrGvY1owpKVxY15KDoPM5UniTeW0+fLLaW2+XLiMi9tpWEveU8yspc1zdv/x/2/TlFM+M/pbEecan29BsL1VVh7TXTz7oyzzXR6telctqfFQn451G1xSlwpLCzs8pbJJYz5qMO906/VVcL2n+Uu6K6bonrM8o7aZx5hnEAKWCkAAFIAKCACggAApAAAAAAACkAAFAgAAAAACkA0mtaTxZrUV4+c4L4u67+vryGnUqlK6k1JOhVzKvxxg51ZcKioyez22/PL3welGg1/RePNagvtFvOC+Luu/r6zXVe5xU1W/GTjtQs3Yv3tLMrJvxRW7tn/6/7fpy2On3/Jp7bNNep9bO8+GX0afLBp9RsHYt1qOZWT3nBbu27r+X/b9OXP1pdvfEvQtM1FVUoyfj/KX+TYHnun3+yeduaa6HYaVqaqpRm8T6P5v8l1F++uSK6jx5xbIApWlQFAEAKBCgAQAAUEAFBABQQoEAAApAAKQAUEAFIABz3tBonHmvQX2i3nBfH3Xf19dJYXvwy+jTO8Od9otB95mvbrFVbzgvj7r73r6y30b7YqqbtdcnIahp7sm69BOVk3mdNbu3+8v5fb4fpyztPvFs4vbZo+unX+PBP6NM1epaf/om7i3TlaverSju7d/NFfJ5rp9OUK3f5d/pWpe8SjP+Po/P/Jszzux1BYjKLynumnk7DStTVRKM34uj8y2i/fXJFfRrti2oICtKFIABSFAgAAFIAAAAFIAAAAAAAUgApAAAAAAADnvaLQfe5r0Fist5QW3vO6+96nP6ffNPgns900/Ro9BOe9o9A99mvQWKy3lFbKp/9epLfRvtiqpu11ycXqmnOzbuLZOVrJ5rUY7ug+s4L5PNdOhmaZqKai08ppNNM+1hfNPgns1lNP0NZqmmu1bubZOVs3xVqEd3SfWpBfL5x/FeRAuh6BpOqKolCb8XwyfXs+5tjzTTNRTUZRlmMllNPKwztNI1RTShN79G/RltF/1yRX0a7YtuACxIFIUACACggAoIAKCACggAoIAKCACggAoIAKAQCggA5/2j0BV81qCxXW7jyVRf7u5zmn3ri3CezTw09t+qPQzn/aTQPfp1qKSrr+KPJVF/u7kt9Hl2x9qabtdcnE6vpcrVu6tIuVCTcq9vFZdNvnUpry84/ivJ5Gl6mmoyjJOLSaaeVgybC+cXwT2aeGnzz5YfU/MfZn3txxWdSFJVVKc6Uk3BS6zily57rk2QxjMzqF05REcuw0PUve/Zt8UlHiT68OUt/wCpuDU+z+iRsoSXG6tWo81Kslw5xySXRG2OpVGUY6ycuycZymcfQCFNHgBAAAAFBAAKQAUEAAAAUEAFBABQQAUEAFBABSAAaD2j9nf9T9rQcYV+vE3GE195pPD74Pv7O6I7SMpVKnvq9RJSkliEUvhiv1NwDx/Hj5eWuXv+TLx8d8KCA9vAUhQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/9k=', 
    category: 'Accessories' 
  },
  { 
    id: 4, 
    name: 'Vinyl Record - Jazz Classics', 
    description: 'A curated collection of timeless jazz tracks on vinyl.', 
    price: 24.99, 
    image: 'data:image/jpeg;base64,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', 
    category: 'Vinyls' 
  },
  { 
    id: 5, 
    name: 'Guitar Strings Set', 
    description: 'High-quality strings for acoustic and electric guitars.', 
    price: 12.99, 
    image: 'https://m.media-amazon.com/images/I/61QSpox4vCL.jpg', 
    category: 'Accessories' 
  },
  { 
    id: 6, 
    name: 'Portable Amp', 
    description: 'Compact amplifier with adjustable sound settings.', 
    price: 89.99, 
    image: 'https://i.ebayimg.com/images/g/M2kAAOSwuF9ma6js/s-l1200.jpg', 
    category: 'Equipment' 
  },
  { 
    id: 7, 
    name: 'Vinyl Record - Rock Legends', 
    description: 'Iconic rock anthems pressed on premium vinyl.', 
    price: 29.99, 
    image: 'https://target.scene7.com/is/image/Target/GUEST_4db1c605-319f-4a3f-ab93-81a300fcf51a?wid=488&hei=488&fmt=pjpeg', 
    category: 'Vinyls' 
  },
  { 
    id: 8, 
    name: 'Ukulele', 
    description: 'A fun and portable instrument for players of all levels.', 
    price: 49.99, 
    image: 'https://r2.gear4music.com/media/68/681080/600/preview_1.jpg', 
    category: 'Instruments' 
  },
  { 
    id: 9, 
    name: 'Studio Microphone', 
    description: 'Professional microphone for recording and streaming.', 
    price: 119.99, 
    image: 'https://www.muzi.lt/62673-large_default/condenser-microphone-set-rode-nt1-signature-black.jpg', 
    category: 'Equipment' 
  },
  { 
    id: 10, 
    name: 'Noise-Canceling Headphones', 
    description: 'Experience music with crystal clarity and no distractions.', 
    price: 149.99, 
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7IQEipCJdWVKuFenwnk5UCEwZF0QvLSDCyw&s', 
    category: 'Accessories' 
  },
  { 
    id: 11, 
    name: 'Vinyl Record - Pop Hits', 
    description: 'Top pop tracks that defined generations, now on vinyl.', 
    price: 19.99, 
    image: 'https://i.ebayimg.com/images/g/i7AAAOSw~KVlndLF/s-l1200.png', 
    category: 'Vinyls' 
  },
  { 
    id: 12, 
    name: 'Digital Tuner', 
    description: 'Easily tune your guitar, bass, or ukulele on the go.', 
    price: 14.99, 
    image: 'https://blairbagpipes.com/wp-content/uploads/2019/09/BlairBagpipeTuner.jpg', 
    category: 'Accessories' 
  }
        
    ]);

    const categories = ref([...new Set(products.value.map(product => product.category))]);
    const selectedCategory = ref('all');

    const filteredProducts = computed(() => {
      if (selectedCategory.value === 'all') {
        return products.value;
      }
      return products.value.filter(product => product.category === selectedCategory.value);
    });

    return {
      products,
      categories,
      selectedCategory,
      filteredProducts
    };
  },
  methods: {
    addToCart(product) {
      this.cart.push(product);
      this.cartItemCount++;
      this.isCartOpen = true;
    },
    removeFromCart(product) {
      const index = this.cart.indexOf(product);
      if (index > -1) {
        this.cart.splice(index, 1);
        this.cartItemCount--;
      }
    },
    closeCart() {
      this.isCartOpen = false;
    },
    checkOut() {
      // Logic to check out
      console.log('Checked out');
      this.cart = [];
      this.cartItemCount = 0;
      this.isCartOpen = false;
    }
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}
.icon-cart {
  position: relative;
}
.icon-cart span {
  position: absolute;
  background-color: rgb(140, 0, 255);
  border-radius: 50%;
  padding: 2px 6px;
  top: -10px;
  right: -10px;
}
.listProduct {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 10px;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.product {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  width: 200px;
  text-align: center;
  scroll-snap-align: center;

}
.product-image {
  width: 100%;
  height: auto;
}
.cartTab {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: rgb(71, 45, 92);
  box-shadow: -2px 0 5px rgba(0,0,0,0.5);
  padding: 20px;
  overflow-y: auto;
  z-index: 1000;
}
.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.cart-item-image {
  width: 50px;
  height: auto;
}
.btn {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>