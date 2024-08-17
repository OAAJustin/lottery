import React, { useState, useEffect } from 'react';
import ModifyItemOverlayForm from './ModifyItemOverlayForm';


interface TableData {
    uid: number;
    artist: string;
    title: string;
    medium: string;
    size: number;
    qty: number;
    price: number;
  }
  
  interface SelectedRowData {
    uid: number;
    artist: string;
    title: string;
    medium: string;
    size: number;
    qty: number;
    price: number;
  }

  const rowStyle: React.CSSProperties = {
    cursor: 'pointer'
  };

  const Table: React.FC = () => {
    const [selectedRowData, setSelectedRowData] = useState<SelectedRowData | null>(null);
    const [showForm, setShowForm] = useState(false);
  
    const data: TableData[] = [
      { uid: 1, artist: 'Agnes Wnuk', title: 'Afternoon Ted', medium: 'Watercolor', size: 0, qty: 1.0, price: 200.0},
      { uid: 2, artist: 'Agnes Wnuk', title: 'Lobster Dinner', medium: 'Watercolor', size: 0, qty: 1.0, price: 200.0},
    ];
  
    const handleRowClick = (rowData: TableData) => {
      setSelectedRowData(rowData);
      setShowForm(!showForm);
    };

    const toggleForm = () => {
      setShowForm(!showForm);
    };
  
    return (
      <div>
        <table>
    <thead>
      <tr>
        <th>UID</th>
        <th>Artist</th>
        <th>Title</th>
        <th>Medium</th>
        <th>Size</th>
        <th>Qty</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr key={1} onClick={toggleForm} style={rowStyle}>
        <td>1</td>
        <td>Agnes Wnuk</td>
        <td>Afternoon Ted</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr key={2} onClick={toggleForm} style={rowStyle}>
        <td>2</td>
        <td>Agnes Wnuk</td>
        <td>Lobster Dinner</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Agnes Wnuk</td>
        <td>Cake Time</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Agnes Wnuk</td>
        <td>Fish Stew</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Agnes Wnuk</td>
        <td>Write Up</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>NaN</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Carolyn Cohen</td>
        <td>From the Earth</td>
        <td>Collage, Acrylic</td>
        <td>None</td>
        <td>1.0</td>
        <td>350.0</td>
      </tr>
      <tr>
        <td>7</td>
        <td>Carolyn Cohen</td>
        <td>Intersection</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>400.0</td>
      </tr>
      <tr>
        <td>8</td>
        <td>Carolyn Cohen</td>
        <td>Temple</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>700.0</td>
      </tr>
      <tr>
        <td>9</td>
        <td>Carolyn Cohen</td>
        <td>IRIS</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>400.0</td>
      </tr>
      <tr>
        <td>10</td>
        <td>Carolyn Cohen</td>
        <td>Disturbance</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>300.0</td>
      </tr>
      <tr>
        <td>11</td>
        <td>Carolyn Cohen</td>
        <td>Perfect Day</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>1000.0</td>
      </tr>
      <tr>
        <td>12</td>
        <td>Carolyn Cohen</td>
        <td>TidePool</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>500.0</td>
      </tr>
      <tr>
        <td>13</td>
        <td>Carolyn Cohen</td>
        <td>Fish</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>500.0</td>
      </tr>
      <tr>
        <td>14</td>
        <td>Carolyn Cohen</td>
        <td>April</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>400.0</td>
      </tr>
      <tr>
        <td>15</td>
        <td>Carolyn Cohen</td>
        <td>San Andreas</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>800.0</td>
      </tr>
      <tr>
        <td>16</td>
        <td>Carolyn Cohen</td>
        <td>Composition</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>500.0</td>
      </tr>
      <tr>
        <td>17</td>
        <td>Carolyn Cohen</td>
        <td>Under the Sea</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>500.0</td>
      </tr>
      <tr>
        <td>18</td>
        <td>Chase Hanna</td>
        <td>Large Brown</td>
        <td>Wood, Lights</td>
        <td>None</td>
        <td>1.0</td>
        <td>2300.0</td>
      </tr>
      <tr>
        <td>19</td>
        <td>Chase Hanna</td>
        <td>Small White</td>
        <td>Wood, Lights</td>
        <td>None</td>
        <td>1.0</td>
        <td>700.0</td>
      </tr>
      <tr>
        <td>20</td>
        <td>Faith Vicinanza</td>
        <td>Chaos Theory</td>
        <td>Oil</td>
        <td>None</td>
        <td>1.0</td>
        <td>10000.0</td>
      </tr>
      <tr>
        <td>21</td>
        <td>Faith Vicinanza</td>
        <td>The Universe</td>
        <td>Acrylic Pour</td>
        <td>None</td>
        <td>1.0</td>
        <td>250.0</td>
      </tr>
      <tr>
        <td>22</td>
        <td>Faith Vicinanza</td>
        <td>Magnolia</td>
        <td>Photography</td>
        <td>None</td>
        <td>1.0</td>
        <td>100.0</td>
      </tr>
      <tr>
        <td>23</td>
        <td>Faith Vicinanza</td>
        <td>Murns</td>
        <td>Photography</td>
        <td>None</td>
        <td>1.0</td>
        <td>150.0</td>
      </tr>
      <tr>
        <td>24</td>
        <td>Faith Vicinanza</td>
        <td>Purple Haze</td>
        <td>Acrylic Dot</td>
        <td>None</td>
        <td>1.0</td>
        <td>150.0</td>
      </tr>
      <tr>
        <td>25</td>
        <td>Faith Vicinanza</td>
        <td>Crop Circle</td>
        <td>Acrylic Dot</td>
        <td>None</td>
        <td>1.0</td>
        <td>350.0</td>
      </tr>
      <tr>
        <td>26</td>
        <td>Faith Vicinanza</td>
        <td>Confetti</td>
        <td>Acrylic Dot</td>
        <td>None</td>
        <td>1.0</td>
        <td>350.0</td>
      </tr>
      <tr>
        <td>27</td>
        <td>Faith Vicinanza</td>
        <td>IN the Zone</td>
        <td>Acrylic Dot</td>
        <td>None</td>
        <td>1.0</td>
        <td>120.0</td>
      </tr>
      <tr>
        <td>28</td>
        <td>Faith Vicinanza</td>
        <td>Queen of Hearts</td>
        <td>Acrylic Dot</td>
        <td>None</td>
        <td>1.0</td>
        <td>250.0</td>
      </tr>
      <tr>
        <td>29</td>
        <td>Faith Vicinanza</td>
        <td>Contton Cnady</td>
        <td>Acrylic Dot</td>
        <td>None</td>
        <td>1.0</td>
        <td>300.0</td>
      </tr>
      <tr>
        <td>30</td>
        <td>Faith Vicinanza</td>
        <td>Silver &amp; Gold</td>
        <td>Acrylic Dot</td>
        <td>None</td>
        <td>1.0</td>
        <td>250.0</td>
      </tr>
      <tr>
        <td>31</td>
        <td>Faith Vicinanza</td>
        <td>Yellow</td>
        <td>Photograph</td>
        <td>None</td>
        <td>1.0</td>
        <td>300.0</td>
      </tr>
      <tr>
        <td>32</td>
        <td>Faith Vicinanza</td>
        <td>A Westward Wind</td>
        <td>Acrylic Dot</td>
        <td>None</td>
        <td>1.0</td>
        <td>600.0</td>
      </tr>
      <tr>
        <td>33</td>
        <td>Faith Vicinanza</td>
        <td>Shall We Dance #2</td>
        <td>Multi-Medium</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr>
        <td>34</td>
        <td>Faith Vicinanza</td>
        <td>Yellow #5</td>
        <td>Photograph</td>
        <td>None</td>
        <td>1.0</td>
        <td>150.0</td>
      </tr>
      <tr>
        <td>35</td>
        <td>Faith Vicinanza</td>
        <td>Ocean</td>
        <td>Acrylic Pour</td>
        <td>None</td>
        <td>1.0</td>
        <td>250.0</td>
      </tr>
      <tr>
        <td>36</td>
        <td>Faith Vicinanza</td>
        <td>Sunset</td>
        <td>Notecard</td>
        <td>None</td>
        <td>14.0</td>
        <td>2.0</td>
      </tr>
      <tr>
        <td>37</td>
        <td>Faith Vicinanza</td>
        <td>Sunflower</td>
        <td>Notecard</td>
        <td>None</td>
        <td>22.0</td>
        <td>2.0</td>
      </tr>
      <tr>
        <td>38</td>
        <td>Faith Vicinanza</td>
        <td>Green</td>
        <td>Notecard</td>
        <td>None</td>
        <td>34.0</td>
        <td>2.0</td>
      </tr>
      <tr>
        <td>39</td>
        <td>Faith Vicinanza</td>
        <td>Lily Pads</td>
        <td>Notecard</td>
        <td>None</td>
        <td>16.0</td>
        <td>2.0</td>
      </tr>
      <tr>
        <td>40</td>
        <td>Faith Vicinanza</td>
        <td>W/Stone</td>
        <td>Stained Glass</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr>
        <td>41</td>
        <td>Faith Vicinanza</td>
        <td>Oval Pink</td>
        <td>Stained Glass</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr>
        <td>42</td>
        <td>Faith Vicinanza</td>
        <td>Green</td>
        <td>Stained Glass</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr>
        <td>43</td>
        <td>Faith Vicinanza</td>
        <td>Blue</td>
        <td>Stained Glass</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr>
        <td>44</td>
        <td>Faith Vicinanza</td>
        <td>Clear</td>
        <td>Stained Glass</td>
        <td>None</td>
        <td>1.0</td>
        <td>160.0</td>
      </tr>
      <tr>
        <td>45</td>
        <td>Faith Vicinanza</td>
        <td>Pained Vintage Music Box</td>
        <td>Decor</td>
        <td>None</td>
        <td>1.0</td>
        <td>45.0</td>
      </tr>
      <tr>
        <td>46</td>
        <td>Faith Vicinanza</td>
        <td>Dream</td>
        <td>Acrylic Dot</td>
        <td>None</td>
        <td>1.0</td>
        <td>40.0</td>
      </tr>
      <tr>
        <td>47</td>
        <td>Faith Vicinanza</td>
        <td>Blue Dish</td>
        <td>Houseware</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>48</td>
        <td>Faith Vicinanza</td>
        <td>Serving Dish</td>
        <td>Houseware</td>
        <td>None</td>
        <td>1.0</td>
        <td>25.0</td>
      </tr>
      <tr>
        <td>49</td>
        <td>Faith Vicinanza</td>
        <td>Granite Orb with Stand</td>
        <td>Decor</td>
        <td>None</td>
        <td>1.0</td>
        <td>150.0</td>
      </tr>
      <tr>
        <td>50</td>
        <td>Faith Vicinanza</td>
        <td>Spirals</td>
        <td>Acrylic</td>
        <td>None</td>
        <td>2.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>51</td>
        <td>Faith Vicinanza</td>
        <td>Arturo</td>
        <td>Acrylic</td>
        <td>None</td>
        <td>58.0</td>
        <td>15.0</td>
      </tr>
      <tr>
        <td>52</td>
        <td>Faith Vicinanza</td>
        <td>Aztec</td>
        <td>Acrylic</td>
        <td>None</td>
        <td>1.0</td>
        <td>40.0</td>
      </tr>
      <tr>
        <td>53</td>
        <td>Faith Vicinanza</td>
        <td>Feathers</td>
        <td>Acrylic</td>
        <td>None</td>
        <td>1.0</td>
        <td>50.0</td>
      </tr>
      <tr>
        <td>54</td>
        <td>Faith Vicinanza</td>
        <td>Blue/Pink Fusion</td>
        <td>Acrylic</td>
        <td>None</td>
        <td>1.0</td>
        <td>20.0</td>
      </tr>
      <tr>
        <td>55</td>
        <td>Faith Vicinanza</td>
        <td>Martha Stewart Mandala</td>
        <td>Acrylic</td>
        <td>None</td>
        <td>1.0</td>
        <td>15.0</td>
      </tr>
      <tr>
        <td>56</td>
        <td>Faith Vicinanza</td>
        <td>Mandala</td>
        <td>Acrylic</td>
        <td>None</td>
        <td>1.0</td>
        <td>20.0</td>
      </tr>
      <tr>
        <td>57</td>
        <td>Faith Vicinanza</td>
        <td>Large Mandala</td>
        <td>Acrylic</td>
        <td>None</td>
        <td>1.0</td>
        <td>25.0</td>
      </tr>
      <tr>
        <td>58</td>
        <td>Faith Vicinanza</td>
        <td>Martha Stewart Half Mandala</td>
        <td>Acrylic</td>
        <td>None</td>
        <td>1.0</td>
        <td>15.0</td>
      </tr>
      <tr>
        <td>59</td>
        <td>Faith Vicinanza</td>
        <td>Flood Desserts</td>
        <td>Book</td>
        <td>None</td>
        <td>39.0</td>
        <td>10.0</td>
      </tr>
      <tr>
        <td>60</td>
        <td>Faith Vicinanza</td>
        <td>Tree</td>
        <td>Book</td>
        <td>None</td>
        <td>3.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>61</td>
        <td>Faith Vicinanza</td>
        <td>You Belong</td>
        <td>Book</td>
        <td>None</td>
        <td>4.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>62</td>
        <td>Faith Vicinanza</td>
        <td>Ocean</td>
        <td>Book</td>
        <td>None</td>
        <td>98.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>63</td>
        <td>Faith Vicinanza</td>
        <td>Sunburst</td>
        <td>Book</td>
        <td>None</td>
        <td>74.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>64</td>
        <td>Faith Vicinanza</td>
        <td>Feathers</td>
        <td>Book</td>
        <td>None</td>
        <td>9.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>65</td>
        <td>Faith Vicinanza</td>
        <td>Make Today Amazing</td>
        <td>Acrylic</td>
        <td>None</td>
        <td>1.0</td>
        <td>15.0</td>
      </tr>
      <tr>
        <td>66</td>
        <td>Faith Vicinanza</td>
        <td>Vintage Wood Coal Shovel</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>35.0</td>
      </tr>
      <tr>
        <td>67</td>
        <td>Faith Vicinanza</td>
        <td>Metal Flower Mirrors</td>
        <td>None</td>
        <td>None</td>
        <td>2.0</td>
        <td>500.0</td>
      </tr>
      <tr>
        <td>68</td>
        <td>Faith Vicinanza</td>
        <td>Glen River Giclee Print</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>NaN</td>
      </tr>
      <tr>
        <td>69</td>
        <td>Faith Vicinanza</td>
        <td>Glen River Giclee Print</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>NaN</td>
      </tr>
      <tr>
        <td>70</td>
        <td>Faith Vicinanza</td>
        <td>Purple Flower</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>20.0</td>
      </tr>
      <tr>
        <td>71</td>
        <td>Faith Vicinanza</td>
        <td>Recycled Barrel</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>72</td>
        <td>Faith Vicinanza</td>
        <td>Recycled Barrel</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>73</td>
        <td>Faith Vicinanza</td>
        <td>After the Rain</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>74</td>
        <td>Faith Vicinanza</td>
        <td>The Charles</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>20.0</td>
      </tr>
      <tr>
        <td>75</td>
        <td>Faith Vicinanza</td>
        <td>Peony Farm</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>76</td>
        <td>Faith Vicinanza</td>
        <td>WIng Fantasy</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>40.0</td>
      </tr>
      <tr>
        <td>77</td>
        <td>Faith Vicinanza</td>
        <td>Woman &amp; Child</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>5.0</td>
      </tr>
      <tr>
        <td>78</td>
        <td>Faith Vicinanza</td>
        <td>Flowers</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>5.0</td>
      </tr>
      <tr>
        <td>79</td>
        <td>Faith Vicinanza</td>
        <td>Flowers</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>10.0</td>
      </tr>
      <tr>
        <td>80</td>
        <td>Faith Vicinanza</td>
        <td>Lady &amp; Unicorn</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>40.0</td>
      </tr>
      <tr>
        <td>81</td>
        <td>Faith Vicinanza</td>
        <td>Cherry Bowl</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>40.0</td>
      </tr>
      <tr>
        <td>82</td>
        <td>Faith Vicinanza</td>
        <td>Square</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>5.0</td>
      </tr>
      <tr>
        <td>83</td>
        <td>Faith Vicinanza</td>
        <td>Small Red Square</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>5.0</td>
      </tr>
      <tr>
        <td>84</td>
        <td>Faith Vicinanza</td>
        <td>Clause</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>12.0</td>
      </tr>
      <tr>
        <td>85</td>
        <td>Faith Vicinanza</td>
        <td>Round</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>5.0</td>
      </tr>
      <tr>
        <td>86</td>
        <td>Faith Vicinanza</td>
        <td>Large Star</td>
        <td>None</td>
        <td>None</td>
        <td>2.0</td>
        <td>10.0</td>
      </tr>
      <tr>
        <td>87</td>
        <td>Faith Vicinanza</td>
        <td>Small Star</td>
        <td>None</td>
        <td>None</td>
        <td>3.0</td>
        <td>5.0</td>
      </tr>
      <tr>
        <td>88</td>
        <td>Faith Vicinanza</td>
        <td>Heart</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>25.0</td>
      </tr>
      <tr>
        <td>89</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Ball</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>90</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Ball</td>
        <td>None</td>
        <td>None</td>
        <td>2.0</td>
        <td>25.0</td>
      </tr>
      <tr>
        <td>91</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Small Witch's Ball</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>92</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Ball - Large Glows in the Dark</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>45.0</td>
      </tr>
      <tr>
        <td>93</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Ball</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>40.0</td>
      </tr>
      <tr>
        <td>94</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Ball</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>40.0</td>
      </tr>
      <tr>
        <td>95</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Ball</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>96</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Ball</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>97</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Ball</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>98</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Ball - Large Witch's Ball</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>50.0</td>
      </tr>
      <tr>
        <td>99</td>
        <td>Faith Vicinanza</td>
        <td>Green Glass</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>100</td>
        <td>Faith Vicinanza</td>
        <td>Cobalt Glass</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>40.0</td>
      </tr>
      <tr>
        <td>101</td>
        <td>Faith Vicinanza</td>
        <td>Flag</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>102</td>
        <td>Faith Vicinanza</td>
        <td>Hourglass</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>103</td>
        <td>Faith Vicinanza</td>
        <td>Rosenthal</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>120.0</td>
      </tr>
      <tr>
        <td>104</td>
        <td>Faith Vicinanza</td>
        <td>Blue Irredescent</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>95.0</td>
      </tr>
      <tr>
        <td>105</td>
        <td>Faith Vicinanza</td>
        <td>White Met Reprod.</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>50.0</td>
      </tr>
      <tr>
        <td>106</td>
        <td>Faith Vicinanza</td>
        <td>Green Metallic</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>60.0</td>
      </tr>
      <tr>
        <td>107</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Green/Yellow</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>100.0</td>
      </tr>
      <tr>
        <td>108</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Teardrop Abstract</td>
        <td>None</td>
        <td>None</td>
        <td>2.0</td>
        <td>100.0</td>
      </tr>
      <tr>
        <td>109</td>
        <td>Faith Vicinanza</td>
        <td>Bacarat Eye Rectangle</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>2000.0</td>
      </tr>
      <tr>
        <td>110</td>
        <td>Faith Vicinanza</td>
        <td>Baccarat Butterfly</td>
        <td>None</td>
        <td>None</td>
        <td>17.0</td>
        <td>180.0</td>
      </tr>
      <tr>
        <td>111</td>
        <td>Faith Vicinanza</td>
        <td>Stained Glass Butterfly</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>100.0</td>
      </tr>
      <tr>
        <td>112</td>
        <td>Faith Vicinanza</td>
        <td>Crystal Goblet</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>30.0</td>
      </tr>
      <tr>
        <td>113</td>
        <td>Faith Vicinanza</td>
        <td>Sprial Bud Vase</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>15.0</td>
      </tr>
      <tr>
        <td>114</td>
        <td>Faith Vicinanza</td>
        <td>Spiral Bowl</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>80.0</td>
      </tr>
      <tr>
        <td>115</td>
        <td>Faith Vicinanza</td>
        <td>Large Multi-color</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr>
        <td>116</td>
        <td>Faith Vicinanza</td>
        <td>Glass Urn</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>20.0</td>
      </tr>
      <tr>
        <td>117</td>
        <td>Faith Vicinanza</td>
        <td>Small Glass Vase</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>10.0</td>
      </tr>
      <tr>
        <td>118</td>
        <td>Faith Vicinanza</td>
        <td>Med. Glass Vase</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>20.0</td>
      </tr>
      <tr>
        <td>119</td>
        <td>Faith Vicinanza</td>
        <td>Small Vase</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>20.0</td>
      </tr>
      <tr>
        <td>120</td>
        <td>Faith Vicinanza</td>
        <td>Ornate Dish/Vase</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>25.0</td>
      </tr>
      <tr>
        <td>121</td>
        <td>Faith Vicinanza</td>
        <td>Painted Vase</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>15.0</td>
      </tr>
      <tr>
        <td>122</td>
        <td>Faith Vicinanza</td>
        <td>Large Green Square</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>20.0</td>
      </tr>
      <tr>
        <td>123</td>
        <td>Faith Vicinanza</td>
        <td>Hand Blown Glass Bowl</td>
        <td>None</td>
        <td>None</td>
        <td>2.0</td>
        <td>100.0</td>
      </tr>
      <tr>
        <td>124</td>
        <td>Faith Vicinanza</td>
        <td>Large Red Ribbon Rectangle</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>150.0</td>
      </tr>
      <tr>
        <td>125</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>126</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>127</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>128</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>129</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>130</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>131</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>132</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>133</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>134</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>135</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>136</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>Natural Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>137</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>138</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>139</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>140</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>141</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>142</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>143</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>144</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>145</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>146</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>147</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>148</td>
        <td>Katie Talerico Henry</td>
        <td>Signed Flora &amp; Fauna Photo Card</td>
        <td>White Cardstock</td>
        <td>None</td>
        <td>1.0</td>
        <td>8.0</td>
      </tr>
      <tr>
        <td>149</td>
        <td>Katie Talerico Henry</td>
        <td>Framed Print - Painted Lady Butterfly &amp; Bee</td>
        <td>Framed Print w/ Mat</td>
        <td>None</td>
        <td>1.0</td>
        <td>75.0</td>
      </tr>
      <tr>
        <td>150</td>
        <td>Katie Talerico Henry</td>
        <td>Framed Print - Pink Sulpher Butterfly</td>
        <td>Framed Print w/ Mat</td>
        <td>None</td>
        <td>1.0</td>
        <td>75.0</td>
      </tr>
      <tr>
        <td>151</td>
        <td>Katie Talerico Henry</td>
        <td>Framed Print - Pink Sulpher Butterfly</td>
        <td>Framed Print w/ Mat</td>
        <td>None</td>
        <td>1.0</td>
        <td>50.0</td>
      </tr>
      <tr>
        <td>152</td>
        <td>Katie Talerico Henry</td>
        <td>Framed Print - Pink Sulpher Butterfly</td>
        <td>Framed Print w/ Mat</td>
        <td>None</td>
        <td>1.0</td>
        <td>50.0</td>
      </tr>
      <tr>
        <td>153</td>
        <td>Katie Talerico Henry</td>
        <td>Framed Print - Painted Lady Butterfly &amp; Bee</td>
        <td>Framed Print w/ Mat</td>
        <td>None</td>
        <td>1.0</td>
        <td>50.0</td>
      </tr>
      <tr>
        <td>154</td>
        <td>Katie Talerico Henry</td>
        <td>Framed Print - Painted Lady Butterfly &amp; Bee</td>
        <td>Framed Print w/ Mat</td>
        <td>None</td>
        <td>1.0</td>
        <td>50.0</td>
      </tr>
      <tr>
        <td>155</td>
        <td>Katie Talerico Henry</td>
        <td>Framed Print - Twice Stabbed Stink Bee</td>
        <td>Framed Print w/ Mat</td>
        <td>None</td>
        <td>1.0</td>
        <td>50.0</td>
      </tr>
      <tr>
        <td>156</td>
        <td>Katie Talerico Henry</td>
        <td>Framed Print - Longhorn Heart Millkweed Beetle</td>
        <td>Framed Print w/ Mat</td>
        <td>None</td>
        <td>1.0</td>
        <td>50.0</td>
      </tr>
      <tr>
        <td>157</td>
        <td>Katie Talerico Henry</td>
        <td>Framed Print - Bumble on Marigold</td>
        <td>Framed Print w/ Mat</td>
        <td>None</td>
        <td>1.0</td>
        <td>50.0</td>
      </tr>
      <tr>
        <td>158</td>
        <td>Katie Talerico Henry</td>
        <td>Framed Print - Honeybee on Rose</td>
        <td>Framed Print w/ Mat</td>
        <td>None</td>
        <td>1.0</td>
        <td>50.0</td>
      </tr>
      <tr>
        <td>159</td>
        <td>Marcia Taylor</td>
        <td>Wood Frog with Maiden Hair Fem</td>
        <td>Stoneware</td>
        <td>None</td>
        <td>1.0</td>
        <td>650.0</td>
      </tr>
      <tr>
        <td>160</td>
        <td>Marcia Taylor</td>
        <td>Navajo Ruins</td>
        <td>Stoneware</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr>
        <td>161</td>
        <td>Marcia Taylor</td>
        <td>Pickerel Frog</td>
        <td>Stoneware</td>
        <td>None</td>
        <td>1.0</td>
        <td>850.0</td>
      </tr>
      <tr>
        <td>162</td>
        <td>Marcia Taylor</td>
        <td>Hedgehog</td>
        <td>Stoneware</td>
        <td>None</td>
        <td>1.0</td>
        <td>325.0</td>
      </tr>
      <tr>
        <td>163</td>
        <td>Marcia Taylor</td>
        <td>Cameliah</td>
        <td>Stoneware</td>
        <td>None</td>
        <td>1.0</td>
        <td>450.0</td>
      </tr>
      <tr>
        <td>164</td>
        <td>Marcia Taylor</td>
        <td>Sumac</td>
        <td>Stoneware</td>
        <td>None</td>
        <td>1.0</td>
        <td>175.0</td>
      </tr>
      <tr>
        <td>165</td>
        <td>Patti Maher</td>
        <td>Liatris</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>5.0</td>
        <td>16.0</td>
      </tr>
      <tr>
        <td>166</td>
        <td>Patti Maher</td>
        <td>Geranium</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>5.0</td>
        <td>16.0</td>
      </tr>
      <tr>
        <td>167</td>
        <td>Patti Maher</td>
        <td>Daffodils</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>5.0</td>
        <td>16.0</td>
      </tr>
      <tr>
        <td>168</td>
        <td>Patti Maher</td>
        <td>Cherry Tree</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>5.0</td>
        <td>16.0</td>
      </tr>
      <tr>
        <td>169</td>
        <td>Patti Maher</td>
        <td>Wheelbarrow</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>5.0</td>
        <td>16.0</td>
      </tr>
      <tr>
        <td>170</td>
        <td>Patti Maher</td>
        <td>Harden with Birdbath</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>5.0</td>
        <td>16.0</td>
      </tr>
      <tr>
        <td>171</td>
        <td>Patti Maher</td>
        <td>Feather</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>5.0</td>
        <td>16.0</td>
      </tr>
      <tr>
        <td>172</td>
        <td>Patti Maher</td>
        <td>Chickadee</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>5.0</td>
        <td>16.0</td>
      </tr>
      <tr>
        <td>173</td>
        <td>Patti Maher</td>
        <td>Nest</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>5.0</td>
        <td>16.0</td>
      </tr>
      <tr>
        <td>174</td>
        <td>Patti Maher</td>
        <td>Maine-Where Rock Meets the Sea</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>1500.0</td>
      </tr>
      <tr>
        <td>175</td>
        <td>Patti Maher</td>
        <td>A Quite Walk</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>1500.0</td>
      </tr>
      <tr>
        <td>176</td>
        <td>Patti Maher</td>
        <td>River's Edge</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>1500.0</td>
      </tr>
      <tr>
        <td>177</td>
        <td>Patti Maher</td>
        <td>Summer Stream</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>1500.0</td>
      </tr>
      <tr>
        <td>178</td>
        <td>Patti Maher</td>
        <td>Horse-Running WIld</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>650.0</td>
      </tr>
      <tr>
        <td>179</td>
        <td>Patti Maher</td>
        <td>Horse-Running Free</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>750.0</td>
      </tr>
      <tr>
        <td>180</td>
        <td>Patti Maher</td>
        <td>Snowy Walk</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>750.0</td>
      </tr>
      <tr>
        <td>181</td>
        <td>Patti Maher</td>
        <td>Sparrow</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>170.0</td>
      </tr>
      <tr>
        <td>182</td>
        <td>Patti Maher</td>
        <td>Egnet in the Woods</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>225.0</td>
      </tr>
      <tr>
        <td>183</td>
        <td>Patti Maher</td>
        <td>Chickadee</td>
        <td>Graphite</td>
        <td>None</td>
        <td>1.0</td>
        <td>225.0</td>
      </tr>
      <tr>
        <td>184</td>
        <td>Robert Ferrucci</td>
        <td>Blue Ridge Horse Farm</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>35.0</td>
      </tr>
      <tr>
        <td>185</td>
        <td>Robert Ferrucci</td>
        <td>Minster Hill</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>35.0</td>
      </tr>
      <tr>
        <td>186</td>
        <td>Robert Ferrucci</td>
        <td>American Barns</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>35.0</td>
      </tr>
      <tr>
        <td>187</td>
        <td>Robert Ferrucci</td>
        <td>Country Life</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>35.0</td>
      </tr>
      <tr>
        <td>188</td>
        <td>Robert Ferrucci</td>
        <td>Hillside Farm</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>90.0</td>
      </tr>
      <tr>
        <td>189</td>
        <td>Robert Ferrucci</td>
        <td>Skyler River Bend</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>90.0</td>
      </tr>
      <tr>
        <td>190</td>
        <td>Robert Ferrucci</td>
        <td>Twilight</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>95.0</td>
      </tr>
      <tr>
        <td>191</td>
        <td>Robert Ferrucci</td>
        <td>Ledgemere Farm</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>155.0</td>
      </tr>
      <tr>
        <td>192</td>
        <td>Robert Ferrucci</td>
        <td>Bryant Farm</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>155.0</td>
      </tr>
      <tr>
        <td>193</td>
        <td>Robert Ferrucci</td>
        <td>Lakewood</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>155.0</td>
      </tr>
      <tr>
        <td>194</td>
        <td>Robert Ferrucci</td>
        <td>Hatch Road</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>155.0</td>
      </tr>
      <tr>
        <td>195</td>
        <td>Robert Ferrucci</td>
        <td>Twilight (Framed)</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>425.0</td>
      </tr>
      <tr>
        <td>196</td>
        <td>Robert Ferrucci</td>
        <td>Blue Abstract</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>675.0</td>
      </tr>
      <tr>
        <td>197</td>
        <td>Robert Ferrucci</td>
        <td>Green Abstract</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>650.0</td>
      </tr>
      <tr>
        <td>198</td>
        <td>Sandy Carlson</td>
        <td>Breathwork</td>
        <td>Book</td>
        <td>None</td>
        <td>5.0</td>
        <td>10.0</td>
      </tr>
      <tr>
        <td>199</td>
        <td>Sandy Carlson</td>
        <td>Moth Tongue</td>
        <td>Book</td>
        <td>None</td>
        <td>5.0</td>
        <td>10.0</td>
      </tr>
      <tr>
        <td>200</td>
        <td>Sandy Carlson</td>
        <td>Taking Time</td>
        <td>Book</td>
        <td>None</td>
        <td>5.0</td>
        <td>10.0</td>
      </tr>
      <tr>
        <td>201</td>
        <td>Terrence Tougas</td>
        <td>Airplane</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>75.0</td>
      </tr>
      <tr>
        <td>202</td>
        <td>Terrence Tougas</td>
        <td>Keepsake Box - Crane</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>47.0</td>
      </tr>
      <tr>
        <td>203</td>
        <td>Terrence Tougas</td>
        <td>Laser Etch Photo - Lee's Ferry</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>90.0</td>
      </tr>
      <tr>
        <td>204</td>
        <td>Terrence Tougas</td>
        <td>Mystic Container</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>25.0</td>
      </tr>
      <tr>
        <td>205</td>
        <td>Terrence Tougas</td>
        <td>Peppermill</td>
        <td>None</td>
        <td>None</td>
        <td>2.0</td>
        <td>85.0</td>
      </tr>
      <tr>
        <td>206</td>
        <td>Terrence Tougas</td>
        <td>Hart Pen &amp; Case</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>55.0</td>
      </tr>
      <tr>
        <td>207</td>
        <td>Terrence Tougas</td>
        <td>Pen &amp; Pencil Set with Case</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>78.0</td>
      </tr>
      <tr>
        <td>208</td>
        <td>Terrence Tougas</td>
        <td>Salad Tongs</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>60.0</td>
      </tr>
      <tr>
        <td>209</td>
        <td>Terrence Tougas</td>
        <td>Burl Desk CLock</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>75.0</td>
      </tr>
      <tr>
        <td>210</td>
        <td>Terrence Tougas</td>
        <td>Bud Vase</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>85.0</td>
      </tr>
      <tr>
        <td>211</td>
        <td>Terrence Tougas</td>
        <td>Wall Clock</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>300.0</td>
      </tr>
      <tr>
        <td>212</td>
        <td>Terrence Tougas</td>
        <td>Steeple Clock</td>
        <td>None</td>
        <td>None</td>
        <td>1.0</td>
        <td>250.0</td>
      </tr>
      <tr>
        <td>213</td>
        <td>Terrence Tougas</td>
        <td>Measuring Spoons</td>
        <td>None</td>
        <td>None</td>
        <td>NaN</td>
        <td>80.0</td>
      </tr>
      <tr>
        <td>214</td>
        <td>Viktoria Stockmal</td>
        <td>Black &amp; White</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>80.0</td>
      </tr>
      <tr>
        <td>215</td>
        <td>Viktoria Stockmal</td>
        <td>Abstract</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>80.0</td>
      </tr>
      <tr>
        <td>216</td>
        <td>Viktoria Stockmal</td>
        <td>People</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>80.0</td>
      </tr>
      <tr>
        <td>217</td>
        <td>Viktoria Stockmal</td>
        <td>Flowers</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>70.0</td>
      </tr>
      <tr>
        <td>218</td>
        <td>Viktoria Stockmal</td>
        <td>Field of Flowers</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>80.0</td>
      </tr>
      <tr>
        <td>219</td>
        <td>Viktoria Stockmal</td>
        <td>White Flowers</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>70.0</td>
      </tr>
      <tr>
        <td>220</td>
        <td>Viktoria Stockmal</td>
        <td>Gondola</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>80.0</td>
      </tr>
      <tr>
        <td>221</td>
        <td>Viktoria Stockmal</td>
        <td>Abstract</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>80.0</td>
      </tr>
      <tr>
        <td>222</td>
        <td>Viktoria Stockmal</td>
        <td>Bees</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>70.0</td>
      </tr>
      <tr>
        <td>223</td>
        <td>Viktoria Stockmal</td>
        <td>Untitled</td>
        <td>Pattern Hand Dyed, Hand Printed on Linen</td>
        <td>None</td>
        <td>1.0</td>
        <td>1000.0</td>
      </tr>
      <tr>
        <td>224</td>
        <td>Viktoria Stockmal</td>
        <td>Eternity</td>
        <td>Acrylic - Abstract w/ Gold Leaf</td>
        <td>None</td>
        <td>1.0</td>
        <td>600.0</td>
      </tr>
      <tr>
        <td>225</td>
        <td>Viktoria Stockmal</td>
        <td>Dance Party</td>
        <td>Acrylic</td>
        <td>None</td>
        <td>1.0</td>
        <td>900.0</td>
      </tr>
      <tr>
        <td>226</td>
        <td>Viktoria Stockmal</td>
        <td>Candy Man</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>100.0</td>
      </tr>
      <tr>
        <td>227</td>
        <td>Viktoria Stockmal</td>
        <td>Merde de Trottoir-Deux</td>
        <td>Ink, Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>250.0</td>
      </tr>
      <tr>
        <td>228</td>
        <td>Viktoria Stockmal</td>
        <td>Hello Little ONe</td>
        <td>Ink, Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>275.0</td>
      </tr>
      <tr>
        <td>229</td>
        <td>Viktoria Stockmal</td>
        <td>Quiet Time</td>
        <td>Ink, Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>200.0</td>
      </tr>
      <tr>
        <td>230</td>
        <td>Viktoria Stockmal</td>
        <td>Untitled Abstract</td>
        <td>Acrylic in Blue, Textured Shapes</td>
        <td>None</td>
        <td>1.0</td>
        <td>350.0</td>
      </tr>
      <tr>
        <td>231</td>
        <td>Viktoria Stockmal</td>
        <td>Spiral Stair #1</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>400.0</td>
      </tr>
      <tr>
        <td>232</td>
        <td>Viktoria Stockmal</td>
        <td>The Old Lorry</td>
        <td>Ink, Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>475.0</td>
      </tr>
      <tr>
        <td>233</td>
        <td>Viktoria Stockmal</td>
        <td>The Great Egrit</td>
        <td>Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>500.0</td>
      </tr>
      <tr>
        <td>234</td>
        <td>Viktoria Stockmal</td>
        <td>Sunflowers</td>
        <td>Ink, Watercolor</td>
        <td>None</td>
        <td>1.0</td>
        <td>600.0</td>
      </tr>
      <tr>
        <td>235</td>
        <td>Viktoria Stockmal</td>
        <td>Cat on Wall</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>7.0</td>
        <td>5.0</td>
      </tr>
      <tr>
        <td>236</td>
        <td>Viktoria Stockmal</td>
        <td>Crane</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>7.0</td>
        <td>5.0</td>
      </tr>
      <tr>
        <td>237</td>
        <td>Viktoria Stockmal</td>
        <td>Green Landscape</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>7.0</td>
        <td>5.0</td>
      </tr>
      <tr>
        <td>238</td>
        <td>Viktoria Stockmal</td>
        <td>Cat/TP</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>7.0</td>
        <td>5.0</td>
      </tr>
      <tr>
        <td>239</td>
        <td>Viktoria Stockmal</td>
        <td>Train to Nowhere</td>
        <td>Watercolor Print</td>
        <td>None</td>
        <td>1.0</td>
        <td>5.0</td>
      </tr>
    </tbody>
        </table>
        <ModifyItemOverlayForm 
        show={showForm}
        onClose={toggleForm}
        uid={selectedRowData?.uid}
        artist={selectedRowData?.artist}
        title={selectedRowData?.title}
        medium={selectedRowData?.medium}
        size={selectedRowData?.size}
        qty={selectedRowData?.qty}
        price={selectedRowData?.price}/>
        {selectedRowData && (
          <div>
            <h3>Selected Row Data:</h3>
            <p>UID: {selectedRowData.uid}</p>
            <p>Artist: {selectedRowData.artist}</p>
            <p>Title: {selectedRowData.title}</p>
          </div>
        )}
      </div>
    );
    
  };
  
  export default Table;