'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/lib/types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 cursor-pointer group"
    >
      <div className="text-center">
        {/* Category Icon */}
        <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        
        {/* Category Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          {category.name}
        </h3>
        
        {/* Category Description */}
        <p className="text-gray-600 text-sm mb-4">
          {category.description}
        </p>
        
        {/* View Products Button */}
{/*         <div className="flex items-center justify-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
          <span className="text-sm">View Products</span>
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </div> */}
      </div>
    </motion.div>
  );
}
