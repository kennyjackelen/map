var myFlights = [
  // December 1998 - Christmas in Arizona
  {src: 'MSP', dest: 'DFW'},
  {src: 'DFW', dest: 'PHX'},
  {src: 'PHX', dest: 'DFW'},
  {src: 'DFW', dest: 'MSP'},
  // February 2005 - Trip #1 to Xavier
  {src: 'MSP', dest: 'CVG'},
  {src: 'CVG', dest: 'MSP'},
  // March 2005 - Trip #3 to Xavier
  {src: 'MSP', dest: 'CVG'},
  {src: 'CVG', dest: 'MSP'},
  // July 2005 - Graduation Trip with Dad
  {src: 'MSP', dest: 'ORD'},
  {src: 'ORD', dest: 'SNA'},
  {src: 'SNA', dest: 'ORD'},
  {src: 'ORD', dest: 'MSP'},
  // November 2005 - Back to School from Thanksgiving
  {src: 'MSP', dest: 'ORD'},
  // March 2007 - Home for Dad's 50th Birthday
  {src: 'SBN', dest: 'MSP'},
  {src: 'MSP', dest: 'SBN'},
  // July 2008 - Vacation in Washington, DC
  {src: 'MSP', dest: 'IAD'},
  {src: 'IAD', dest: 'MSP'},
  // October 2008 - Job Interview in Colorado Springs
  {src: 'SBN', dest: 'ORD'},
  {src: 'ORD', dest: 'COS'},
  {src: 'COS', dest: 'ORD'},
  {src: 'ORD', dest: 'SBN'},
  // October 2008 - Job Interview in New York City
  {src: 'MSP', dest: 'EWR'},
  {src: 'EWR', dest: 'MSP'},
  // March 2009 - Spring Break in Puerto Rico
  {src: 'ORD', dest: 'JFK'},
  {src: 'JFK', dest: 'SJU'},
  {src: 'SJU', dest: 'JFK'},
  {src: 'JFK', dest: 'ORD'},
  // October 2009 - Business Trip to Cleveland
  {src: 'MSN', dest: 'ORD'},
  {src: 'ORD', dest: 'CLE'},
  {src: 'CLE', dest: 'ORD'},
  {src: 'ORD', dest: 'MSN'},
  // November 2009 - Business Trip to Fresno
  {src: 'MSN', dest: 'DEN'},
  {src: 'DEN', dest: 'FAT'},
  {src: 'FAT', dest: 'DEN'},
  {src: 'DEN', dest: 'MSN'},
  // December 2009 - Business Trip to Annapolis
  {src: 'MSN', dest: 'DTW'},
  {src: 'DTW', dest: 'BWI'},
  {src: 'BWI', dest: 'MSP'},
  {src: 'MSP', dest: 'MSN'},
  // January 2010 - Business Trip to Cincinnati
  {src: 'MSN', dest: 'DTW'},
  {src: 'DTW', dest: 'CVG'},
  {src: 'CVG', dest: 'DTW'},
  {src: 'DTW', dest: 'MSN'},
  // January 2010 - Business Trip to Fresno
  {src: 'MSN', dest: 'DEN'},
  {src: 'DEN', dest: 'FAT'},
  {src: 'FAT', dest: 'DEN'},
  {src: 'DEN', dest: 'MSN'},
  // May-June 2010 - Vacation in Seattle
  {src: 'MSN', dest: 'MKE'},
  {src: 'MKE', dest: 'SEA'},
  {src: 'SEA', dest: 'MSP'},
  {src: 'MSP', dest: 'MSN'},
  // June 2010 - Vacation in New Jersey
  {src: 'MSN', dest: 'MKE'},
  {src: 'MKE', dest: 'PHL'},
  {src: 'PHL', dest: 'MKE'},
  {src: 'MKE', dest: 'MSN'},
  // August 2010 - Vacation in NY, CT, MA
  {src: 'MSN', dest: 'MKE'},
  {src: 'MKE', dest: 'LGA'},
  {src: 'BOS', dest: 'MKE'},
  {src: 'MKE', dest: 'MSN'},
  // January 2011 - Business Trip to Seattle
  {src: 'MSN', dest: 'MSP'},
  {src: 'MSP', dest: 'SEA'},
  {src: 'SEA', dest: 'DTW'},
  {src: 'DTW', dest: 'MSN'},
  // February 2011 - Business Trip to Portland
  {src: 'MSN', dest: 'DEN'},
  {src: 'DEN', dest: 'PDX'},
  {src: 'PDX', dest: 'ORD'},
  {src: 'ORD', dest: 'MSN'},
  // April 2011 - Vacation in Washington, DC
  {src: 'MSN', dest: 'MKE'},
  {src: 'MKE', dest: 'DCA'},
  {src: 'DCA', dest: 'MKE'},
  {src: 'MKE', dest: 'MSN'},
  // April 2011 - Business Trip to Cleveland
  {src: 'MSN', dest: 'MKE'},
  {src: 'MKE', dest: 'CLE'},
  {src: 'CLE', dest: 'MKE'},
  {src: 'MKE', dest: 'MSN'},
  // April-May 2011 - Business Trip to Brainerd
  {src: 'MSN', dest: 'MSP'},
  {src: 'MSP', dest: 'BRD'},
  {src: 'BRD', dest: 'MSP'},
  {src: 'MSP', dest: 'MSN'},
  // July 2011 - Vacation in San Francisco
  {src: 'MSN', dest: 'MSP'},
  {src: 'MSP', dest: 'SFO'},
  {src: 'SFO', dest: 'CVG'},
  {src: 'CVG', dest: 'MSN'},
  // September 2011 - Business Trip and Vacation in Denver
  {src: 'MSN', dest: 'MKE'},
  {src: 'MKE', dest: 'DEN'},
  {src: 'DEN', dest: 'MSN'},
  // November 2011 - Business Trip and Vacation in Richland and Seattle
  {src: 'MSN', dest: 'DEN'},
  {src: 'DEN', dest: 'PSC'},
  {src: 'PSC', dest: 'SEA'},
  {src: 'SEA', dest: 'DEN'},
  {src: 'DEN', dest: 'MSN'},
  // January 2012 - Business Trip to New Haven
  {src: 'MSN', dest: 'ORD'},
  {src: 'ORD', dest: 'BDL'},
  {src: 'BDL', dest: 'MSP'},
  {src: 'MSP', dest: 'MSN'},
  // February 2012 - Vacation in Orlando
  {src: 'MSN', dest: 'MCO'},
  {src: 'MCO', dest: 'MSN'},
  // April 2012 - Business Trip to Cincinnati
  {src: 'MSN', dest: 'DTW'},
  {src: 'DTW', dest: 'CVG'},
  {src: 'CVG', dest: 'ORD'},
  // June 2012 - Business Trip to San Francisco
  {src: 'MSN', dest: 'MSP'},
  {src: 'MSP', dest: 'SFO'},
  {src: 'SFO', dest: 'MSP'},
  {src: 'MSP', dest: 'MSN'},
  // July 2012 - Vacation in College Station
  {src: 'MSN', dest: 'DFW'},
  {src: 'DFW', dest: 'CLL'},
  {src: 'CLL', dest: 'DFW'},
  {src: 'DFW', dest: 'MSN'},
  // November 2012 - Vacation in Hawaii
  {src: 'ORD', dest: 'HNL'},
  {src: 'HNL', dest: 'LAX'},
  {src: 'LAX', dest: 'ORD'},
  {src: 'ORD', dest: 'MSP'},
  // December 2012 - Business Trip to St. Louis
  {src: 'MSN', dest: 'ORD'},
  {src: 'ORD', dest: 'STL'},
  {src: 'STL', dest: 'ORD'},
  {src: 'ORD', dest: 'MSN'},
  // April 2013 - Vacation in College Station
  {src: 'MSN', dest: 'DFW'},
  {src: 'DFW', dest: 'CLL'},
  {src: 'CLL', dest: 'DFW'},
  {src: 'DFW', dest: 'MSN'},
  // July-August 2013 - Business Trip to Atlanta
  {src: 'MSN', dest: 'ATL'},
  {src: 'ATL', dest: 'MSN'},
  // September 2013 - Weekend in Maryland with the college buds
  {src: 'MSN', dest: 'DCA'},
  {src: 'DCA', dest: 'MSN'},
  // December 2013-January 2014 - Wedding at Disney
  {src: 'MKE', dest: 'ATL'},
  {src: 'ATL', dest: 'MCO'},
  {src: 'MCO', dest: 'MSP'},
  {src: 'MSP', dest: 'MKE'},
  // April 2014 - Vacation in the Cayman Islands
  {src: 'MSN', dest: 'ORD'},
  {src: 'ORD', dest: 'IAH'},
  {src: 'IAH', dest: 'GCM'},
  {src: 'GCM', dest: 'MSP'},
  {src: 'MSP', dest: 'MSN'},
  // May 2014 - Business Trip to Boston
  {src: 'MSN', dest: 'ORD'},
  {src: 'ORD', dest: 'BOS'},
  {src: 'BOS', dest: 'CVG'},
  {src: 'CVG', dest: 'MSN'},
  // September 2014 - Vacation to Disney
  {src: 'MSN', dest: 'DTW'},
  {src: 'DTW', dest: 'MCO'},
  {src: 'MCO', dest: 'DTW'},
  {src: 'DTW', dest: 'MSN'},
  // December 2014 - Christmas in Texas
  {src: 'MKE', dest: 'IAH'},
  {src: 'IAH', dest: 'CLL'},
  {src: 'CLL', dest: 'IAH'},
  {src: 'IAH', dest: 'MKE'},
  // January-February 2015 - Vacation to Disney
  {src: 'MSN', dest: 'LGA'},
  {src: 'LGA', dest: 'MCO'},
  {src: 'MCO', dest: 'MSP'},
  {src: 'MSP', dest: 'MSN'},
  // March-April 2015 - Business Trip to Connecticut
  {src: 'MSN', dest: 'DTW'},
  {src: 'DTW', dest: 'BDL'},
  {src: 'BDL', dest: 'DTW'},
  {src: 'DTW', dest: 'MSN'},
  // June 2015 - Vacation to Disney
  {src: 'MSN', dest: 'ATL'},
  {src: 'ATL', dest: 'MCO'},
  {src: 'MCO', dest: 'DTW'},
  {src: 'DTW', dest: 'MSN'},
  // February 2016 - Business Trip to Phoenix
  {src: 'MSN', dest: 'MSP'},
  {src: 'MSP', dest: 'PHX'},
  {src: 'PHX', dest: 'MSP'},
  {src: 'MSP', dest: 'MSN'},
  // May 2016 - Business Trip to Connecticut
  {src: 'MSN', dest: 'DTW'},
  {src: 'DTW', dest: 'LGA'},
  {src: 'LGA', dest: 'DTW'},
  {src: 'DTW', dest: 'MSN'},
  // October 2016 - Sabbatibal to Bahamas
  {src: 'MSN', dest: 'ATL'},
  {src: 'ATL', dest: 'NAS'},
  {src: 'NAS', dest: 'ATL'},
  {src: 'ATL', dest: 'MSN'},
  // December 2016 - Christmas in Texas
  {src: 'MSN', dest: 'DFW'},
  {src: 'DFW', dest: 'CLL'},
  {src: 'CLL', dest: 'DFW'},
  {src: 'DFW', dest: 'MSN'},
  // March 2017 - Vacation to Las Vegas
  {src: 'MKE', dest: 'LAS'},
  {src: 'LAS', dest: 'DEN'},
  {src: 'DEN', dest: 'MKE'},
  // April 2017 - Business Trip to Columbus
  {src: 'MSN', dest: 'DTW'},
  {src: 'DTW', dest: 'CMH'},
  {src: 'CMH', dest: 'ATL'},
  {src: 'ATL', dest: 'MSN'},
  // May 2017 - Vacation to Disney
  {src: 'MSN', dest: 'ATL'},
  {src: 'ATL', dest: 'MCO'},
  {src: 'MCO', dest: 'DTW'},
  {src: 'DTW', dest: 'MSN'},
  // September 2017 - Vacation to Disney
  {src: 'MSP', dest: 'MCO'},
  {src: 'MCO', dest: 'MSP'},
  // December 2017 - Vacation to Seattle
  {src: 'MSP', dest: 'SEA'},
  {src: 'SEA', dest: 'MSP'},
  // December 2017 - Business Trip to Winston-Salem
  {src: 'RST', dest: 'ATL'},
  {src: 'ATL', dest: 'GSO'},
  {src: 'GSO', dest: 'ATL'},
  {src: 'ATL', dest: 'RST'},
  // January 2018 - Vacation to Disney
  {src: 'MSP', dest: 'MCO'},
  {src: 'MCO', dest: 'MSP'},
  // June 2018 - Vacation to Europe
  {src: 'MSP', dest: 'LHR'},
  {src: 'CDG', dest: 'MSP'}
];
